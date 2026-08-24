2224a9c refactor(css): shared heading typography layer, drop per-section copies
 css/sections.css | 115 -------------------------------------------------------
 1 file changed, 115 deletions(-)
diff --git a/css/sections.css b/css/sections.css
index 6d762cf..16f0e45 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -193,20 +193,17 @@
 }
 .hero__body {
   position: relative;
   z-index: 1;
 }
 
 .hero__title {
     max-width: 61.25rem;
-    font-size: var(--fs-h1);
-    line-height: 1;
     margin-bottom: 2.8125rem;
-    letter-spacing: -0.07em;
 }
 
 .hero__brand {
   color: var(--color-sea);
 }
 
 .hero__footer {
     position: relative;
@@ -337,20 +334,18 @@
   margin: 0;
 }
 .tasks-lists-section .tasks__inner {
     display: block;
     padding: 0;
     padding-bottom: 5rem;
 }
 .tasks__heading {
-    font-size: var(--fs-h2);
     margin-bottom: 5.625rem;
     padding: 1.875rem 2.5rem 0;
-    letter-spacing: -0.07em;
 }
 
 .tasks-lists-section{
     padding: 0;
 }
 /* ╨б╨┐╨╕╤Б╨║╨╛╨▓╤Л╨╣ ╨▓╨░╤А╨╕╨░╨╜╤В ┬л╤Б╤В╤А╨░╨╜╨╕╤Ж ╤А╨╡╤И╨╡╨╜╨╕╨╣┬╗; ╨║╨░╤А╨╡╤В╨╛╤З╨╜╤Л╨╣ тАФ ╨▓ ╤Б╨╡╨║╤Ж╨╕╨╕ Tasks ╨╜╨╕╨╢╨╡. ╨Ф╤Г╨▒╨╗╤М ╨╜╨░╨╝╨╡╤А╨╡╨╜╨╜╤Л╨╣ */
 .tasks__list {
   display: flex;
@@ -541,19 +536,17 @@
     gap: var(--gap-4xl);
     min-height: 22.5rem;
     margin-bottom: 0.625rem;
     background: var(--color-white);
     border-radius: var(--radius-lg);
     padding: 1.875rem 2.5rem 0.9375rem;
 }
 .partners__heading {
-  font-size: var(--fs-h2);
   max-width: 68.75rem;
-    letter-spacing: -0.07em;
     margin-bottom: 5rem;
 }
 
 .partners__sub {
   font-size: var(--fs-body-16);
   max-width: 35rem;
 }
 .partners__actions{  
@@ -636,20 +629,16 @@
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     height: 100%;
     flex-wrap: nowrap;
     align-content: space-between;
     align-items: stretch;
 }
-.projects__heading {
-  font-size: var(--fs-h2);
-    letter-spacing: -0.07em;
-}
 .projects__bottom{
     display: flex;
     width: 100%;
     justify-content: space-between;
 
 }
 .projects__sub {
   font-size: var(--fs-body-16);
@@ -708,18 +697,16 @@
 .projects__top {
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   gap: var(--gap-lg);
 }
 
 .projects__name {
-  font-size: var(--fs-h3);
-  line-height: 1;
   max-width: 43.75rem;
     min-height: 6.6875rem;
 }
 
 .projects__arrow {
   flex-shrink: 0;
     margin-top: 0.4375rem;
 }
@@ -773,17 +760,16 @@
     inset: 0;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
 
 /* ============ Page hero (listing pages: projects, solutions) ============ */
 .page-hero__title {
-  font-size: var(--fs-h1);
   line-height: 0.95;
   margin-bottom: 1.875rem;
 }
 
 .page-hero__sub {
   font-size: var(--fs-body-16);
   max-width: 40rem;
   color: var(--color-grey);
@@ -1046,17 +1032,16 @@
     gap: 0;
     margin-bottom: 0.625rem;
     background: var(--color-white);
     border-radius: var(--radius-lg);
     padding: 2.5rem;
     flex-direction: column;
 }
 .events__heading {
-  font-size: var(--fs-h2);
   max-width: 68.75rem;
 }
 
 .events__head-actions {
     display: flex;
     align-items: center;
     gap: 1.25rem;
     flex-shrink: 0;
@@ -1132,17 +1117,16 @@
 
 .events__card--wide .events__info {
   width: calc(50% - 1.25rem);
   transition: 0.4s all;
 }
 
 .events__title {
   font-size: var(--fs-body-20);
-  font-weight: 500;
   line-height: 1.2;
   max-width: 23.75rem;
   transition: 0.4s all;
 }
 
 .events__meta {
   display: flex;
   align-items: center;
@@ -1206,18 +1190,16 @@
 .cta__content {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
 }
 
 .cta__title {
-  font-size: var(--fs-h2);
-  line-height: 1;
   letter-spacing: -0.03em;
 }
 
 .cta__text {
   margin-top: 1.3125rem;
   font-size: var(--fs-body-14);
   line-height: 1.4;
   max-width: 30rem;
@@ -1398,17 +1380,16 @@
 /* ============ Registry (╤А╨╡╨╡╤Б╤В╤А ╨Ь╨╕╨╜╤Ж╨╕╤Д╤А╤Л, ╨▓╨╜╤Г╤В╤А╨╕ hero-╤Д╤А╨╡╨╣╨╝╨░) ============ */
 
 /* ============ Audience (╨┤╨╗╤П ╨║╨╛╨│╨╛ ╨┐╤А╨╡╨┤╨╜╨░╨╖╨╜╨░╤З╨╡╨╜) ============ */
 .audience {
   margin-bottom: 5rem;
 }
 
 .audience__title {
-  font-size: var(--fs-h2);
   margin-bottom: 3.125rem;
 }
 
 .audience__grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;
   gap: var(--gap-sm);
@@ -1418,17 +1399,16 @@
   height: 28.75rem;
   padding: 2.125rem 2.5rem 2.5rem;
   display: flex;
   flex-direction: column;
   position: relative;
 }
 
 .audience__name {
-  font-size: var(--fs-h3);
   max-width: 23.75rem;
 }
 
 .audience__desc {
   margin-top: auto;
   font-size: var(--fs-body-16);
   max-width: 18.75rem;
     opacity: 0.7;
@@ -1457,20 +1437,16 @@
     display: flex;
     align-items: flex-start;
     justify-content: space-between;
     gap: var(--gap-4xl);
     margin-bottom: 3.75rem;
     padding-top: 0;
 }
 
-.testimonials__title {
-  font-size: var(--fs-h2);
-}
-
 .testimonials .carousel-nav {
   padding-top: 0.25rem;
 }
 
 .testimonials__swiper {
   overflow: visible;
 }
 
@@ -1550,17 +1526,16 @@
 
 /* ============ FAQ ============ */
 .faq {
   margin-top: 5rem;
   padding-bottom: 5rem;
 }
 
 .faq__title {
-  font-size: var(--fs-h2);
   margin-bottom: 3.125rem;
 }
 .faq__inner{
     background: var(--color-white);
     border-radius: var(--radius-lg);
     padding: 1.875rem 2.5rem;
 
 }
@@ -1768,19 +1743,16 @@ transition: all 0.4s;
   padding: 2.5rem;
 }
 
 /* ╨Ь╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╣ ╨┤╤Г╨▒╨╗╤М ┬л╨в╨╡╨║╤Г╤Й╨╕╨╡ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╤Л┬╗ (project-detail) тАФ ╤Б╨║╤А╤Л╤В ╨╜╨░ ╨┤╨╡╤Б╨║╤В╨╛╨┐╨╡ */
 
 .goals__title {
   grid-column: 1;
   grid-row: 1;
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
     max-width: 31.25rem;
 }
 
 .goals__list {
   grid-column: 2;
   grid-row: 1 / span 2;
   list-style: none;
   margin: 0;
@@ -1863,22 +1835,16 @@ transition: all 0.4s;
 }
 
 .video__inner {
   background: var(--color-white);
   border-radius: var(--radius-lg);
   padding: 1.875rem 2.5rem 2.5rem;
 }
 
-.video__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
-}
-
 .video__sub {
   margin: 2.8125rem 0 0;
   max-width: 40rem;
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
 
 .video__player {
@@ -1938,22 +1904,16 @@ transition: all 0.4s;
 .gallery__head {
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   gap: 2.5rem;
   margin-bottom: 1.875rem;
 }
 
-.gallery__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
-}
-
 .gallery__sub {
   margin: 3.125rem 0 0;
   max-width: 40rem;
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
 
 .gallery__swiper {
@@ -2043,22 +2003,16 @@ transition: all 0.4s;
   border-radius: var(--radius-lg);
 }
 
 .reasons__head {
   width: 55.625rem;
   flex-shrink: 0;
 }
 
-.reasons__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  letter-spacing: -0.07em;
-}
-
 .reasons__desc {
   margin-top: 1.875rem;
   font-size: var(--fs-body-16);
   max-width: 37.5rem;
 }
 
 .reasons__list {
   flex: 1;
@@ -2080,18 +2034,16 @@ transition: all 0.4s;
     width: 4rem;
     height: 4rem;
     padding: 0.9375rem;
     background: #1342F31A;
     border-radius: 50%;
 }
 
 .reasons__name {
-  font-size: var(--fs-h3);
-  font-weight: 500;
   margin-bottom: 1.25rem;
 }
 
 .reasons__text {
   font-size: var(--fs-body-16);
   max-width: 37.5625rem;
   line-height: 1.4;
 }
@@ -2100,19 +2052,16 @@ transition: all 0.4s;
   max-width: 45.0625rem;
 }
 
 .vnedrenie {
   margin-top: 0.625rem;
 }
 
 .vnedrenie__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  letter-spacing: -0.07em;
   margin-bottom: 2.5rem;
 }
 
 .vnedrenie__grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0.625rem;
 }
@@ -2124,18 +2073,16 @@ transition: all 0.4s;
   min-height: 31.875rem;
   padding: 2.25rem 2.5rem 2.1875rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
   transition: all 0.4s;
 }
 
 .vnedrenie__name {
-  font-size: var(--fs-h3);
-  font-weight: 500;
   transition: all 0.4s;
 }
 
 .vnedrenie__sub {
   margin-top: 1.25rem;
   font-size: var(--fs-body-16);
   max-width: 21.875rem;
   transition: all 0.4s;
@@ -2415,18 +2362,16 @@ a.contacts-map__value:hover {
   grid-template-columns: 2fr 1fr 1fr;
   gap: var(--gap-sm);
   background: var(--color-sea);
   border-radius: var(--radius-lg);
   padding: var(--gap-4xl);
 }
 
 .contacts-banner__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
   line-height: 1.05;
   color: var(--color-white);
   margin-bottom: var(--gap-xl);
 }
 
 .contacts-banner__label {
   display: flex;
   align-items: center;
@@ -2567,18 +2512,16 @@ a.contacts-map__value:hover {
 }
 
 .article-about__content {
   max-width: 40.9375rem;
 }
 
 .article-about__title {
   font-size: var(--fs-h3);
-  font-weight: 500;
-  line-height: 1;
   letter-spacing: -0.0625rem;
 }
 
 .article-about__text {
   margin-top: 3.75rem;
   font-size: var(--fs-body-20);
   line-height: 1.4;
 }
@@ -2605,19 +2548,16 @@ a.contacts-map__value:hover {
 }
 
 .article-block__inner > .article-block__title {
   max-width: 40.9375rem;
   height: fit-content;
 }
 
 .article-block__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
   letter-spacing: -0.1875rem;
 }
 
 .article-block__body {
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
 }
@@ -2747,18 +2687,16 @@ a.contacts-map__value:hover {
 }
 .facts__card {
     position: relative;
     height: 100%;
     padding: 2.125rem var(--gap-2xl);
     overflow: hidden;
 }
 .facts__name {
-    font-size: var(--fs-h3);
-    line-height: 1;
     letter-spacing: -0.02em;
 }
 .facts__text {
     margin-top: var(--gap-lg);
     font-size: var(--fs-body-14);
     max-width: 21.875rem;
 }
 .facts__img {
@@ -2791,20 +2729,16 @@ a.contacts-map__value:hover {
     text-align: center;
     font-size: var(--fs-h2);
     line-height: 1.05;
     letter-spacing: -0.03em;
 }
 .approach__text span {
     color: var(--color-sea);
 }
-.team__heading {
-    font-size: var(--fs-h2);
-    letter-spacing: -0.07em;
-}
 .team__sub {
     font-size: var(--fs-body-16);
     max-width: 40.9375rem;
 }
 .team__grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: var(--gap-sm);
@@ -2822,18 +2756,16 @@ a.contacts-map__value:hover {
     width: 26.875rem;
     max-width: calc(100% - var(--gap-md));
     padding: 1.25rem var(--gap-lg);
     background: var(--color-white);
     border-radius: var(--radius-md);
 }
 .team__name {
     font-size: var(--fs-body-20);
-    font-weight: 500;
-    line-height: 1;
 }
 .team__role {
     margin-top: 0.4375rem;
     font-size: var(--fs-body-14);
 }
 
 /* ==== from pages/client-detail.css ==== */
 /* client-detail.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
@@ -2873,19 +2805,16 @@ a.contacts-map__value:hover {
     background: var(--color-white);
     padding: 1.875rem 2.5rem 2.5rem;
     border-radius: var(--radius-lg);
 }
 .stages__head-col {
   flex: 0 0 50%;
 }
 .stages__heading {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
   color: var(--color-black);
 }
 .stages__intro {
   margin-top: 2rem;
   max-width: 34.5625rem;
   font-size: var(--fs-body-16);
   line-height: 1.4;
   color: var(--color-black);
@@ -2896,19 +2825,16 @@ a.contacts-map__value:hover {
   padding-top: 1.875rem;
   max-width: 43.75rem;
 }
 .stages__item + .stages__item {
   margin-top: 3.75rem;
     padding-top: 3.75rem;
 }
 .stages__title {
-  font-size: var(--fs-h3);
-  font-weight: 500;
-  line-height: 1;
   color: var(--color-black);
   margin-bottom: 2.5rem;
 }
 .stages__text {
   font-size: var(--fs-body-16);
   color: var(--color-black);
 
 }
@@ -2917,19 +2843,16 @@ a.contacts-map__value:hover {
   margin-bottom: 5rem;
 }
 .client-quote__inner {
   background: var(--color-white);
   padding: 1.875rem 2.5rem;
   border-radius: var(--radius-lg);
 }
 .client-quote__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
   color: var(--color-black);
   margin-bottom: 5.625rem;
 }
 .client-quote__grid {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: var(--gap-sm);
 }
@@ -3032,17 +2955,16 @@ a.contacts-map__value:hover {
   text-decoration: none;
   transition: all 0.4s;
 }
 .clients__body {
   padding-right: 2.5rem;
 }
 .clients__name {
   font-size: var(--fs-body-20);
-  font-weight: 500;
   line-height: 1.2;
   letter-spacing: -0.02em;
 }
 .clients__desc {
   margin-top: 1rem;
   font-size: var(--fs-body-14);
   color: var(--color-grey);
 }
@@ -3134,20 +3056,16 @@ linear-gradient(93.16deg, rgba(34, 34, 34, 0.6) 21.74%, rgba(34, 34, 34, 0) 59.5
 .event-about__card {
   display: flex;
   flex-direction: column;
   height: 22.5rem;
   padding: 2.5rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
 }
-.event-about__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-}
 .event-about__row {
   margin-top: auto;
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   gap: var(--gap-2xl);
 }
 .event-about__text {
@@ -3197,20 +3115,16 @@ transition: all 0.4s;
 }
 .program__head {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: var(--gap-4xl);
   margin-bottom: 3.75rem;
 }
-.program__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-}
 .program__download {
   flex-shrink: 0;
 }
 .program__row {
   display: flex;
   align-items: stretch;
   gap: var(--gap-sm);
 }
@@ -3327,18 +3241,16 @@ transition: all 0.4s;
   margin-bottom: 5rem;
 }
 .seminar-topics__inner {
   padding: 2.5rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
 }
 .seminar-topics__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
   margin-bottom: 3.125rem;
 }
 .seminar-topics__grid {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   justify-content: center;
   gap: var(--gap-sm);
 }
@@ -3354,31 +3266,28 @@ transition: all 0.4s;
   height: 22.5rem;
   padding: 2.125rem 2.5rem 2.5rem;
   display: flex;
   flex-direction: column;
  border: 1px solid #2222221A;
   border-radius: var(--radius-lg);
 }
 .seminar-topics__name {
-  font-size: var(--fs-h3);
   max-width: 23.75rem;
 }
 .seminar-topics__desc {
   margin-top: auto;
   font-size: var(--fs-body-16);
   max-width: 30rem;
   opacity: 0.7;
 }
 .event-partners {
   margin-bottom: 5rem;
 }
 .event-partners__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
   margin-bottom: 3.125rem;
 }
 .event-partners__grid {
   display: flex;
   gap: var(--gap-sm);
 }
 .event-partners__card {
     flex: 1;
@@ -3422,19 +3331,16 @@ transition: all 0.4s;
     gap:1.25rem ;
 }
 .event-partners-header .event-partners__icon {
     position: absolute;
     right: 0;
     top: 0;
     fill: var(--color-black);
 }
-.event-partners__name {
-  font-size: var(--fs-h3);
-}
 .event-partners__desc {
   font-size: var(--fs-body-16);
     max-width: 18.75rem;
     }
 
 /* ==== from pages/events.css ==== */
 /* events.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
 
@@ -3502,18 +3408,16 @@ transition: all 0.4s;
   border-radius: var(--radius-sm);
   line-height: 1;
 }
 .events-featured__date {
   opacity: var(--opacity-70);
 }
 .events-featured__name {
   max-width: 40.9375rem;
-  font-size: var(--fs-h3);
-  line-height: 1;
   letter-spacing: -0.01em;
 }
 .events-featured__actions {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-right: 2.5rem;
 }
@@ -3598,20 +3502,16 @@ transition: all 0.4s;
 }
 .industries__card:not(.industries__card--cta):hover .industries__bg,
 .industries__card:not(.industries__card--cta):hover::after {
   opacity: 1;
 }
 .industries__card:not(.industries__card--cta):hover .industries__text {
   color: var(--color-white);
 }
-.industries__title {
-  font-size: var(--fs-h3);
-  line-height: 1;
-}
 .industries__text {
   margin-top: auto;
   font-size: var(--fs-body-16);
   font-weight: 400;
   max-width: 21.75rem;
   color: var(--color-grey);
 }
 .industries__card--cta .industries__title {
@@ -3679,19 +3579,16 @@ transition: all 0.4s;
   grid-template-columns: 1fr 1fr;
   gap: var(--gap-xl);
   align-items: start;
   background: var(--color-white);
   border-radius: var(--radius-lg);
   padding: 2.5rem;
 }
 .impl__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  line-height: 1;
     max-width: 31.25rem;
 }
 .impl__body {
   display: flex;
   flex-direction: column;
   gap: 3.75rem;
   min-width: 0;
 }
@@ -3909,17 +3806,16 @@ transition: all 0.4s;
 .hero__footer--stats::after {
   display: none;
 }
 .tasks__head {
     width: 100%;
     padding-top: 0rem;
 }
 .tasks__title {
-  font-size: var(--fs-h2);
   margin-bottom: 1.875rem;
     max-width: 32.5rem;
 }
 .tasks__sub {
   font-size: var(--fs-body-16);
   max-width: 35.625rem;
 }
 .tasks__q {
@@ -4048,17 +3944,16 @@ transition: all 0.4s;
 .features__head {
     display: flex;
     align-items: flex-start;
     gap: 1.875rem;
     margin-bottom: 3.75rem;
     flex-direction: column;
 }
 .features__title {
-  font-size: var(--fs-h2);
   width: 55.625rem;
 }
 .features__sub {
   font-size: var(--fs-body-16);
   max-width: 31.875rem;
 }
 .features__body {
   display: flex;
@@ -4079,17 +3974,16 @@ transition: all 0.4s;
   background: var(--color-white);
   border-radius: var(--radius-lg);
 
     padding: 1.25rem 0;
   display: flex;
   flex-direction: column;
 }
 .features__name {
-  font-size: var(--fs-h3);
   margin-bottom: 1.875rem;
     max-width: 43.75rem;
 }
 .features__desc {
   font-size: var(--fs-body-20);
   max-width: 41.25rem;
   margin-bottom: 1.875rem;
 }
@@ -4164,18 +4058,16 @@ transition: all 0.4s;
   align-items: center;
   justify-content: center;
   border: none;
   background: transparent;
   color: var(--color-black);
   cursor: pointer;
 }
 .features-popup__title {
-  font-size: var(--fs-h3);
-  font-weight: 500;
   line-height: 1.1;
   margin: 0 0 3.5rem;
 }
 .features-popup__media {
   position: relative;
 }
 .features-popup__main {
   position: relative;
@@ -4265,17 +4157,16 @@ transition: all 0.4s;
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   gap: 1.875rem;
   align-items: flex-start;
 }
 .catalog__name {
   font-size: var(--fs-h3);
-  font-weight: 500;
   margin: 0;
     letter-spacing: -0.045em;
     max-width: 37.5rem;
 }
 .catalog__platform {
   font-size: var(--fs-body-16);
   opacity: 0.5;
 }
@@ -4395,21 +4286,16 @@ transition: all 0.4s;
   padding: 1.875rem 2.5rem 2.5rem 2.5rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
     margin-bottom: 0.625rem;
 }
 .services__head {
   max-width: 55.625rem;
 }
-.services__title {
-  font-size: var(--fs-h2);
-  font-weight: 500;
-  letter-spacing: -0.07em;
-}
 .services__sub {
   margin-top: 5.3125rem;
   font-size: var(--fs-body-16);
   max-width: 41.25rem;
 }
 .services__grid {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
@@ -4501,17 +4387,16 @@ transition: all 0.4s;
 .eco-card--5 { left: 73.625rem; top: 16.5625rem; }
 .eco-card--6 { left: 70rem;     top: 27.25rem; }
 .eco-card__body {
   flex: 1;
 }
 .eco-card__title {
   margin: 0 0 0.1875rem;
   font-size: var(--fs-body-20);
-  font-weight: 500;
   line-height: 1.2;
   letter-spacing: -0.02em;
 }
 .eco-card__text {
   margin: 0;
   font-size: var(--fs-body-16);
   line-height: 1.4;
 }
