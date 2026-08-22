# Figma Section Task

## Section

<SECTION_NAME>

## Figma

<FIGMA_URL>

## Node

<NODE_ID>

## Allowed shared components

<COMPONENT_LIST, e.g.: .container, .section-title, .card, .btn>

## Scope

Only modify the target section. Do not modify unrelated sections. Do not create duplicates of the allowed components. If an existing component does not exactly match the Figma variant — first decide whether a modifier is appropriate; create a new component only if the pattern is genuinely different. Check `FIGMA.md` before creating anything.

## Data source

Use the validated JSON dump `C:\Temp\opencode\figma-<секция>.json` for numeric analysis (structure, box, fills, typography, vectorPaths). Use figma-console-mcp (tools `figma_*`, NPX Local Mode per `docs/FIGMA_WORKFLOW.md`) only if: the dump is stale, the design changed, data is missing, a screenshot is needed, or a new node must be inspected.

## Procedure

1. Inspect Figma (dump / figma-console-mcp `figma_*` tools).
2. Inspect existing DOM/CSS.
3. Map Figma visual elements to DOM elements.
4. Verify structure (count, ordering, semantics; NOT 1:1 Figma tree).
5. Verify geometry (relative to section frame, ±1px).
6. Verify typography (font-size/weight exact; line-height ±1px; check `styleOverrideTable` mixed formatting).
7. Verify spacing (padding/margin/gap/radius).
8. Verify colors (RGB exact + alpha).
9. Verify SVG/icons (from `vectorPaths`).
10. Verify images (sizes, aspect, files in `assets/img/`).
11. Fix discrepancies.
12. Re-measure.
13. Take screenshot.
14. Report results.

## Completion criteria

- No known P0/P1 visual discrepancies.
- No section-specific console errors.
- Measurements within defined tolerance.
- Existing shared components reused.
- No duplicate component created.
- No unrelated files modified.
