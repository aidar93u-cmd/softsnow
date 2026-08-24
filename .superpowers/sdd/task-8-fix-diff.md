diff --git a/css/sections.css b/css/sections.css
index fac4f4c..4ee8e73 100644
--- a/css/sections.css
+++ b/css/sections.css
@@ -3264,11 +3264,11 @@ transition: background-color 0.4s, color 0.4s;
   align-items: flex-start;
   height: 28.75rem;
     padding: 2.5rem 2.75rem 2.1875rem;
   overflow: hidden;
   color: var(--color-black);
-  transition: color 0.4s;
+  transition: background-color 0.4s, color 0.4s;
 }
 .industries__bg {
   position: absolute;
   top: 0;
   left: 0;
@@ -3897,11 +3897,11 @@ transition: background-color 0.4s, color 0.4s;
   position: absolute;
   top: 2.5rem;
   right: 2.5rem;
   color: var(--color-black);
   opacity: 0.5;
-  transition: opacity 0.4s, transform 0.4s;
+  transition: opacity 0.4s, transform 0.4s, color 0.4s;
   transform: scale(1);
 }
 
 .catalog__card:hover {
   background: var(--color-blue-alt);
