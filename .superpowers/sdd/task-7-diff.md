8979736 refactor(css): group same-intent duplicate declarations
 css/sections.css | 968 ++++++++++++++++++-------------------------------------
 1 file changed, 319 insertions(+), 649 deletions(-)
diff --git a/css/sections.css b/css/sections.css
index 16f0e45..187fc03 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -21,9 +21,13 @@
   gap: 0.8125rem;
   flex-shrink: 0;
 }
 
-.logo__mark {
+/* ╨Ъ╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А ╨┐╨╛╨╖╨╕╤Ж╨╕╨╛╨╜╨╕╤А╨╛╨▓╨░╨╜╨╕╤П */
+.logo__mark,
+.header__dropdown,
+.dropdown,
+.features-popup__media {
   position: relative;
 }
 
 .logo__icon {
@@ -61,21 +65,30 @@
   /* ponytail: forced smooth rotation despite prefers-reduced-motion in utilities.css (explicit user request) */
   transition: all 0.4s;
 }
 
+/* ╨Ъ╨░╤А╨╡╤В╨║╨░ ╨╕╨╗╨╕ ╨╕╨║╨╛╨╜╨║╨░ ╨▓ ╨╛╤В╨║╤А╤Л╤В╨╛╨╝ ╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╨╕ */
 .header__dropdown:hover .header__caret,
-.header__dropdown:focus-within .header__caret {
+.header__dropdown:focus-within .header__caret,
+.dropdown[open] .dropdown__caret,
+.faq__item.is-open .faq__icon {
   transform: rotate(180deg);
 }
 
-.header__link:hover {
+/* ╨Р╨║╤Ж╨╡╨╜╤В╨╜╤Л╨╣ ╤Ж╨▓╨╡╤В ╤В╨╡╨║╤Б╤В╨░ */
+.header__link:hover,
+.header__dropdown-link:hover,
+.hero__brand,
+.projects__chip:hover,
+.projects__chip:hover .projects__chip-x,
+/* ============ Clients page ============ */
+.header__link.is-active,
+.faq__q:hover,
+.approach__text span,
+.industries__card--cta .industries__arrow {
   color: var(--color-sea);
 }
 
-.header__dropdown {
-  position: relative;
-}
-
 .header__dropdown::before {
   content: '';
   position: absolute;
   top: 100%;
@@ -119,12 +132,8 @@
   white-space: nowrap;
   transition: color 0.2s ease;
 }
 
-.header__dropdown-link:hover {
-  color: var(--color-sea);
-}
-
 .header__contacts {
   display: flex;
   align-items: center;
   gap: 0.625rem;
@@ -185,9 +194,12 @@
     border-radius: 0 0 1.25rem 1.25rem;
     background: var(--bg-light);
 
 }
-.hero .flex{
+/* ╨Ъ╨╛╨╗╨╛╨╜╨║╨░ ╨╜╨░ ╨▓╤Б╤О ╨▓╤Л╤Б╨╛╤В╤Г */
+.hero .flex,
+/* ============ Project detail page ============ */
+.client-intro__content {
     height: 100%;
     display: flex;
     flex-direction: column;
 }
@@ -200,12 +212,8 @@
     max-width: 61.25rem;
     margin-bottom: 2.8125rem;
 }
 
-.hero__brand {
-  color: var(--color-sea);
-}
-
 .hero__footer {
     position: relative;
     z-index: 1;
     padding: 2.5rem 2.5rem;
@@ -268,9 +276,11 @@
 .stats {
   padding-bottom: 7.5rem;
 }
 
-.stats__heading {
+/* ╨ж╨╡╨╜╤В╤А╨╕╤А╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╨┐╨╛╨┤╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╤Б╨╡╨║╤Ж╨╕╨╕ */
+.stats__heading,
+.clients__heading {
   font-size: var(--fs-h3);
   margin-bottom: 3.125rem;
   text-align: center;
 }
@@ -380,10 +390,13 @@
   pointer-events: none;
   z-index: 1;
 }
 
+/* Reveal-╤Н╤Д╤Д╨╡╨║╤В ╨╜╨░ hover */
 .tasks-lists-section .tasks__item:hover .tasks__bg,
-.tasks-lists-section .tasks__item:hover::after {
+.tasks-lists-section .tasks__item:hover::after,
+.industries__card:not(.industries__card--cta):hover .industries__bg,
+.industries__card:not(.industries__card--cta):hover::after {
   opacity: 1;
 }
 
 .tasks__link {
@@ -410,9 +423,30 @@
 .tasks__arrow {
   flex-shrink: 0;
 }
 
-.tasks__item:hover .tasks__link {
+/* ╨С╨╡╨╗╤Л╨╣ ╤В╨╡╨║╤Б╤В ╨╜╨░ ╤В╤С╨╝╨╜╨╛╨╝ ╨╕ hover */
+.tasks__item:hover .tasks__link,
+.projects__card:hover .projects__name,
+.projects__card:focus-visible .projects__name,
+.projects__card:hover .projects__text,
+.projects__card:focus-visible .projects__text,
+.projects__card:hover .projects__year,
+.projects__card:focus-visible .projects__year,
+.events__card:hover .events__date,
+.footer__contacts a,
+/* ============ CTA blue (╨г ╨▓╨░╤Б ╨┐╨╛╤Е╨╛╨╢╨░╤П ╨╖╨░╨┤╨░╤З╨░?) ============ */
+.cta--blue,
+.events__card--blue .events__title,
+.vnedrenie__card:hover .vnedrenie__done,
+.clients__card:hover .clients__desc,
+.industries__card:not(.industries__card--cta):hover,
+.industries__card:not(.industries__card--cta):hover .industries__text,
+.industries__card--cta:hover .industries__title,
+.industries__card--cta:hover .industries__arrow,
+.catalog__card:hover .catalog__head,
+.catalog__card:hover .catalog__feat,
+.catalog__card:hover .catalog__arrow {
   color: var(--color-white);
 }
 
 .tasks__footer {
@@ -442,9 +476,12 @@
     width: 100%;
     overflow: hidden;
 }
 
-.tasks__item + .tasks__item {
+/* ╨б╨╡╨┐╨░╤А╨░╤В╨╛╤А ╤Б╨┐╨╕╤Б╨║╨░ */
+.tasks__item + .tasks__item,
+.faq__list,
+.faq__item + .faq__item {
   border-top: 1px solid var(--bg-border);
 }
 
 /* tasks__icon--plus / --minus cross-fade when .tasks__item gets .is-open */
@@ -453,31 +490,64 @@
   opacity: 0;
   transform: rotate(90deg);
 }
 
-.tasks__item.is-open .tasks__icon--minus {
+/* ╨Ш╨║╨╛╨╜╨║╨░ ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜╨░ */
+.tasks__item.is-open .tasks__icon--minus,
+.tasks__icon--plus {
   opacity: 1;
   transform: rotate(0deg);
 }
 
-.tasks__item.is-open .tasks__a {
+/* ╨Р╨║╨║╨╛╤А╨┤╨╡╨╛╨╜ ╨╛╤В╨║╤А╤Л╤В */
+.tasks__item.is-open .tasks__a,
+.faq__item.is-open .faq__a {
   grid-template-rows: 1fr;
 }
 
 .tasks__item.is-open .tasks__a > p {
   padding-bottom: 1.875rem;
 }
+/* ╨а╨╕╤В╨╝ ╤Б╨╡╨║╤Ж╨╕╨╣ */
 /* ============ Clients ============ */
-.clients {
+.clients,
+/* ============ Partners ============ */
+.partners,
+/* ============ Projects ============ */
+.projects,
+/* ============ Events ============ */
+.events,
+/* ============ CTA ============ */
+.cta,
+/* ============ Media page (╨Ь╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А) ============ */
+.page-hero--media.page-hero,
+/* Base comes from .btn--ghost + .btn--lg; only the white fill + inverted hover differ */
+/* ============ Solution detail page ============ */
+/* ============ Registry (╤А╨╡╨╡╤Б╤В╤А ╨Ь╨╕╨╜╤Ж╨╕╤Д╤А╤Л,
+╨▓╨╜╤Г╤В╤А╨╕ hero-╤Д╤А╨╡╨╣╨╝╨░) ============ */
+/* ============ Audience (╨┤╨╗╤П ╨║╨╛╨│╨╛ ╨┐╤А╨╡╨┤╨╜╨░╨╖╨╜╨░╤З╨╡╨╜) ============ */
+.audience,
+/* ============ features popup ============ */
+/* ============ Testimonials ============ */
+.testimonials,
+.hero-vuz,
+.contacts-map,
+.article-about,
+.article-block,
+.event-about,
+.seminar-topics,
+.event-partners,
+.events-featured,
+.events-list,
+.features,
+/* ==== from pages/solutions.css ==== */
+/* solutions.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕,
+╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
+.catalog,
+.services {
   margin-bottom: 5rem;
 }
 
-.clients__heading {
-  font-size: var(--fs-h3);
-  margin-bottom: 3.125rem;
-  text-align: center;
-}
-
 .clients__marquee {
   overflow: hidden;
 }
 .page-hero--detail{
@@ -525,14 +595,8 @@
   border-radius: 50%;
   object-fit: contain;
 }
 
-/* ============ Partners ============ */
-.partners {
-    margin-bottom: 5rem;
-
-}
-
 .partners__head {
     gap: var(--gap-4xl);
     min-height: 22.5rem;
     margin-bottom: 0.625rem;
@@ -555,9 +619,18 @@
     align-content: flex-end;
     align-items: flex-end;
 }
 
-.partners__swiper {
+/* ╨б╨▓╨░╨╣╨┐╨╡╤А╤Л: ╤Б╨╗╨░╨╣╨┤╤Л ╨▓╤Л╤Е╨╛╨┤╤П╤В ╨╖╨░ ╨║╨╛╨╜╤В╨╡╨╣╨╜╨╡╤А */
+.partners__swiper,
+.projects__swiper,
+.events__swiper,
+.testimonials__swiper,
+.gallery__swiper,
+/* ==== from pages/about.css ==== */
+/* about.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕,
+╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
+.facts__swiper {
   overflow: visible;
 }
 
 .partners__card {
@@ -602,9 +675,21 @@
   right: 2.5rem;
   font-size: var(--fs-body-14);
 }
 
-.partners__card:hover {
+/* ╨д╨╕╤А╨╝╨╡╨╜╨╜╤Л╨╣ hover */
+.partners__card:hover,
+.projects__reset:hover,
+.dropdown__trigger:hover,
+.events__card:hover .events__info,
+.tab-filter.is-active,
+.stages__card:hover,
+.vnedrenie__card:hover,
+.tab-filter:hover,
+.clients__card:hover,
+.audience__card--accent:hover,
+.event-partners__card:hover,
+.industries__card--cta:hover {
   background: var(--color-sea);
   color: var(--color-white);
 }
 
@@ -612,13 +697,8 @@
 .partners__card:hover .partners__desc {
   opacity: 0.8;
 }
 
-/* ============ Projects ============ */
-.projects {
-  margin-bottom: 5rem;
-}
-
 .projects__head {
     height: 22.5rem;
     padding: 1.875rem 2.5rem 1.8125rem;
     margin-bottom: 0.625rem;
@@ -651,12 +731,8 @@
     gap: 1.25rem;
     margin-top: -1.25rem;
 }
 
-.projects__swiper {
-  overflow: visible;
-}
-
 .projects__card {
   position: relative;
   width: 100%;
   min-height: 28.75rem;
@@ -668,9 +744,32 @@
   color: var(--color-black);
   transition: all 0.4s;
 }
 
-.projects__card[hidden] {
+/* ╨б╨║╤А╤Л╤В╤Л╨╡ ╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╤П */
+.projects__card[hidden],
+.projects__chips:empty,
+.projects__reset.is-hidden,
+.dropdown__trigger::-webkit-details-marker,
+.dropdown__count.is-hidden,
+.events__card[hidden],
+/* ============ Mobile-only duplicates (index) ============ */
+/* ╨Ъ╨╜╨╛╨┐╨║╨╕,
+╨┐╨╡╤А╨╡╨╜╨╛╤Б╨╕╨╝╤Л╨╡ ╨┐╨╛╨┤ ╨║╨░╤А╤Г╤Б╨╡╨╗╨╕ ╨╜╨░ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╨╛╨╝ (Figma 1742:17748). ╨Я╨╛╨║╨░╨╖╤Л╨▓╨░╤О╤В╤Б╤П ╤В╨╛╨╗╤М╨║╨╛ ╨▓ media.css <=768. */
+.industries__cta,
+.projects__cta,
+.events__cta,
+.registry__stats,
+.events-list__more[hidden],
+.events__card--blue::after,
+.goals__results--m,
+.arch__img--mobile,
+.projects__filters-toggle,
+.projects__filters-head,
+.projects__apply,
+.projects__more[hidden],
+.hero__footer--stats::after,
+.catalog__plus {
   display: none;
 }
 
 .projects__empty {
@@ -684,17 +783,8 @@
   background-color: var(--color-sea);
   color: var(--color-white);
 }
 
-.projects__card:hover .projects__name,
-.projects__card:focus-visible .projects__name,
-.projects__card:hover .projects__text,
-.projects__card:focus-visible .projects__text,
-.projects__card:hover .projects__year,
-.projects__card:focus-visible .projects__year {
-  color: var(--color-white);
-}
-
 .projects__top {
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
@@ -800,12 +890,8 @@
   gap: 0.625rem;
   margin-top: 1.25rem;
 }
 
-.projects__chips:empty {
-  display: none;
-}
-
 .projects__chip {
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
@@ -829,13 +915,8 @@
   color: var(--color-sea);
   transition: all 0.4s;
 }
 
-.projects__chip:hover,
-.projects__chip:hover .projects__chip-x {
-  color: var(--color-sea);
-}
-
 /* mobile-only: ╤И╨░╨┐╨║╨░ ╨╕ ╤Д╤Г╤В╨╡╤А ╤И╤В╨╛╤А╨║╨╕ ╤Д╨╕╨╗╤М╤В╤А╨╛╨▓ (Figma 1736:16401) */
 
 .projects__reset {
   display: inline-flex;
@@ -854,27 +935,14 @@
   cursor: pointer;
   transition: all 0.4s;
 }
 
-.projects__reset.is-hidden {
-  display: none;
-}
-
 .projects__reset-x {
   width: 0.75rem;
   height: 0.75rem;
   flex-shrink: 0;
 }
 
-.projects__reset:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-
-.dropdown {
-  position: relative;
-}
-
 .dropdown__trigger {
   display: inline-flex;
   align-items: center;
   justify-content: flex-start;
@@ -893,17 +961,8 @@
   list-style: none;
   transition: all 0.4s;
 }
 
-.dropdown__trigger:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-
-.dropdown__trigger::-webkit-details-marker {
-  display: none;
-}
-
 .dropdown__count {
   display: inline-grid;
   place-content: center;
   width: 1.5rem;
@@ -915,13 +974,13 @@
   font-weight: 500;
   line-height: 1;
 }
 
-.dropdown__count.is-hidden {
-  display: none;
-}
-
-.dropdown__caret path {
+/* ╨Я╨╗╨░╨▓╨╜╤Л╨╣ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ 0.4s */
+.dropdown__caret path,
+/* ============ Event detail page ============ */
+.audience__card--accent .audience__name,
+.vnedrenie__name {
   transition: all 0.4s;
 }
 .dropdown__trigger:hover svg path {
   stroke: var(--color-white);
@@ -933,12 +992,8 @@
   transform-origin: center;
   transform-box: fill-box;
 }
 
-.dropdown[open] .dropdown__caret {
-  transform: rotate(180deg);
-}
-
 .dropdown__panel {
   position: absolute;
   top: calc(100% + 0.625rem);
   left: 0;
@@ -1019,13 +1074,8 @@
 .projects__card.card-appear {
   animation: card-appear 0.5s ease backwards;
 }
 
-/* ============ Events ============ */
-.events {
-  margin-bottom: 5rem;
-}
-
 .events__head {
     display: flex;
     align-items: flex-start;
     justify-content: space-between;
@@ -1051,11 +1101,8 @@
 .events_header_material .events__head-actions{
   
     flex-shrink: inherit;
 }
-.events__swiper {
-  overflow: visible;
-}
 
 .events__swiper .swiper-slide {
   width: calc((100% - 1.25rem) * 46 / 185);
 }
@@ -1074,12 +1121,8 @@
   color: var(--color-white);
   text-decoration: none;
 }
 
-.events__card[hidden] {
-  display: none;
-}
-
 .events__card::after {
   content: "";
   position: absolute;
   inset: 0;
@@ -1156,25 +1199,20 @@
   right: 1.25rem;
   fill: var(--color-black);
   transition: 0.4s all;
 }
-.events__card:hover .events__date {
-    color: var(--color-white);
-}
-.events__card:hover .events__info{ 
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-.events__card:hover .events__arrow {
+
+/* ╨Ш╨║╨╛╨╜╨║╨░ ╨▒╨╡╨╗╨╡╨╡╤В ╨╜╨░ hover */
+.events__card:hover .events__arrow,
+.stages__card:hover .stages__arrow,
+.clients__card:hover .clients__icon,
+.audience__card--accent:hover svg,
+.event-partners__card:hover .event-partners__icon {
   fill: var(--color-white);
 }
 .events__card:hover .events__tag {
     border: 1px solid var(--color-white);
 }
-/* ============ CTA ============ */
-.cta {
-    margin-bottom: 5rem;
-}
 
 .cta__body {
   position: relative;
   margin-left: 1.5625rem;
@@ -1283,12 +1321,8 @@
   font-size: var(--fs-body-14);
     flex: 1;
 }
 
-.footer__contacts a {
-  color: var(--color-white);
-}
-
 .footer__social {
   display: flex;
   gap: 1.25rem;
     flex: 1;
@@ -1356,40 +1390,21 @@
   opacity: 0.6;
     width: 100%;
 }
 
-/* ============ Clients page ============ */
-.header__link.is-active {
-  color: var(--color-sea);
-}
-
-/* ============ Media page (╨Ь╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А) ============ */
-
-.page-hero--media.page-hero{  
-  margin-bottom: 5rem;
-}
-
-.tab-filter.is-active {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-
-/* Base comes from .btn--ghost + .btn--lg; only the white fill + inverted hover differ */
-
-/* ============ Solution detail page ============ */
-
-/* ============ Registry (╤А╨╡╨╡╤Б╤В╤А ╨Ь╨╕╨╜╤Ж╨╕╤Д╤А╤Л, ╨▓╨╜╤Г╤В╤А╨╕ hero-╤Д╤А╨╡╨╣╨╝╨░) ============ */
-
-/* ============ Audience (╨┤╨╗╤П ╨║╨╛╨│╨╛ ╨┐╤А╨╡╨┤╨╜╨░╨╖╨╜╨░╤З╨╡╨╜) ============ */
-.audience {
-  margin-bottom: 5rem;
-}
-
-.audience__title {
+/* ╨Ю╤В╤Б╤В╤Г╨┐ ╨┐╨╛╨┤ ╨╖╨░╨│╨╛╨╗╨╛╨▓╨║╨╛╨╝ ╤Б╨╡╨║╤Ж╨╕╨╕ */
+.audience__title,
+.faq__title,
+h3.client-title,
+.seminar-topics__title,
+.event-partners__title {
   margin-bottom: 3.125rem;
 }
 
-.audience__grid {
+/* ╨У╤А╨╕╨┤ 4 ╨║╨╛╨╗╨╛╨╜╨║╨╕ ╨┐╨╛ ╤Ж╨╡╨╜╤В╤А╤Г */
+.audience__grid,
+.clients__grid,
+.events-list__grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;
   gap: var(--gap-sm);
@@ -1402,9 +1417,11 @@
   flex-direction: column;
   position: relative;
 }
 
-.audience__name {
+/* ╨Э╨░╨╖╨▓╨░╨╜╨╕╨╡ ╨║╨░╤А╤В╨╛╤З╨║╨╕ */
+.audience__name,
+.seminar-topics__name {
   max-width: 23.75rem;
 }
 
 .audience__desc {
@@ -1425,15 +1442,8 @@
   from { opacity: 0; transform: translateY(1rem); }
   to { opacity: 1; transform: none; }
 }
 
-/* ============ features popup ============ */
-
-/* ============ Testimonials ============ */
-.testimonials {
-  margin-bottom: 5rem;
-}
-
 .testimonials__head {
     display: flex;
     align-items: flex-start;
     justify-content: space-between;
@@ -1445,12 +1455,8 @@
 .testimonials .carousel-nav {
   padding-top: 0.25rem;
 }
 
-.testimonials__swiper {
-  overflow: visible;
-}
-
 .testimonials__card {
   width: 100%;
   height: 28.75rem;
   padding: 2.5rem;
@@ -1480,14 +1486,23 @@
   flex-direction: column;
   gap: var(--gap-xs);
 }
 
-.testimonials__name {
+/* ╨Я╨╛╨┤╨╖╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ 20/500 */
+.testimonials__name,
+.event-about__date-time,
+.program__speaker-name,
+.features__demo-title {
   font-size: var(--fs-body-20);
   font-weight: 500;
 }
 
-.testimonials__role {
+/* ╨в╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ 16 */
+.testimonials__role,
+.program__speaker-role,
+.seminar-topics_header .seminar-topics__num,
+.hero__label,
+.catalog__feat {
   font-size: var(--fs-body-16);
 }
 
 .testimonials__logo {
@@ -1495,13 +1510,8 @@
   height: 3.125rem;
   object-fit: contain;
 }
 
-/* ============ CTA blue (╨г ╨▓╨░╤Б ╨┐╨╛╤Е╨╛╨╢╨░╤П ╨╖╨░╨┤╨░╤З╨░?) ============ */
-.cta--blue {
-  color: var(--color-white);
-}
-
 .cta--blue__inner {
   margin: 0 auto;
   text-align: center;
   padding: 4rem 0;
@@ -1529,24 +1539,17 @@
   margin-top: 5rem;
   padding-bottom: 5rem;
 }
 
-.faq__title {
-  margin-bottom: 3.125rem;
-}
-.faq__inner{
+/* ╨С╨╡╨╗╨░╤П ╨┐╨░╨╜╨╡╨╗╤М */
+.faq__inner,
+.gallery__inner,
+.client-quote__inner {
     background: var(--color-white);
     border-radius: var(--radius-lg);
     padding: 1.875rem 2.5rem;
 
 }
-.faq__list {
-  border-top: 1px solid var(--bg-border);
-}
-
-.faq__item + .faq__item {
-  border-top: 1px solid var(--bg-border);
-}
 
 .faq__q {
   display: flex;
   align-items: center;
@@ -1558,11 +1561,8 @@
   text-align: left;
   color: var(--color-black);
   transition: all 0.4s;
 }
-.faq__q:hover {
-  color: var(--color-sea);
-}
 
 .faq__name {
     max-width: 70.3125rem;
     font-weight: 500;
@@ -1576,31 +1576,25 @@
   color: currentColor;
   transition: all 0.4s;
 }
 
-.faq__item.is-open .faq__icon {
-  transform: rotate(180deg);
-}
-
 .faq__a {
   display: grid;
   grid-template-rows: 0fr;
   max-width: 50.9375rem;
   transition: all 0.4s;
 }
 
-.faq__a > p {
+/* ╨Ю╤В╨▓╨╡╤В ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜╨░ */
+.faq__a > p,
+.tasks__a > p {
   overflow: hidden;
   min-height: 0;
   margin: 0;
   transition: all 0.4s;
     color: var(--grey, #222222B2);
 }
 
-.faq__item.is-open .faq__a {
-  grid-template-rows: 1fr;
-}
-
 .faq__item.is-open .faq__a > p {
   padding-bottom: 2.5rem;
 }
 
@@ -1608,21 +1602,30 @@
 .page-hero{
   margin-bottom: 2.5rem;
 }
 
+/* ╨в╤С╨╝╨╜╨░╤П ╤Б╨╡╨║╤Ж╨╕╤П ╤Б ╨╜╨╕╨╢╨╜╨╕╨╝ ╨╛╤В╤Б╤В╤Г╨┐╨╛╨╝ */
 /* plus toggle тАФ mobile accordion only */
-
 /* ============ Client detail page ============ */
-.client-intro {
+.client-intro,
+/* Goals */
+.goals,
+/* Implementation */
+/* Architecture diagram */
+/* Stages timeline */
+/* Team */
+/* Video */
+.video,
+/* Gallery */
+.gallery,
+.client-quote {
   color: var(--color-black);
     margin-bottom: 5rem;
 }
 h2.client-title {
   margin-bottom: 5.3125rem;
 }
-h3.client-title {
-  margin-bottom: 3.125rem;
-}
+
 .client-intro__inner {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: var(--gap-xl);
@@ -1631,9 +1634,11 @@ h3.client-title {
     padding: 2.5rem 2.5rem ;
     border-radius: var(--radius-lg);
 }
 
-.client-intro__text {
+/* ╨в╨╡╨║╤Б╤В╨╛╨▓╨░╤П ╨║╨╛╨╗╨╛╨╜╨║╨░ */
+.client-intro__text,
+.article-about__content {
     max-width: 40.9375rem;
     /* letter-spacing: 0.025rem; */
 }
 .client-intro__text p{
@@ -1642,9 +1647,13 @@ h3.client-title {
     letter-spacing: -0.047rem;
     padding-bottom: 1.875rem;
 
 }
-.client-intro__media img {
+/* ╨Ъ╤А╤Г╨┐╨╜╨╛╨╡ ╤Д╨╛╤В╨╛ ╨╜╨░ ╨▓╤Б╤О ╤И╨╕╤А╨╕╨╜╤Г */
+.client-intro__media img,
+.article-about__img,
+.article-block__img,
+.client-quote__photo {
   width: 100%;
   height: 35rem;
   object-fit: cover;
   border-radius: var(--radius-lg);
@@ -1679,30 +1688,16 @@ h3.client-title {
     letter-spacing: 0;
     transition: all 0.4s;
 }
 
-.stages__card:hover {
-  background: var(--color-sea);
-  color: var(--color-white)
-}
 .stages__arrow {
   position: absolute;
   top: 2.5rem;
   right: 3.75rem;
   fill: var(--color-black);
     transition: all 0.4s;
 }
 
-.stages__card:hover .stages__arrow {
-  fill: var(--color-white); 
-}
-
-/* ============ Event detail page ============ */
-
-.audience__card--accent .audience__name {
-transition: all 0.4s;
-}
-
 .program__item:hover,
 .program__item.is-active {
   background: var(--color-sea);
   border-color: var(--color-sea);
@@ -1719,22 +1714,8 @@ transition: all 0.4s;
 .program__panel.is-active {
   display: flex;
 }
 
-/* ============ Project detail page ============ */
-.client-intro__content{
-    height: 100%;
-    display: flex;
-    flex-direction: column;
-
-}
-
-/* Goals */
-.goals {
-  margin-bottom: 5rem;
-  color: var(--color-black);
-}
-
 .goals__inner {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.625rem;
@@ -1761,9 +1742,11 @@ transition: all 0.4s;
   flex-direction: column;
   gap: 1.875rem;
 }
 
-.goals__item {
+/* ╨б╤В╤А╨╛╨║╨░ ╤Б ╨╕╨║╨╛╨╜╨║╨╛╨╣ */
+.goals__item,
+.program__speaker {
   display: flex;
   align-items: center;
   gap: var(--gap-lg);
 }
@@ -1819,23 +1802,11 @@ transition: all 0.4s;
 .goals__stat-label {
   margin-top: var(--gap-lg);
   }
 
-/* Implementation */
-
-/* Architecture diagram */
-
-/* Stages timeline */
-
-/* Team */
-
-/* Video */
-.video {
-  margin-bottom: 5rem;
-  color: var(--color-black);
-}
-
-.video__inner {
+/* ╨С╨╡╨╗╨░╤П ╨┐╨░╨╜╨╡╨╗╤М */
+.video__inner,
+.events-featured__panel {
   background: var(--color-white);
   border-radius: var(--radius-lg);
   padding: 1.875rem 2.5rem 2.5rem;
 }
@@ -1854,9 +1825,11 @@ transition: all 0.4s;
   border-radius: var(--radius-lg);
   overflow: hidden;
 }
 
-.video__poster {
+/* ╨Ю╨▒╨╗╨╛╨╢╨║╨░ object-fit cover */
+.video__poster,
+.events-featured__media img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
@@ -1888,20 +1861,8 @@ transition: all 0.4s;
 .video__play:hover {
   transform: translate(-50%, -50%) scale(1.05);
 }
 
-/* Gallery */
-.gallery {
-  margin-bottom: 5rem;
-  color: var(--color-black);
-}
-
-.gallery__inner {
-  background: var(--color-white);
-  border-radius: var(--radius-lg);
-  padding: 1.875rem 2.5rem;
-}
-
 .gallery__head {
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
@@ -1915,12 +1876,8 @@ transition: all 0.4s;
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
 
-.gallery__swiper {
-  overflow: visible;
-}
-
 .gallery__swiper .swiper-slide {
   width: 100%;
   height: 46.375rem;
 }
@@ -1954,9 +1911,11 @@ transition: all 0.4s;
   cursor: pointer;
   transition: background 0.3s;
 }
 
-.gallery__dot.is-active {
+/* ╨С╤А╨╡╨╜╨┤-╤Б╨╕╨╜╨╕╨╣ */
+.gallery__dot.is-active,
+.events__card--blue {
   background: #1342f3;
 }
 
 /* Read-also blue card (solid fill, no overlay) */
@@ -1965,12 +1924,8 @@ transition: all 0.4s;
   background: transparent;
   color: var(--color-white);
 }
 
-.events__card--blue .events__title {
-  color: var(--color-white);
-}
-
 .events__card--blue .events__meta {
   margin-top: auto;
   color: var(--color-white);
 }
@@ -1990,9 +1945,14 @@ transition: all 0.4s;
 .partners--eco .partners__desc {
   max-width: 19.375rem;
 }
 
-.reasons {
+/* ╨а╨╕╤В╨╝ ╤Б╨╡╨║╤Ж╨╕╨╣ */
+.reasons,
+/* ==== from pages/index.css ==== */
+/* index.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕,
+╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
+.industries {
   margin-bottom: 7.5rem;
 }
 
 .reasons__inner {
@@ -2076,12 +2036,8 @@ transition: all 0.4s;
   border-radius: var(--radius-lg);
   transition: all 0.4s;
 }
 
-.vnedrenie__name {
-  transition: all 0.4s;
-}
-
 .vnedrenie__sub {
   margin-top: 1.25rem;
   font-size: var(--fs-body-16);
   max-width: 21.875rem;
@@ -2113,20 +2069,14 @@ transition: all 0.4s;
   margin-top: auto;
   width: 100%;
 }
 
-.vnedrenie__card:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-
-.vnedrenie__card:hover .vnedrenie__done {
-  color: var(--color-white);
-}
 .vnedrenie__card:hover .vnedrenie__done circle {
   fill: transparent
 }
-.vnedrenie__card:hover .vnedrenie__btn {
+/* ╨Ш╨╜╨▓╨╡╤А╤Б╨╜╤Л╨╣ ╨▒╤А╨╡╨╜╨┤-╨▒╨╗╨╛╨║ */
+.vnedrenie__card:hover .vnedrenie__btn,
+.industries__card--cta {
     /* color: var(--color-sea); */
     background: var(--color-white);
     color: var(--color-sea);
 }
@@ -2183,10 +2133,12 @@ transition: all 0.4s;
     min-height: 3.125rem;
     max-width: 18.75rem;
 
 }
+/* ╨в╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ 14 */
 /* Vnedrenie (╨Т╨░╤А╨╕╨░╨╜╤В╤Л ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П) */
-.vnedrenie--univer .vnedrenie__sub {
+.vnedrenie--univer .vnedrenie__sub,
+.features__demo-sub {
   font-size: var(--fs-body-14);
 }
 .vnedrenie--univer .vnedrenie__list {
   gap: 1.25rem;
@@ -2195,19 +2147,28 @@ transition: all 0.4s;
   font-size: 1.25rem;
   gap: 1.25rem;
 }
 
+/* ╨б╨╡╨║╤Ж╨╕╤П ╤Б ╨╛╤В╤Б╤В╤Г╨┐╨░╨╝╨╕ ╤Б╨▓╨╡╤А╤Е╤Г ╨╕ ╤Б╨╜╨╕╨╖╤Г */
 /* team (SoftSnow тАФ ╨║╨╛╨╝╨░╨╜╨┤╨░) */
-.team {
+.team,
+.ecosystem {
   margin-top: 5rem;
   margin-bottom: 5rem;
 }
-.team__flex{
+/* ╨У╤А╨╕╨┤ 2 ╨║╨╛╨╗╨╛╨╜╨║╨╕ */
+.team__flex,
+.projects__grid {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 0.625rem;
 }
-.team__inner {
+/* ╨Т╨╡╤А╤В╨╕╨║╨░╨╗╤М╨╜╤Л╨╣ ╤Б╤В╨╡╨║ */
+.team__inner,
+.program__speaker-info,
+.impl__stages li,
+.registry__bottom,
+.univer-registry__bottom {
     display: flex;
     gap: 0.625rem;
     flex-direction: column;
 }
@@ -2246,17 +2207,13 @@ transition: all 0.4s;
   gap: 0.625rem;
   justify-content: center;
   overflow: hidden;
 }
-.hero-vuz{
-  margin-bottom: 5rem;
-}
 
 /* ============ Ecosystem (vuz.html: ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤Б╤А╨╡╨┤╨░ ╨▓╤Г╨╖╨░) ============ */
 
 /* ╨Ы╨╡╨▓╨░╤П ╨║╨╛╨╗╨╛╨╜╨║╨░: ╤В╨╡╨║╤Б╤В ╤Б╨╗╨╡╨▓╨░, ╨▓╤Л╤А╨░╨▓╨╜╨╕╨▓╨░╨╜╨╕╨╡ ╨▓╨┐╤А╨░╨▓╨╛, ╨╕╨║╨╛╨╜╨║╨░ ╤Б╨┐╤А╨░╨▓╨░ */
 
-
 /* ╨е╨▓╨╛╤Б╤В╨╛╨▓╤Л╨╡ ╨▒╨╗╨╛╨║╨╕, ╨╛╤И╨╕╨▒╨╛╤З╨╜╨╛ ╤Г╨╡╤Е╨░╨▓╤И╨╕╨╡ ╨┐╤А╨╕ ╤А╨░╨╖╨╜╨╛╤Б╨╡ тАФ ╨▓╨╛╨╖╨▓╤А╨░╤Й╨╡╨╜╤Л (fix Task 6) */
 .contacts-map__inner {
   position: relative;
   display: flex;
@@ -2265,12 +2222,8 @@ transition: all 0.4s;
   border-radius: var(--radius-lg);
   overflow: hidden;
 }
 
-.contacts-map{
-margin-bottom: 5rem;
-}
-
 .contacts-map__frame {
   position: absolute;
   inset: 0;
 }
@@ -2433,9 +2386,11 @@ a.contacts-map__value:hover {
   border-radius: var(--radius-lg);
   padding: var(--gap-lg) var(--gap-md);
 }
 
-.contacts-banner__avatar {
+/* ╨Р╨▓╨░╤В╨░╤А */
+.contacts-banner__avatar,
+.program__avatar {
   width: 8.125rem;
   height: 8.125rem;
   border-radius: 50%;
   object-fit: cover;
@@ -2497,25 +2452,19 @@ a.contacts-map__value:hover {
   font-size: var(--fs-body-16);
   white-space: nowrap;
 }
 
-.article-about {
-  margin-bottom: 5rem;
-}
-
-.article-about__inner {
+/* ╨Ъ╨░╤А╤В╨╛╤З╨║╨░ ╤Б╤В╨░╤В╤М╨╕ */
+.article-about__inner,
+.article-block__inner {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.625rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
   padding: 2.5rem;
 }
 
-.article-about__content {
-  max-width: 40.9375rem;
-}
-
 .article-about__title {
   font-size: var(--fs-h3);
   letter-spacing: -0.0625rem;
 }
@@ -2525,29 +2474,8 @@ a.contacts-map__value:hover {
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
 
-.article-about__img,
-.article-block__img {
-  width: 100%;
-  height: 35rem;
-  object-fit: cover;
-  border-radius: var(--radius-lg);
-}
-
-.article-block {
-  margin-bottom: 5rem;
-}
-
-.article-block__inner {
-  display: grid;
-  grid-template-columns: 1fr 1fr;
-  gap: 0.625rem;
-  background: var(--color-white);
-  border-radius: var(--radius-lg);
-  padding: 2.5rem;
-}
-
 .article-block__inner > .article-block__title {
   max-width: 40.9375rem;
   height: fit-content;
 }
@@ -2561,9 +2489,12 @@ a.contacts-map__value:hover {
   flex-direction: column;
   gap: 2.5rem;
 }
 
-.article-block__text p {
+/* ╨в╨╕╨┐╨╛╨│╤А╨░╤Д╨╕╨║╨░ ╤Б╤В╨░╤В╤М╨╕ */
+.article-block__text p,
+.article-block__quote blockquote p,
+.article-block__lead {
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
 
@@ -2578,13 +2509,8 @@ a.contacts-map__value:hover {
 .article-block__quote blockquote {
   margin: 1.5625rem 0 0;
 }
 
-.article-block__quote blockquote p {
-  font-size: var(--fs-body-20);
-  line-height: 1.4;
-}
-
 .article-block__author {
   display: flex;
   justify-content: flex-end;
   align-items: center;
@@ -2615,13 +2541,8 @@ a.contacts-map__value:hover {
   font-size: var(--fs-body-14);
   color: var(--color-grey);
 }
 
-.article-block__lead {
-  font-size: var(--fs-body-20);
-  line-height: 1.4;
-}
-
 .article-block__points {
   list-style: none;
   display: flex;
   flex-direction: column;
@@ -2650,17 +2571,8 @@ a.contacts-map__value:hover {
   max-width: 43.4375rem;
   border: 2px solid var(--color-black);
   padding: 2.5rem;
 }
-/* ============ Mobile-only duplicates (index) ============ */
-/* ╨Ъ╨╜╨╛╨┐╨║╨╕, ╨┐╨╡╤А╨╡╨╜╨╛╤Б╨╕╨╝╤Л╨╡ ╨┐╨╛╨┤ ╨║╨░╤А╤Г╤Б╨╡╨╗╨╕ ╨╜╨░ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╨╛╨╝ (Figma 1742:17748).
-   ╨Я╨╛╨║╨░╨╖╤Л╨▓╨░╤О╤В╤Б╤П ╤В╨╛╨╗╤М╨║╨╛ ╨▓ media.css <=768. */
-.industries__cta,
-.projects__cta,
-.events__cta,
-.registry__stats {
-  display: none;
-}
 
 /* ╨д╨╛╨╜ hero ╨┤╨╡╤В╨░╨╗╤М╨╜╨╛╨╣ ╤Б╤В╤А╨░╨╜╨╕╤Ж╤Л ╤А╨╡╤И╨╡╨╜╨╕╤П тАФ ╨╕╨╖ inline ╨┐╨╡╤А╨╡╨╜╨╡╤Б╤С╨╜ ╤Б╤О╨┤╨░,
    ╤З╤В╨╛╨▒╤Л media.css ╨╝╨╛╨│ ╨╛╤В╨║╨╗╤О╤З╨╕╤В╤М ╨╡╨│╨╛ ╨╜╨░ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╨╛╨╝ (Figma 1742:12742) */
 .hero--solution .hero-block-inner {
@@ -2678,14 +2590,8 @@ a.contacts-map__value:hover {
 .projects__swiper .swiper-slide {
   width: calc((100% - 0.625rem) / 2);
 }
 
-/* ==== from pages/about.css ==== */
-/* about.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
-
-.facts__swiper {
-  overflow: visible;
-}
 .facts__card {
     position: relative;
     height: 100%;
     padding: 2.125rem var(--gap-2xl);
@@ -2730,11 +2636,9 @@ a.contacts-map__value:hover {
     font-size: var(--fs-h2);
     line-height: 1.05;
     letter-spacing: -0.03em;
 }
-.approach__text span {
-    color: var(--color-sea);
-}
+
 .team__sub {
     font-size: var(--fs-body-16);
     max-width: 40.9375rem;
 }
@@ -2837,17 +2741,9 @@ a.contacts-map__value:hover {
   font-size: var(--fs-body-16);
   color: var(--color-black);
 
 }
-.client-quote {
-  color: var(--color-black);
-  margin-bottom: 5rem;
-}
-.client-quote__inner {
-  background: var(--color-white);
-  padding: 1.875rem 2.5rem;
-  border-radius: var(--radius-lg);
-}
+
 .client-quote__title {
   color: var(--color-black);
   margin-bottom: 5.625rem;
 }
@@ -2897,14 +2793,8 @@ a.contacts-map__value:hover {
   font-size: var(--fs-body-16);
   line-height: 1.4;
   color: var(--color-black);
 }
-.client-quote__photo {
-  width: 100%;
-  height: 35rem;
-  object-fit: cover;
-  border-radius: var(--radius-lg);
-}
 
 /* ==== from pages/clients.css ==== */
 /* clients.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
 
@@ -2931,18 +2821,9 @@ a.contacts-map__value:hover {
     cursor: pointer;
     transition: all 0.4s;
     letter-spacing: -0.04rem;
 }
-.tab-filter:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-.clients__grid {
-  display: grid;
-  grid-template-columns: repeat(4, 1fr);
-  justify-content: center;
-  gap: var(--gap-sm);
-}
+
 .clients__card {
   position: relative;
   display: flex;
   flex-direction: column;
@@ -2987,31 +2868,26 @@ a.contacts-map__value:hover {
   height: 100%;
   object-fit: contain;
   transition: transform 0.4s;
 }
-.clients__card:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
+
 .clients__icon{
   position: absolute;
   fill:var(--color-black);
   
     right: 2.5rem;
 }
-.clients__card:hover .clients__icon{
-  fill: var(--color-white);
-}
-.clients__card:hover .clients__desc {
-  color: var(--color-white);
-}
+
 .clients__card:hover .clients__logo {
   background: var(--color-white);
 }
 .clients__card:hover .clients__logo img {
   transform: scale(0.8);
 }
-.clients__more {
+/* ╨Ъ╨╜╨╛╨┐╨║╨░ ╨╡╤Й╨╡ */
+.clients__more,
+.events-list__more,
+.projects__more {
   display: flex;
   justify-content: center;
   margin-top: 2.5rem;
 }
@@ -3024,9 +2900,11 @@ a.contacts-map__value:hover {
   top: 25.375rem;
   left: 2.5rem;
   font-size: var(--fs-body-16);
 }
-.partners--eco .partners__grid {
+/* ╨У╤А╨╕╨┤ 4 ╨║╨╛╨╗╨╛╨╜╨║╨╕ */
+.partners--eco .partners__grid,
+.services__grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 0.625rem;
 }
@@ -3049,11 +2927,9 @@ a.contacts-map__value:hover {
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
 linear-gradient(93.16deg, rgba(34, 34, 34, 0.6) 21.74%, rgba(34, 34, 34, 0) 59.58%);
 
 }
-.event-about {
-  margin-bottom: 5rem;
-}
+
 .event-about__card {
   display: flex;
   flex-direction: column;
   height: 22.5rem;
@@ -3086,31 +2962,25 @@ linear-gradient(93.16deg, rgba(34, 34, 34, 0.6) 21.74%, rgba(34, 34, 34, 0) 59.5
     position: absolute;
     top: 3.125rem;
     right: 3.125rem;
 }
-.event-about__date-num {
+/* ╨Ъ╤А╤Г╨┐╨╜╨░╤П ╨░╨║╤Ж╨╡╨╜╤В╨╜╨░╤П ╤Ж╨╕╤Д╤А╨░ */
+.event-about__date-num,
+.hero__num {
   font-size: var(--fs-h3);
   font-weight: 500;
   color: var(--color-sea);
 }
-.event-about__date-time {
-  font-size: var(--fs-body-20);
-  font-weight: 500;
-}
+
 .audience__card--accent{
 transition: all 0.4s;
   color: var(--color-sea);
 }
-.audience__card--accent:hover{
-    background: var(--color-sea);
-    color: var(--color-white);
-}
+
 .audience__card--accent svg{
     fill: var(--color-sea);transition: all 0.4s;
 }
-.audience__card--accent:hover svg{
-    fill: var(--color-white);
-}
+
 .program {
   padding-bottom: 5rem;
 }
 .program__head {
@@ -3122,9 +2992,11 @@ transition: all 0.4s;
 }
 .program__download {
   flex-shrink: 0;
 }
-.program__row {
+/* ╨б╤В╤А╨╛╨║╨░-╤А╤П╨┤ */
+.program__row,
+.features__body {
   display: flex;
   align-items: stretch;
   gap: var(--gap-sm);
 }
@@ -3208,47 +3080,21 @@ transition: all 0.4s;
   max-width: 34.125rem;
   font-size: var(--fs-body-16);
   line-height: 1.4;
 }
-.program__speaker {
-  display: flex;
-  align-items: center;
-  gap: var(--gap-lg);
-}
-.program__avatar {
-  width: 8.125rem;
-  height: 8.125rem;
-  border-radius: 50%;
-  object-fit: cover;
-}
-.program__speaker-info {
-  display: flex;
-  flex-direction: column;
-  gap: 0.625rem;
-}
-.program__speaker-name {
-  font-size: var(--fs-body-20);
-  font-weight: 500;
-}
-.program__speaker-role {
-  font-size: var(--fs-body-16);
-}
+
 .program__speaker-caption {
   margin-top: 0.25rem;
   font-size: var(--fs-body-14);
   opacity: 0.7;
 }
-.seminar-topics {
-  margin-bottom: 5rem;
-}
+
 .seminar-topics__inner {
   padding: 2.5rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
 }
-.seminar-topics__title {
-  margin-bottom: 3.125rem;
-}
+
 .seminar-topics__grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: center;
@@ -3258,34 +3104,25 @@ transition: all 0.4s;
     display: flex;
     justify-content: space-between;
     gap: var(--gap-sm);
 }
-.seminar-topics_header .seminar-topics__num {
-    font-size: var(--fs-body-16);
-}
+
 .seminar-topics__card {
   height: 22.5rem;
   padding: 2.125rem 2.5rem 2.5rem;
   display: flex;
   flex-direction: column;
  border: 1px solid #2222221A;
   border-radius: var(--radius-lg);
 }
-.seminar-topics__name {
-  max-width: 23.75rem;
-}
+
 .seminar-topics__desc {
   margin-top: auto;
   font-size: var(--fs-body-16);
   max-width: 30rem;
   opacity: 0.7;
 }
-.event-partners {
-  margin-bottom: 5rem;
-}
-.event-partners__title {
-  margin-bottom: 3.125rem;
-}
+
 .event-partners__grid {
   display: flex;
   gap: var(--gap-sm);
 }
@@ -3301,15 +3138,9 @@ transition: all 0.4s;
     background: var(--color-white);
     border-radius: var(--radius-lg);
     color: var(--color-black);
 }
-.event-partners__card:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-.event-partners__card:hover .event-partners__icon{
-  fill: var(--color-white);
-}
+
 .event-partners__text{
   opacity: 0.7;
     font-size: var(--fs-body-14);
 }
@@ -3360,16 +3191,9 @@ transition: all 0.4s;
 }
 .hero-socials__link svg{  
     border-radius: 0.5rem;
 }
-.events-featured {
-  margin-bottom: 5rem;
-}
-.events-featured__panel {
-  background: var(--color-white);
-  border-radius: var(--radius-lg);
-  padding: 1.875rem 2.5rem 2.5rem;
-}
+
 .events-list__title{  
     max-width: 31.25rem;
     margin-bottom: 3.125rem;
 }
@@ -3426,37 +3250,9 @@ transition: all 0.4s;
   height: 35rem;
   border-radius: var(--radius-lg);
   overflow: hidden;
 }
-.events-featured__media img {
-  width: 100%;
-  height: 100%;
-  object-fit: cover;
-}
-.events-list {
-  margin-bottom: 5rem;
-}
-.events-list__grid {
-  display: grid;
-  grid-template-columns: repeat(4, 1fr);
-  justify-content: center;
-  gap: var(--gap-sm);
-}
-.events-list__more {
-  display: flex;
-  justify-content: center;
-  margin-top: 2.5rem;
-}
-.events-list__more[hidden] {
-  display: none;
-}
-
-/* ==== from pages/index.css ==== */
-/* index.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
 
-.industries {
-  margin-bottom: 7.5rem;
-}
 .industries__grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: var(--gap-sm);
@@ -3496,18 +3292,9 @@ transition: all 0.4s;
 
   z-index: 1;
   transition: all 0.4s;
 }
-.industries__card:not(.industries__card--cta):hover {
-  color: var(--color-white);
-}
-.industries__card:not(.industries__card--cta):hover .industries__bg,
-.industries__card:not(.industries__card--cta):hover::after {
-  opacity: 1;
-}
-.industries__card:not(.industries__card--cta):hover .industries__text {
-  color: var(--color-white);
-}
+
 .industries__text {
   margin-top: auto;
   font-size: var(--fs-body-16);
   font-weight: 400;
@@ -3517,35 +3304,15 @@ transition: all 0.4s;
 .industries__card--cta .industries__title {
   color: var(--color-sea);
   max-width: 23.75rem;
 }
-.industries__card--cta {
-  background: var(--color-white);
-  color: var(--color-sea);
-}
-.industries__card--cta:hover {
-  background: var(--color-sea);
-  color: var(--color-white);
-}
-.industries__card--cta:hover .industries__title,
-.industries__card--cta:hover .industries__arrow {
-  color: var(--color-white);
-}
+
 .industries__arrow {
   position: absolute;
   top: 3.3125rem;
   right: 2.5rem;
   color: inherit;
 }
-.industries__card--cta .industries__arrow {
-  color: var(--color-sea);
-}
-.events__card--blue {
-  background: #1342f3;
-}
-.events__card--blue::after {
-  display: none;
-}
 
 /* ==== from pages/project-detail.css ==== */
 /* project-detail.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
 
@@ -3565,11 +3332,9 @@ transition: all 0.4s;
 }
 .goals__inner--photo {
   background-image: url('../assets/img/goals__inner.jpg');
 }
-.goals__results--m {
-  display: none;
-}
+
 .impl {
     margin-bottom: 5rem;
   color: var(--color-black);
     overflow: visible;
@@ -3629,24 +3394,18 @@ transition: all 0.4s;
 }
 .arch__img {
   max-width: 100%;
 }
-.arch__img--mobile {
-  display: none;
-}
+
 .impl__stages {
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 1.875rem;
 }
-.impl__stages li{
-  display: flex;
-  flex-direction: column;
-  gap: 0.625rem;
-}
+
 .impl__stage-head {
   display: flex;
   align-items: center;
   gap: 0.75rem;
@@ -3730,31 +3489,12 @@ transition: all 0.4s;
 .projects-page {
     min-height: 31.25rem;
     margin-bottom: 5rem;
 }
-.projects__filters-toggle {
-  display: none;
-}
-.projects__filters-head,
-.projects__apply {
-  display: none;
-}
+
 .projects__filters-footer {
   display: contents;
 }
-.projects__grid {
-  display: grid;
-  grid-template-columns: repeat(2, 1fr);
-  gap: 0.625rem;
-}
-.projects__more {
-  display: flex;
-  justify-content: center;
-  margin-top: 2.5rem;
-}
-.projects__more[hidden] {
-  display: none;
-}
 
 /* ==== from pages/solution-detail.css ==== */
 /* solution-detail.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
 
@@ -3771,16 +3511,9 @@ transition: all 0.4s;
 }
 .hero__stat + .hero__stat {
   margin-left: var(--gap-sm);
 }
-.hero__num {
-  font-size: var(--fs-h3);
-  font-weight: 500;
-  color: var(--color-sea);
-}
-.hero__label {
-  font-size: var(--fs-body-16);
-}
+
 .hero__stats-img {
   width: 6.5625rem;
   height: 6rem;
   margin-left: 2.125rem;
@@ -3802,11 +3535,9 @@ transition: all 0.4s;
     align-items: flex-end;
     background-color: #f4f4f4;
     border-radius: 0 0 1.25rem 1.25rem;
 }
-.hero__footer--stats::after {
-  display: none;
-}
+
 .tasks__head {
     width: 100%;
     padding-top: 0rem;
 }
@@ -3852,12 +3583,9 @@ transition: all 0.4s;
 .tasks__icon {
     position: absolute;
   transition: opacity 0.3s ease, transform 0.3s ease;
 }
-.tasks__icon--plus {
-  opacity: 1;
-  transform: rotate(0deg);
-}
+
 .tasks__icon--minus {
   opacity: 0;
   transform: rotate(-90deg);
 }
@@ -3866,15 +3594,9 @@ transition: all 0.4s;
   grid-template-rows: 0fr;
   max-width: 43.4375rem;
   transition: all 0.4s;
 }
-.tasks__a > p {
-  overflow: hidden;
-  min-height: 0;
-  margin: 0;
-  transition: all 0.4s;
-    color: var(--grey, #222222B2);
-}
+
 .registry {
   margin-bottom: 4.375rem;
 }
 .registry__inner {
@@ -3886,9 +3608,11 @@ transition: all 0.4s;
     padding: 2.5rem 2.5rem;
     border-radius: 1.25rem;
     min-height: 460px;
 }
-.registry__inner-block {
+/* ╨С╨╗╨╕╨╖╨╜╨╡╤Ж╤Л ╤Б╤В╤А╨░╨╜╨╕╤Ж ╤А╨╡╤И╨╡╨╜╨╕╨╣ */
+.registry__inner-block,
+.univer-registry__inner-block {
     max-width: 100%;
     height: 100%;
 
 }
@@ -3907,20 +3631,20 @@ transition: all 0.4s;
     flex-direction: column;
     height: 100%;
     justify-content: space-between;
 }
-.registry__title {
+/* ╨Ч╨░╨│╨╛╨╗╨╛╨▓╨╛╨║ ╨▒╨╗╨╛╨║╨░ ╤А╨╡╨╡╤Б╤В╤А╨░ */
+.registry__title,
+.univer-registry__title {
     font-size: var(--fs-h3);
     margin-bottom: 1.875rem;
     max-width: 23.125rem;
     letter-spacing: -0.05em;
 }
-.registry__bottom{  
-    display: flex;
-    flex-direction: column;
-    gap: 0.625rem;
-}
-.registry__desc {
+
+/* ╨Ю╨┐╨╕╤Б╨░╨╜╨╕╨╡ ╨▒╨╗╨╛╨║╨░ ╤А╨╡╨╡╤Б╤В╤А╨░ */
+.registry__desc,
+.univer-registry__desc {
   font-size: var(--fs-body-16);
   max-width: 37.5rem;
 }
 .registry__desc_bottom{
@@ -3931,11 +3655,9 @@ transition: all 0.4s;
     width: 100%;
     height: auto;
     max-width: 450px;
 }
-.features {
-    margin-bottom: 5rem;
-}
+
 .features__inner{
   
     background: var(--color-white);
     padding: 1.875rem 2.5rem;
@@ -3954,13 +3676,9 @@ transition: all 0.4s;
 .features__sub {
   font-size: var(--fs-body-16);
   max-width: 31.875rem;
 }
-.features__body {
-  display: flex;
-  gap: var(--gap-sm);
-  align-items: stretch;
-}
+
 .features__panels {
   width: 100%;
 }
 .features__panel {
@@ -4026,15 +3744,9 @@ transition: all 0.4s;
   display: flex;
   flex-direction: column;
   gap: 0.25rem;
 }
-.features__demo-title {
-  font-size: var(--fs-body-20);
-  font-weight: 500;
-}
-.features__demo-sub {
-  font-size: var(--fs-body-14);
-}
+
 .features__img {
   width: 100%;
   border-radius: var(--radius-lg);
   object-fit: cover;
@@ -4065,11 +3777,9 @@ transition: all 0.4s;
 .features-popup__title {
   line-height: 1.1;
   margin: 0 0 3.5rem;
 }
-.features-popup__media {
-  position: relative;
-}
+
 .features-popup__main {
   position: relative;
   width: calc(100% - 10.5rem);
   margin: 0 auto;
@@ -4130,14 +3840,8 @@ transition: all 0.4s;
   object-fit: cover;
   display: block;
 }
 
-/* ==== from pages/solutions.css ==== */
-/* solutions.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
-
-.catalog {
-  margin-bottom: 5rem;
-}
 .catalog__list {
   display: flex;
   flex-direction: column;
   gap: var(--gap-sm);
@@ -4187,11 +3891,9 @@ transition: all 0.4s;
   list-style: none;
   margin: 0;
   padding: 0;
 }
-.catalog__feat {
-  font-size: var(--fs-body-16);
-}
+
 .catalog__arrow {
   position: absolute;
   top: 2.5rem;
   right: 2.5rem;
@@ -4199,20 +3901,14 @@ transition: all 0.4s;
   opacity: 0.5;
   transition: all 0.4s;
   transform: scale(1);
 }
-.catalog__plus {
-  display: none;
-}
+
 .catalog__card:hover {
   background: var(--color-blue-alt);
   color: var(--color-white);
 }
-.catalog__card:hover .catalog__head,
-.catalog__card:hover .catalog__feat,
-.catalog__card:hover .catalog__arrow {
-  color: var(--color-white);
-}
+
 .catalog__card:hover .catalog__arrow {
   opacity: 1;
   transform: scale(2);
 }
@@ -4238,12 +3934,9 @@ transition: all 0.4s;
     /* padding: 40px 40px; */
     border-radius: 1.25rem;
     min-height: 28.75rem;
 }
-.univer-registry__inner-block {
-  max-width: 100%;
-  height: 100%;
-}
+
 .univer-registry__img-wrap {
   display: flex;
   justify-content: center;
   padding: 0;
@@ -4256,31 +3949,15 @@ transition: all 0.4s;
   height: 100%;
   justify-content: space-between;
   padding: 2.5rem 2.5rem;
 }
-.univer-registry__title {
-  font-size: var(--fs-h3);
-  margin-bottom: 1.875rem;
-  max-width: 23.125rem;
-  letter-spacing: -0.05em;
-}
-.univer-registry__bottom {
-  display: flex;
-  flex-direction: column;
-  gap: 0.625rem;
-}
-.univer-registry__desc {
-  font-size: var(--fs-body-16);
-  max-width: 37.5rem;
-}
+
 .univer-registry__img {
   width: 100%;
   height: auto;
   object-fit: cover;
 }
-.services {
-  margin-bottom: 5rem;
-}
+
 .services__inner{
   display: flex;
   gap: 0.625rem;
   padding: 1.875rem 2.5rem 2.5rem 2.5rem;
@@ -4295,13 +3972,9 @@ transition: all 0.4s;
   margin-top: 5.3125rem;
   font-size: var(--fs-body-16);
   max-width: 41.25rem;
 }
-.services__grid {
-  display: grid;
-  grid-template-columns: repeat(4, 1fr);
-  gap: 0.625rem;
-}
+
 .team__photo--main {
     width: 20.3125rem;
     position: absolute;
     right: 0;
@@ -4319,12 +3992,9 @@ transition: all 0.4s;
     width: 100%;
     justify-content: space-between;
     align-items: flex-end;
 }
-.ecosystem {
-  margin-top: 5rem;
-  margin-bottom: 5rem;
-}
+
 .ecosystem__inner {
   padding: 2.5rem 2.5rem 6.25rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
