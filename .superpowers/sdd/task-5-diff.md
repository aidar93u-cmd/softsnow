853368a refactor(css): fold pages layer into sections.css; drop legacy core files
 about.html                    |    1 -
 client-detail.html            |    1 -
 clients.html                  |    1 -
 css/components.css            |  513 ------------
 css/pages/about.css           |   94 ---
 css/pages/client-detail.css   |  145 ----
 css/pages/clients.css         |  110 ---
 css/pages/directum.css        |   19 -
 css/pages/event-detail.css    |  318 --------
 css/pages/events.css          |  109 ---
 css/pages/index.css           |   98 ---
 css/pages/project-detail.css  |  179 ----
 css/pages/projects.css        |   29 -
 css/pages/solution-detail.css |  379 ---------
 css/pages/solutions.css       |   89 --
 css/pages/univer-online.css   |   90 ---
 css/pages/vuz.css             |  107 ---
 css/sections.css              | 1792 +++++++++++++++++++++++++++++++++++++++++
 css/tokens.css                |   74 --
 css/utilities.css             |  120 ---
 directum.html                 |    1 -
 event-detail.html             |    1 -
 events.html                   |    1 -
 index.html                    |    1 -
 project-detail.html           |    1 -
 projects.html                 |    1 -
 solution-detail.html          |    1 -
 solutions.html                |    1 -
 univer-online.html            |    1 -
 vuz.html                      |    1 -
 30 files changed, 1792 insertions(+), 2486 deletions(-)
diff --git a/about.html b/about.html
index d692f3e..527eec0 100644
--- a/about.html
+++ b/about.html
@@ -11,13 +11,12 @@
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/about.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
   <header class="header">
     <div class="container">
diff --git a/client-detail.html b/client-detail.html
index b78b30b..768bb33 100644
--- a/client-detail.html
+++ b/client-detail.html
@@ -7,13 +7,12 @@
   <title>╨а╨Р╨Э╨е╨╕╨У╨б тАФ ╨Ъ╨╗╨╕╨╡╨╜╤В╤Л тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/client-detail.css">
   <link rel="stylesheet" href="css/media.css">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
 </head>
 
 <body>
 
diff --git a/clients.html b/clients.html
index 570476e..b9bb67c 100644
--- a/clients.html
+++ b/clients.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/clients.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/directum.html b/directum.html
index 2a2cc5e..d24a097 100644
--- a/directum.html
+++ b/directum.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/directum.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/event-detail.html b/event-detail.html
index 2d44e5f..7b0625a 100644
--- a/event-detail.html
+++ b/event-detail.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/event-detail.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/events.html b/events.html
index 922222c..7a8e6ae 100644
--- a/events.html
+++ b/events.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/events.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/index.html b/index.html
index 89dc449..7a9316a 100644
--- a/index.html
+++ b/index.html
@@ -11,13 +11,12 @@
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/index.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/project-detail.html b/project-detail.html
index 46a47f4..22551bf 100644
--- a/project-detail.html
+++ b/project-detail.html
@@ -7,13 +7,12 @@
   <title>╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/project-detail.css">
   <link rel="stylesheet" href="css/media.css">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
 </head>
 
 <body>
diff --git a/projects.html b/projects.html
index b5fa927..1ac17e6 100644
--- a/projects.html
+++ b/projects.html
@@ -7,13 +7,12 @@
   <title>╨Я╤А╨╛╨╡╨║╤В╤Л тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/projects.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/solution-detail.html b/solution-detail.html
index a2d2bf0..13dbf95 100644
--- a/solution-detail.html
+++ b/solution-detail.html
@@ -11,13 +11,12 @@
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/solution-detail.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/solutions.html b/solutions.html
index 7a949a8..de991dc 100644
--- a/solutions.html
+++ b/solutions.html
@@ -9,13 +9,12 @@
     content="╨Я╨╛╨┤╨▒╨╕╤А╨░╨╡╨╝ ╨╕ ╨▓╨╜╨╡╨┤╤А╤П╨╡╨╝ ╤А╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓, ╨╛╤В ╨║╨╛╤В╨╛╤А╤Л╤Е ╨╖╨░╨▓╨╕╤Б╤П╤В ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╤А╨░╨▒╨╛╤В╤Л, ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨╛╤Б╤В╤М ╨╕ ╤Г╨┐╤А╨░╨▓╨╗╤П╨╡╨╝╨╛╤Б╤В╤М ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/solutions.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/univer-online.html b/univer-online.html
index 1658c17..127363b 100644
--- a/univer-online.html
+++ b/univer-online.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/univer-online.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
 
   <header class="header">
diff --git a/vuz.html b/vuz.html
index 94bf6cb..cb50008 100644
--- a/vuz.html
+++ b/vuz.html
@@ -10,13 +10,12 @@
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
-  <link rel="stylesheet" href="css/pages/vuz.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
   <header class="header">
     <div class="container">
diff --git a/css/sections.css b/css/sections.css
index 8219ead..6d762cf 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -2739,2 +2739,1794 @@ a.contacts-map__value:hover {
   width: calc((100% - 0.625rem) / 2);
 }
+
+/* ==== from pages/about.css ==== */
+/* about.css - ╤Б╤В╤А╨░╨╜╨╕╤З╨╜╤Л╨╡ ╤Б╨╡╨║╤Ж╨╕╨╕, ╨╕╨╖╨▓╨╗╨╡╤З╨╡╨╜╤Л ╨╕╨╖ sections.css */
+
+.facts__swiper {
+  overflow: visible;
+}
+.facts__card {
+    position: relative;
+    height: 100%;
+    padding: 2.125rem var(--gap-2xl);
+    overflow: hidden;
+}
+.facts__name {
+    font-size: var(--fs-h3);
+    line-height: 1;
+    letter-spacing: -0.02em;
+}
+.facts__text {
+    margin-top: var(--gap-lg);
+    font-size: var(--fs-body-14);
+    max-width: 21.875rem;
+}
+.facts__img {
+    position: absolute;
+    right: var(--gap-xl);
+    bottom: var(--gap-xl);
+    width: 7.5rem;
+    height: 7.5rem;
+    object-fit: cover;
+}
+.facts__img--big {
+    width: 17.5rem;
+    height: 17.5rem;
+    border-radius: 7.5rem;
+}
+.facts__card--partner .facts__img {
+    border-radius: 50%;
+}
+.approach {
+    margin-bottom: 5rem;
+    padding: 2.5rem 0;
+}
+.approach__label {
+    margin-bottom: 1.5rem;
+    text-align: center;
+    color: var(--color-grey);
+}
+.approach__text {
+    margin: 0 auto;
+    text-align: center;
+    font-size: var(--fs-h2);
+    line-height: 1.05;

[sections.css append hunk truncated — spot-check segments via git show of deleted files]
