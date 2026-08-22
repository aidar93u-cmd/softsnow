import json

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
print(f"HTML classes: {len(html_classes)}")
print(f"HTML IDs: {len(html_ids)}")
print(f"JS classes: {len(js_classes)}")
print(f"Total used classes: {len(all_used_classes)}")

# Helper: check if a CSS selector has any match in used classes/IDs
def selector_used_in_html(selector):
    """Check if a CSS selector is likely used based on HTML classes/IDs"""
    # Handle pseudo-classes and pseudo-elements
    base = selector
    # Remove pseudo-elements
    base = base.replace('::after', '').replace('::before', '').replace('::selection', '')
    # Remove pseudo-classes
    for pseudo in ['.is-active', '.is-hidden', '.is-matched', '.is-open', '.is-hidden', 
                   ':hover', ':focus', ':focus-visible', ':active', ':checked', 
                   ':first-child', ':last-child', ':empty', ':not(', ':nth-child',
                   '[open]', '[hidden]']:
        base = base.replace(pseudo, '')
    # Handle attribute selectors
    base = base.replace('[hidden]', '').replace('[open]', '')
    
    # Split complex selectors by combinators
    parts = []
    # Simple split by combinators
    for part in base.replace('>', ' > ').replace('+', ' + ').replace('~', ' ~ ').split():
        if part in ['>', '+', '~']:
            continue
        parts.append(part)
    
    # Check if any part matches a used class or ID
    for part in parts:
        part = part.strip()
        if not part:
            continue
        if part.startswith('.'):
            cls = part[1:]
            if cls in all_used_classes:
                return True
        elif part.startswith('#'):
            id = part[1:]
            if id in all_used_ids:
                return True
        elif part in ['html', 'body', 'a', 'button', 'img', 'p', 'svg', 'ul', 'ol', 
                      'input', 'textarea', 'select', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                      'article', 'li', 'path', 'from', 'to']:
            return True  # element selectors
    return False

# Categorize each selector
definitely_used = []
potentially_used = []
definitely_unused = []

for selector, locations in css_selectors.items():
    # Skip :root and utility element selectors
    if selector in [':root', 'html', 'body', 'a', 'button', 'img', 'p', 'svg', 'ul', 'ol', 
                    'input', 'textarea', 'select', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                    '*', '*::before', '*::after', '::selection', ':focus-visible',
                    'ol', 'li', 'path', 'from', 'to']:
        definitely_used.append((selector, 'element/utility selector'))
        continue
    
    # Check if selector is used
    used = selector_used_in_html(selector)
    
    if used:
        definitely_used.append((selector, locations))
    else:
        # Check if it's a complex selector that might match via descendant/child
        # Look for base class in used classes
        base_parts = selector.replace('::after', '').replace('::before', '').replace('::selection', '')
        # Remove pseudo-classes
        for pseudo in ['.is-active', '.is-hidden', '.is-matched', '.is-open', 
                       ':hover', ':focus', ':focus-visible', ':active', ':checked', 
                       ':first-child', ':last-child', ':empty', ':not(', ':nth-child',
                       '[open]', '[hidden]', ':hover', ':focus-visible']:
            base_parts = base_parts.replace(pseudo, '')
        
        # Check if any simple class part is used
        has_used_part = False
        for part in base_parts.replace('>', ' ').replace('+', ' ').replace('~', ' ').split():
            part = part.strip()
            if part.startswith('.'):
                cls = part[1:]
                if cls in all_used_classes:
                    has_used_part = True
                    break
            elif part.startswith('#'):
                id = part[1:]
                if id in all_used_ids:
                    has_used_part = True
                    break
        
        if has_used_part:
            potentially_used.append((selector, locations))
        else:
            definitely_unused.append((selector, locations))

print(f"\n=== SUMMARY ===")
print(f"Definitely used: {len(definitely_used)}")
print(f"Potentially used: {len(potentially_used)}")
print(f"Definitely unused: {len(definitely_unused)}")

print("\n=== DEFINITELY UNUSED ===")
for sel, loc in definitely_unused:
    print(f"  {sel} ({loc})")

print("\n=== POTENTIALLY USED ===")
for sel, loc in potentially_used:
    print(f"  {sel} ({loc})")

# Save results
with open('selector_analysis.json', 'w') as f:
    json.dump({
        'definitely_used': [{'selector': s, 'locations': l} for s, l in definitely_used],
        'potentially_used': [{'selector': s, 'locations': l} for s, l in potentially_used],
        'definitely_unused': [{'selector': s, 'locations': l} for s, l in definitely_unused],
    }, f, indent=2)