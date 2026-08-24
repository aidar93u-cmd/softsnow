# Task 3 Report — Replace inline SVG duplicates with external sprite

Branch: `refactor/css-cleanup`. Scope: 15 `*.html` in repo root. No CSS/JS/sprite changes.

## Method

PowerShell helper `C:\Temp\opencode\task3-replace.ps1` (ASCII-only, UTF-8 no BOM output) per page:

1. Rewrote local `<use href="#icon-x">` -> `<use href="assets/img/sprite.svg#icon-x">`.
2. Deleted the local hidden defs sprite block (`<svg ... width="0" height="0"><defs>...5 symbols...</defs></svg>`) — 1 per page.
3. Replaced each vk `<path d="M2.8 2.8C...">` element with `<use href="assets/img/sprite.svg#icon-vk"/>`, keeping the white backing `<rect>`/`<circle>` and the clip-path group (per sprite header contract: underlay stays in page markup; no doubling).
4. Replaced whole `<svg>...</svg>` blocks by content signature (РЕЕСТР-A PathPrefix), rebuilding the opening tag from preserved attrs (class, width, height, viewBox, style, opacity) + `aria-hidden="true"`, dropping `xmlns`/`fill="none"`.

## Per-page replacement counts (total edits = uses + defs + vk + svg blocks)

| Page | Total | Notes |
|---|---|---|
| index.html | 39 | 23 uses, 1 defs, 1 vk, 10 arrow-card (6 projects + 4 events), logo x2, search, rutube |
| about.html | 25 | 12 uses, 1 defs, 1 vk, quote x5, play, download, logo x2, search, rutube |
| article-detail.html | 19 | 7 uses, 1 defs, 1 vk, 4 events-arrow, quote (classless variant), play, logo x2, search, rutube |
| client-detail.html | 17 | 4 uses, 1 defs, 1 vk, 4 events-arrow, 2 stages-arrow, quote (.client-quote__icon), logo x2, search, rutube |
| clients.html | 41 | 4 uses, 1 defs, 1 vk, 6 projects-arrow, 25 clients-icon, logo x2, search, rutube |
| contacts.html | 10 | 2 uses, 1 defs, 2 vk, rutube-plain (map) + rutube (footer), logo x2, search |
| directum.html | 24 | 15 uses (incl. 11 icon-check), 1 defs, 1 vk, 3 projects-arrow, logo x2, search, rutube |
| event-detail.html | 12 | 2 uses, 1 defs, 1 vk, 3 event-partners-icon, download, logo x2, search, rutube |
| events.html | 34 | 26 uses, 1 defs, 2 vk (hero circle-underlay + footer), rutube-dark (hero) + rutube (footer), logo x2, search |
| project-detail.html | 17 | 6 uses, 1 defs, 1 vk, 4 events-arrow, play, logo x2, search, rutube |
| projects.html | 17 | 5 uses, 1 defs, 1 vk, 6 projects-arrow, logo x2, search, rutube |
| solution-detail.html | 31 | 10 uses, 1 defs, 1 vk, 10 arrow-card (6+4), quote x5, logo x2, search, rutube |
| solutions.html | 14 | 2 uses, 1 defs, 1 vk, 6 catalog-arrow (opacity="0.5" preserved on use), logo x2, search, rutube |
| univer-online.html | 25 | 16 uses (incl. 12 icon-check), 1 defs, 1 vk, 3 projects-arrow, logo x2, search, rutube |
| vuz.html | 36 | 15 uses, 1 defs, 1 vk, 10 arrow-card (6+4), quote x5, logo x2, search, rutube |

**Totals:** 361 sprite refs. Breakdown: 149 local-use rewrites; 15 defs deletions; 17 vk; 180 whole-svg blocks = logo-header 15 (snowflake `#logo-mark` w64 h67 + wordmark `#logo-wordmark` w222 h67, fill/stroke #1342F3 on uses), logo-footer 15 (`#logo-mark`, white fill+stroke), arrow-card 96 (A1 60, A2 27, A3 6, A4 3), search 15, rutube 17 (15 footer + events dark + contacts plain), quote 17, play 3, download 2.

## Shadow-DOM / CSS caveats (classes preserved, no CSS edited)

1. **Dead `path` selectors** (now match nothing): `.projects__arrow path` (sections.css:727), `.dropdown__caret path` (sections.css:937), `.dropdown__trigger:hover svg path` (sections.css:940), `.catalog__arrow path` (solutions.css:81), `.catalog__card:hover .catalog__arrow path` (solutions.css:91).
   - `.projects__arrow` / `.catalog__arrow`: behavior preserved by `fill="currentColor"` presentation attr on the `<use>` (hover color changes still work via color inheritance).
   - `.catalog__arrow`: `opacity="0.5"` moved onto the `<use>`; **lost**: hover opacity 0.5->1 (was `:hover ... path{opacity:1}`). Needs CSS follow-up if the hover effect matters.
   - `.dropdown__caret`: caret symbol carries `stroke="currentColor"`; existing `.dropdown__trigger:hover{color:white}` keeps hover color correct. **Lost**: 0.4s stroke transition on hover (now instant).
2. **CSS `fill` on the svg element itself** — keeps working through `<use>` inheritance (no fill attr put on use, which would have overridden it): `.clients__icon` (black/white hover), `.events__arrow`, `.stages__arrow`, `.event-partners__icon`. Verified live: computed fill of `.clients__icon` = rgb(34,34,34) = `--color-black`.
3. **icon-download**: stroke color comes from `.btn--outline-white svg`/`.btn--outline svg` (target the svg element) -> inherits through use. Works.
4. **vk underlay**: white `<rect x="6" y="10" .../>` (footer, 16 pcs) and `<circle r="20">` (events hero) kept; exactly one underlay per vk, no doubling. directum/event-detail vk paths were already byte-identical (714 chars) to the majority export in current files; replaced with the sprite canonical path per approved fix.
5. **rutube variants**: footer = `icon-rutube` (mask/circle version, 15), events.html hero-socials = `icon-rutube-dark`, contacts.html map = `icon-rutube-plain`.

## Verification (brief Step 2 + task checks)

1. Long paths `<path d="...{100,}">`: **19 remain** — exactly the 22-registry `UNRESOLVED` one-off icons (vuz 7, univer-online 4, directum 5, event-detail 3: `.reasons__icon` set, service/feature icons, `.audience__icon`). They are unique per page, absent from the sprite, and out of РЕЕСТР-A scope, so the literal `== 0` target is not achievable without adding new sprite symbols (Task 2 scope). All РЕЕСТР-A paths: **0** remain. Local `<use href="#`: **0**.
2. Sprite refs: 361 total; every `assets/img/sprite.svg#X` resolves to a symbol in sprite.svg (16 ids): **missing ids = 0** (script + DOMParser check over HTTP).
3. `git diff --stat`: only `*.html` modified by this task (15 files, +619/−2602 vs HEAD excluding pre-existing `css/sections.css` modification which predates the task and is NOT staged).
4. Live smoke test (local HTTP server, Chrome): header logo (mark+wordmark+TM), search glyph, nav carets render; `.clients__icon` computed fill correct; catalog arrow opacity/fill attrs correct; sprite fetched with fragment `200`; console clean except pre-existing `favicon.ico` 404.
   - Note: external `<use>` does not render on `file://` (browser CORS restriction) — expected; production serves over HTTP.

## Commits

- `refactor(html): replace inline SVG duplicates with external sprite` (only `*.html` staged).

## Follow-ups (out of scope, for Task 4+ / CSS tasks)

- Restore `.catalog__card:hover .catalog__arrow` opacity animation and `.dropdown__caret` stroke transition via `use`-targeting or svg-level rules if desired.
- Optionally add the 19 one-off icons to the sprite later if they ever repeat across pages.
- Pages don't reference `assets/img/favicon.svg` yet (pre-existing; Task 2 artifact).

## Fix round 1

Commit: `181b9b2` fix(html/css): restore catalog-arrow hover fade and dropped aria-hidden attrs

### Finding 1 — catalog-arrow hover fade (css/pages/solutions.css)

- Base rule: added opacity: 0.5; to existing .catalog__arrow block (line 66) so CSS owns the value instead of the svg's opacity="0.5" attribute. Existing 	ransition: all 0.4s already covers opacity — no transition change needed.
- Hover rule: .catalog__card:hover .catalog__arrow (line 82) now sets opacity: 1; transform: scale(2);.
- Removed dead path selectors: .catalog__arrow path { fill: currentColor; } and .catalog__card:hover .catalog__arrow path{ opacity: 1; }. Safe because sprite symbol #icon-arrow carries ill="currentColor" on its path.
- Grep check: zero occurrences of catalog__arrow path in solutions.css; both new rules present.

### Finding 2 — restored aria-hidden="true" (15 html files)

Actual counts found and fixed (grep + raw-string tag scan across all *.html):

| Group | Count | Files |
|---|---|---|
| icon-search buttons | 15 | one per page (about, article-detail, client-detail, clients, contacts, directum, event-detail, events, index, project-detail, projects, solution-detail, solutions, univer-online, vuz) |
| icon-quote | 17 | about x5, solution-detail x5, vuz x5, article-detail x1, client-detail x1 |
| projects__arrow | 3 | directum.html only |

Task estimate said ~12 quote icons / ~40 total; actual = 17 quotes / 35 tags. All other projects__arrow instances (clients, index, projects, solution-detail, vuz, univer-online) already carried ria-hidden="true" in the replacement commit and were left untouched.

Method note: several quote/search tags are multi-line (<use> wraps to next line), so a line-based grep misses them; verification used a raw-string scan extracting the full opening <svg ...> tag per ref occurrence.

### Verification outputs

1. git diff --stat before staging listed exactly the 16 intended files (solutions.css + 15 html).
2. Tag-sweep result: Tag-sweep: tags checked: search=15 quote=17 arrow=36; missing=0; dupes=0 (arrow=36 includes pre-existing annotated ones outside scope).
3. Post-commit worktree: only user's pre-existing css/sections.css modification + untracked files remain untouched.

### Files touched
css/pages/solutions.css, about.html, article-detail.html, client-detail.html, clients.html, contacts.html, directum.html, event-detail.html, events.html, index.html, project-detail.html, projects.html, solution-detail.html, solutions.html, univer-online.html, vuz.html

## Fix round 2

Commit: `b3cf7f3` fix(html): drop compounding opacity attr on catalog arrows, CSS owns states

Removed `opacity="0.5"` presentation attribute from all `<use href="assets/img/sprite.svg#icon-arrow-card">` tags in solutions.html. Actual count found and removed: **6** (lines 155, 176, 204, 223, 245, 265) — matches the ~6 estimate. Nothing else changed in the file; CSS (`.catalog__arrow{opacity:.5}` + hover 1) now solely controls the state, render goes from compounded 0.25/0.5 to intended 0.5/1.

Verification outputs:
1. Grep solutions.html for `opacity="0.5"`: **0 occurrences** (remaining hits are other files only: vuz.html `<g opacity="0.5">`, solution-detail.html, docs/.superpowers notes).
2. `git show --stat HEAD`: only solutions.html, 1 file changed, 6 insertions(+), 6 deletions(-).
3. Sanity grep: 6 `class="catalog__arrow"` svg blocks intact with `fill="currentColor"` and no opacity attr.
4. Post-commit worktree: user's pre-existing css/sections.css modification and untracked files remain unstaged/untouched.