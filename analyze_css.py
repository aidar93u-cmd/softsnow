import re
import json

# Read all CSS files
css_files = {
    'tokens.css': open('css/tokens.css').read(),
    'utilities.css': open('css/utilities.css').read(),
    'components.css': open('css/components.css').read(),
    'sections.css': open('css/sections.css').read(),
}

# Extract all CSS selectors from all 4 files
all_selectors = []
for fname, content in css_files.items():
    # Remove comments
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    lines = content.split('\n')
    for i, line in enumerate(lines):
        stripped = line.strip()
        if '{' in stripped and not stripped.startswith('@'):
            selector_part = stripped.split('{')[0].strip()
            if selector_part and not selector_part.startswith('/*'):
                for sel in selector_part.split(','):
                    sel = sel.strip()
                    if sel:
                        all_selectors.append((fname, i+1, sel))

# Print summary
unique_selectors = {}
for fname, line, sel in all_selectors:
    key = sel
    if key not in unique_selectors:
        unique_selectors[key] = []
    unique_selectors[key].append((fname, line))

print(f"Total unique selectors: {len(unique_selectors)}")

# Save to JSON for further analysis
with open('css_selectors.json', 'w') as f:
    json.dump({k: v for k, v in unique_selectors.items()}, f, indent=2)

# Print all
for sel in sorted(unique_selectors.keys()):
    files = set(f for f, _ in unique_selectors[sel])
    print(f"  {sel} -> {files}")