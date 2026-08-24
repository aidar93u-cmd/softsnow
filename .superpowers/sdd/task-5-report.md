# Task 5 Report — fold pages/*.css into sections.css, drop legacy core

**Status:** DONE
**Branch:** refactor/css-cleanup
**Commit:** `853368a` — "refactor(css): fold pages layer into sections.css; drop legacy core files"

## Baseline

`git status --short` before work: only allowed untracked user files (`.superpowers/`, `.vscode/settings.json`, `assets/img/webinar-{2,5,6,7}.jpg`). Tracked tree clean. No deviation.

## Step 1 — Append pages blocks to sections.css

- 13 files appended in `Sort-Object Name` order: about, client-detail, clients, directum, event-detail, events, index, project-detail, projects, solution-detail, solutions, univer-online, vuz.
- Each block preceded by blank line + marker `/* ==== from pages/<name>.css ==== */` (markers at lines 2742–4425).
- Appended content normalized to CRLF; file remains pure CRLF (`lone_lf=0`, size 54 108 → 92 406 bytes). UTF-8 no BOM throughout.
- Deviation from brief's literal PowerShell: used `StreamWriter(UTF8Encoding($false))` instead of `Add-Content -Encoding UTF8` because PS 5.1 `Add-Content -Encoding UTF8` writes a BOM on every append — brief's script would have added 14 BOMs. This matches the task instruction "UTF-8 no BOM additions".

## Step 2 — Selector-set equivalence proof (run BEFORE any deletion)

SelSet per brief (raw-text scan incl. inside @media, comments stripped, whitespace collapsed), applied identically to both sides:

- before-set = {tokens.css, utilities.css, components.css, sections.css@HEAD-before-append} ∪ {css/pages/*.css} → **820 unique selectors**
- after-set = {base.css} ∪ {sections.css after append} → **820 unique selectors**
- `Compare-Object` diff: **empty — SETS IDENTICAL**

Saved: `C:\Temp\opencode\t5-before.txt`.

## Step 3 — HTML link removal (13 pages, not 12)

Actual count verified: **13** html carried a pages-link (about, client-detail, clients, directum, event-detail, events, index, project-detail, projects, solution-detail, solutions, univer-online, vuz). article-detail.html and contacts.html were already clean. (Task said "12"; actual is 13 — solutions.html still had its link.)

Removal via targeted regex `[ \t]*<link ...>\r?\n` per file → byte-exact single-line deletion preserving each file's own EOL style (vuz pure LF, event-detail/events/univer-online mixed, rest CRLF). `git diff --stat`: exactly **13 deletions, 0 insertions**, one line per file.

Resulting link order everywhere: fonts → vendor → `css/base.css` → `css/sections.css` → `css/media.css`. Vendor positions untouched.

## Step 4 — Deletions

`git rm css/pages/{13 files}` (dir removed) + `git rm css/tokens.css css/utilities.css css/components.css` — 16 deletions staged.

## Step 5 — Reference check

`Get-ChildItem *.html, css\*.css, js\*.js | Select-String 'css/(pages|tokens|utilities|components)'` → **0 matches**. (docs/ and graphify-out/ not scanned/touched, per instruction.)

## Step 6 — Selective staging & commit

Only `css/sections.css` + 13 edited `*.html` re-staged; deletions already staged by `git rm`. **No `git add -A`/`git add .`** — user's untracked files (.superpowers/, .vscode/settings.json, webinar jpgs) remain untracked and uncommitted.

`git show --stat HEAD`: **30 files changed** = css/sections.css (M) + 16 D + 13 html (−1 line each); +1792/−2486.

Post-commit `git status --short`: only the user's untracked files remain.

## Concerns

- None blocking. Note: task expected 12 link removals; actual was 13 (solutions.html included) — verified against live tree before edit.
- Final cascade is now base.css → sections.css → media.css as planned; visual QA in browser not in this task's scope (machine equivalence proven at selector level).
