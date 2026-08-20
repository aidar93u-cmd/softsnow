import re
import json

# Read all HTML files
html_files = [
    'index.html', 'solutions.html', 'solution-detail.html', 'projects.html',
    'clients.html', 'events.html', 'event-detail.html', 'directum.html',
    'univer-online.html', 'vuz.html'
]

# Also read client-detail.html if it exists
import os
for f in os.listdir('.'):
    if f.endswith('.html') and f not in html_files:
        html_files.append(f)

print(f"HTML files: {html_files}")

all_html_classes = set()
all_html_ids = set()

for fname in html_files:
    if not os.path.exists(fname):
        continue
    content = open(fname, encoding='utf-8').read()
    # Extract class attributes
    class_matches = re.findall(r'class="([^"]*)"', content)
    for match in class_matches:
        for cls in match.split():
            all_html_classes.add(cls)
    # Extract id attributes
    id_matches = re.findall(r'id="([^"]*)"', content)
    for match in id_matches:
        all_html_ids.add(match)
    # Also check for data-attributes that might contain class names
    data_matches = re.findall(r'data-(\w+)="([^"]*)"', content)
    for attr, val in data_matches:
        # Some data attributes contain class-like values
        if 'filter' in attr or 'category' in attr or 'tab' in attr:
            for v in val.split():
                all_html_classes.add(v)

# Read main.js for dynamic class manipulation
js_content = open('js/main.js').read()

js_classes = set()
# classList.add/remove/toggle
classlist_add = re.findall(r'classList\.add\([\'"]([^\'"]+)[\'"]\)', js_content)
classlist_remove = re.findall(r'classList\.remove\([\'"]([^\'"]+)[\'"]\)', js_content)
classlist_toggle = re.findall(r'classList\.toggle\([\'"]([^\'"]+)[\'"]\)', js_content)
classlist_contains = re.findall(r'classList\.contains\([\'"]([^\'"]+)[\'"]\)', js_content)
for cls in classlist_add + classlist_remove + classlist_toggle + classlist_contains:
    js_classes.add(cls)

# className assignments
classname = re.findall(r'className\s*=\s*[\'"]([^\'"]+)[\'"]', js_content)
for cls in classname:
    js_classes.add(cls)

# setAttribute class
setattr = re.findall(r'setAttribute\([\'"]class[\'"],\s*[\'"]([^\'"]+)[\'"]\)', js_content)
for cls in setattr:
    js_classes.add(cls)

# jQuery addClass/removeClass/toggleClass/hasClass
jq_add = re.findall(r'\.addClass\([\'"]([^\'"]+)[\'"]\)', js_content)
jq_remove = re.findall(r'\.removeClass\([\'"]([^\'"]+)[\'"]\)', js_content)
jq_toggle = re.findall(r'\.toggleClass\([\'"]([^\'"]+)[\'"]\)', js_content)
jq_has = re.findall(r'\.hasClass\([\'"]([^\'"]+)[\'"]\)', js_content)
for cls in jq_add + jq_remove + jq_toggle + jq_has:
    js_classes.add(cls)

# Template strings that might generate classes
template = re.findall(r'`[^`]*\.([a-zA-Z][\w-]*)[^`]*`', js_content)
for cls in template:
    js_classes.add(cls)

# Element.classList patterns
el_classlist = re.findall(r'\.classList\.(?:add|remove|toggle|contains)\([\'"]([^\'"]+)[\'"]\)', js_content)
for cls in el_classlist:
    js_classes.add(cls)

# Dataset filter/category/tab values (these become class filters)
dataset_vals = re.findall(r'dataset\.(?:filter|category|tab)\s*[=!]=?\s*[\'"]([^\'"]+)[\'"]', js_content)
for val in dataset_vals:
    js_classes.add(val)

# Also look for hardcoded filter values in JS
filter_vals = re.findall(r'data-filter\s*=\s*[\'"]([^\'"]+)[\'"]', js_content)
for val in filter_vals:
    js_classes.add(val)

# Check for data-category values in JS
data_cat = re.findall(r'data-category\s*=\s*[\'"]([^\'"]+)[\'"]', js_content)
for val in data_cat:
    js_classes.add(val)

print(f"HTML classes: {len(all_html_classes)}")
print(f"HTML IDs: {len(all_html_ids)}")
print(f"JS classes: {len(js_classes)}")

# Combine all used selectors
all_used = all_html_classes | all_html_ids | js_classes

# Save for analysis
with open('used_selectors.json', 'w') as f:
    json.dump({
        'html_classes': sorted(list(all_html_classes)),
        'html_ids': sorted(list(all_html_ids)),
        'js_classes': sorted(list(js_classes)),
        'all_used': sorted(list(all_used))
    }, f, indent=2)

print("\n--- HTML Classes ---")
for cls in sorted(all_html_classes):
    print(f"  .{cls}")

print("\n--- HTML IDs ---")
for id in sorted(all_html_ids):
    print(f"  #{id}")

print("\n--- JS Classes ---")
for cls in sorted(js_classes):
    print(f"  .{cls}")