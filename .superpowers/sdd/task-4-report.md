# Task 4 Report — CSS core merge → css/base.css

**Branch:** refactor/css-cleanup · **Commit:** `5d1c4cc` — refactor(css): merge tokens+utilities+components into base.css

## Method

- **base.css built via .NET** (`[System.IO.File]::ReadAllText/WriteAllText`, `UTF8Encoding($false)`) — the brief's Step-1 snippet (`Set-Content/Add-Content -Encoding UTF8`) would have added a BOM under PS 5.1; brief snippet not used verbatim for that reason.
- Concatenation order: tokens.css → utilities.css → components.css, each preceded by `/* ==== from <name>.css ==== */`. Source files' raw text appended byte-faithfully (mixed CRLF/LF inside sources preserved).
- **HTML edits:** targeted regex replacement of exactly one consecutive triple (`tokens→utilities→components` link lines) per page via `[regex]::Replace($raw, ..., 1)` on full raw text, written back with no-BOM UTF8. EOL style of each file untouched (backreference `\2` kept intra-triple EOLs consistent).

## Verification outputs

| Check | Result |
|---|---|
| BOM check: first bytes of base.css | `47 42 32` = `/* ` — **no BOM** |
| Equivalence (brief's literal `$a.Trim() -eq $b.Trim()`) | **False as written** — `$b` contains the 3 marker lines by design (see Concerns). Replaced with stronger check below |
| Equivalence (segment check): split base.css on marker regex → 4 segments; lead segment empty; each remaining segment `-ceq` (byte-equal string compare) to its source file | segments=4, lead-empty=True, tokens=True, utilities=True, components=True → sources byte-identical apart from markers |
| Old refs in 15 site pages (`css/tokens\|utilities\|components\.css`) | **0** |
| `css/base.css` references in pages | **15 / 15** |
| Per-page match count of consecutive triple before edit | exactly 1 in all 15 files |
| Pre-edit stray-ref scan (each page had exactly 3 old refs) | clean |
| EOL preservation (before → after): event-detail CRLF=6/LF=662→660, vuz LF=925→923, index CRLF=734→732 (−2 = collapsed triple) | preserved, no flips |
| No BOM in edited HTML | confirmed (spot-checked event-detail/vuz/index) |
| Link order spot-check (index.html) | fonts → swiper → fancybox → `css/base.css` → sections → pages/index → media ✓ |
| `git show --stat HEAD` | only `css/base.css` + 15 `*.html`; each html ±4 lines; unrelated changes excluded |

## Excluded from commit (untouched working tree)

`css/sections.css` (user's unstaged edits), `.superpowers/`, `.vscode/settings.json`, `assets/img/webinar-{2,5,6,7}.jpg`.

## Per-page confirmation (15/15)

about, article-detail, client-detail, clients, contacts, directum, event-detail, events, index, project-detail, projects, solution-detail, solutions, univer-online, vuz — all: 1 triple replaced → 1 `css/base.css` link at first position; vendor links and everything else byte-identical.

## Concerns

1. **Brief Step-2 check is unsatisfiable as written** (compares concatenation without markers against a file that contains them). Equivalent-but-stronger segment equality used instead; documented above.
2. **`graphify-out/graph.html`** (tracked, generated analysis artifact from graphify skill) still contains the strings `css/tokens.css` etc. inside an embedded JSON blob. Not one of the 15 site pages; left untouched per Verification Isolation. Task 5 deletion will make these dead strings regardless.
3. Old CSS files intentionally left on disk per plan (Task 5 deletes them).
