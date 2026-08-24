6b06fd2 fix(css): replace forbidden transition:all with targeted properties
diff --git a/css/base.css b/css/base.css
index 82c46d2..d680110 100644
--- a/css/base.css
+++ b/css/base.css
@@ -280,13 +280,13 @@ section {
 	font-size: var(--fs-body-16);
 	line-height: 1.2;
 	font-weight: 600;
 	letter-spacing: -0.02em;
 	border-radius: var(--radius-xl);
 	color: var(--color-black);
-	transition: all 0.4s;
+	transition: background-color 0.4s, border-color 0.4s, color 0.4s;
 }
 [hidden]{
 	display: none!important;
 }
 
 .btn--primary {
@@ -301,19 +301,19 @@ section {
 }
 .btn--outline-white {
 	border: 2px solid var(--color-white);
 	color: var(--color-white);
 }
 .btn svg{
-	transition: all 0.4s;
+	transition: stroke 0.4s;
 
 }
 
 .btn--outline-white svg{
 	stroke: var(--color-white);
-	transition: all 0.4s;
+	transition: stroke 0.4s;
 }
 
 .btn--outline-white:hover svg{
 	stroke: var(--color-sea);
 }
 .btn--outline {
@@ -412,13 +412,13 @@ section {
 	justify-content: center;
 	width: 4.0625rem;
 	height: 4.0625rem;
 	border: 2px solid var(--color-sea);
 	border-radius: var(--radius-full);
 	color: var(--color-black);
-	transition: all 0.4s;
+	transition: background-color 0.4s, color 0.4s;
 }
 .carousel-nav__btn:hover {
 	background: var(--color-sea);
 	color: var(--color-white);
 }
 /* Tabs */
@@ -436,13 +436,13 @@ section {
 	padding: 0 1.875rem;
 	font-size: var(--fs-body-16);
 	font-weight: 500;
 	letter-spacing: -0.02em;
 	color: var(--color-grey);
 	border-radius: var(--radius-xl);
-	transition: all 0.4s;
+	transition: background-color 0.4s, color 0.4s;
 	border: 2px solid #2222221a;
 }
 .tabs__btn:hover {
 	color: var(--color-black);
 }
 .tabs__btn.is-active {
diff --git a/css/sections.css b/css/sections.css
index 187fc03..fac4f4c 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -60,13 +60,13 @@
     background: var(--color-black);
 }
 .header__caret {
   flex-shrink: 0;
   color: var(--color-black);
   /* ponytail: forced smooth rotation despite prefers-reduced-motion in utilities.css (explicit user request) */
-  transition: all 0.4s;
+  transition: transform 0.4s;
 }
 
 /* ╨Ъ╨░╤А╨╡╤В╨║╨░ ╨╕╨╗╨╕ ╨╕╨║╨╛╨╜╨║╨░ ╨▓ ╨╛╤В╨║╤А╤Л╤В╨╛╨╝ ╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╨╕ */
 .header__dropdown:hover .header__caret,
 .header__dropdown:focus-within .header__caret,
 .dropdown[open] .dropdown__caret,
@@ -373,23 +373,23 @@
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   opacity: 0;
-  transition: all 0.4s;
+  transition: opacity 0.4s;
   z-index: 0;
 }
 
 .tasks-lists-section .tasks__item::after {
   content: "";
   position: absolute;
   inset: 0;
   background: var(--color-overlay);
   opacity: 0;
-  transition: all 0.4s;
+  transition: opacity 0.4s;
   pointer-events: none;
   z-index: 1;
 }
 
 /* Reveal-╤Н╤Д╤Д╨╡╨║╤В ╨╜╨░ hover */
 .tasks-lists-section .tasks__item:hover .tasks__bg,
@@ -407,13 +407,13 @@
   gap: 1.5rem;
   height: 11.25rem;
   padding: 0 var(--section-px);
   font-size: var(--fs-h3);
   font-weight: 500;
   color: var(--color-black);
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .tasks__label,
 .tasks__arrow {
   position: relative;
   z-index: 2;
@@ -639,13 +639,13 @@
   height: 31.875rem;
   padding: 2.25rem 2.5rem 2.1875rem;
   display: flex;
   flex-direction: column;
   color: var(--color-black);
   text-decoration: none;
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 .partners__card img{  
     width: 8.125rem;
     height: 8.125rem;
     object-fit: contain;
     margin: auto;
@@ -663,13 +663,13 @@
 }
 
 .partners__desc {
   margin-top: auto;
   font-size: var(--fs-body-16);
   max-width: 18.75rem;
-  transition: all 0.4s;
+  transition: opacity 0.4s;
 }
 
 .partners__arrow {
   position: absolute;
   top: 2.5rem;
   right: 2.5rem;
@@ -739,13 +739,13 @@
   padding: 2rem 2.5rem;
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
   text-decoration: none;
   color: var(--color-black);
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 
 /* ╨б╨║╤А╤Л╤В╤Л╨╡ ╤Б╨╛╤Б╤В╨╛╤П╨╜╨╕╤П */
 .projects__card[hidden],
 .projects__chips:empty,
 .projects__reset.is-hidden,
@@ -902,21 +902,21 @@
   background: transparent;
   color: var(--color-sea);
   font-family: inherit;
   font-size: var(--fs-body-16);
   font-weight: 500;
   cursor: pointer;
-  transition: all 0.4s;
+  transition: background-color 0.4s, border-color 0.4s, color 0.4s;
 }
 
 .projects__chip-x {
   width: 0.75rem;
   height: 0.75rem;
   flex-shrink: 0;
   color: var(--color-sea);
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 /* mobile-only: ╤И╨░╨┐╨║╨░ ╨╕ ╤Д╤Г╤В╨╡╤А ╤И╤В╨╛╤А╨║╨╕ ╤Д╨╕╨╗╤М╤В╤А╨╛╨▓ (Figma 1736:16401) */
 
 .projects__reset {
   display: inline-flex;
@@ -930,13 +930,13 @@
   background: var(--color-white);
   color: var(--color-black);
   font-family: inherit;
   font-size: var(--fs-body-16);
   font-weight: 500;
   cursor: pointer;
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 
 .projects__reset-x {
   width: 0.75rem;
   height: 0.75rem;
   flex-shrink: 0;
@@ -956,13 +956,13 @@
   color: var(--color-black);
   font-family: inherit;
   font-size: var(--fs-body-16);
   font-weight: 500;
   cursor: pointer;
   list-style: none;
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 
 .dropdown__count {
   display: inline-grid;
   place-content: center;
   width: 1.5rem;
@@ -977,19 +977,19 @@
 
 /* ╨Я╨╗╨░╨▓╨╜╤Л╨╣ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ 0.4s */
 .dropdown__caret path,
 /* ============ Event detail page ============ */
 .audience__card--accent .audience__name,
 .vnedrenie__name {
-  transition: all 0.4s;
+  transition: stroke 0.4s, color 0.4s;
 }
 .dropdown__trigger:hover svg path {
   stroke: var(--color-white);
 }
 .dropdown__caret {
-  transition: all 0.4s;
+  transition: transform 0.4s;
   flex-shrink: 0;
   margin-left: auto;
   transform-origin: center;
   transform-box: fill-box;
 }
 
@@ -1030,23 +1030,23 @@
   border: 1px solid var(--color-black);
   border-radius: var(--radius-xs);
   background: var(--color-white);
   display: inline-grid;
   place-content: center;
   cursor: pointer;
-  transition: all 0.4s;
+  transition: background-color 0.4s, border-color 0.4s;
 }
 
 .dropdown__check::after {
   content: "";
   width: 0.625rem;
   height: 0.375rem;
   border-left: 2px solid var(--color-white);
   border-bottom: 2px solid var(--color-white);
   transform: rotate(-45deg) scale(0);
-  transition: all 0.4s;
+  transition: transform 0.4s;
 }
 
 .dropdown__check:checked {
   background: var(--color-sea);
   border-color: var(--color-sea);
 }
@@ -1157,51 +1157,51 @@
   border-radius: var(--radius-md);
   color: var(--color-black);
 }
 
 .events__card--wide .events__info {
   width: calc(50% - 1.25rem);
-  transition: 0.4s all;
+  transition: background-color 0.4s, color 0.4s;
 }
 
 .events__title {
   font-size: var(--fs-body-20);
   line-height: 1.2;
   max-width: 23.75rem;
-  transition: 0.4s all;
+  transition: color 0.4s;
 }
 
 .events__meta {
   display: flex;
   align-items: center;
   gap: var(--gap-sm);
   margin-top: auto;
   font-size: var(--fs-body-12);
-  transition: 0.4s all;
+  transition: color 0.4s;
 }
 
 .events__tag {
   padding: 0.3125rem 0.375rem;
   border: 1px solid var(--color-black);
   border-radius: var(--radius-sm);
   line-height: 1;
-  transition: 0.4s all;
+  transition: border-color 0.4s;
 }
 
 .events__date {
   color: var(--color-black);
   opacity: 0.7;
-  transition: 0.4s all;
+  transition: color 0.4s;
 }
 
 .events__arrow {
   position: absolute;
   top: 1.25rem;
   right: 1.25rem;
   fill: var(--color-black);
-  transition: 0.4s all;
+  transition: fill 0.4s;
 }
 
 /* ╨Ш╨║╨╛╨╜╨║╨░ ╨▒╨╡╨╗╨╡╨╡╤В ╨╜╨░ hover */
 .events__card:hover .events__arrow,
 .stages__card:hover .stages__arrow,
 .clients__card:hover .clients__icon,
@@ -1557,13 +1557,13 @@ h3.client-title,
   gap: var(--gap-lg);
   width: 100%;
   min-height: 6.5625rem;
   padding: 0;
   text-align: left;
   color: var(--color-black);
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .faq__name {
     max-width: 70.3125rem;
     font-weight: 500;
     font-size: 1.25rem;
@@ -1571,29 +1571,29 @@ h3.client-title,
     letter-spacing: -0.04rem;
 }
 
 .faq__icon {
   flex-shrink: 0;
   color: currentColor;
-  transition: all 0.4s;
+  transition: transform 0.4s;
 }
 
 .faq__a {
   display: grid;
   grid-template-rows: 0fr;
   max-width: 50.9375rem;
-  transition: all 0.4s;
+  transition: grid-template-rows 0.4s;
 }
 
 /* ╨Ю╤В╨▓╨╡╤В ╨░╨║╨║╨╛╤А╨┤╨╡╨╛╨╜╨░ */
 .faq__a > p,
 .tasks__a > p {
   overflow: hidden;
   min-height: 0;
   margin: 0;
-  transition: all 0.4s;
+  transition: padding-bottom 0.4s;
     color: var(--grey, #222222B2);
 }
 
 .faq__item.is-open .faq__a > p {
   padding-bottom: 2.5rem;
 }
@@ -1665,39 +1665,39 @@ h2.client-title {
     background: var(--color-white);
     border: 1px solid var(--bg-border);
     border-radius: var(--radius-lg);
     min-height: auto;
     padding: 1.5625rem 2.5rem 2.5rem;
     display: block;
-    transition: all 0.4s;
+    transition: background-color 0.4s, color 0.4s;
   color: var(--color-black);
 
 }
 
 .stages__label {
   display: block;
   font-size: 1.875rem;
   font-weight: 500;
-    transition: all 0.4s;
+    transition: color 0.4s;
 }
 
 .stages__desc {
     margin-top: 1.875rem;
     max-width: 26.25rem;
     font-size: 0.9375rem;
     line-height: 1.4;
     letter-spacing: 0;
-    transition: all 0.4s;
+    transition: color 0.4s;
 }
 
 .stages__arrow {
   position: absolute;
   top: 2.5rem;
   right: 3.75rem;
   fill: var(--color-black);
-    transition: all 0.4s;
+    transition: fill 0.4s;
 }
 
 .program__item:hover,
 .program__item.is-active {
   background: var(--color-sea);
   border-color: var(--color-sea);
@@ -2031,36 +2031,36 @@ h2.client-title {
   display: flex;
   flex-direction: column;
   min-height: 31.875rem;
   padding: 2.25rem 2.5rem 2.1875rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 
 .vnedrenie__sub {
   margin-top: 1.25rem;
   font-size: var(--fs-body-16);
   max-width: 21.875rem;
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .vnedrenie__list {
   margin-top: 2.5rem;
   display: flex;
   flex-direction: column;
   gap: var(--gap-lg);
   list-style: none;
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .vnedrenie__row {
   display: flex;
   gap: var(--gap-lg);
   font-size: 0.9375rem;
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .vnedrenie__done {
   flex-shrink: 0;
   color: var(--color-sea);
 }
@@ -2090,13 +2090,13 @@ h2.client-title {
     border-radius: 0.3125rem;
     font-size: 0.75rem;
     font-weight: 400;
     /* text-transform: uppercase; */
     color: var(--color-sea);
     letter-spacing: -0.03125rem;
-    transition: all 0.4s;
+    transition: border-color 0.4s, color 0.4s;
 }
 .card:hover .vnedrenie__badge {
     border: 1px solid var(--color-white);
     color: var(--color-white);
 }
 
@@ -2816,13 +2816,13 @@ a.contacts-map__value:hover {
     border-radius: var(--radius-xl);
     background: var(--color-white);
     color: var(--color-black);
     font-size: var(--fs-body-16);
     font-weight: 500;
     cursor: pointer;
-    transition: all 0.4s;
+    transition: background-color 0.4s, color 0.4s;
     letter-spacing: -0.04rem;
 }
 
 .clients__card {
   position: relative;
   display: flex;
@@ -2831,13 +2831,13 @@ a.contacts-map__value:hover {
   padding: 2.5rem;
   background: var(--color-white);
   border-radius: var(--radius-lg);
   color: var(--color-black);
   overflow: hidden;
   text-decoration: none;
-  transition: all 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 .clients__body {
   padding-right: 2.5rem;
 }
 .clients__name {
   font-size: var(--fs-body-20);
@@ -2969,18 +2969,18 @@ linear-gradient(93.16deg, rgba(34, 34, 34, 0.6) 21.74%, rgba(34, 34, 34, 0) 59.5
   font-size: var(--fs-h3);
   font-weight: 500;
   color: var(--color-sea);
 }
 
 .audience__card--accent{
-transition: all 0.4s;
+transition: background-color 0.4s, color 0.4s;
   color: var(--color-sea);
 }
 
 .audience__card--accent svg{
-    fill: var(--color-sea);transition: all 0.4s;
+    fill: var(--color-sea);transition: fill 0.4s;
 }
 
 .program {
   padding-bottom: 5rem;
 }
 .program__head {
@@ -3016,26 +3016,26 @@ transition: all 0.4s;
   border-radius: var(--radius-lg);
   background: var(--color-white);
   color: var(--color-black);
   font: inherit;
   text-align: left;
   cursor: pointer;
-  transition: all 0.4s;
+  transition: background-color 0.4s, border-color 0.4s, color 0.4s;
 }
 .program__num {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   width: 4rem;
   height: 4rem;
   border: 1px solid rgba(34, 34, 34, 0.2);
   border-radius: var(--radius-xl);
   font-size: var(--fs-body-20);
   font-weight: 500;
-  transition: all 0.4s;
+  transition: background-color 0.4s, border-color 0.4s, color 0.4s;
 }
 .program__name {
   font-size: var(--fs-h4);
   font-weight: 500;
     letter-spacing: -0.04em;
 }
@@ -3263,38 +3263,38 @@ transition: all 0.4s;
   flex-direction: column;
   align-items: flex-start;
   height: 28.75rem;
     padding: 2.5rem 2.75rem 2.1875rem;
   overflow: hidden;
   color: var(--color-black);
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 .industries__bg {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   opacity: 0;
-  transition: all 0.4s;
+  transition: opacity 0.4s;
 }
 .industries__card:not(.industries__card--cta)::after {
   content: '';
   position: absolute;
   inset: 0;
   background: var(--color-overlay);
   opacity: 0;
-  transition: all 0.4s;
+  transition: opacity 0.4s;
 }
 .industries__card:not(.industries__card--cta) .industries__title,
 .industries__card:not(.industries__card--cta) .industries__text,
 .industries__card:not(.industries__card--cta) .industries__arrow {
 
   z-index: 1;
-  transition: all 0.4s;
+  transition: color 0.4s;
 }
 
 .industries__text {
   margin-top: auto;
   font-size: var(--fs-body-16);
   font-weight: 400;
@@ -3590,13 +3590,13 @@ transition: all 0.4s;
   transform: rotate(-90deg);
 }
 .tasks__a {
   display: grid;
   grid-template-rows: 0fr;
   max-width: 43.4375rem;
-  transition: all 0.4s;
+  transition: grid-template-rows 0.4s;
 }
 
 .registry {
   margin-bottom: 4.375rem;
 }
 .registry__inner {
@@ -3803,13 +3803,13 @@ transition: all 0.4s;
   height: 4rem;
   border: 2px solid var(--color-sea);
   border-radius: var(--radius-full);
   background: var(--color-white);
   color: var(--color-black);
   cursor: pointer;
-  transition: all 0.4s;
+  transition: border-color 0.4s, color 0.4s;
 }
 .features-popup__nav:hover {
   border-color: var(--color-sea);
   color: var(--color-sea);
 }
 .features-popup__nav--prev {
@@ -3896,13 +3896,13 @@ transition: all 0.4s;
 .catalog__arrow {
   position: absolute;
   top: 2.5rem;
   right: 2.5rem;
   color: var(--color-black);
   opacity: 0.5;
-  transition: all 0.4s;
+  transition: opacity 0.4s, transform 0.4s;
   transform: scale(1);
 }
 
 .catalog__card:hover {
   background: var(--color-blue-alt);
   color: var(--color-white);
