181b9b2 fix(html/css): restore catalog-arrow hover fade and dropped aria-hidden attrs
diff --git a/about.html b/about.html
index 56d7e85..1c24383 100644
--- a/about.html
+++ b/about.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
@@ -404,80 +404,80 @@
                 <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
diff --git a/article-detail.html b/article-detail.html
index 43cd614..5e24448 100644
--- a/article-detail.html
+++ b/article-detail.html
@@ -85,17 +85,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
 <main>
@@ -179,17 +179,17 @@
               ╨░╨╜╨░╨╗╨╕╤В╨╕╤З╨╡╤Б╨║╨╕╨╡ ╨┐╨░╨╜╨╡╨╗╨╕. ╨Э╨╛&nbsp;╤Б╨░╨╝ ╨┐╨╛&nbsp;╤Б╨╡╨▒╨╡ ╨╜╨░╨▒╨╛╤А ╤А╨╡╤И╨╡╨╜╨╕╨╣ ╨╜╨╡&nbsp;╨│╨░╤А╨░╨╜╤В╨╕╤А╤Г╨╡╤В, ╤З╤В╨╛ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╤Б╤В╨░╨╜╤Г╤В
               ╨▒╤Л╤Б╤В╤А╨╡╨╡, ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨╡╨╡ ╨╕&nbsp;╤Г╨┐╤А╨░╨▓╨╗╤П╨╡╨╝╨╡╨╡.</p>
             <p>╨Э╨░&nbsp;╨┐╤А╨░╨║╤В╨╕╨║╨╡ ╤Б╨╗╨╛╨╢╨╜╨╛╤Б╤В╨╕ ╨╜╨░╤З╨╕╨╜╨░╤О╤В╤Б╤П ╤А╨░╨╜╤М╤И╨╡&nbsp;тАФ ╨╡╤Й╤С ╨╜╨░&nbsp;╤Г╤А╨╛╨▓╨╜╨╡ ╨╗╨╛╨│╨╕╨║╨╕ ╤А╨░╨▒╨╛╤В╤Л. ╨Х╤Б╨╗╨╕ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б
               ╨╕╨╖╨╜╨░╤З╨░╨╗╤М╨╜╨╛ ╨┐╨╡╤А╨╡╨│╤А╤Г╨╢╨╡╨╜, ╨╜╨╡╨╛╤З╨╡╨▓╨╕╨┤╨╡╨╜, ╨╖╨░╨▓╤П╨╖╨░╨╜ ╨╜╨░&nbsp;╤А╤Г╤З╨╜╤Л╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╤П ╨╕&nbsp;╤Г╤Б╤В╨╜╤Л╨╡ ╨┤╨╛╨│╨╛╨▓╨╛╤А╤С╨╜╨╜╨╛╤Б╤В╨╕, ╨┐╤А╨╛╤Б╤В╨╛╨╡
               ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡ ╨╜╨╛╨▓╨╛╨╣ ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╤Л ╨╜╨╡&nbsp;╤А╨╡╤И╨░╨╡╤В ╨┐╤А╨╛╨▒╨╗╨╡╨╝╤Г. ╨Т&nbsp;╨╗╤Г╤З╤И╨╡╨╝ ╤Б╨╗╤Г╤З╨░╨╡ ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╤П ╨┐╨╛╨╗╤Г╤З╨░╨╡╤В ╨▒╨╛╨╗╨╡╨╡
               ╤Б╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╣ ╨╕╨╜╤В╨╡╤А╤Д╨╡╨╣╤Б. ╨Т&nbsp;╤Е╤Г╨┤╤И╨╡╨╝&nbsp;тАФ ╨┐╨╡╤А╨╡╨╜╨╛╤Б╨╕╤В ╤Б╤В╨░╤А╤Л╨╡ ╤Б╨╗╨╛╨╢╨╜╨╛╤Б╤В╨╕ ╨▓&nbsp;╨╜╨╛╨▓╤Г╤О ╤Б╨╕╤Б╤В╨╡╨╝╤Г.</p>
           </div>
           <figure class="article-block__quote">
-            <svg width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+            <svg aria-hidden="true" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
             <blockquote>
               <p>╨Т&nbsp;╨┐╤А╨╛╨╡╨║╤В╨╡ ╨┤╨╗╤П ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨╜╨░╤З╨░╨╗╨░╤Б╤М
                 ╨╜╨╡&nbsp;╤Б&nbsp;╨┐╨╡╤А╨╡╨╜╨╛╤Б╨░ ╤Б╤В╨░╤А╨╛╨╣ ╨╗╨╛╨│╨╕╨║╨╕ ╨▓&nbsp;╨╜╨╛╨▓╤Г╤О ╤Б╨╕╤Б╤В╨╡╨╝╤Г, ╨░&nbsp;╤Б&nbsp;╨┐╨╡╤А╨╡╤Е╨╛╨┤╨░ ╨╜╨░&nbsp;╨╜╨╛╨▓╤Г╤О
                 ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Г, ╨┐╨╛╤Н╤В╨░╨┐╨╜╨╛╨│╨╛ ╨╖╨░╨┐╤Г╤Б╨║╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨╕&nbsp;╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨╕ ╨▒╨░╨╖╤Л ╨┤╨╗╤П ╨┤╨░╨╗╤М╨╜╨╡╨╣╤И╨╡╨│╨╛ ╤А╨░╨╖╨▓╨╕╤В╨╕╤П.
                 ╨Э╨░&nbsp;╤Б╤В╨░╤А╤В╨╡ ╨▒╤Л╨╗╨╕ ╨╖╨░╨┐╤Г╤Й╨╡╨╜╤Л ╨║╨╗╨░╤Б╤Б╨╕╤З╨╡╤Б╨║╨╕╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╨н╨Ф╨Ю, ╨░&nbsp;╨╖╨░╤В╨╡╨╝&nbsp;тАФ ╤Б╨╗╨╡╨┤╤Г╤О╤Й╨╕╨╣ ╤Н╤В╨░╨┐
                 ╤Б&nbsp;╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╝ ╨░╤А╤Е╨╕╨▓╨╛╨╝ ╨╕&nbsp;╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╨░╨╝╨╕.</p>
             </blockquote>
             <figcaption class="article-block__author">
diff --git a/client-detail.html b/client-detail.html
index 2999285..df05503 100644
--- a/client-detail.html
+++ b/client-detail.html
@@ -85,17 +85,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
@@ -178,17 +178,17 @@
     </section>
 
     <section class="client-quote">
       <div class="container">
         <div class="client-quote__inner">
           <h2 class="client-quote__title">╨з╤В╨╛ ╨│╨╛╨▓╨╛╤А╨╕╤В<br>╨╛ ╨╜╨░╤Б ╨║╨╗╨╕╨╡╨╜╤В</h2>
           <div class="client-quote__grid">
             <div class="client-quote__quote">
-              <svg class="client-quote__icon" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+              <svg aria-hidden="true" class="client-quote__icon" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
               <p class="client-quote__text">╨Т ╨┐╤А╨╛╨╡╨║╤В╨╡ ╨╜╨░╨╝ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                 ╨║╨╛╨╝╨░╨╜╨┤╤Л ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г, ╨▒╨╛╨╗╤М╤И╨╛╨╡ ╨║╨╛╨╗╨╕╤З╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣ ╨╕ ╨╜╨╡╨╛╨▒╤Е╨╛╨┤╨╕╨╝╨╛╤Б╤В╤М ╤А╨░╨╖╨▓╨╕╨▓╨░╤В╤М
                 ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г ╨┐╨╛╤Н╤В╨░╨┐╨╜╨╛. SoftSnow ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕ ╤Б╨╡╨▒╤П ╨║╨░╨║ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б
                 ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕, ╨╕ ╤Б ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╤П╨╝╨╕.</p>
               <div class="client-quote__author">
                 <img class="client-quote__avatar" src="assets/img/logo-ranepa.svg" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="64" height="64">
                 <div class="client-quote__who">
                   <span class="client-quote__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
diff --git a/clients.html b/clients.html
index 57eecf5..a114da0 100644
--- a/clients.html
+++ b/clients.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/contacts.html b/contacts.html
index 2a868fb..faa7744 100644
--- a/contacts.html
+++ b/contacts.html
@@ -86,17 +86,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/css/pages/solutions.css b/css/pages/solutions.css
index 6ed5657..a7f815a 100644
--- a/css/pages/solutions.css
+++ b/css/pages/solutions.css
@@ -58,36 +58,32 @@
 .catalog__feat {
   font-size: var(--fs-body-16);
 }
 .catalog__arrow {
   position: absolute;
   top: 2.5rem;
   right: 2.5rem;
   color: var(--color-black);
+  opacity: 0.5;
   transition: all 0.4s;
   transform: scale(1);
 }
 .catalog__plus {
   display: none;
 }
 .catalog__card:hover {
   background: var(--color-blue-alt);
   color: var(--color-white);
 }
 .catalog__card:hover .catalog__head,
 .catalog__card:hover .catalog__feat,
 .catalog__card:hover .catalog__arrow {
   color: var(--color-white);
 }
-.catalog__arrow path {
-  fill: currentColor;
-}
 .catalog__card:hover .catalog__arrow {
+  opacity: 1;
   transform: scale(2);
 }
 .catalog__card:hover .catalog__plus {
   color: var(--color-white);
   border-color: rgba(255, 255, 255, 0.2);
 }
-.catalog__card:hover .catalog__arrow path{
-    opacity: 1;
-}
diff --git a/directum.html b/directum.html
index d8f369a..31f24f9 100644
--- a/directum.html
+++ b/directum.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
@@ -309,43 +309,43 @@
           </div>
         </div>
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
+                  <svg aria-hidden="true" class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨Т&nbsp;╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░&nbsp;Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░
                   ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕&nbsp;╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛
                   ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕&nbsp;╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
                   height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
+                  <svg aria-hidden="true" class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░&nbsp;╨▒╨░╨╖╨╡
                   ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
+                  <svg aria-hidden="true" class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░&nbsp;╨▒╨░╨╖╨╡
                   ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo projects__logo--sm" src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
                 <span class="projects__year">2025</span>
               </a>
diff --git a/event-detail.html b/event-detail.html
index 7b9151f..69e1c7b 100644
--- a/event-detail.html
+++ b/event-detail.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/events.html b/events.html
index 793b67d..0f9e14d 100644
--- a/events.html
+++ b/events.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/index.html b/index.html
index 7210fa9..5970600 100644
--- a/index.html
+++ b/index.html
@@ -88,17 +88,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button" data-fancybox data-src="#request-popup">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М
             ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
diff --git a/project-detail.html b/project-detail.html
index 903dcd0..68baa2a 100644
--- a/project-detail.html
+++ b/project-detail.html
@@ -86,17 +86,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/projects.html b/projects.html
index fb5aa27..9a54730 100644
--- a/projects.html
+++ b/projects.html
@@ -84,17 +84,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/solution-detail.html b/solution-detail.html
index 1c9b796..1271229 100644
--- a/solution-detail.html
+++ b/solution-detail.html
@@ -88,17 +88,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
@@ -568,80 +568,80 @@
                 <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
diff --git a/solutions.html b/solutions.html
index 4469f4c..58c16fa 100644
--- a/solutions.html
+++ b/solutions.html
@@ -86,17 +86,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button" data-fancybox data-src="#request-popup">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М
             ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
diff --git a/univer-online.html b/univer-online.html
index 3557dea..916d1af 100644
--- a/univer-online.html
+++ b/univer-online.html
@@ -87,17 +87,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
diff --git a/vuz.html b/vuz.html
index f66d7ec..f31a1ad 100644
--- a/vuz.html
+++ b/vuz.html
@@ -86,17 +86,17 @@
           <span></span>
         </button>
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
+            <svg aria-hidden="true" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
 
   <main>
@@ -573,80 +573,80 @@
                 <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/logo-polymetal.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="60"
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
+                <svg aria-hidden="true" class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
                   </div>
                   <img class="testimonials__logo" src="assets/img/solution-t-logo.png" alt="╨Ы╨╛╨│╨╛╤В╨╕╨┐ ╨║╨╗╨╕╨╡╨╜╤В╨░" width="60"
