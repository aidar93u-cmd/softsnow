5d1c4cc refactor(css): merge tokens+utilities+components into base.css
 about.html           |   4 +-
 article-detail.html  |   4 +-
 client-detail.html   |   4 +-
 clients.html         |   4 +-
 contacts.html        |   4 +-
 css/base.css         | 710 +++++++++++++++++++++++++++++++++++++++++++++++++++
 directum.html        |   4 +-
 event-detail.html    |   4 +-
 events.html          |   4 +-
 index.html           |   4 +-
 project-detail.html  |   4 +-
 projects.html        |   4 +-
 solution-detail.html |   4 +-
 solutions.html       |   4 +-
 univer-online.html   |   4 +-
 vuz.html             |   4 +-
 16 files changed, 725 insertions(+), 45 deletions(-)
diff --git a/about.html b/about.html
index 1c24383..d692f3e 100644
--- a/about.html
+++ b/about.html
@@ -9,15 +9,13 @@
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/about.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/article-detail.html b/article-detail.html
index 5e24448..082f851 100644
--- a/article-detail.html
+++ b/article-detail.html
@@ -5,15 +5,13 @@
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>╨Я╨╛╤З╨╡╨╝╤Г ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤П ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨╜╨╡ ╤А╨░╨▒╨╛╤В╨░╨╡╤В ╨▒╨╡╨╖ ╨┐╨╡╤А╨╡╤Б╨▒╨╛╤А╨║╨╕ ╤Б╨░╨╝╨╛╨╣ ╨╗╨╛╨│╨╕╨║╨╕ ╤А╨░╨▒╨╛╤В╤Л тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/media.css">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
 </head>
 
diff --git a/client-detail.html b/client-detail.html
index df05503..b78b30b 100644
--- a/client-detail.html
+++ b/client-detail.html
@@ -5,15 +5,13 @@
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>╨а╨Р╨Э╨е╨╕╨У╨б тАФ ╨Ъ╨╗╨╕╨╡╨╜╤В╤Л тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/client-detail.css">
   <link rel="stylesheet" href="css/media.css">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
 </head>
 
diff --git a/clients.html b/clients.html
index a114da0..570476e 100644
--- a/clients.html
+++ b/clients.html
@@ -8,15 +8,13 @@
   <meta name="description"
     content="╨б 2021 ╨│╨╛╨┤╨░ SoftSnow ╨┐╨╛╨╝╨╛╨│╨░╨╡╤В ╨▓╤Г╨╖╨░╨╝, ╨│╨╛╤Б╨║╨╛╤А╨┐╨╛╤А╨░╤Ж╨╕╤П╨╝ ╨╕ ╨▒╨╕╨╖╨╜╨╡╤Б╤Г ╨▓╨╜╨╡╨┤╤А╤П╤В╤М ╤Ж╨╕╤Д╤А╨╛╨▓╤Л╨╡ ╤А╨╡╤И╨╡╨╜╨╕╤П.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/clients.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/contacts.html b/contacts.html
index faa7744..2eb6ad8 100644
--- a/contacts.html
+++ b/contacts.html
@@ -9,15 +9,13 @@
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
   <header class="header">
diff --git a/directum.html b/directum.html
index 31f24f9..2a2cc5e 100644
--- a/directum.html
+++ b/directum.html
@@ -8,15 +8,13 @@
   <meta name="description"
     content="SoftSnow тАФ ╨╛╤Д╨╕╤Ж╨╕╨░╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А Directum. ╨Т╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣ Directum: ╨б╨н╨Ф+, HR Pro, Projects, Targets, ESM, Omni.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/directum.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/event-detail.html b/event-detail.html
index 69e1c7b..2d44e5f 100644
--- a/event-detail.html
+++ b/event-detail.html
@@ -8,15 +8,13 @@
   <meta name="description"
     content="╨Ю╨╜╨╗╨░╨╣╨╜-╤Б╨╡╨╝╨╕╨╜╨░╤А SoftSnow: ╨║╨░╨║ ╨╜╨░╤Б╤В╤А╨╛╨╕╤В╤М ╤Б╨╕╤Б╤В╨╡╨╝╨╜╤Г╤О ╤А╨░╨▒╨╛╤В╤Г ╨╜╨░╨┤ ╨▒╤Г╨┤╤Г╤Й╨╕╨╝ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨░. ╨а╨╡╨│╨╕╤Б╤В╤А╨░╤Ж╨╕╤П ╨╜╨░ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/event-detail.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/events.html b/events.html
index 0f9e14d..922222c 100644
--- a/events.html
+++ b/events.html
@@ -8,15 +8,13 @@
   <meta name="description"
     content="╨Т╨╡╨▒╨╕╨╜╨░╤А╤Л, ╤Б╤В╨░╤В╤М╨╕ ╨╕ ╨╜╨╛╨▓╨╛╤Б╤В╨╕ SoftSnow: ╤А╨░╨╖╨▒╨╕╤А╨░╨╡╨╝ ╨║╨╡╨╣╤Б╤Л ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╨╕ ╨▓╤Г╨╖╨╛╨▓, ╨┤╨╡╨╗╨╕╨╝╤Б╤П ╨╛╨┐╤Л╤В╨╛╨╝ ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╨░╨╜╨╛╨╜╤Б╨╕╤А╤Г╨╡╨╝ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/events.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/index.html b/index.html
index 5970600..89dc449 100644
--- a/index.html
+++ b/index.html
@@ -9,15 +9,13 @@
     content="╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕ ╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А. ╨Ш╨╜╤В╨╡╨│╤А╨╕╤А╤Г╨╡╨╝ ╤А╨░╨╖╤А╨╛╨╖╨╜╨╡╨╜╨╜╤Л╨╡ ╤Б╨╕╤Б╤В╨╡╨╝╤Л ╨▓ ╤Б╨╗╨░╨╢╨╡╨╜╨╜╤Г╤О ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Г.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/index.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/project-detail.html b/project-detail.html
index 68baa2a..46a47f4 100644
--- a/project-detail.html
+++ b/project-detail.html
@@ -5,15 +5,13 @@
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/project-detail.css">
   <link rel="stylesheet" href="css/media.css">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
 </head>
diff --git a/projects.html b/projects.html
index 9a54730..b5fa927 100644
--- a/projects.html
+++ b/projects.html
@@ -5,15 +5,13 @@
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>╨Я╤А╨╛╨╡╨║╤В╤Л тАФ SoftSnow</title>
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/projects.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/solution-detail.html b/solution-detail.html
index 1271229..a2d2bf0 100644
--- a/solution-detail.html
+++ b/solution-detail.html
@@ -9,15 +9,13 @@
     content="╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓, ╨║╨╛╤В╨╛╤А╨╛╨╡ ╤Г╨┐╤А╨╛╤Й╨░╨╡╤В ╤Б╨▒╨╛╤А ╨╕ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╤Г ╨╖╨░╤П╨▓╨╗╨╡╨╜╨╕╨╣, ╤Б╨╜╨╕╨╢╨░╨╡╤В ╨╜╨░╨│╤А╤Г╨╖╨║╤Г ╨╜╨░ ╤Б╨╛╤В╤А╤Г╨┤╨╜╨╕╨║╨╛╨▓ ╨╕ ╨┤╨╡╨╗╨░╨╡╤В ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
   <link rel="stylesheet" href="assets/vendor/fancybox/fancybox.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/solution-detail.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/solutions.html b/solutions.html
index babcb45..7a949a8 100644
--- a/solutions.html
+++ b/solutions.html
@@ -7,15 +7,13 @@
   <title>╨а╨╡╤И╨╡╨╜╨╕╤П тАФ SoftSnow</title>
   <meta name="description"
     content="╨Я╨╛╨┤╨▒╨╕╤А╨░╨╡╨╝ ╨╕ ╨▓╨╜╨╡╨┤╤А╤П╨╡╨╝ ╤А╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓, ╨╛╤В ╨║╨╛╤В╨╛╤А╤Л╤Е ╨╖╨░╨▓╨╕╤Б╤П╤В ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╤А╨░╨▒╨╛╤В╤Л, ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨╛╤Б╤В╤М ╨╕ ╤Г╨┐╤А╨░╨▓╨╗╤П╨╡╨╝╨╛╤Б╤В╤М ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/solutions.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/univer-online.html b/univer-online.html
index 916d1af..1658c17 100644
--- a/univer-online.html
+++ b/univer-online.html
@@ -8,15 +8,13 @@
   <meta name="description"
     content="Univer Online тАФ ╨║╨╛╨╝╨┐╨╗╨╡╨║╤Б ╤Ж╨╕╤Д╤А╨╛╨▓╤Л╤Е ╤Б╨╡╤А╨▓╨╕╤Б╨╛╨▓ ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓: ╨╗╨╕╤З╨╜╤Л╨╡ ╨║╨░╨▒╨╕╨╜╨╡╤В╤Л, ╨╝╨╛╨▒╨╕╨╗╤М╨╜╨╛╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡ ╨╕ ╤Б╨╡╤А╨▓╨╕╤Б╤Л ╨▓ ╨╡╨┤╨╕╨╜╨╛╨╣ ╤Б╤А╨╡╨┤╨╡.">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/univer-online.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/vuz.html b/vuz.html
index f31a1ad..94bf6cb 100644
--- a/vuz.html
+++ b/vuz.html
@@ -8,15 +8,13 @@
   <meta name="description" content="╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П ╤Ж╨╕╤Д╤А╨╛╨▓╤Л╤Е ╤Б╤А╨╡╨┤ ╨┤╨╗╤П ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╤В╨╡╨╗╤М╨╜╤Л╤Е ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╣">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css">
-  <link rel="stylesheet" href="css/tokens.css">
-  <link rel="stylesheet" href="css/utilities.css">
-  <link rel="stylesheet" href="css/components.css">
+  <link rel="stylesheet" href="css/base.css">
   <link rel="stylesheet" href="css/sections.css">
   <link rel="stylesheet" href="css/pages/vuz.css">
   <link rel="stylesheet" href="css/media.css">
 </head>
 
 <body>
diff --git a/css/base.css b/css/base.css
new file mode 100644
index 0000000..82c46d2
--- /dev/null
+++ b/css/base.css
@@ -0,0 +1,710 @@
+/* ==== from tokens.css ==== */
+:root {
+  /* Colors */
+  --color-black: #222222;
+  --color-white: #FFFFFF;
+  --color-sea: #1342F3;
+
+  --color-grey: rgba(34, 34, 34, 0.7);
+  --color-overlay: rgba(0, 0, 0, 0.2);
+  --color-blue-alt: #1342F3;
+  --color-red: #ED143B;
+
+  /* Backgrounds */
+  --bg-light: #F5F4F5;
+  --bg-light-alt: #F5F5F5;
+  --bg-border: #E8E8E8;
+
+  /* Gradients */
+
+  /* Fonts */
+  --font-heading: 'Inter', sans-serif;
+  --font-body: 'Inter', sans-serif;
+
+  /* Type scale */
+  --fs-h1: 6.25rem;
+  --fs-h2: 4.375rem;
+  --fs-h3: 2.5rem;
+  --fs-h4: 1.25rem;
+  --fs-numbers: 4.6875rem;
+  --fs-body-24: 1.5rem;
+  --fs-body-20: 1.25rem;
+  --fs-body-18: 1.125rem;
+  --fs-body-16: 1rem;
+  --fs-body-14: 0.875rem;
+  --fs-body-12: 0.75rem;
+
+  /* Controls */
+  --control-h: 4rem;
+
+  /* Spacing */
+  --section-px: 2.5rem;
+  --gap-xs: 0.5rem;
+  --gap-sm: 0.625rem;
+  --gap-md: 1rem;
+  --gap-lg: 1.25rem;
+  --gap-xl: 1.875rem;
+  --gap-2xl: 2.5rem;
+  --gap-3xl: 3.125rem;
+  --gap-4xl: 3.75rem;
+
+  /* Radius */
+  --radius-xs: 0.25rem;
+  --radius-sm: 0.3125rem;
+  --radius-md: 0.625rem;
+  --radius-lg: 1.25rem;
+  --radius-xl: 3.125rem;
+  --radius-full: 23.625rem;
+
+  /* Borders */
+
+  /* Opacity */
+  --opacity-70: 0.7;
+
+  /* Shadows */
+  --shadow-popover: 0 1.25rem 3.125rem rgba(34, 34, 34, 0.12);
+
+  /* Transitions */
+  --transition-fast: 0.2s;
+  --transition-base: 0.3s;
+  --transition-slow: 0.35s;
+
+  /* Z-index */
+  --z-header: 2;
+  --z-popover: 20;
+}
+/* ==== from utilities.css ==== */
+* {
+	margin: 0;
+	padding: 0;
+	box-sizing: border-box;
+}
+
+/* ╨в╨╛╤З╨╡╤З╨╜╤Л╨╡ ╨┐╨╡╤А╨╡╤Е╨╛╨┤╤Л ╨▓╨╝╨╡╤Б╤В╨╛ ╨│╨╗╨╛╨▒╨░╨╗╤М╨╜╨╛╨│╨╛ transition: all тАФ
+   ╨░╨╜╨╕╨╝╨╕╤А╤Г╨╡╨╝ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╛, ╤З╤В╨╛ ╤А╨╡╨░╨╗╤М╨╜╨╛ ╨╝╨╡╨╜╤П╨╡╤В╤Б╤П (hover/focus),
+   ╨╕ ╨╜╨╡ ╨╝╨╡╤И╨░╨╡╨╝ responsive-╨┐╨╡╤А╨╡╤Е╨╛╨┤╨░╨╝ ╨╝╨╡╨╢╨┤╤Г ╨▒╤А╨╡╨╣╨║╨┐╨╛╨╕╨╜╤В╨░╨╝╨╕. */
+button,
+a,
+.btn,
+.card,
+.tabs__btn {
+	transition:
+		background-color 0.4s,
+		border-color 0.4s,
+		color 0.4s,
+		opacity 0.4s,
+		transform 0.4s;
+}
+
+html {
+	font-size: 16px;
+}
+
+body {
+	font-family: var(--font-body);
+	font-size: var(--fs-body-16);
+	line-height: 1.4;
+	color: var(--color-black);
+	background: var(--bg-border);
+	-webkit-font-smoothing: antialiased;
+    letter-spacing: -0.03rem;
+}
+
+h1,
+h2,

[base.css truncated in this capture - verify via segment checks]
