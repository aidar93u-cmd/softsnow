56b8f29 refactor(css): tokenize repeated colors, drop unused tokens and reserved classes
diff --git a/AGENTS.md b/AGENTS.md
index 85dd599..94a562e 100644
--- a/AGENTS.md
+++ b/AGENTS.md
@@ -326,13 +326,13 @@ New statistics         NEW: .stats
 **Container:** `.container`
 
 **Buttons:** `.btn`, `.btn--primary`, `.btn--outline`
 
 **Typography:** `.section-title`, `.section-label`, `.body-text`
 
-**Cards:** `.card`, `.card--project`, `.card--company`
+**Cards:** `.card`
 
 **Navigation:** `.header`, `.nav`, `.nav__item`
 
 **Media:** `.image`, `.video`
 
 **Slider:** `.slider`, `.slider__button`
@@ -377,13 +377,13 @@ New statistics         NEW: .stats
 
 ╨Т╨╛ ╨▓╤А╨╡╨╝╤П FIGMA_IMPLEMENT ╨╕ FIGMA_QA ╨╖╨░╨┐╤А╨╡╤Й╨╡╨╜╨╛: ╤А╨╡╤Д╨░╨║╤В╨╛╤А╨╕╤В╤М ╨╜╨╡╤Б╨▓╤П╨╖╨░╨╜╨╜╤Л╨╣ CSS, ╨┐╨╡╤А╨╡╨╕╨╝╨╡╨╜╨╛╨▓╤Л╨▓╨░╤В╤М ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╡ ╨║╨╗╨░╤Б╤Б╤Л, ╤А╨╡╨╛╤А╨│╨░╨╜╨╕╨╖╨╛╨▓╤Л╨▓╨░╤В╤М ╤Д╨░╨╣╨╗╤Л, ╨╝╨╡╨╜╤П╤В╤М ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Г ╨║╨╛╨╝╨┐╨╛╨╜╨╡╨╜╤В╨╛╨▓, ╨╛╨▒╨╜╨╛╨▓╨╗╤П╤В╤М ╨╖╨░╨▓╨╕╤Б╨╕╨╝╨╛╤Б╤В╨╕, ╨╖╨░╨╝╨╡╨╜╤П╤В╤М ╨▒╨╕╨▒╨╗╨╕╨╛╤В╨╡╨║╨╕, ╨╝╨╡╨╜╤П╤В╤М JS-╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Г, ╨╝╨╡╨╜╤П╤В╤М ╨╜╨╡╤Б╨▓╤П╨╖╨░╨╜╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╜╨╛╤А╨╝╨░╨╗╨╕╨╖╨╛╨▓╨░╤В╤М ╨╜╨╡╤Б╨▓╤П╨╖╨░╨╜╨╜╤Л╨╡ ╨╛╤В╤Б╤В╤Г╨┐╤Л, ┬л╤З╨╕╤Б╤В╨╕╤В╤М┬╗ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╣ ╨║╨╛╨┤. ╨а╨░╨╖╤А╨╡╤И╨╡╨╜╨╛ ╤В╨╛╨╗╤М╨║╨╛ ╨╕╤Б╨┐╤А╨░╨▓╨╗╤П╤В╤М ╨║╨╛╨┤, ╨╜╨╡╨╛╨▒╤Е╨╛╨┤╨╕╨╝╤Л╨╣ ╨┤╨╗╤П ╤Ж╨╡╨╗╨╡╨▓╨╛╨╣ ╤Б╨╡╨║╤Ж╨╕╨╕. ╨Р╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨╜╤Л╨╣ ╤А╨╡╤Д╨░╨║╤В╨╛╤А╨╕╨╜╨│ тАФ ╨╛╤В╨┤╨╡╨╗╤М╨╜╨░╤П ╨╖╨░╨┤╨░╤З╨░ ╨┐╨╛╤Б╨╗╨╡ ╨╖╨░╨▓╨╡╤А╤И╨╡╨╜╨╕╤П ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л.
 
 ## ╨Ш╨╖╨▓╨╡╤Б╤В╨╜╤Л╨╡ ╨║╨▓╨╕╤А╨║╨╕ (╨┐╤А╨╛╨▓╨╡╤А╨╡╨╜╨╛ ╨░╤Г╨┤╨╕╤В╨╛╨╝ 2026-08-22)
 
 - `.tasks__inner` ╨▓ sections.css ╨╛╨▒╤К╤П╨▓╨╗╨╡╨╜ ╨┤╨▓╨░╨╢╨┤╤Л: ╨▒╨░╨╖╨╛╨▓╤Л╨╣ ╨▒╨╗╨╛╨║ + ╨▓╨░╤А╨╕╨░╨╜╤В ┬л╤Б╤В╤А╨░╨╜╨╕╤Ж ╤А╨╡╤И╨╡╨╜╨╕╨╣┬╗ ╨╜╨╕╨╢╨╡ ╨┐╨╛ ╨║╨░╤Б╨║╨░╨┤╤Г. ╨б╨▓╨╛╨╣╤Б╤В╨▓╨░ ╨╜╨╡ ╨┐╨╡╤А╨╡╤Б╨╡╨║╨░╤О╤В╤Б╤П; ╨Э╨Х ┬л╤З╨╕╨╜╨╕╤В╤М┬╗ ╨▒╨╡╨╖ ╨▓╨▓╨╡╨┤╨╡╨╜╨╕╤П ╨╝╨╛╨┤╨╕╤Д╨╕╨║╨░╤В╨╛╤А╨░ ╨▓ HTML (╨╛╨▒╨░ ╨▒╨╗╨╛╨║╨░ ╨┐╨╛╨╝╨╡╤З╨╡╨╜╤Л ╨║╨╛╨╝╨╝╨╡╨╜╤В╨░╤А╨╕╤П╨╝╨╕).
-- ╨Ъ╨╗╨░╤Б╤Б╤Л `.btn--white/--black/--outline-dark`, `.card--project/--company` ╨╡╤Б╤В╤М ╤В╨╛╨╗╤М╨║╨╛ ╨▓ components.css (Registry-╨▓╨░╤А╨╕╨░╨╜╤В╤Л, ╨╖╨░╤А╨╡╨╖╨╡╤А╨▓╨╕╤А╨╛╨▓╨░╨╜╤Л). ╨Ъ╨╗╨░╤Б╤Б `.events__card--blue` ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П тАФ ╤Г╨┤╨░╨╗╤П╤В╤М ╤В╨╛╨╗╤М╨║╨╛ ╨┐╨╛╤Б╨╗╨╡ ╤Б╨▓╨╡╤А╨║╨╕ ╤Б FIGMA.md.
+- ╨Ъ╨╗╨░╤Б╤Б╤Л `.btn--white/--black/--outline-dark`, `.card--project/--company` ╤Г╨┤╨░╨╗╨╡╨╜╤Л ╨╕╨╖ base.css 2026-08-25 (╨╖╨░╨┤╨░╤З╨░ 9: ╨╜╨╕╨│╨┤╨╡ ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╗╨╕╤Б╤М тАФ ╨╜╨╡ ╨┐╨╡╤А╨╡╤Б╨╛╨╖╨┤╨░╨▓╨░╤В╤М). ╨Ъ╨╗╨░╤Б╤Б `.events__card--blue` ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П тАФ ╤Г╨┤╨░╨╗╤П╤В╤М ╤В╨╛╨╗╤М╨║╨╛ ╨┐╨╛╤Б╨╗╨╡ ╤Б╨▓╨╡╤А╨║╨╕ ╤Б FIGMA.md.
 - Fancybox ╨┐╨╛╨┤╨║╨╗╤О╤З╨░╨╡╤В╤Б╤П ╨┐╨╛╤Б╤В╤А╨░╨╜╨╕╤З╨╜╨╛ (╤Б╨╡╨╣╤З╨░╤Б: index, solutions, solution-detail, about, contacts, project-detail, article-detail, vuz); `initDemoPopup`/`initVideoPopup` ╨▓ main.js ╤А╨░╤Б╤Б╤З╨╕╤В╨░╨╜╤Л ╨╜╨░ ╨│╨╗╨╛╨▒╨░╨╗╤М╨╜╤Л╨╣ `Fancybox`.
 - ╨б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╣ CSS ╨╢╨╕╨▓╤С╤В ╨▓ `css/pages/<page>.css`; ╨┐╤А╨╕ ╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╕ ╨╜╨╛╨▓╨╛╨╣ ╤Б╨╡╨║╤Ж╨╕╨╕ ╨║╨╗╨░╤Б╤В╤М ╨╛╨┤╨╜╨╛╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╨┐╤А╨░╨▓╨╕╨╗╨░ ╤В╤Г╨┤╨░, ╨╝╤Г╨╗╤М╤В╨╕╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ тАФ ╨▓ sections.css (╨║╨░╤А╤В╨░ ╤А╨░╨╖╨╜╨╛╤Б╨░ тАФ docs/superpowers/plans/2026-08-24-ownership-map.md).
 
 ## ╨б╨┐╨╕╤Б╨╛╨║ ╤Б╤В╤А╨░╨╜╨╕╤Ж
 
 ╨Т╤Б╨╡ 15 ╤Б╤В╤А╨░╨╜╨╕╤Ж ╨▓ ╨║╨╛╤А╨╜╨╡ ╨┐╤А╨╛╨╡╨║╤В╨░:
diff --git a/FIGMA.md b/FIGMA.md
index cc2259f..6dfb185 100644
--- a/FIGMA.md
+++ b/FIGMA.md
@@ -15,15 +15,18 @@
 | h2 | `--fs-h2` | 70px |
 | Numbers | `--fs-numbers` | 75px, weight 500 |
 | Card titles | `--fs-h3` | 40px |
 | Captions | `--fs-body-14` / `--fs-body-16` | 14тАУ16px |
 | Font | `--font-heading` / `--font-body` | Inter, 400/500/600/700 (Google Fonts) |
 | Button radius 50px | ╨▓ `components.css`/`sections.css` | ╨Э╨Х ╨│╨╗╨╛╨▒╨░╨╗╤М╨╜╤Л╨╣ ╤В╨╛╨║╨╡╨╜ (╤Б╨╝. Token Rules) |
-| Card radius 20px | `--radius-lg` | |
-
-╨а╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П: `css/tokens.css`.
+| Card radius 20px | `--radius-lg` | |
+| Dark @70% | `--color-dark-a70` | `#222222b2` (╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9) |
+| Dark @10% | `--color-dark-a10` | `#2222221a` (╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9) |
+| Sea @10% | `--color-sea-a10` | `#1342f31a` (╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9) |
+
+╨а╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П: ╨▒╨╗╨╛╨║ tokens ╨▓ `css/base.css`. ╨г╨┤╨░╨╗╨╡╨╜╤Л ╨╜╨╡╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╨╝╤Л╨╡ ╤В╨╛╨║╨╡╨╜╤Л `--transition-slow`, `--z-header`, `--z-popover` (2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9).
 
 ## Components
 
 | Figma Pattern | Code | Variants | Status |
 |---|---|---|---|
 | Container (1790px) | `.container` | тАФ | done |
@@ -31,14 +34,14 @@
 | Outline Button | `.btn--outline` | тАФ | done |
 | Ghost Button | `.btn--ghost` | тАФ | done |
 | Section Title | `.section-title` | тАФ | done |
 | Section Label | `.section-label` | тАФ | done |
 | Body Text | `.body-text` | тАФ | done |
 | Card | `.card` | тАФ | done |
-| Project Card | `.card--project` | тАФ | done |
-| Company Card | `.card--company` | тАФ | done |
+| Project Card | `.card--project` | тАФ | ╤Г╨┤╨░╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9 (╨║╨╗╨░╤Б╤Б ╨╜╨╕╨│╨┤╨╡ ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╗╤Б╤П) |
+| Company Card | `.card--company` | тАФ | ╤Г╨┤╨░╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9 (╨║╨╗╨░╤Б╤Б ╨╜╨╕╨│╨┤╨╡ ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╗╤Б╤П) |
 | Slider | `.slider` | тАФ | done |
 | Slider button | `.slider__button` | тАФ | done |
 | Carousel nav | `.carousel-nav` | `__btn` | done |
 
 ╨а╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П: `css/components.css`.
 
@@ -165,13 +168,13 @@ Detail ╤Б╨╛╨▒╤Л╤В╨╕╤П, ╤Д╤А╨╡╨╣╨╝ `896:9497` (1920├Ч7991). ╨б╤В╨╕╨╗╨╕ ╨▓ `css/se
 | 8 | ┬л╨Я╨░╤А╤В╨╜╨╡╤А╤Л ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П┬╗ (3 ╨║╨░╤А╤В╨╛╤З╨║╨╕ 617├Ч510, ╨╗╨╛╨│╨╛ 130├Ч130 r50) | `896:9643` | `.event-partners` | done |
 | 9 | ┬л╨Я╨╛╤З╨╡╨╝╤Г ╨╜╨░╨╝ ╨┤╨╛╨▓╨╡╤А╤П╤О╤В ╨Т╨г╨Ч╨л?┬╗ (title + 3 ╨▒╨╗╨╛╨║╨░: ╨╕╨║╨╛╨╜╨║╨░ 40├Ч40 + 40/500 + 16/400) | `896:9667` | `.trust` | done |
 | 10 | ┬л╨б ╨╜╨░╨╝╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В┬╗ | `896:9715` | `.clients` | done (reused) |
 | 11 | FAQ (4 ╨▓╨╛╨┐╤А╨╛╤Б╨░, ╨┐╨╡╤А╨▓╤Л╨╣ ╨╛╤В╨║╤А╤Л╤В) | `896:9693` | `.faq` | done (reused) |
 | 12 | Footer | `896:9509` | `.footer` | done (reused) |
 
-╨Ф╨╛╨▒╨░╨▓╨╗╨╡╨╜ shared-╨▓╨░╤А╨╕╨░╨╜╤В ╨║╨╜╨╛╨┐╨║╨╕ `.btn--outline-dark` ╨▓ `css/components.css` (border `#222`, ╤В╨╡╨║╤Б╤В `#222` 600; hover: bg black, white text) тАФ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨▓ detail hero. ╨Ю╤В╨║╨╗╨╛╨╜╨╡╨╜╨╕╤П (╨║╨╛╨╝╨┐╤А╨╛╨╝╨╕╤Б╤Б ╨┐╨╛ ╤В╨╛╨║╨╡╨╜╨░╨╝): title/btn/date/CTA тАФ `--color-sea` #216CF3 ╨╕ dark-outline ╨▓╨╝╨╡╤Б╤В╨╛ #1342f3 (╤Б╨╝. ╨┐╨╗╨░╨╜ `2026-08-15-events-pages.md`). FAQ ╨╛╤В╨║╤А╤Л╨▓╨░╨╡╤В╤Б╤П ╤З╨╡╤А╨╡╨╖ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╣ `js/main.js` ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜ (╨┐╨╡╤А╨▓╤Л╨╣ `.faq__item` ╨░╨▓╤В╨╛-open).
+Shared-╨▓╨░╤А╨╕╨░╨╜╤В ╨║╨╜╨╛╨┐╨║╨╕ `.btn--outline-dark` (border `#222`, ╤В╨╡╨║╤Б╤В `#222` 600; hover: bg black, white text) ╤А╨░╨╜╨╡╨╡ ╨┤╨╛╨▒╨░╨▓╨╗╤П╨╗╤Б╤П ╨┤╨╗╤П detail hero тАФ ╤Г╨┤╨░╨╗╨╡╨╜╨╛ 2026-08-25, ╨╖╨░╨┤╨░╤З╨░ 9 (╨║╨╗╨░╤Б╤Б ╨╜╨╕╨│╨┤╨╡ ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╗╤Б╤П, ╨║╨░╨║ ╨╕ ╨╖╨░╤А╨╡╨╖╨╡╤А╨▓╨╕╤А╨╛╨▓╨░╨╜╨╜╤Л╨╡ `.btn--white`/`.btn--black`, ╨▓ ╤А╨╡╨╡╤Б╤В╤А╨╡ ╨╜╨╡ ╤Г╨┐╨╛╨╝╨╕╨╜╨░╨▓╤И╨╕╨╡╤Б╤П). ╨Ю╤В╨║╨╗╨╛╨╜╨╡╨╜╨╕╤П (╨║╨╛╨╝╨┐╤А╨╛╨╝╨╕╤Б╤Б ╨┐╨╛ ╤В╨╛╨║╨╡╨╜╨░╨╝): title/btn/date/CTA тАФ `--color-sea` #216CF3 ╨╕ dark-outline ╨▓╨╝╨╡╤Б╤В╨╛ #1342f3 (╤Б╨╝. ╨┐╨╗╨░╨╜ `2026-08-15-events-pages.md`). FAQ ╨╛╤В╨║╤А╤Л╨▓╨░╨╡╤В╤Б╤П ╤З╨╡╤А╨╡╨╖ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╣ `js/main.js` ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜ (╨┐╨╡╤А╨▓╤Л╨╣ `.faq__item` ╨░╨▓╤В╨╛-open).
 
 ### ╨Ф╨╡╤В╨░╨╗╤М╨╜╨░╤П ╨┐╤А╨╛╨╡╨║╤В╨░ (project-detail.html)
 
 Detail ╨┐╤А╨╛╨╡╨║╤В╨░, ╤Д╤А╨╡╨╣╨╝ `1128:8159` (COMPONENT, fileKey `tK0WpkPKL3pQGAyCfynr3b`). ╨б╤В╨╕╨╗╨╕ ╨▓ `css/sections.css` (╨▒╨╗╨╛╨║ ┬лProject detail page┬╗).
 
 | # | Figma Section | Code | Status |
diff --git a/css/base.css b/css/base.css
index d680110..560d296 100644
--- a/css/base.css
+++ b/css/base.css
@@ -7,12 +7,17 @@
 
   --color-grey: rgba(34, 34, 34, 0.7);
   --color-overlay: rgba(0, 0, 0, 0.2);
   --color-blue-alt: #1342F3;
   --color-red: #ED143B;
 
+  /* Alpha shades (extracted from repeated hex literals) */
+  --color-dark-a70: #222222b2;
+  --color-dark-a10: #2222221a;
+  --color-sea-a10: #1342f31a;
+
   /* Backgrounds */
   --bg-light: #F5F4F5;
   --bg-light-alt: #F5F5F5;
   --bg-border: #E8E8E8;
 
   /* Gradients */
@@ -64,17 +69,12 @@
   /* Shadows */
   --shadow-popover: 0 1.25rem 3.125rem rgba(34, 34, 34, 0.12);
 
   /* Transitions */
   --transition-fast: 0.2s;
   --transition-base: 0.3s;
-  --transition-slow: 0.35s;
-
-  /* Z-index */
-  --z-header: 2;
-  --z-popover: 20;
 }
 /* ==== from utilities.css ==== */
 * {
 	margin: 0;
 	padding: 0;
 	box-sizing: border-box;
@@ -218,32 +218,12 @@ section {
 .card {
 	background: var(--color-white);
 	border-radius: var(--radius-lg);
 	overflow: hidden;
 }
 
-.card--project {
-	height: 28.75rem;
-	border-radius: var(--radius-lg);
-}
-
-.card--company {
-	display: flex;
-	align-items: center;
-	justify-content: center;
-	height: 12.5rem;
-	padding: 0 2.5rem;
-	background: var(--color-white);
-	border-radius: var(--radius-lg);
-}
-.card--company img {
-	max-width: 100%;
-	max-height: 6.875rem;
-	object-fit: contain;
-}
-
 /* Breadcrumb (listing/detail page heroes) */
 .breadcrumb {
 	display: flex;
 	align-items: center;
 	gap: 0.625rem;
 	margin-bottom: 5.625rem;
@@ -331,23 +311,12 @@ section {
 	stroke: var(--color-white);
 }
 .btn--outline-white:hover {
 	background: var(--color-white);
 	color: var(--color-sea);
 }
-/* Dark outline тАФ transparent, black border/text (event-detail hero) */
-.btn--outline-dark {
-	border: 2px solid var(--color-black);
-	color: var(--color-black);
-	font-weight: 600;
-}
-.btn--outline-dark:hover {
-	background: var(--color-black);
-	color: var(--color-white);
-}
-
 /* Live ghost (single source of truth тАФ was duplicated/overridden from sections.css) */
 .btn--ghost {
 	background: transparent;
 	border: 2px solid var(--color-sea);
 	color: var(--color-black);
 	font-weight: 500;
@@ -356,44 +325,22 @@ section {
 	background: var(--color-sea);
 	color: var(--color-white);
 }
 
 .btn--search {
 	color: var(--color-grey);
-	background: #fff;
+	background: var(--color-white);
 	padding: 0.75rem 0.75rem;
 	width: 2.5rem;
 	height: 2.5rem;
 }
 
 /* Button variants:
    .btn--primary тАФ ╨╖╨░╨╗╨╕╤В╨░╤П (filled, brand sea)
    .btn--outline тАФ ╤Б ╤А╨░╨╝╨║╨╛╨╣ ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨░╤П (transparent + border)
-   .btn--ghost   тАФ ╤Б ╤А╨░╨╝╨║╨╛╨╣ ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨░╤П, sea-accent border
-   .btn--white   тАФ ╨▒╨╡╨╗╨░╤П (white fill)
-   .btn--black   тАФ ╤З╤С╤А╨╜╨░╤П (black fill) */
-
-.btn--white {
-	background: var(--color-white);
-	color: var(--color-black);
-	border: 1px solid var(--color-white);
-}
-.btn--white:hover {
-	background: var(--color-sea);
-	border-color: var(--color-sea);
-	color: var(--color-white);
-}
-
-.btn--black {
-	background: var(--color-black);
-	color: var(--color-white);
-}
-.btn--black:hover {
-	background: var(--color-sea);
-	color: var(--color-white);
-}
+   .btn--ghost   тАФ ╤Б ╤А╨░╨╝╨║╨╛╨╣ ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨░╤П, sea-accent border */
 
 /* Width modifiers for repeated 460px / 262px buttons across sections */
 .btn--md {
 	min-width: 16.375rem;
 }
 .btn--lg {
@@ -437,13 +384,13 @@ section {
 	font-size: var(--fs-body-16);
 	font-weight: 500;
 	letter-spacing: -0.02em;
 	color: var(--color-grey);
 	border-radius: var(--radius-xl);
 	transition: background-color 0.4s, color 0.4s;
-	border: 2px solid #2222221a;
+	border: 2px solid var(--color-dark-a10);
 }
 .tabs__btn:hover {
 	color: var(--color-black);
 }
 .tabs__btn.is-active {
 	background: var(--color-sea);
diff --git a/css/media.css b/css/media.css
index 163d14a..e4de624 100644
--- a/css/media.css
+++ b/css/media.css
@@ -2268,13 +2268,13 @@
 		width: 1rem;
 		height: 1rem;
 	}
 
 	.tasks__a > p {
 		font-size: var(--fs-body-14);
-		color: var(--grey, #222222B2);
+		color: var(--color-grey);
 	}
 
 
 	/* ---------- ╨Р╤Г╨┤╨╕╤В╨╛╤А╨╕╤П: ╨║╨░╤А╤В╨╛╤З╨║╨╕ 148px, ╨┐╨░╨┤╨┤╨╕╨╜╨│ 16 ---------- */
 	.audience {
 		margin-bottom: 3rem;
diff --git a/css/sections.css b/css/sections.css
index 4ee8e73..11bf0cd 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -158,13 +158,13 @@
 }
 
 .header__phone-num {
   font-size: var(--fs-body-14);
   font-weight: 500;
   line-height: 1.21;
-  color: var(--grey, #222222B2)
+  color: var(--color-grey);
 }
 
 /* ============ Hero ============ */
 .hero {
   position: relative;
   height: 95dvh;
@@ -182,13 +182,13 @@
     background-size: cover;
     background-position: center;
 }
 .hero__note_1{  
     max-width: 18.75rem;
     display: block;
-    color: var(--grey, #222222B2);
+    color: var(--color-grey);
 }
 .hero-block-page-inner{
     padding: 2.5rem;
     position: relative;
 
     border-radius: 0 0 1.25rem 1.25rem;
@@ -232,13 +232,13 @@
     width: calc(50% - 2.5rem);
 }
 
 .hero__note_2 {
     max-width: 18.125rem;
     display: block;
-    color: var(--grey, #222222B2);
+    color: var(--color-grey);
 }
 
 .hero__footer::after {
   content: '';
   position: absolute;
   left: 50%;
@@ -265,13 +265,13 @@
 /* ============ Hero ============ */
 
 /* Stats placed in the standard hero footer (solution-detail) */
 
 .event-hero .hero__title {
     max-width: 73.125rem;
-    color: #fff;
+    color: var(--color-white);
 }
 /* ============ Industries ============ */
 
 /* ============ Stats ============ */
 .stats {
   padding-bottom: 7.5rem;
@@ -1588,13 +1588,13 @@ h3.client-title,
 .faq__a > p,
 .tasks__a > p {
   overflow: hidden;
   min-height: 0;
   margin: 0;
   transition: padding-bottom 0.4s;
-    color: var(--grey, #222222B2);
+    color: var(--color-grey);
 }
 
 .faq__item.is-open .faq__a > p {
   padding-bottom: 2.5rem;
 }
 
@@ -1793,13 +1793,13 @@ h2.client-title {
 }
 
 .goals__stat-num {
   font-size: var(--fs-numbers);
   font-weight: 500;
   line-height: 1;
-  color: #1342f3;
+  color: var(--color-sea);
 }
 
 .goals__stat-label {
   margin-top: var(--gap-lg);
   }
 
@@ -1912,13 +1912,13 @@ h2.client-title {
   transition: background 0.3s;
 }
 
 /* ╨С╤А╨╡╨╜╨┤-╤Б╨╕╨╜╨╕╨╣ */
 .gallery__dot.is-active,
 .events__card--blue {
-  background: #1342f3;
+  background: var(--color-sea);
 }
 
 /* Read-also blue card (solid fill, no overlay) */
 
 .events__card--blue .events__info {
   background: transparent;
@@ -1991,13 +1991,13 @@ h2.client-title {
 .reasons__icon {
   flex-shrink: 0;
   color: var(--color-sea);
     width: 4rem;
     height: 4rem;
     padding: 0.9375rem;
-    background: #1342F31A;
+    background: var(--color-sea-a10);
     border-radius: 50%;
 }
 
 .reasons__name {
   margin-bottom: 1.25rem;
 }
@@ -2108,13 +2108,13 @@ h2.client-title {
 
 /* Univer-registry (╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▓╨║╨╗╤О╤З╨╡╨╜╨╛ ╨▓ ╤А╨╡╨╡╤Б╤В╤А ╨Ь╨╕╨╜╤Ж╨╕╤Д╤А╤Л) */
 
 /* Reasons (╨Я╨╛╤З╨╡╨╝╤Г ╨▓╤Л╨▒╨╕╤А╨░╤О╤В Univer Online) */
 .reasons--univer .reasons__icon {
     padding: 0.75rem;
-    background: #1342F31A;
+    background: var(--color-sea-a10);
     display: flex;
     align-items: center;
     justify-content: center;
 }
 
 /* CTA ╤Б╨╕╨╜╨╕╨╣ (╨а╨░╤Б╤Б╨║╨░╨╢╨╕╤В╨╡ ╨╜╨░╨╝ ╨╛ ╨╖╨░╨┤╨░╤З╨░╤Е ╨▓╨░╤И╨╡╨│╨╛ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨░) */
@@ -2677,13 +2677,13 @@ a.contacts-map__value:hover {
 .page-hero__media {
     position: absolute;
     right: 2.5rem;
     bottom: 3.75rem;
     height: 11.5625rem;
     width: 11.5625rem;
-    background: #fff;
+    background: var(--color-white);
     border-radius: 50%;
     padding: 1.25rem;
     display: flex;
 }
 .page-hero__logo {
     display: block;
@@ -3108,13 +3108,13 @@ transition: background-color 0.4s, color 0.4s;
 
 .seminar-topics__card {
   height: 22.5rem;
   padding: 2.125rem 2.5rem 2.5rem;
   display: flex;
   flex-direction: column;
- border: 1px solid #2222221A;
+ border: 1px solid var(--color-dark-a10);
   border-radius: var(--radius-lg);
 }
 
 .seminar-topics__desc {
   margin-top: auto;
   font-size: var(--fs-body-16);
@@ -3355,13 +3355,13 @@ transition: background-color 0.4s, color 0.4s;
   display: flex;
   flex-direction: column;
   gap: 3.75rem;
   min-width: 0;
 }
 .impl__block{
-    border-bottom: 1px solid #2222221A;
+    border-bottom: 1px solid var(--color-dark-a10);
     padding-bottom: 3.125rem;
 }
 .impl__block:last-child{
     padding-bottom: 0;
     border-bottom: none;
 }
@@ -3645,13 +3645,13 @@ transition: background-color 0.4s, color 0.4s;
 .registry__desc,
 .univer-registry__desc {
   font-size: var(--fs-body-16);
   max-width: 37.5rem;
 }
 .registry__desc_bottom{
-    color: #222222B2;
+    color: var(--color-dark-a70);
 
 }
 .registry__img {
     width: 100%;
     height: auto;
     max-width: 450px;
@@ -3723,13 +3723,13 @@ transition: background-color 0.4s, color 0.4s;
 }
 .features__demo {
     display: flex;
     align-items: center;
     gap: var(--gap-lg);
     margin-top: 2rem;
-    border: 2px solid #2222221A;
+    border: 2px solid var(--color-dark-a10);
     padding: 1.25rem 1.25rem;
     border-radius: 1.25rem;
     width: fit-content;
     background: transparent;
     font: inherit;
     color: inherit;
@@ -4075,13 +4075,13 @@ transition: background-color 0.4s, color 0.4s;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   width: 4rem;
   height: 4rem;
   color: var(--color-sea);
-  background: #1342f31a;
+  background: var(--color-sea-a10);
   border-radius: 50%;
 }
 .eco-card__icon svg {
   width: 2.5rem;
   height: 2.5rem;
 }
