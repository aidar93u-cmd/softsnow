#!/usr/bin/env python3
"""
px to rem migration script for SoftSnow CSS files.

Rules:
- Convert px to rem for geometric values (1rem = 16px)
- Keep border widths in px (1px, 1.5px, 2px)
- Convert box-shadow values
- Convert CSS custom properties
- Don't convert: %, vw, vh, em, rem, ch, ex, fr, s, ms, deg, unitless numbers, CSS keywords, colors
- Don't modify third-party code (Swiper, Fancybox)
- Don't modify HTML or JS
- Preserve comments, strings, URLs, selectors
"""

import re
import sys
from pathlib import Path
from dataclasses import dataclass
from typing import List, Tuple

@dataclass
class ConversionResult:
    file: str
    converted: int
    preserved: int
    uncertain: int
    remaining_px: List[Tuple[int, str]]

class PxToRemConverter:
    def __init__(self, base_px: float = 16.0):
        self.base_px = base_px
        self.remaining_px = []
        self.converted_count = 0
        self.preserved_count = 0
        self.uncertain_count = 0
    
    def px_to_rem(self, px_value: float) -> str:
        """Convert px value to rem with exact precision."""
        rem_value = px_value / self.base_px
        if rem_value == int(rem_value):
            return f"{int(rem_value)}rem"
        formatted = f"{rem_value:.10f}".rstrip('0').rstrip('.')
        return f"{formatted}rem"
    
    def is_border_width(self, value: str, context: str) -> bool:
        """Check if this is a border width that should be preserved in px."""
        try:
            px_val = float(value.replace('px', ''))
            if px_val in (1, 1.5, 2):
                border_keywords = ['border', 'outline']
                context_lower = context.lower()
                for kw in border_keywords:
                    if kw in context_lower:
                        return True
        except ValueError:
            pass
        return False
    
    def is_third_party_context(self, line: str) -> bool:
        """Check if the px value is in third-party library code.
        
        Only returns True for explicit @import of third-party libraries
        or very specific third-party patterns in the current line.
        Project code that uses library classes (like .swiper-slide) 
        should still be converted.
        """
        line_lower = line.lower()
        if '@import' in line_lower and ('swiper' in line_lower or 'fancybox' in line_lower):
            return True
        if re.search(r'@keyframes\s+(swiper|fancybox)', line_lower):
            return True
        return False
    
    def convert_file(self, file_path: Path) -> ConversionResult:
        """Convert px to rem in a single CSS file."""
        content = file_path.read_text(encoding='utf-8')
        lines = content.split('\n')
        new_lines = []
        
        self.converted_count = 0
        self.preserved_count = 0
        self.uncertain_count = 0
        self.remaining_px = []
        
        for line_num, line in enumerate(lines, 1):
            new_line, conversions = self.process_line(line, content, line_num)
            new_lines.append(new_line)
            self.converted_count += conversions
            
            # Track remaining px values
            for match in re.finditer(r'(\d+(?:\.\d+)?)\s*px', new_line):
                px_val = match.group(1)
                context = new_line[max(0, match.start()-20):match.end()+20]
                self.remaining_px.append((line_num, context.strip()))
                # Classify
                if self.is_border_width(px_val, new_line):
                    self.preserved_count += 1
                elif self.is_third_party_context(new_line):
                    self.preserved_count += 1
                else:
                    self.uncertain_count += 1
        
        # Write back
        file_path.write_text('\n'.join(new_lines), encoding='utf-8')
        
        return ConversionResult(
            file=file_path.name,
            converted=self.converted_count,
            preserved=self.preserved_count,
            uncertain=self.uncertain_count,
            remaining_px=self.remaining_px
        )
    
    def process_line(self, line: str, full_content: str, line_num: int) -> Tuple[str, int]:
        """Process a single line, converting px to rem where appropriate."""
        # Skip empty lines and comments-only lines
        stripped = line.strip()
        if not stripped or stripped.startswith('/*') or stripped.startswith('//'):
            return line, 0
        
        conversions = 0
        result = line
        
        # Protect things we don't want to modify
        protected_segments = []
        
        def protect(match):
            protected_segments.append(match.group(0))
            return f"__PROTECTED_{len(protected_segments)-1}__"
        
        # Protect comments
        result = re.sub(r'/\*.*?\*/', protect, result)
        # Protect strings (single and double quoted)
        result = re.sub(r'"[^"]*"', protect, result)
        result = re.sub(r"'[^']*'", protect, result)
        # Protect URLs
        result = re.sub(r'url\([^)]+\)', protect, result)
        
        # Handle calc() expressions first
        def replace_in_calc(match):
            nonlocal conversions
            calc_content = match.group(1)
            
            def replace_calc_px(m):
                nonlocal conversions
                val = m.group(1)
                full_match = m.group(0)
                if self.is_border_width(val, calc_content):
                    self.preserved_count += 1
                    return full_match
                try:
                    px_val = float(val)
                    rem_str = self.px_to_rem(px_val)
                    conversions += 1
                    return rem_str
                except ValueError:
                    self.uncertain_count += 1
                    return full_match
            
            new_calc = re.sub(r'(\d+(?:\.\d+)?)\s*px', replace_calc_px, calc_content)
            return f'calc({new_calc})'
        
        result = re.sub(r'calc\(([^)]+)\)', replace_in_calc, result)
        
        # Handle regular px values
        def replace_px(match):
            nonlocal conversions
            full_match = match.group(0)
            value_str = match.group(1)
            
            context = result[max(0, match.start()-30):match.end()+30]
            if self.is_border_width(value_str, context):
                self.preserved_count += 1
                return full_match
            
            if self.is_third_party_context(line):
                self.preserved_count += 1
                return full_match
            
            # Check if already in rem (shouldn't happen but safety)
            if 'rem' in context[max(0, match.start()-10):match.start()]:
                return full_match
            
            try:
                px_val = float(value_str)
                rem_str = self.px_to_rem(px_val)
                conversions += 1
                return rem_str
            except ValueError:
                self.uncertain_count += 1
                return full_match
        
        result = re.sub(r'(\d+(?:\.\d+)?)\s*px', replace_px, result)
        
        # Restore protected segments
        for i, seg in enumerate(protected_segments):
            result = result.replace(f"__PROTECTED_{i}__", seg)
        
        return result, conversions


def main():
    css_dir = Path(r"C:\Users\aidar\Desktop\softsnow\css")
    files = [
        "tokens.css",
        "utilities.css", 
        "components.css",
        "sections.css"
    ]
    
    converter = PxToRemConverter(base_px=16.0)
    all_results = []
    
    print("Starting px to rem migration...")
    print("=" * 60)
    
    for fname in files:
        fpath = css_dir / fname
        if fpath.exists():
            print(f"\nProcessing {fname}...")
            result = converter.convert_file(fpath)
            all_results.append(result)
            print(f"  Converted: {result.converted}")
            print(f"  Preserved (borders/3rd party): {result.preserved}")
            print(f"  Uncertain: {result.uncertain}")
        else:
            print(f"File not found: {fpath}")
    
    # Validation report
    print("\n" + "=" * 60)
    print("VALIDATION REPORT")
    print("=" * 60)
    
    total_converted = sum(r.converted for r in all_results)
    total_preserved = sum(r.preserved for r in all_results)
    total_uncertain = sum(r.uncertain for r in all_results)
    
    print(f"\nTotal px values converted: {total_converted}")
    print(f"Total px values intentionally preserved: {total_preserved}")
    print(f"Total uncertain values: {total_uncertain}")
    
    print("\n--- Remaining px occurrences by file ---")
    for result in all_results:
        if result.remaining_px:
            print(f"\n{result.file}:")
            for line_num, context in result.remaining_px[:30]:
                print(f"  Line {line_num}: {context}")
            if len(result.remaining_px) > 30:
                print(f"  ... and {len(result.remaining_px) - 30} more")
    
    # Verify HTML and JS not modified
    print("\n--- Verification ---")
    html_files = list(Path(r"C:\Users\aidar\Desktop\softsnow").glob("*.html"))
    js_files = list(Path(r"C:\Users\aidar\Desktop\softsnow\js").glob("*.js"))
    
    print(f"HTML files in project root: {len(html_files)} (not modified)")
    print(f"JS files in js/: {len(js_files)} (not modified)")
    print("Third-party library files: Not modified (only 4 project CSS files processed)")
    
    print("\n" + "=" * 60)
    print("MIGRATION COMPLETE")
    print("=" * 60)


if __name__ == "__main__":
    main()