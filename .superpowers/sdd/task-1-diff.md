8f8828f docs: optimization audit registry (sprite/dupes/vendors)
 .../plans/2026-08-24-optimization-audit.md         | 175 +++++++++++++++++++++
 1 file changed, 175 insertions(+)
diff --git a/docs/superpowers/plans/2026-08-24-optimization-audit.md b/docs/superpowers/plans/2026-08-24-optimization-audit.md
new file mode 100644
index 0000000..5600da9
--- /dev/null
+++ b/docs/superpowers/plans/2026-08-24-optimization-audit.md
@@ -0,0 +1,175 @@
+# ╨Р╤Г╨┤╨╕╤В ╨╛╨┐╤В╨╕╨╝╨╕╨╖╨░╤Ж╨╕╨╕ тАФ ╤А╨╡╨╡╤Б╤В╤А╤Л (Task 1)
+
+╨Ф╨░╤В╨░: 2026-08-24. ╨Т╨╡╤В╨║╨░: `refactor/css-cleanup`. ╨в╨╕╨┐ ╨╖╨░╨┤╨░╤З╨╕: READ-ONLY ╨░╨╜╨░╨╗╨╕╨╖ + ╤Н╤В╨╛╤В ╤Д╨░╨╣╨╗.
+
+╨Ь╨╡╤В╨╛╨┤╨╕╨║╨░ ╨╕ ╤Б╤Л╤А╤Л╨╡ ╨┤╨░╨╜╨╜╤Л╨╡:
+- SVG: ╤Б╨║╨░╨╜ ╨▓╤Б╨╡╤Е 15 `*.html`, ╨┐╤Г╤В╨╕ `d="тАж"` ╨┤╨╗╨╕╨╜╨╛╨╣ тЙе40 ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓, ╨│╤А╤Г╨┐╨┐╨╕╤А╨╛╨▓╨║╨░ ╨┐╨╛ ╨┐╨╡╤А╨▓╤Л╨╝ 80 ╤Б╨╕╨╝╨▓╨╛╨╗╨░╨╝. ╨Ь╨░╤И╨╕╨╜╨╛╤З╨╕╤В╨░╨╡╨╝╤Л╨╣ ╤Н╨║╤Б╨┐╨╛╤А╤В: `C:\Temp\opencode\sprite-inventory.xml` (CliXML, ╨╛╨▒╤К╨╡╨║╤В╤Л `{Id, Pages, Count, PathPrefix}`; PathPrefix тАФ ╤Б╤Л╤А╤Л╨╡ ╨┐╨╡╤А╨▓╤Л╨╡ 80 ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓ ╨╖╨╜╨░╤З╨╡╨╜╨╕╤П `d` ╨▒╨╡╨╖ ╨╜╨╛╤А╨╝╨░╨╗╨╕╨╖╨░╤Ж╨╕╨╕ ╨┐╤А╨╛╨▒╨╡╨╗╨╛╨▓ тАФ ╨┤╨╗╤П ╤В╨╛╤З╨╜╨╛╨│╨╛ ╤В╨╡╨║╤Б╤В╨╛╨▓╨╛╨│╨╛ ╨┐╨╛╨╕╤Б╨║╨░ ╨┐╤А╨╕ ╨╖╨░╨╝╨╡╨╜╨╡).
+- ╨Ф╤Г╨▒╨╗╨╕ CSS: `C:\Temp\opencode\css-audit.ps1` тЖТ `C:\Temp\opencode\css-rules.xml` (825 ╨┐╤А╨░╨▓╨╕╨╗ ╨▓╨╜╨╡ @media, 651 ╤Г╨╜╨╕╨║╨░╨╗╤М╨╜╨╛╨╡ ╤В╨╡╨╗╨╛) тЖТ ╨┐╨╛╨╗╨╜╨░╤П ╨│╤А╤Г╨┐╨┐╨╕╤А╨╛╨▓╨║╨░ ╨▓ `C:\Temp\opencode\dupes-full.txt`.
+- ╨Т╨╡╨╜╨┤╨╛╤А╤Л: ╤А╨╡╨│╤Н╨║╤Б╨┐-╨╝╨░╤В╤А╨╕╤Ж╨░ ╨┐╨╛ ╨▓╤Б╨╡╨╝ ╤Б╤В╤А╨░╨╜╨╕╤Ж╨░╨╝ (class="swiperтАж", `__swiper`/`swiper-wrapper`/`swiper-slide` ╤В╨╛╨║╨╡╨╜╤Л, `data-fancybox`, `.video`, `.gallery`, ╨┐╨╛╨┤╨║╨╗╤О╤З╨╡╨╜╨╕╤П css/js).
+
+╨Ш╤В╨╛╨│╨╛╨▓╤Л╨╡ ╤З╨╕╤Б╨╗╨░: SVG тАФ 49 ╤Г╨╜╨╕╨║╨░╨╗╤М╨╜╤Л╤Е ╨┤╨╗╨╕╨╜╨╜╤Л╤Е ╨┐╤Г╤В╨╡╨╣, 27 ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╨│╤А╤Г╨┐╨┐, **439 ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓**, ╨╕╨╖ ╨╜╨╕╤Е 60 тАФ ╤Г╨╢╨╡ ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╡ ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤П `<symbol>` (╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М) тЖТ **379 ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓ ╨▓ ╨╖╨╛╨╜╨╡ ╨╖╨░╨╝╨╡╨╜╤Л**. CSS тАФ **71 ╨│╤А╤Г╨┐╨┐╨░ ╨┤╤Г╨▒╨╗╨╡╨╣** / 174 ╨╗╨╕╤И╨╜╨╕╤Е ╨╕╨╜╤Б╤В╨░╨╜╤Б╨░; merge тАФ 61 ╨│╤А╤Г╨┐╨┐╨░ (160 ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓), skip тАФ 10 ╨│╤А╤Г╨┐╨┐ (14 ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓).
+
+---
+
+## ╨а╨Х╨Х╨б╨в╨а-A ┬л╨б╨┐╤А╨░╨╣╤В┬╗ тАФ ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╨╡╤Б╤П SVG
+
+╨Ш╨╝╨╡╨╜╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╨╛ ╤А╨╛╨╗╨╕ (╨║╨╛╨╜╤В╨╡╨║╤Б╤В ╨▓╤Е╨╛╨╢╨┤╨╡╨╜╨╕╤П ╨┐╤А╨╛╨▓╨╡╤А╨╡╨╜ ╨┐╨╛ ╤А╨░╨╖╨╝╨╡╤В╨║╨╡; ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╤Б╤В╤А╨╡╨╗╨╛╨║ ╨┐╤А╨╛╨▓╨╡╤А╨╡╨╜╤Л ╤А╨╡╨╜╨┤╨╡╤А╨╛╨╝). ╨Ю╨┤╨╕╨╜ ╤Б╨╕╨╝╨▓╨╛╨╗ ╨╝╨╛╨╢╨╡╤В ╨┐╨╛╨║╤А╤Л╨▓╨░╤В╤М ╨╜╨╡╤Б╨║╨╛╨╗╤М╨║╨╛ ╨▓╨░╤А╨╕╨░╨╜╤В╨╛╨▓ ╨┐╤Г╤В╨╕ (╤А╨░╨╖╨╜╤Л╨╡ ╤Н╨║╤Б╨┐╨╛╤А╤В╤Л ╨╛╨┤╨╜╨╛╨│╨╛ ╨│╨╗╨╕╤Д╨░).
+
+| # | Id ╤Б╨╕╨╝╨▓╨╛╨╗╨░ | ╨а╨╛╨╗╤М / ╨║╨╛╨╜╤В╨╡╨║╤Б╤В | ╨б╤В╤А╨░╨╜╨╕╤Ж╤Л | ╨Т╤Е╨╛╨╢╨┤. | ╨Ъ╨╗╤О╤З ╨┐╨╛╨╕╤Б╨║╨░ (╨┐╨╡╤А╨▓╤Л╨╡ ~80 ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓ `d`) |
+|---|------------|-----------------|----------|--------|----------------------------------------|
+| A1 | `icon-arrow-card` | ╨Ф╨╕╨░╨│╨╛╨╜╨░╨╗╤М╨╜╨░╤П ╤Б╤В╤А╨╡╨╗╨║╨░ ╨║╨░╤А╤В╨╛╤З╨╡╨║-╤Б╤Б╤Л╨╗╨╛╨║ 13├Ч11 (`.projects__arrow`, `.events__arrow`) | article-detail, client-detail, clients, directum, index, project-detail, projects, solution-detail, univer-online, vuz | 60 | `M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.9000` |
+| A2 | `icon-arrow-card` | ╨в╨░ ╨╢╨╡ ╤Б╤В╤А╨╡╨╗╨║╨░, ╨▓╨░╤А╨╕╨░╨╜╤В ╤Н╨║╤Б╨┐╨╛╤А╤В╨░ (`.clients__icon`, `.stages__arrow`); ╤А╨╡╨╜╨┤╨╡╤А╨╛╨╝ ╤Б╨╛╨▓╨┐╨░╨┤╨░╨╡╤В ╤Б A1 | clients, client-detail | 27 | `M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10` |
+| A3 | `icon-arrow-card` | ╨в╨░ ╨╢╨╡ ╤Б╤В╤А╨╡╨╗╨║╨░, ╨▓╨░╤А╨╕╨░╨╜╤В ╤Н╨║╤Б╨┐╨╛╤А╤В╨░ (`.catalog__arrow`, ╤Г ╨┐╤Г╤В╨╕ `opacity="0.5"`) | solutions | 6 | `M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4` |
+| A4 | `icon-arrow-card` | ╨в╨░ ╨╢╨╡ ╤Б╤В╤А╨╡╨╗╨║╨░, ╨▓╨░╤А╨╕╨░╨╜╤В ╤Н╨║╤Б╨┐╨╛╤А╤В╨░ (`.event-partners__icon`) | event-detail | 3 | `M0.639648 10.7598C0.521159 10.7598 0.420898 10.7347 0.338867 10.6846C0.261393 10` |
+| A5 | `logo-mark` | ╨б╨╜╨╡╨╢╨╕╨╜╨║╨░-╨╝╨░╤А╨║ ╨╗╨╛╨│╨╛╤В╨╕╨┐╨░: ╤Е╨╡╨┤╨╡╤А `.logo__mark` (222├Ч67, #1342F3) + ╤Д╤Г╤В╨╡╤А `.logo__icon` (64├Ч67, white; ╨╛╤Б╤В╨░╨╗╤М╨╜╤Л╨╡ 4 ╨┐╤Г╤В╨╕ ╤Д╤Г╤В╨╡╤А-╨╝╨░╤А╨║╨░ тАФ `<rect>`, ╨▓ ╨┐╨╛╨┤╤Б╤З╤С╤В ╨╜╨╡ ╨▓╤Е╨╛╨┤╤П╤В) | ╨▓╤Б╨╡ 15 | 30 | `M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.07` |
+| A6 | `logo-wordmark` | ╨С╤Г╨║╨▓╤Л/╨║╤Г╨▒╤Л ╨▓╨╛╤А╨┤╨╝╨░╤А╨║╨░ ┬лSoftSnow┬╗ ╤Е╨╡╨┤╨╡╤А╨░ (10 ╨┐╤Г╤В╨╡╨╣ ╨╛╨┤╨╜╨╛╨│╨╛ SVG 222├Ч67) | ╨▓╤Б╨╡ 15 | 10├Ч15=150 | ╤Б╨╝. ╤В╨░╨▒╨╗╨╕╤Ж╤Г A6 ╨╜╨╕╨╢╨╡ |
+| A7 | `icon-search` | ╨Ъ╨╜╨╛╨┐╨║╨░ ╨┐╨╛╨╕╤Б╨║╨░ ╨▓ ╤Е╨╡╨┤╨╡╤А╨╡ (`.btn--search`) | ╨▓╤Б╨╡ 15 | 15 | `M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994` |
+| A8 | `icon-rutube` | ╨б╨╛╤Ж╤Б╨╡╤В╤М Rutube: ╨║╤А╨░╤Б╨╜╤Л╨╣ ╨║╤А╤Г╨│ #ED143B + ╤В╤С╨╝╨╜╤Л╨╣ ╨╖╨╜╨░╨║ #100943 + ╨╝╨░╤Б╨║╨░-╨║╤А╤Г╨│ (3 ╨┐╤Г╤В╨╕ ╨╛╨┤╨╜╨╛╨│╨╛ SVG) ╨▓ ╤Д╤Г╤В╨╡╤А╨╡/hero-socials/contacts-map | ╨▓╤Б╨╡ 15 | 17+17+15=49 | `M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.95` / `M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152` / `M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40` |
+| A9 | `icon-vk` | ╨б╨╛╤Ж╤Б╨╡╤В╤М VK (#1F67F9, evenodd) | ╨▓╤Б╨╡ 15 | 17 | `M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8` |
+| A10 | `icon-quote` | ╨Ъ╨░╨▓╤Л╤З╨║╨░ ╨╛╤В╨╖╤Л╨▓╨░ (`.testimonials__quote`, #1342F3) | about, article-detail, client-detail, solution-detail, vuz | 17 | `M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20` |
+| A11 | `icon-play` | ╨Ъ╨╜╨╛╨┐╨║╨░ play ╨▓╨╕╨┤╨╡╨╛ (`.video__play`, ╨▒╨╡╨╗╤Л╨╣) | about, article-detail, project-detail | 3 | `M74.7826 36.9877C77.1014 38.3265 77.1014 41.6735 74.7826 43.0123L25.2174 71.6288` |
+| A12 | `icon-download` | ╨Ш╨║╨╛╨╜╨║╨░ ┬л╤Б╨║╨░╤З╨░╤В╤М┬╗ ╨▓ ╨║╨╜╨╛╨┐╨║╨╡ (about hero, event-detail `.program__download`) | about, event-detail | 2 | `M0.75 14.75H12.75M6.75 0.75V10.75M3.25 7.25L6.75 10.75L10.25 7.25` |
+| тАФ | `existing-icon-arrow` / `-right` / `-left` / `-caret` | **╨г╨╢╨╡ ╤Б╨┐╤А╨░╨╣╤В** тАФ ╨╛╨┐╤А╨╡╨┤╨╡╨╗╨╡╨╜╨╕╤П `<symbol>` (╨┐╨╛ 1 ╨╜╨░ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Г), ╨Э╨Х ╨╖╨░╨╝╨╡╨╜╤П╤В╤М | ╨▓╤Б╨╡ 15 | 4├Ч15=60 | `M14.8975 7.17188тАж` / `M7.76367 13.6914тАж` / `M6.8457 13.6914тАж` / `M0.441406 0.441956тАж` |
+
+**╨б╤Г╨╝╨╝╤Л:** ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓ ╨▓╤Б╨╡╨│╨╛ 439; ╨▓ ╨╖╨╛╨╜╨╡ ╨╖╨░╨╝╨╡╨╜╤Л (╨▒╨╡╨╖ existing- defs) **379**: arrow-card 96, logo-mark 30, logo-wordmark 150, search 15, rutube 49, vk 17, quote 17, play 3, download 2.
+
+### A6 ╨┤╨╡╤В╨░╨╗╤М╨╜╨╛: 10 ╨┐╤Г╤В╨╡╨╣ ╨▓╨╛╤А╨┤╨╝╨░╤А╨║╨░ `logo-wordmark` (╨║╨░╨╢╨┤╤Л╨╣ 15├Ч, ╨▓╤Б╨╡ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л)
+
+| ╨Ъ╨╗╤О╤З (╨┐╨╡╤А╨▓╤Л╨╡ 80 ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓ `d`) |
+|---|
+| `M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65` |
+| `M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448` |
+| `M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947` |
+| `M108.189 23.1135V32.9494H105.302V23.1135H108.189Z` |
+| `M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711` |
+| `M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z` |
+| `M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26` |
+| `M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V` |
+| `M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.` |
+| `M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139` |
+
+╨Я╤А╨╕╨╝╨╡╤З╨░╨╜╨╕╤П ╨┤╨╗╤П Task 2:
+1. A1тАУA4 ╨┐╤А╨╛╨▓╨╡╤А╨╡╨╜╤Л ╤А╨╡╨╜╨┤╨╡╤А╨╛╨╝ тАФ ╨▓╨╕╨╖╤Г╨░╨╗╤М╨╜╨╛ ╨╛╨┤╨╕╨╜ ╨│╨╗╨╕╤Д (╤Б╤В╤А╨╡╨╗╨║╨░ ╨▓╨┐╤А╨░╨▓╨╛ ╤Б ╨╕╨╖╨╛╨│╨╜╤Г╤В╤Л╨╝ ╤Е╨▓╨╛╤Б╤В╨╛╨╝). ╨б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╡ ╤Б ╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╨╕╨╝ `#icon-arrow` (17├Ч14) ╨┐╨╛╨┐╨╕╨║╤Б╨╡╨╗╤М╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╨▓╨╡╤А╤П╨╗╨╛╤Б╤М тАФ ╨┐╤А╨╕ ╨╖╨░╨╝╨╡╨╜╨╡ ╨╝╨╛╨╢╨╜╨╛ ╤А╨░╤Б╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╤Б╨▓╨╡╨┤╨╡╨╜╨╕╨╡ ╨║ ╨╜╨╡╨╝╤Г, ╨╕╨╜╨░╤З╨╡ ╨╜╨╛╨▓╤Л╨╣ `#icon-arrow-card` 13├Ч11.
+2. `logo-mark`/`logo-wordmark`: ╤Е╨╡╨┤╨╡╤А ╤Б╨╕╨╜╨╕╨╣ (#1342F3), ╤Д╤Г╤В╨╡╤А ╨▒╨╡╨╗╤Л╨╣ тАФ ╤Б╨╕╨╝╨▓╨╛╨╗ ╤Б╨╛╨▒╨╕╤А╨░╤В╤М ╨╜╨░ `currentColor` (╤Г ╨┐╤Г╤В╨╡╨╣ ╨╡╤Б╤В╤М ╨╕ `stroke`).
+3. `icon-rutube` тАФ ╨╛╨┤╨╕╨╜ SVG ╨╕╨╖ 3 ╨┐╤Г╤В╨╡╨╣ + ╨╝╨░╤Б╨║╨░; ╨╝╨╡╨╜╤П╤В╤М ╨▓╨╡╤Б╤М ╨▒╨╗╨╛╨║ ╤Ж╨╡╨╗╨╕╨║╨╛╨╝ ╨╜╨░ `<use>`. ╨г 2 ┬л╨╗╨╕╤И╨╜╨╕╤Е┬╗ ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓ (17 vs 15) ╨╝╨░╤Б╨║╨░-╨║╤А╤Г╨│ ╨╝╨╛╨╢╨╡╤В ╨╛╤В╤Б╤Г╤В╤Б╤В╨▓╨╛╨▓╨░╤В╤М (╤Г╨┐╤А╨╛╤Й╤С╨╜╨╜╤Л╨╣ SVG ╨▓ hero-socials/contacts-map).
+4. ╨Ю╨┤╨╕╨╜╨╛╤З╨╜╤Л╨╡ ╨┐╤Г╤В╨╕ (22 ╤И╤В., 1 ╨▓╤Е╨╛╨╢╨┤╨╡╨╜╨╕╨╡) ╨▓ ╤Б╨┐╤А╨░╨╣╤В ╨╜╨╡ ╨▓╨║╨╗╤О╤З╨╡╨╜╤Л.
+5. ╨Ю╤В╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ ╨╛╤В ╨┐╨╗╨░╨╜╨░: ╨╛╨╢╨╕╨┤╨░╨╗╨╛╤Б╤М тЙИ426 ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓, ╨╕╨╖╨╝╨╡╤А╨╡╨╜╨╛ 439 (╨▓ ╨╖╨╛╨╜╤Г ╨╖╨░╨╝╨╡╨╜╤Л 379). ╨а╨░╨╖╨╗╨╛╨╢╨╡╨╜╨╕╨╡ ╤Б╤Г╨╝╨╝ ╤Б╤Е╨╛╨┤╨╕╤В╤Б╤П ╤В╨╛╤З╨╜╨╛ ╨┤╨╛ ╨╕╨╜╤Б╤В╨░╨╜╤Б╨░; ╤А╨░╤Б╤Е╨╛╨╢╨┤╨╡╨╜╨╕╨╡ ╤Б ╨╛╤Ж╨╡╨╜╨║╨╛╨╣ ╨┐╨╗╨░╨╜╨░ тАФ ╨╝╨╡╤В╨╛╨┤╨╕╨║╨░ ╨┐╨╛╨┤╤Б╤З╤С╤В╨░ (╨│╤А╨░╨╜╨╕╤Ж╨░ 40/60/80 ╤Б╨╕╨╝╨▓╨╛╨╗╨╛╨▓, ╤Г╤З╤С╤В symbol-defs), ╨╜╨░ ╤А╨╡╤И╨╡╨╜╨╕╤П ╨╖╨░╨┤╨░╤З ╨╜╨╡ ╨▓╨╗╨╕╤П╨╡╤В.
+
+---
+
+## ╨а╨Х╨Х╨б╨в╨а-B ┬л╨Ф╤Г╨▒╨╗╨╕ ╨┤╨╡╨║╨╗╨░╤А╨░╤Ж╨╕╨╣┬╗ тАФ ╨▓╤Б╨╡ 71 ╨│╤А╤Г╨┐╨┐╨░
+
+╨Ш╤Б╤В╨╛╤З╨╜╨╕╨║: `css-rules.xml` (╨┐╤А╨░╨▓╨╕╨╗╨░ ╨▓╨╜╨╡ @media), ╨┐╨╛╨╗╨╜╨░╤П ╨│╤А╤Г╨┐╨┐╨╕╤А╨╛╨▓╨║╨░. ╨Ъ╤А╨╕╤В╨╡╤А╨╕╨╣ merge тАФ ╨╛╨┤╨╕╨╜╨░╨║╨╛╨▓╤Л╨╣ ╨╕╨╜╤В╨╡╨╜╤В (╨▒╤А╨╡╨╜╨┤-hover, ╤А╨╕╤В╨╝ ╤Б╨╡╨║╤Ж╨╕╨╣, hidden-state, swiper-overflow, ╤В╨╕╨┐╨╛╨▓╤Л╨╡ ╤Ж╨▓╨╡╤В╨░, ╨╛╨┤╨╕╨╜╨░╨║╨╛╨▓╤Л╨╡ ╨┐╨░╤В╤В╨╡╤А╨╜╤Л ╨║╨░╤А╤В╨╛╤З╨╡╨║/╨┐╨░╨╜╨╡╨╗╨╡╨╣/╨│╤А╨╕╨┤). Skip тАФ ╤Б╨╗╤Г╤З╨░╨╣╨╜╤Л╨╡ ╤Б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╤П ╤В╨╡╨╗ ╤Г ╤А╨░╨╖╨╜╤Л╤Е ╨┐╨╛ ╤Б╨╝╤Л╤Б╨╗╤Г ╤Б╨╡╨╗╨╡╨║╤В╨╛╤А╨╛╨▓ ╨╕ keyframes.
+
+| ╨У╤А. | ├Ч | ╨з╨╗╨╡╨╜╤Л (╤Д╨░╨╣╨╗ тЖТ ╤Б╨╡╨╗╨╡╨║╤В╨╛╤А) | ╨Э╨╛╤А╨╝╨░╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╨╛╨╡ ╤В╨╡╨╗╨╛ | ╨Т╨╡╤А╨┤╨╕╨║╤В |
+|-----|---|--------------------------|----------------------|---------|
+| G01 | 20 | sections: .clients, .partners, .projects, .events, .cta, .page-hero--media.page-hero, .audience, .testimonials, .hero-vuz, .contacts-map, .article-about, .article-block; event-detail: .event-about, .seminar-topics, .event-partners; events: .events-featured, .events-list; solution-detail: .features; solutions: .catalog; univer-online: .services | `margin-bottom: 5rem` | **merge** тАФ ╤А╨╕╤В╨╝ ╤Б╨╡╨║╤Ж╨╕╨╣ |
+| G02 | 18 | sections: .partners__card:hover, .projects__reset:hover, .dropdown__trigger:hover, .events__card:hover .events__info, .tab-filter.is-active, .stages__card:hover, .vnedrenie__card:hover; components: .btn--outline:hover, .btn--ghost:hover, .btn--black:hover, .carousel-nav__btn:hover, .tabs__btn.is-active; utilities: ::selection; clients: .tab-filter:hover, .clients__card:hover; event-detail: .audience__card--accent:hover, .event-partners__card:hover; index: .industries__card--cta:hover | `background: var(--color-sea);color: var(--color-white)` | **merge** тАФ ╨▒╤А╨╡╨╜╨┤-hover/active |
+| G03 | 17 | sections: .projects__card[hidden], .projects__chips:empty, .projects__reset.is-hidden, .dropdown__trigger::-webkit-details-marker, .dropdown__count.is-hidden, .events__card[hidden], (.industries__cta,.projects__cta,.events__cta,.registry__stats); components: .modal-form__success.is-hidden; events: .events-list__more[hidden]; index: .events__card--blue::after; project-detail: .goals__results--m, .arch__img--mobile; projects: .projects__filters-toggle, (.projects__filters-head,.projects__apply), .projects__more[hidden]; solution-detail: .hero__footer--stats::after; solutions: .catalog__plus | `display: none` | **merge** тАФ hidden-state |
+| G04 | 12 | sections: .tasks__item:hover .tasks__link, .projects__card:hover/:focus-visible (.projects__name/.projects__text/.projects__year), .events__card:hover .events__date, .footer__contacts a, .cta--blue, .events__card--blue .events__title, .vnedrenie__card:hover .vnedrenie__done; clients: .clients__card:hover .clients__desc; index: .industries__card:not(тАУcta):hover (+ .industries__text), .industries__card--cta:hover (.industries__title,.industries__arrow); solutions: .catalog__card:hover (.catalog__head,.catalog__feat,.catalog__arrow) | `color: var(--color-white)` | **merge** тАФ ╨▒╨╡╨╗╤Л╨╣ ╤В╨╡╨║╤Б╤В |
+| G05 | 9 | sections: .header__link:hover, .header__dropdown-link:hover, .hero__brand, (.projects__chip:hover, .projects__chip:hover .projects__chip-x), .header__link.is-active, .faq__q:hover; components: .breadcrumb a:hover; about: .approach__text span; index: .industries__card--cta .industries__arrow | `color: var(--color-sea)` | **merge** тАФ ╨░╨║╤Ж╨╡╨╜╤В╨╜╤Л╨╣ ╤Ж╨▓╨╡╤В |
+| G06 | 6 | sections: .partners__swiper, .projects__swiper, .events__swiper, .testimonials__swiper, .gallery__swiper; about: .facts__swiper | `overflow: visible` | **merge** тАФ swiper-overflow |
+| G07 | 5 | sections: .testimonials__role; event-detail: .program__speaker-role, .seminar-topics_header .seminar-topics__num; solution-detail: .hero__label; solutions: .catalog__feat | `font-size: var(--fs-body-16)` | **merge** тАФ ╤В╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ 16 |
+| G08 | 5 | sections: .logo__mark, .header__dropdown, .dropdown; components: .form-field; solution-detail: .features-popup__media | `position: relative` | **merge** тАФ ╨║╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А ╨┐╨╛╨╖╨╕╤Ж╨╕╨╛╨╜╨╕╤А╨╛╨▓╨░╨╜╨╕╤П |
+| G09 | 5 | sections: .events__card:hover .events__arrow, .stages__card:hover .stages__arrow; clients: .clients__card:hover .clients__icon; event-detail: .audience__card--accent:hover svg, .event-partners__card:hover .event-partners__icon | `fill: var(--color-white)` | **merge** тАФ ╨╕╨║╨╛╨╜╨║╨░ ╨╜╨░ hover |
+| G10 | 5 | sections: .client-intro, .goals, .video, .gallery; client-detail: .client-quote | `color: var(--color-black);margin-bottom: 5rem` | **merge** тАФ ╤Б╨╡╨║╤Ж╨╕╨╛╨╜╨╜╤Л╨╣ ╤А╨╕╤В╨╝ |
+| G11 | 5 | sections: .team__inner; event-detail: .program__speaker-info; project-detail: .impl__stages li; solution-detail: .registry__bottom; univer-online: .univer-registry__bottom | `display: flex;flex-direction: column;gap: 0.625rem` | **merge** тАФ ╨▓╨╡╤А╤В╨╕╨║╨░╨╗╤М╨╜╤Л╨╣ ╤Б╤В╨╡╨║ |
+| G12 | 4 | sections: .testimonials__name; event-detail: .event-about__date-time, .program__speaker-name; solution-detail: .features__demo-title | `font-size: var(--fs-body-20);font-weight: 500` | **merge** тАФ ╨┐╨╛╨┤╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ 20/500 |
+| G13 | 3 | clients: .clients__more; events: .events-list__more; projects: .projects__more | `display: flex;justify-content: center;margin-top: 2.5rem` | **merge** тАФ ╨║╨╜╨╛╨┐╨║╨░ ┬л╨╡╤Й╤С┬╗ |
+| G14 | 3 | sections: .vnedrenie__card:hover .vnedrenie__btn; components: .btn--outline-white:hover; index: .industries__card--cta | `background: var(--color-white);color: var(--color-sea)` | **merge** тАФ ╨╕╨╜╨▓╨╡╤А╤Б╨╜╤Л╨╣ ╨▒╤А╨╡╨╜╨┤ |
+| G15 | 3 | sections: .vnedrenie; directum: .projects--eco, .cta--directum | `margin-top: 0.625rem` | **skip** тАФ ╤Б╨╗╤Г╤З╨░╨╣╨╜╨╛╨╡ ╤Б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╡ |
+| G16 | 3 | sections: .dropdown__check:focus-visible; components: .form-check__input:focus-visible + .form-check__box; utilities: :focus-visible | `outline: 2px solid var(--color-sea);outline-offset: 2px` | **merge** тАФ focus-ring |
+| G17 | 3 | sections: .article-block__text p, .article-block__quote blockquote p, .article-block__lead | `font-size: var(--fs-body-20);line-height: 1.4` | **merge** тАФ ╤В╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ ╤Б╤В╨░╤В╤М╨╕ |
+| G18 | 3 | sections: .faq__inner, .gallery__inner; client-detail: .client-quote__inner | `background: var(--color-white);border-radius: var(--radius-lg);padding: 1.875rem 2.5rem` | **merge** тАФ ╨▒╨╡╨╗╨░╤П ╨┐╨░╨╜╨╡╨╗╤М |
+| G19 | 3 | sections: .audience__grid; clients: .clients__grid; events: .events-list__grid | `display: grid;gap: var(--gap-sm);grid-template-columns: repeat(4, 1fr);justify-content: center` | **merge** тАФ ╨│╤А╨╕╨┤ 4 ╨║╨╛╨╗╨╛╨╜╨║╨╕ |
+| G20 | 3 | components: .carousel-nav; event-detail: .event-partners__grid; events: .hero-socials | `display: flex;gap: var(--gap-sm)` | **skip** тАФ ╤Б╨╗╨╕╤И╨║╨╛╨╝ ╨╛╨▒╤Й╨╕╨╣ |
+| G21 | 3 | sections: .client-intro__media img, (.article-about__img, .article-block__img); client-detail: .client-quote__photo | `border-radius: var(--radius-lg);height: 35rem;object-fit: cover;width: 100%` | **merge** тАФ ╨║╤А╤Г╨┐╨╜╨╛╨╡ ╤Д╨╛╤В╨╛ |
+| G22 | 3 | sections: .dropdown__caret path, .audience__card--accent .audience__name; components: .btn svg | `transition: all 0.4s` | **merge** тАФ ╨┤╨▓╨╕╨╢╨╡╨╜╨╕╨╡ 0.4s (╨╖╨░╨╛╨┤╨╜╨╛ ╤А╨░╤Б╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╖╨░╨╝╨╡╨╜╤Г `all` ╨╜╨░ ╨║╨╛╨╜╨║╤А╨╡╤В╨╜╤Л╨╡ ╤Б╨▓╨╛╨╣╤Б╤В╨▓╨░) |
+| G23 | 3 | sections: .logo__icon; components: .modal-form.is-open; utilities: svg | `display: block` | **skip** тАФ ╤А╨░╨╖╨╜╤Л╨╡ ╨╕╨╜╤В╨╡╨╜╤В╤Л (svg-reset vs ╨╝╨╛╨┤╨░╨╗╨║╨░) |
+| G24 | 3 | sections: .tasks__item + .tasks__item, .faq__list, .faq__item + .faq__item | `border-top: 1px solid var(--bg-border)` | **merge** тАФ ╤Б╨╡╨┐╨░╤А╨░╤В╨╛╤А ╤Б╨┐╨╕╤Б╨║╨░ |
+| G25 | 3 | sections: (.header__dropdown:hover/:focus-within .header__caret), .dropdown[open] .dropdown__caret, .faq__item.is-open .faq__icon | `transform: rotate(180deg)` | **merge** тАФ ╨╛╤В╨║╤А╤Л╤В╨░╤П ╨║╨░╤А╨╡╤В╨║╨░ |
+| G26 | 3 | sections: .tasks-lists-section (.tasks__bg hover/::after); index: .industries__card:not(тАУcta):hover (.industries__bg/::after); solutions: .catalog__card:hover .catalog__arrow path | `opacity: 1` | **merge** тАФ reveal ╨╜╨░ hover |
+| G27 | 3 | sections: .projects__heading; utilities: h2; about: .team__heading | `font-size: var(--fs-h2);letter-spacing: -0.07em` | **merge** тАФ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ H2 |
+| G28 | 3 | sections: .tasks__arrow; event-detail: .program__download; solution-detail: .features__dot | `flex-shrink: 0` | **skip** тАФ ╤Б╨╗╨╕╤И╨║╨╛╨╝ ╨╛╨▒╤Й╨╕╨╣ |
+| G29 | 2 | sections: .contacts-banner__avatar; event-detail: .program__avatar | `border-radius: 50%;height: 8.125rem;object-fit: cover;width: 8.125rem` | **merge** тАФ ╨░╨▓╨░╤В╨░╤А |
+| G30 | 2 | sections: .article-about__inner, .article-block__inner | `background: var(--color-white);border-radius: var(--radius-lg);display: grid;gap: 0.625rem;grid-template-columns: 1fr 1fr;padding: 2.5rem` | **merge** тАФ ╨║╨░╤А╤В╨╛╤З╨║╨░ ╤Б╤В╨░╤В╤М╨╕ |
+| G31 | 2 | solution-detail: .registry__title; univer-online: .univer-registry__title | `font-size: var(--fs-h3);letter-spacing: -0.05em;margin-bottom: 1.875rem;max-width: 23.125rem` | **merge** тАФ ╨▒╨╗╨╕╨╖╨╜╨╡╤Ж╤Л ╤Б╤В╤А╨░╨╜╨╕╤Ж |
+| G32 | 2 | solution-detail: .registry__desc; univer-online: .univer-registry__desc | `font-size: var(--fs-body-16);max-width: 37.5rem` | **merge** тАФ ╨▒╨╗╨╕╨╖╨╜╨╡╤Ж╤Л ╤Б╤В╤А╨░╨╜╨╕╤Ж |
+| G33 | 2 | sections: .vnedrenie--univer .vnedrenie__sub; solution-detail: .features__demo-sub | `font-size: var(--fs-body-14)` | **merge** тАФ ╤В╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ 14 |
+| G34 | 2 | directum: .partners--eco .partners__grid; univer-online: .services__grid | `display: grid;gap: 0.625rem;grid-template-columns: repeat(4, 1fr)` | **merge** тАФ ╨│╤А╨╕╨┤ 4 ╨║╨╛╨╗╨╛╨╜╨║╨╕ |
+| G35 | 2 | sections: .team__flex; projects: .projects__grid | `display: grid;gap: 0.625rem;grid-template-columns: repeat(2, 1fr)` | **merge** тАФ ╨│╤А╨╕╨┤ 2 ╨║╨╛╨╗╨╛╨╜╨║╨╕ |
+| G36 | 2 | sections: .team; vuz: .ecosystem | `margin-bottom: 5rem;margin-top: 5rem` | **merge** тАФ ╤Б╨╡╨║╤Ж╨╕╨╛╨╜╨╜╤Л╨╣ ╤А╨╕╤В╨╝ |
+| G37 | 2 | solution-detail: .registry__inner-block; univer-online: .univer-registry__inner-block | `height: 100%;max-width: 100%` | **merge** тАФ ╨▒╨╗╨╕╨╖╨╜╨╡╤Ж╤Л ╤Б╤В╤А╨░╨╜╨╕╤Ж |
+| G38 | 2 | components: .btn--outline-dark:hover, .btn--black | `background: var(--color-black);color: var(--color-white)` | **merge** тАФ ╤З╤С╤А╨╜╨░╤П ╨║╨╜╨╛╨┐╨║╨░ |
+| G39 | 2 | event-detail: .program__row; solution-detail: .features__body | `align-items: stretch;display: flex;gap: var(--gap-sm)` | **merge** тАФ ╤Б╤В╤А╨╛╨║╨░-╤А╤П╨┤ |
+| G40 | 2 | event-detail: .event-about__title, .program__title | `font-size: var(--fs-h2);font-weight: 500` | **merge** тАФ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л |
+| G41 | 2 | event-detail: .event-about__date-num; solution-detail: .hero__num | `color: var(--color-sea);font-size: var(--fs-h3);font-weight: 500` | **merge** тАФ ╨║╤А╤Г╨┐╨╜╨░╤П ╤Ж╨╕╤Д╤А╨░ |
+| G42 | 2 | components: .breadcrumb__current, .tabs__btn:hover | `color: var(--color-black)` | **merge** тАФ ╤З╤С╤А╨╜╤Л╨╣ ╤В╨╡╨║╤Б╤В-╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╨╡ |
+| G43 | 2 | components: .modal-form__fields, .modal-form__checks | `display: flex;flex-direction: column;gap: 0.625rem;margin-bottom: var(--gap-2xl)` | **merge** тАФ ╤Д╨╛╤А╨╝╨░ ╨╝╨╛╨┤╨░╨╗╨║╨╕ |
+| G44 | 2 | event-detail: .seminar-topics__title, .event-partners__title | `font-size: var(--fs-h2);font-weight: 500;margin-bottom: 3.125rem` | **merge** тАФ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤Б╨╡╨║╤Ж╨╕╨╕ |
+| G45 | 2 | components: .breadcrumb a, .breadcrumb__sep | `color: var(--color-grey)` | **merge** тАФ ╤Б╨╡╤А╤Л╨╣ ╤В╨╡╨║╤Б╤В |
+| G46 | 2 | components: .form-check__text; client-detail: .stages__text | `color: var(--color-black);font-size: var(--fs-body-16)` | **merge** тАФ ╤В╨╡╨║╤Б╤В 16 ╤З╤С╤А╨╜╤Л╨╣ |
+| G47 | 2 | sections: .reasons__title; univer-online: .services__title | `font-size: var(--fs-h2);font-weight: 500;letter-spacing: -0.07em` | **merge** тАФ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ H2 |
+| G48 | 2 | sections: .dropdown__trigger:hover svg path; components: .btn--outline:hover svg | `stroke: var(--color-white)` | **merge** тАФ stroke ╨╜╨░ hover |
+| G49 | 2 | sections: .projects__arrow path; solutions: .catalog__arrow path | `fill: currentColor` | **merge** тАФ ╤Б╤В╤А╨╡╨╗╨║╨░ currentColor |
+| G50 | 2 | sections: .clients__marquee; utilities: section | `overflow: hidden` | **skip** тАФ ╤А╨░╨╖╨╜╤Л╨╣ ╨╕╨╜╤В╨╡╨╜╤В (╨╝╨░╤Б╨║╨░ vs ╨▒╨░╨╖╨░) |
+| G51 | 2 | sections: .events__card--wide; solution-detail: .features__panels | `width: 100%` | **skip** тАФ ╤Б╨╗╨╕╤И╨║╨╛╨╝ ╨╛╨▒╤Й╨╕╨╣ |
+| G52 | 2 | sections: `to`, `to` (╨║╨░╨┤╤А╤Л @keyframes) | `opacity: 1;transform: none` | **skip** тАФ keyframes, ╨╜╨╡ ╨┤╤Г╨▒╨╗╨╕ ╨┐╤А╨░╨▓╨╕╨╗ |
+| G53 | 2 | sections: .dropdown__check:checked; components: .form-check__input:checked + .form-check__box | `background: var(--color-sea);border-color: var(--color-sea)` | **merge** тАФ checked-╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╨╡ |
+| G54 | 2 | sections: .tasks__inner; clients: .clients__card:hover .clients__logo | `background: var(--color-white)` | **skip** тАФ ╤Б╨╗╤Г╤З╨░╨╣╨╜╨╛╨╡ ╤Б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╡ |
+| G55 | 2 | sections: .stats__heading, .clients__heading | `font-size: var(--fs-h3);margin-bottom: 3.125rem;text-align: center` | **merge** тАФ ╨┐╨╛╨┤╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤Б╨╡╨║╤Ж╨╕╨╕ |
+| G56 | 2 | sections: .hero .flex, .client-intro__content | `display: flex;flex-direction: column;height: 100%` | **merge** тАФ ╤А╨░╤Б╤В╤П╨╜╤Г╤В╨░╤П ╨║╨╛╨╗╨╛╨╜╨║╨░ |
+| G57 | 2 | sections: .tasks__item.is-open .tasks__a, .faq__item.is-open .faq__a | `grid-template-rows: 1fr` | **merge** тАФ ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜ ╨╛╤В╨║╤А╤Л╤В |
+| G58 | 2 | sections: .tasks__item.is-open .tasks__icon--minus; solution-detail: .tasks__icon--plus | `opacity: 1;transform: rotate(0deg)` | **merge** тАФ ╨╕╨║╨╛╨╜╨║╨░ ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜╨░ |
+| G59 | 2 | sections: .tasks-lists-section .tasks, .article-block__quote | `margin: 0` | **skip** тАФ generic reset |
+| G60 | 2 | sections: .video__title, .gallery__title | `font-size: var(--fs-h2);font-weight: 500;line-height: 1` | **merge** тАФ ╨╝╨╡╨┤╨╕╨░-╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ |
+| G61 | 2 | sections: .video__inner; events: .events-featured__panel | `background: var(--color-white);border-radius: var(--radius-lg);padding: 1.875rem 2.5rem 2.5rem` | **merge** тАФ ╨▒╨╡╨╗╨░╤П ╨┐╨░╨╜╨╡╨╗╤М |
+| G62 | 2 | sections: .goals__item; event-detail: .program__speaker | `align-items: center;display: flex;gap: var(--gap-lg)` | **merge** тАФ ╤Б╤В╤А╨╛╨║╨░ ╤Б ╨╕╨║╨╛╨╜╨║╨╛╨╣ |
+| G63 | 2 | sections: .reasons; index: .industries | `margin-bottom: 7.5rem` | **merge** тАФ ╤Б╨╡╨║╤Ж╨╕╨╛╨╜╨╜╤Л╨╣ ╤А╨╕╤В╨╝ |
+| G64 | 2 | sections: .gallery__dot.is-active; index: .events__card--blue | `background: #1342f3` | **merge** тАФ ╨▒╤А╨╡╨╜╨┤-╤Б╨╕╨╜╨╕╨╣; тЪа ╨╖╨░╤Е╨░╤А╨┤╨║╨╛╨╢╨╡╨╜ тАФ ╨╖╨░╨╝╨╡╨╜╨╕╤В╤М ╨╜╨░ `var(--color-sea)` |
+| G65 | 2 | sections: .video__poster; events: .events-featured__media img | `height: 100%;object-fit: cover;width: 100%` | **merge** тАФ ╨╛╨▒╨╗╨╛╨╢╨║╨░ cover |
+| G66 | 2 | sections: .testimonials__quote, .page-hero | `margin-bottom: 2.5rem` | **skip** тАФ ╨╕╨║╨╛╨╜╨║╨░ vs ╤Б╨╡╨║╤Ж╨╕╤П, ╤Б╨╗╤Г╤З╨░╨╣╨╜╨╛╨╡ ╤Б╨╛╨▓╨┐╨░╨┤╨╡╨╜╨╕╨╡ |
+| G67 | 2 | sections: .audience__name; event-detail: .seminar-topics__name | `font-size: var(--fs-h3);max-width: 23.75rem` | **merge** тАФ ╨╜╨░╨╖╨▓╨░╨╜╨╕╨╡ ╨║╨░╤А╤В╨╛╤З╨║╨╕ |
+| G68 | 2 | sections: .audience__title, .faq__title | `font-size: var(--fs-h2);margin-bottom: 3.125rem` | **merge** тАФ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤Б╨╡╨║╤Ж╨╕╨╕ |
+| G69 | 2 | sections: (.program__item:hover, .program__item.is-active); components: .btn--white:hover | `background: var(--color-sea);border-color: var(--color-sea);color: var(--color-white)` | **merge** тАФ ╨▒╤А╨╡╨╜╨┤-hover ╤Б ╤А╨░╨╝╨║╨╛╨╣ |
+| G70 | 2 | sections: .client-intro__text, .article-about__content | `max-width: 40.9375rem` | **merge** тАФ ╤В╨╡╨║╤Б╤В╨╛╨▓╨░╤П ╨║╨╛╨╗╨╛╨╜╨║╨░ |
+| G71 | 2 | sections: .faq__a > p; solution-detail: .tasks__a > p | `color: var(--grey, #222222B2);margin: 0;min-height: 0;overflow: hidden;transition: all 0.4s` | **merge** тАФ ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜-╨╛╤В╨▓╨╡╤В |
+
+**╨Ш╤В╨╛╨│: 71 ╨│╤А╤Г╨┐╨┐╨░. Merge: 61 (160 ╨╗╨╕╤И╨╜╨╕╤Е ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓). Skip: 10 тАФ G15, G20, G23, G28, G50, G51, G52, G54, G59, G66 (14 ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓).**
+
+---
+
+## ╨а╨Х╨Х╨б╨в╨а-C ┬л╨Т╨╡╨╜╨┤╨╛╤А╤Л┬╗ тАФ ╨╝╨░╤В╤А╨╕╤Ж╨░ ╨┐╨╛╨┤╨║╨╗╤О╤З╨╡╨╜╨╕╨╣ per page
+
+`Sw-╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡` = ╤В╨╛╨║╨╡╨╜╤Л `swiper`/`swiper-*`/`__swiper` ╨▓ ╤А╨░╨╖╨╝╨╡╤В╨║╨╡ (╨║╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А╤Л/╨╛╨▒╤С╤А╤В╨║╨╕/╤Б╨╗╨░╨╣╨┤╤Л). `Fb` = fancybox css+js. `FbAttr` = `data-fancybox`.
+
+| ╨б╤В╤А╨░╨╜╨╕╤Ж╨░ | Swiper css | Sw-╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╨╡ | Fancybox css/js | FbAttr | .video | .gallery | ╨Т╨╡╤А╨┤╨╕╨║╤В |
+|---|---|---|---|---|---|---|---|
+| about.html | + | 17 | + / + | 0 | 1 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| article-detail.html | + | 12 | + / + | 0 | 1 | 1 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| client-detail.html | + | 6 | тАУ | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М (Fancybox ╨╕ ╤В╨░╨║ ╨╜╨╡╤В) |
+| clients.html | + | 8 | тАУ | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| **contacts.html** | **+** | **0** | **+ / +** | 0 | 0 | 0 | **╤Б╨╜╤П╤В╤М Swiper ╨╕ Fancybox (css+js)** |
+| directum.html | + | 5 | тАУ | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| **event-detail.html** | **+** | **0** | тАУ | 0 | 0 | 0 | **╤Б╨╜╤П╤В╤М Swiper** |
+| events.html | + | 4 | тАУ | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| index.html | + | 21 | + / + | 2 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М (╨┐╨╛╨┐╨░╨┐ ╤Д╨╛╤А╨╝╤Л) |
+| project-detail.html | + | 12 | + / + | 0 | 1 | 1 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| projects.html | тАУ | 0 | тАУ | 0 | 0 | 0 | ╨╛╨║ (╤Г╨╢╨╡ ╤З╨╕╤Б╤В╨╛) |
+| solution-detail.html | + | 21 | + / + | 1 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М (╨┐╨╛╨┐╨░╨┐ ╤Д╨╛╤А╨╝╤Л) |
+| **solutions.html** | **+** | **0** | тАУ | **1** | 0 | 0 | **╤Б╨╜╤П╤В╤М Swiper; ╤Г╨┤╨░╨╗╨╕╤В╤М ╨╛╤Б╨╕╤А╨╛╤В╨╡╨▓╤И╨╕╨╣ `data-fancybox`+`data-src` ╤Г ╨║╨╜╨╛╨┐╨║╨╕ (╨▒╨╕╨▒╨╗╨╕╨╛╤В╨╡╨║╨░ ╨╜╨╡ ╨┐╨╛╨┤╨║╨╗╤О╤З╨╡╨╜╨░ тАФ ╨║╨╜╨╛╨┐╨║╨░ ╨╝╨╡╤А╤В╨▓╨░)** |
+| univer-online.html | + | 5 | тАУ | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М |
+| vuz.html | + | 28 | тАУ / **+ (js ╨▒╨╡╨╖ css)** | 0 | 0 | 0 | ╨╜╨╡ ╤В╤А╨╛╨│╨░╤В╤М; тЪа ╨╜╨░╤Е╨╛╨┤╨║╨░ ╨▓╨╜╨╡ ╤Б╨║╨╛╤Г╨┐╨░: `fancybox.umd.js` ╨┐╨╛╨┤╨║╨╗╤О╤З╤С╨╜, ╨╜╨╛ ╨╜╨╕ ╨╛╨┤╨╜╨╛╨│╨╛ ╨╝╨░╤А╨║╨╡╤А╨░ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╤П ╨╜╨╡╤В тАФ ╨║╨░╨╜╨┤╨╕╨┤╨░╤В ╨╜╨░ ╤Б╨╜╤П╤В╨╕╨╡ ╨▓ ╨╛╤В╨┤╨╡╨╗╤М╨╜╨╛╨╣ ╨╖╨░╨┤╨░╤З╨╡ |
+
+╨Ю╨╢╨╕╨┤╨░╨╜╨╕╤П ╨┐╨╗╨░╨╜╨░ ╨┐╨╛╨┤╤В╨▓╨╡╤А╨╢╨┤╨╡╨╜╤Л: Swiper ╨╜╨╡ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╡╤В╤Б╤П ╨╜╨░ contacts / event-detail / solutions / projects (╨╜╨░ projects ╤Г╨╢╨╡ ╤Б╨╜╤П╤В); contacts тАФ ╨╡╨┤╨╕╨╜╤Б╤В╨▓╨╡╨╜╨╜╨░╤П ╤Б╤В╤А╨░╨╜╨╕╤Ж╨░ ╤Б Fancybox ╨▒╨╡╨╖ ╨╝╨░╤А╨║╨╡╤А╨╛╨▓ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╤П; solutions.html ╤Б╨╛╨┤╨╡╤А╨╢╨╕╤В ╨╛╤Б╨╕╤А╨╛╤В╨╡╨▓╤И╨╕╨╣ `data-fancybox` (`<button class="btn btn--primary" data-fancybox data-src="#request-popup">`, ╨▒╨╕╨▒╨╗╨╕╨╛╤В╨╡╨║╨░ ╨╜╨╡ ╨┐╨╛╨┤╨║╨╗╤О╤З╨╡╨╜╨░).
+
+╨С╨╡╨╖╨╛╨┐╨░╤Б╨╜╨╛╤Б╤В╤М ╤Б╨╜╤П╤В╨╕╤П: `initSwiper` ╨▓ `js/main.js` ╨╕╤В╨╡╤А╨╕╤А╤Г╨╡╤В ╨┐╤Г╤Б╤В╨╛╨╣ NodeList, ╨╡╤Б╨╗╨╕ ╤А╨░╨╖╨╝╨╡╤В╨║╨╕ ╨╜╨╡╤В (`new Swiper` ╨╜╨╡ ╨▓╤Л╨╖╤Л╨▓╨░╨╡╤В╤Б╤П тЖТ ╨╜╨╡╤В ReferenceError ╨┐╤А╨╕ ╨╛╤В╤Б╤Г╤В╤Б╤В╨▓╨╕╨╕ ╨▒╨╕╨▒╨╗╨╕╨╛╤В╨╡╨║╨╕); Fancybox-╨▓╨╡╤В╨║╨╕ ╨▓ main.js ╨╖╨░╤Й╨╕╤Й╨╡╨╜╤Л `typeof Fancybox === 'undefined'`.
+
+---
+
+## ╨б╨░╨╝╨╛╨┐╤А╨╛╨▓╨╡╤А╨║╨░ (Task 1)
+
+- ╨а╨Х╨Х╨б╨в╨а-A: ╤Б╤Г╨╝╨╝╨░ ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓ ╨┐╨╛ ╨│╤А╤Г╨┐╨┐╨░╨╝ = 439 (60+30+27+17+17+17+17+15├Ч13+6+3+3+2 тАФ ╤Б╤Е╨╛╨┤╨╕╤В╤Б╤П ╤Б ╨╕╨╖╨╝╨╡╤А╨╡╨╜╨╕╨╡╨╝ ╤Б╨║╤А╨╕╨┐╤В╨░); ╨▓ ╨╖╨╛╨╜╨╡ ╨╖╨░╨╝╨╡╨╜╤Л 379 ╨┐╨╛╤Б╨╗╨╡ ╨╕╤Б╨║╨╗╤О╤З╨╡╨╜╨╕╤П 60 ╤Г╨╢╨╡-╤Б╨┐╤А╨░╨╣╤В╨╛╨▓╤Л╤Е symbol-defs. ╨Ю╨╢╨╕╨┤╨░╨╜╨╕╨╡ ╨┐╨╗╨░╨╜╨░ тЙИ426: ╨╛╤В╨║╨╗╨╛╨╜╨╡╨╜╨╕╨╡ +13 ╨╖╨░╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╕╤А╨╛╨▓╨░╨╜╨╛ (╨╝╨╡╤В╨╛╨┤╨╕╨║╨░ ╨┐╨╛╨┤╤Б╤З╤С╤В╨░), ╨╜╨░ ╨╖╨░╨┤╨░╤З╨╕ 2/7/8 ╨╜╨╡ ╨▓╨╗╨╕╤П╨╡╤В.
+- ╨а╨Х╨Х╨б╨в╨а-B: ╨│╤А╤Г╨┐╨┐ 71 (╤Б╨╛╨▓╨┐╨░╨┤╨░╨╡╤В ╤Б ╨░╤Г╨┤╨╕╤В╨╛╨╝), ╨╗╨╕╤И╨╜╨╕╤Е ╨╕╨╜╤Б╤В╨░╨╜╤Б╨╛╨▓ 174 (61 merge-╨│╤А╤Г╨┐╨┐╨░ тЖТ 160, 10 skip-╨│╤А╤Г╨┐╨┐ тЖТ 14; 160+14=174 тЬУ). ╨г ╨║╨░╨╢╨┤╨╛╨╣ merge-╨│╤А╤Г╨┐╨┐╤Л ╨┐╨╡╤А╨╡╤З╨╕╤Б╨╗╨╡╨╜╤Л ╨▓╤Б╨╡ ╤З╨╗╨╡╨╜╤Л.
+- ╨а╨Х╨Х╨б╨в╨а-C: ╨▓╤Б╨╡ 4 ╨╛╨╢╨╕╨┤╨░╨╜╨╕╤П ╨┐╨╗╨░╨╜╨░ ╨┐╨╛╨┤╤В╨▓╨╡╤А╨╢╨┤╨╡╨╜╤Л ╨╕╨╖╨╝╨╡╤А╨╡╨╜╨╕╤П╨╝╨╕; ╨┤╨╛╨┐╨╛╨╗╨╜╨╕╤В╨╡╨╗╤М╨╜╨╛ ╨╖╨░╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╕╤А╨╛╨▓╨░╨╜╤Л: vuz.html тАФ fancybox JS ╨▒╨╡╨╖ ╨╕╤Б╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╨╜╨╕╤П (╨▓╨╜╨╡ ╤Б╨║╨╛╤Г╨┐╨░), projects.html ╤Г╨╢╨╡ ╤З╨╕╤Б╤В.
+- ╨н╨║╤Б╨┐╨╛╤А╤В ╨┤╨╗╤П Task 2: `C:\Temp\opencode\sprite-inventory.xml` тАФ 49 ╨╛╨▒╤К╨╡╨║╤В╨╛╨▓ (27 ╨┐╨╛╨▓╤В╨╛╤А╤П╤О╤Й╨╕╤Е╤Б╤П ╤Б Id, 22 ╨╛╨┤╨╕╨╜╨╛╤З╨╜╤Л╤Е ╤Б Id=UNRESOLVED), `{Id, Pages, Count, PathPrefix}`, PathPrefix тАФ ╤Б╤Л╤А╨╛╨╣ ╤В╨╡╨║╤Б╤В ╨╕╨╖ HTML.
