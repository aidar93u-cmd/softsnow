---
type: "query"
date: "2026-08-22T08:55:04.835897+00:00"
question: "Why is CSS Components the bridge between architecture layers, pages, and dependencies?"
contributor: "graphify"
source_nodes: ["css-components", "css-tokens", "arch-4files"]
---

# Q: Why is CSS Components the bridge between architecture layers, pages, and dependencies?

## Answer

CSS Components is the bridge by design: the AGENTS.md Component Registry mandates every page reuse shared components (.btn, .card, .carousel-nav), so components.css is the single mandatory dependency of all 12 pages (9 EXTRACTED for core pages, 3 INFERRED for newer vuz/directum/univer). It also implements the 4-files CSS architecture rule and BEM naming, linking the architecture community to the page/routing community.

## Source Nodes

- css-components
- css-tokens
- arch-4files