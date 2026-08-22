# Graph Report - .  (2026-08-22)

## Corpus Check
- Large corpus: 162 files · ~711,939 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 68 nodes · 96 edges · 10 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 19 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_px-to-rem Converter|px-to-rem Converter]]
- [[_COMMUNITY_JS Behaviors|JS Behaviors]]
- [[_COMMUNITY_Components & Dependencies|Components & Dependencies]]
- [[_COMMUNITY_CSS Architecture Layers|CSS Architecture Layers]]
- [[_COMMUNITY_Pages & Routing|Pages & Routing]]
- [[_COMMUNITY_Selector Audit v1|Selector Audit v1]]
- [[_COMMUNITY_Selector Audit v2|Selector Audit v2]]
- [[_COMMUNITY_Figma Status|Figma Status]]
- [[_COMMUNITY_CSS Analyzer|CSS Analyzer]]
- [[_COMMUNITY_HTML Analyzer|HTML Analyzer]]

## God Nodes (most connected - your core abstractions)
1. `CSS Components` - 15 edges
2. `CSS Tokens` - 13 edges
3. `PxToRemConverter` - 8 edges
4. `Page Index` - 8 edges
5. `JS Main` - 7 edges
6. `Page Solution Detail` - 6 edges
7. `Arch Routing` - 6 edges
8. `Page Clients` - 5 edges
9. `Page Projects` - 5 edges
10. `Page Events` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Page Index` --depends_on--> `JS Main`  [EXTRACTED]
  index.html → js/main.js
- `Page Solutions` --depends_on--> `JS Main`  [INFERRED]
  solutions.html → js/main.js
- `Page Solution Detail` --depends_on--> `JS Main`  [EXTRACTED]
  solution-detail.html → js/main.js
- `Page Directum` --depends_on--> `CSS Tokens`  [INFERRED]
  directum.html → css/tokens.css
- `Page Univer` --depends_on--> `CSS Tokens`  [INFERRED]
  univer-online.html → css/tokens.css

## Hyperedges (group relationships)
- **CSS Architecture Stack** — arch-4files, css-tokens, css-utilities, css-components, css-sections [INFERRED 0.80]
- **Page Dependency Graph** — page-index, page-solutions, page-solution-detail, page-clients, page-client-detail, page-projects, page-project-detail, page-events, page-event-detail, js-main, dep-gfonts, dep-fancybox, dep-jquery [INFERRED 0.80]
- **Core Architecture Concepts** — arch-4files, arch-routing, arch-figma, arch-bem, arch-component-reuse, arch-icons, arch-fonts, arch-data-flow, arch-reduced-motion, arch-status, arch-todo [INFERRED 0.80]

## Communities

### Community 0 - "px-to-rem Converter"
Cohesion: 0.19
Nodes (8): ConversionResult, main(), PxToRemConverter, Process a single line, converting px to rem where appropriate., Convert px value to rem with exact precision., Check if this is a border width that should be preserved in px., Check if the px value is in third-party library code.                  Only retu, Convert px to rem in a single CSS file.

### Community 1 - "JS Behaviors"
Cohesion: 0.14
Nodes (0): 

### Community 2 - "Components & Dependencies"
Cohesion: 0.27
Nodes (13): Arch Bem, Arch Component Reuse, CSS Components, CSS Tokens, Dep Fancybox, Dep Jquery, Page Client Detail, Page Directum (+5 more)

### Community 3 - "CSS Architecture Layers"
Cohesion: 0.25
Nodes (9): Arch 4files, Arch Fonts, Arch Icons, Arch Reduced Motion, Arch Todo, CSS Sections, CSS Utilities, Dep Gfonts (+1 more)

### Community 4 - "Pages & Routing"
Cohesion: 0.57
Nodes (7): Arch Data Flow, Arch Routing, JS Main, Page Clients, Page Events, Page Projects, Page Solutions

### Community 5 - "Selector Audit v1"
Cohesion: 0.67
Nodes (2): Check if a CSS selector is likely used based on HTML classes/IDs, selector_used_in_html()

### Community 6 - "Selector Audit v2"
Cohesion: 0.67
Nodes (2): check_selector_match(), Check if a CSS selector could match any used HTML element.     Returns: 'definit

### Community 7 - "Figma Status"
Cohesion: 1.0
Nodes (2): Arch Figma, Arch Status

### Community 8 - "CSS Analyzer"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "HTML Analyzer"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **13 isolated node(s):** `Check if a CSS selector is likely used based on HTML classes/IDs`, `Check if a CSS selector could match any used HTML element.     Returns: 'definit`, `Convert px value to rem with exact precision.`, `Check if this is a border width that should be preserved in px.`, `Check if the px value is in third-party library code.                  Only retu` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Figma Status`** (2 nodes): `Arch Figma`, `Arch Status`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CSS Analyzer`** (1 nodes): `analyze_css.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `HTML Analyzer`** (1 nodes): `analyze_html.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CSS Components` connect `Components & Dependencies` to `CSS Architecture Layers`, `Pages & Routing`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `Page Index` connect `CSS Architecture Layers` to `Components & Dependencies`, `Pages & Routing`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `CSS Tokens` connect `Components & Dependencies` to `CSS Architecture Layers`, `Pages & Routing`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `CSS Components` (e.g. with `Page Directum` and `Page Univer`) actually correct?**
  _`CSS Components` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `CSS Tokens` (e.g. with `Page Directum` and `Page Univer`) actually correct?**
  _`CSS Tokens` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Check if a CSS selector is likely used based on HTML classes/IDs`, `Check if a CSS selector could match any used HTML element.     Returns: 'definit`, `Convert px value to rem with exact precision.` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `JS Behaviors` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._