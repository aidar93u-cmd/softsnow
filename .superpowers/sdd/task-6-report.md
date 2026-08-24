# Task 6 Report — Shared heading typography layer (h1–h4)

**Status:** done · **Branch:** refactor/css-cleanup · **Files:** `css/sections.css` (only file changed)

## Key decision: layer already existed — reconciled, not duplicated

`css/base.css` utilities zone **already styles raw h1–h4** (lines 113–141):

```css
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); font-weight: 500; line-height: 1; letter-spacing: -0.02em; }
h1 { font-size: var(--fs-h1); letter-spacing: -0.07em; }
h2 { font-size: var(--fs-h2); letter-spacing: -0.07em; }
h3 { font-size: var(--fs-h3); letter-spacing: -0.05em; }
h4 { font-size: var(--fs-h4); line-height: 1.2; letter-spacing: -0.02em; }
```

Derivation below shows these values ARE the modal combos → per task instruction ("if any exist, reconcile instead of duplicating") **no new block was appended to base.css; base.css untouched**.

## Derivation table (facts, outside @media)

Method: parsed all top-level rules in sections.css matching `__title|__heading|__subtitle|__name|section-title|client-title` (78 rules), mapped each class to its real HTML tag across all 15 pages, grouped `{font-size, font-weight, line-height}` per tag/level.

| Level | Title rules on this tag | Modal combo | vs existing base |
|---|---|---|---|
| h1 | `.hero__title`, `.page-hero__title`, `.page-hero__title--detail` | fs-h1 / w500 / lh 1 / ls −0.07em | identical |
| h2 | 30 rules (`__title`/`__heading` on h2) | fs-h2 / w500 / lh 1 / ls −0.07em | identical |
| h3 | 16 rules (`__name`/`__title` on h3) | fs-h3 / w500 / lh 1 / ls −0.05em | identical |
| h4 | none found (all `*__name` at body-20 size are span/p/a) | — | base h4 kept as-is |

Deviations kept locally (≠ base for their tag): fs-h3-on-h2 (`.stats__heading`, `.clients__heading`, `.registry__title`, `.univer-registry__title`, `.catalog__name`, `.article-about__title`, `.contacts-map__title`), fs-h2-on-h1 (`.page-hero__title--detail`), w600 (`.contacts-map__title`), lh 0.95 / 1.05 / 1.1 / 1.2 / 120% / 1.25 variants, ls −0.01…−0.1875rem variants, fs-body-20 names (`.team__name`, `.clients__name`, `.eco-card__title`, `.events__title`). Excluded as non-headings (span/p/a/mixed): `.testimonials__name`, `.faq__name`, `.program__name`, `.tasks__name`, `.client-intro__name`, `.contacts-banner__name`, `.team__title`, `h2/h3.client-title`.

## Removal log

65 declarations removed across 35 rules + 11 rules removed entirely (emptied) = **46 rules touched**:

| Selector (tag) | Removed |
|---|---|
| `.hero__title` (h1) | fs, lh 1, ls −0.07em |
| `.page-hero__title` (h1) | fs |
| `.tasks__heading`, `.partners__heading` (h2) | fs, ls |
| `.projects__heading`, `.team__heading`, `.services__title`, `.reasons__title` (h2) | RULE REMOVED (fs+ls / fw+ls) |
| `.events__heading`, `.audience__title`, `.faq__title`, `.tasks__title`, `.features__title` (h2) | fs |
| `.cta__title` (h2) | fs, lh 1 (ls −0.03em kept) |
| `.goals__title`, `.impl__title`, `.stages__heading`, `.stages__title`(h3), `.client-quote__title` | fs, fw, lh 1 |
| `.video__title`, `.gallery__title` (h2) | RULE REMOVED (fs+fw+lh) |
| `.testimonials__title` (h2) | RULE REMOVED (fs) |
| `.event-about__title`, `.program__title` (h2) | RULE REMOVED (fs+fw) |
| `.event-partners__name` (h3) | RULE REMOVED (fs) |
| `.industries__title` (h3) | RULE REMOVED (fs+lh) |
| `.projects__name`, `.audience__name`, `.seminar-topics__name`, `.features__name`, `.event-partners__name`→(above), `.reasons__name`, `.vnedrenie__name`, `.seminar-topics__name` (h3) | fs (+fw where present) |
| `.vnedrenie__title` (h2) | fs, fw, ls |
| `.contacts-banner__title` (h2) | fs, fw (lh 1.05 kept) |
| `.article-about__title` (h2) | fw, lh (fs-h3 + ls deviations kept) |
| `.article-block__title` (h2) | fs, fw, lh (ls −0.1875rem kept) |
| `.facts__name` (h3) | fs, lh (ls −0.02em kept) |
| `.team__name` (h3) | fw, lh → RULE EMPTIED? no — rule removed after strip (body was fs+fw+lh only); fs-body-20 deviation note: rule deleted entirely since remaining body was empty |
| `.event-partners__title`, `.seminar-topics__title` (h2) | fs, fw |
| `.events-featured__name` (h3) | fs, lh (ls kept) |
| `.features-popup__title` (h3) | fs, fw (lh 1.1 kept) |
| `.catalog__name`, `.eco-card__title`, `.clients__name`, `.events__title` | fw only |

Per-property totals: font-size ×29, font-weight ×19, line-height ×15, letter-spacing ×4, font-family ×0 = **67 decls** (65 scripted + `.events__title` fw + restored-then-kept `.page-hero__title--detail` net 0).

⚠️ **Cascade catch:** `.page-hero__title.page-hero__title--detail { line-height: 1.0 }` was initially stripped (value == base h1 lh), but computed style CHANGED because lower-specificity sibling `.page-hero__title { line-height: 0.95 }` then won (66.5px vs 70px). **Restored** — browser-verified. Sibling-conflict scan confirms this was the only such case.

Not stripped (documented): `.stats__heading`/`.clients__heading` (fs-h3 on h2), `.registry__title`/`.univer-registry__title` (ls −0.05em ≠ base h2 −0.07em), `.ecosystem__title` (ls −0.03em), `.events-featured__title` (fs already commented out in source; ls dev).

## Verification

- Dup-group analysis (base.css + sections.css, outside @media): **646 groups → 634; dup groups 71 → 67; font-only dup groups 8 → 4**. Remaining 4 contain zero title selectors: article paragraphs (`article-block__text p` etc.), sub-labels (`vnedrenie__sub`/`demo-sub` fs-14), role labels (`testimonials__role` etc. fs-16), span/date names (fs-body-20+fw500) — other tasks' scope.
- Grep sanity: all leftover font-* decls in title-ish rules = documented deviations (listed above).
- Browser computed-style checks (file://, chrome-devtools) — index, event-detail, about, client-detail, contacts, solutions, article-detail: every checked heading equals original values (e.g. `.hero__title` 100px/500/lh100px/−7px; `.video__title` 70px/500/70px via base fallback; `.contacts-map__title` 40px/600/50px untouched).
- File integrity: BOM preserved, CRLF-only preserved (4417 lines), braces balanced 716/716.

## Commit

`refactor(css): shared heading typography layer, drop per-section copies` — stages `css/sections.css` only (base.css unchanged by design).
