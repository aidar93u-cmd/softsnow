import json
import re

# Load the data
with open('css_selectors.json') as f:
    css_selectors = json.load(f)

with open('used_selectors.json') as f:
    used_data = json.load(f)

html_classes = set(used_data['html_classes'])
html_ids = set(used_data['html_ids'])
js_classes = set(used_data['js_classes'])

# Filter JS classes - remove false positives
js_false_positives = {'innerHTML', 'setAttribute', 'videoSrc', 'animationDelay'}
js_classes = {c for c in js_classes if c not in js_false_positives}

all_used_classes = html_classes | js_classes
all_used_ids = html_ids

print(f"Total CSS selectors: {len(css_selectors)}")
print(f"Total used classes: {len(all_used_classes)}")

# For each CSS selector, check if it has any match in used classes/IDs
def check_selector_match(selector):
    """
    Check if a CSS selector could match any used HTML element.
    Returns: 'definitely_used', 'potentially_used', 'definitely_unused'
    """
    # Skip utility/element selectors
    utility_selectors = {
        ':root', 'html', 'body', 'a', 'button', 'img', 'p', 'svg', 'ul', 'ol', 
        'input', 'textarea', 'select', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        '*', '*::before', '*::after', '::selection', ':focus-visible',
        'ol', 'li', 'path', 'from', 'to', 'article'
    }
    if selector in utility_selectors:
        return 'definitely_used'
    
    # Handle pseudo-elements and pseudo-classes
    # Extract the "base" selector parts
    base = selector
    
    # Remove pseudo-elements
    base = re.sub(r'::(after|before|selection|first-letter|first-line)', '', base)
    
    # Remove pseudo-classes for base matching
    base_no_pseudo = re.sub(r':(hover|focus|focus-visible|active|checked|first-child|last-child|empty|not\([^)]+\)|nth-child\([^)]+\)|first-of-type|last-of-type|only-child|disabled|enabled|read-only|read-write|valid|invalid|required|optional|in-range|out-of-range)', '', base)
    
    # Handle attribute selectors like [open], [hidden], etc.
    base_no_pseudo = re.sub(r'\[[^\]]+\]', '', base_no_pseudo)
    
    # Handle element.class combinations like h2.client-title
    # Split by combinators
    parts = re.split(r'\s*[>+~]\s*|\s+', base_no_pseudo)
    
    # Check each simple selector part
    has_matching_class = False
    has_element_only = False
    
    for part in parts:
        part = part.strip()
        if not part:
            continue
        
        # Check if it's a class selector
        if part.startswith('.'):
            cls = part[1:]
            # Handle cases like .is-hidden, .is-active, etc.
            if cls in all_used_classes:
                has_matching_class = True
                break
        # Check if it's an ID selector
        elif part.startswith('#'):
            id_val = part[1:]
            if id_val in all_used_ids:
                has_matching_class = True
                break
        # Element selectors (html, body, a, button, etc.)
        elif part in ['html', 'body', 'a', 'button', 'img', 'p', 'svg', 'ul', 'ol', 
                      'input', 'textarea', 'select', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                      'article', 'li', 'div', 'span', 'header', 'footer', 'main', 'nav', 'aside',
                      'h2.client-title', 'h3.client-title']:
            has_element_only = True
    
    # Also check the full selector for class references that might be in HTML
    # e.g., .card--project might not be in HTML but .card is
    # Check if any class in the selector (even in complex selectors) is used
    all_classes_in_selector = re.findall(r'\.([a-zA-Z][\w-]*)', selector)
    for cls in all_classes_in_selector:
        if cls in all_used_classes:
            has_matching_class = True
            break
    
    # Check for ID references
    all_ids_in_selector = re.findall(r'#([a-zA-Z][\w-]*)', selector)
    for id_val in all_ids_in_selector:
        if id_val in all_used_ids:
            has_matching_class = True
            break
    
    if has_matching_class:
        return 'definitely_used'
    elif has_element_only:
        # Only element selectors that exist in HTML (like h1, h2, section)
        return 'definitely_used'
    else:
        # Check if it's a complex selector where parts COULD match
        # e.g., .parent .child where .parent is used but .child isn't directly
        # This is "potentially used"
        # For now, let's be conservative and check if ANY class in the selector hierarchy is used
        simple_classes = re.findall(r'\.([a-zA-Z][\w-]*)', selector)
        for cls in simple_classes:
            # Check if this class or a parent-like class is used
            if cls in all_used_classes:
                return 'definitely_used'
            # Check if it's a modifier of a used class (e.g., .card--project when .card is used)
            base = cls.split('--')[0] if '--' in cls else cls
            if base in all_used_classes:
                return 'potentially_used'
        
        return 'definitely_unused'

# Categorize each selector
definitely_used = []
potentially_used = []
definitely_unused = []

for selector, locations in css_selectors.items():
    result = check_selector_match(selector)
    if result == 'definitely_used':
        definitely_used.append((selector, locations))
    elif result == 'potentially_used':
        potentially_used.append((selector, locations))
    else:
        definitely_unused.append((selector, locations))

print(f"\n=== SUMMARY ===")
print(f"Definitely used: {len(definitely_used)}")
print(f"Potentially used: {len(potentially_used)}")
print(f"Definitely unused: {len(definitely_unused)}")

print("\n=== DEFINITELY UNUSED ===")
for sel, loc in sorted(definitely_unused, key=lambda x: (x[1][0][0], x[1][0][1])):
    print(f"  {sel} ({loc})")

print("\n=== POTENTIALLY USED ===")
for sel, loc in sorted(potentially_used, key=lambda x: (x[1][0][0], x[1][0][1])):
    print(f"  {sel} ({loc})")

# Save results
with open('selector_analysis_v2.json', 'w') as f:
    json.dump({
        'definitely_used': [{'selector': s, 'locations': l} for s, l in definitely_used],
        'potentially_used': [{'selector': s, 'locations': l} for s, l in potentially_used],
        'definitely_unused': [{'selector': s, 'locations': l} for s, l in definitely_unused],
    }, f, indent=2)