79789cf refactor(html): replace inline SVG duplicates with external sprite
 about.html           | 173 ++++----------------------
 article-detail.html  | 158 +++---------------------
 client-detail.html   | 147 +++--------------------
 clients.html         | 333 +++++++--------------------------------------------
 contacts.html        | 125 ++-----------------
 directum.html        | 159 ++++--------------------
 event-detail.html    | 135 ++-------------------
 events.html          | 174 +++++----------------------
 index.html           | 203 ++++++-------------------------
 project-detail.html  | 150 +++--------------------
 projects.html        | 152 +++--------------------
 solution-detail.html | 221 +++++-----------------------------
 solutions.html       | 149 ++---------------------
 univer-online.html   | 161 ++++---------------------
 vuz.html             | 239 ++++++------------------------------
 15 files changed, 346 insertions(+), 2333 deletions(-)
diff --git a/about.html b/about.html
index 01adb04..56d7e85 100644
--- a/about.html
+++ b/about.html
@@ -22,57 +22,22 @@
 
 <body>
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -198,48 +159,48 @@
             ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╤А╨╡╤И╨╡╨╜╨╕╤П</h2>
           <ul class="tasks__list">
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-1-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-2-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨Ъ╨░╨┤╤А╨╛╨▓╤Л╨╣ ╤Н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-3-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-4-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤Б╤В╤А╨░╤В╨╡╨│╨╕╨╡╨╣</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-5-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤А╨╛╨╡╨║╤В╨░╨╝╨╕</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-6-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨а╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
           </ul>
           <div class="tasks__footer">
             <button class="btn btn--ghost btn--lg" type="button">╨Т╤Б╨╡ ╤А╨╡╤И╨╡╨╜╨╕╤П</button>
           </div>
@@ -254,16 +215,13 @@
           <h2 class="cta--blue__title">╨б╨║╨░╤З╨░╨╣╤В╨╡&nbsp;╨┐╨╛╨┤╨▒╨╛╤А╨║╤Г ╤А╨╡╨░╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╤Л╤Е&nbsp;╨┐╤А╨╛╨╡╨║╤В╨╛╨▓</h2>
           <p class="cta--blue__text">╨Т ╨╛╨┤╨╜╨╛╨╝ ╨╝╨░╤В╨╡╤А╨╕╨░╨╗╨╡ тАФ ╨┐╤А╨╕╨╝╨╡╤А╤Л ╤А╨╡╨░╨╗╨╕╨╖╨╛╨▓╨░╨╜╨╜╤Л╤Е ╤А╨╡╤И╨╡╨╜╨╕╨╣, ╨┐╨╛╨┤╤Е╨╛╨┤╤Л ╨║&nbsp;╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤О
             ╨╕&nbsp;╨┐╤А╨╛╨╡╨║╤В╤Л ╨╕╨╖ ╤А╨░╨╖╨╜╤Л╤Е ╨╛╤В╤А╨░╤Б╨╗╨╡╨╣ ╨╕ ╤Б╨╡╨│╨╝╨╡╨╜╤В╨╛╨▓.</p>
           <button class="btn btn--outline-white btn--lg" type="button">
             <span>╨б╨║╨░╤З╨░╤В╤М ╨┐╤А╨╡╨╖╨╡╨╜╤В╨░╤Ж╨╕╤О</span>
 
-            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path d="M0.75 14.75H12.75M6.75 0.75V10.75M3.25 7.25L6.75 10.75L10.25 7.25" stroke-width="1.5"
-                stroke-linecap="square" stroke-linejoin="round" />
-            </svg>
+            <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><use href="assets/img/sprite.svg#icon-download"/></svg>
 
           </button>
         </div>
       </div>
     </section>
 
@@ -273,17 +231,17 @@
           <div class="projects__inner">
             <h2 class="projects__heading">SoftSnow&nbsp;тАФ<br>╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╨░╤П<br>IT-╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</h2>
             <div class="projects__actions">
               <div class="carousel-nav">
                 <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15" height="14"
                     viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
                 <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15" height="14"
                     viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
               </div>
             </div>
           </div>
         </div>
         <div class="swiper facts__swiper">
@@ -357,17 +315,13 @@
           <h2 class="video__title">╨Т╨╕╨┤╨╡╨╛-╨▓╨╕╨╖╨╕╤В╨║╨░<br>
           ╨║╨╛╨╝╨┐╨░╨╜╨╕╨╕</h2>
           <div class="video__player">
             <img class="video__poster" src="assets/img/video-placeholder-2.jpg" alt="╨Т╨╕╨┤╨╡╨╛ ╨╛ ╨┐╤А╨╛╨╡╨║╤В╨╡">
             <button class="video__play" type="button" aria-label="╨б╨╝╨╛╤В╤А╨╡╤В╤М ╨▓╨╕╨┤╨╡╨╛"
               data-video-src="assets/12488934_3840_2160_30fps.mp4">
-              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M74.7826 36.9877C77.1014 38.3265 77.1014 41.6735 74.7826 43.0123L25.2174 71.6288C22.8985 72.9675 20 71.2941 20 68.6165L20 11.3835C20 8.70594 22.8986 7.03246 25.2174 8.37124L74.7826 36.9877Z"
-                  fill="white" />
-              </svg>
+              <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><use href="assets/img/sprite.svg#icon-play"/></svg>
 
             </button>
           </div>
         </div>
       </div>
     </section>
@@ -440,29 +394,25 @@
       <div class="container">
         <div class="testimonials__head">
           <h2 class="testimonials__title">╨з╤В╨╛ ╨│╨╛╨▓╨╛╤А╤П╤В ╨║╨╗╨╕╨╡╨╜╤В╤Л</h2>
           <div class="carousel-nav">
             <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15" height="14"
                 viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-left" />
+                <use href="assets/img/sprite.svg#icon-arrow-left" />
               </svg></button>
             <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15" height="14"
                 viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-right" />
+                <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -472,17 +422,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -492,17 +438,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -511,17 +453,13 @@
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -531,17 +469,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
@@ -568,61 +502,27 @@
     </section>
     <footer class="footer">
       <div class="container footer__inner">
         <div class="footer__brand">
           <div class="footer__brand-top">
             <div class="footer__logo">
-              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                  fill="white" stroke="white" />
-                <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              </svg>
+              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
               <span class="footer__logo-text">SOFTSNOW</span>
             </div>
             <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
           </div>
           <div class="footer__brand-bottom">
             <div class="footer__social">
               <a href="#" class="footer__social-link" aria-label="Rutube">
-                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <g clip-path="url(#clip0_3007_679)">
-                    <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                      width="40" height="40">
-                      <path
-                        d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                        fill="white" />
-                    </mask>
-                    <g mask="url(#mask0_3007_679)">
-                      <path d="M40 0H0V40H40V0Z" fill="white" />
-                      <path
-                        d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                        fill="#ED143B" />
-                      <path
-                        d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                        fill="#100943" />
-                    </g>
-                  </g>
-                  <defs>
-                    <clipPath id="clip0_3007_679">
-                      <rect width="40" height="40" fill="white" />
-                    </clipPath>
-                  </defs>
-                </svg>
+                <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
               </a>
               <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_633_379)">
                     <rect x="6" y="10" width="30" height="20" fill="white" />
-                    <path fill-rule="evenodd" clip-rule="evenodd"
-                      d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                      fill="#1F67F9" />
+                    <use href="assets/img/sprite.svg#icon-vk"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_633_379">
                       <rect width="40" height="40" fill="white" />
                     </clipPath>
                   </defs>
@@ -660,37 +560,12 @@
             <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
           </div>
         </div>
       </div>
     </footer>
 
-    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-      <defs>
-        <symbol id="icon-arrow" viewBox="0 0 17 14">
-          <path
-            d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-          <path
-            d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-          <path
-            d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-      </defs>
-    </svg>
 
     <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
     <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
     <script src="js/main.js"></script>
 </body>
 
diff --git a/article-detail.html b/article-detail.html
index 18b3df6..43cd614 100644
--- a/article-detail.html
+++ b/article-detail.html
@@ -20,57 +20,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -79,13 +44,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -122,17 +87,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -220,17 +181,13 @@
             <p>╨Э╨░&nbsp;╨┐╤А╨░╨║╤В╨╕╨║╨╡ ╤Б╨╗╨╛╨╢╨╜╨╛╤Б╤В╨╕ ╨╜╨░╤З╨╕╨╜╨░╤О╤В╤Б╤П ╤А╨░╨╜╤М╤И╨╡&nbsp;тАФ ╨╡╤Й╤С ╨╜╨░&nbsp;╤Г╤А╨╛╨▓╨╜╨╡ ╨╗╨╛╨│╨╕╨║╨╕ ╤А╨░╨▒╨╛╤В╤Л. ╨Х╤Б╨╗╨╕ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б
               ╨╕╨╖╨╜╨░╤З╨░╨╗╤М╨╜╨╛ ╨┐╨╡╤А╨╡╨│╤А╤Г╨╢╨╡╨╜, ╨╜╨╡╨╛╤З╨╡╨▓╨╕╨┤╨╡╨╜, ╨╖╨░╨▓╤П╨╖╨░╨╜ ╨╜╨░&nbsp;╤А╤Г╤З╨╜╤Л╨╡ ╨┤╨╡╨╣╤Б╤В╨▓╨╕╤П ╨╕&nbsp;╤Г╤Б╤В╨╜╤Л╨╡ ╨┤╨╛╨│╨╛╨▓╨╛╤А╤С╨╜╨╜╨╛╤Б╤В╨╕, ╨┐╤А╨╛╤Б╤В╨╛╨╡
               ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡ ╨╜╨╛╨▓╨╛╨╣ ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╤Л ╨╜╨╡&nbsp;╤А╨╡╤И╨░╨╡╤В ╨┐╤А╨╛╨▒╨╗╨╡╨╝╤Г. ╨Т&nbsp;╨╗╤Г╤З╤И╨╡╨╝ ╤Б╨╗╤Г╤З╨░╨╡ ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╤П ╨┐╨╛╨╗╤Г╤З╨░╨╡╤В ╨▒╨╛╨╗╨╡╨╡
               ╤Б╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╣ ╨╕╨╜╤В╨╡╤А╤Д╨╡╨╣╤Б. ╨Т&nbsp;╤Е╤Г╨┤╤И╨╡╨╝&nbsp;тАФ ╨┐╨╡╤А╨╡╨╜╨╛╤Б╨╕╤В ╤Б╤В╨░╤А╤Л╨╡ ╤Б╨╗╨╛╨╢╨╜╨╛╤Б╤В╨╕ ╨▓&nbsp;╨╜╨╛╨▓╤Г╤О ╤Б╨╕╤Б╤В╨╡╨╝╤Г.</p>
           </div>
           <figure class="article-block__quote">
-            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-              <path
-                d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                fill="#1342F3" />
-            </svg>
+            <svg width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
             <blockquote>
               <p>╨Т&nbsp;╨┐╤А╨╛╨╡╨║╤В╨╡ ╨┤╨╗╤П ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨╜╨░╤З╨░╨╗╨░╤Б╤М
                 ╨╜╨╡&nbsp;╤Б&nbsp;╨┐╨╡╤А╨╡╨╜╨╛╤Б╨░ ╤Б╤В╨░╤А╨╛╨╣ ╨╗╨╛╨│╨╕╨║╨╕ ╨▓&nbsp;╨╜╨╛╨▓╤Г╤О ╤Б╨╕╤Б╤В╨╡╨╝╤Г, ╨░&nbsp;╤Б&nbsp;╨┐╨╡╤А╨╡╤Е╨╛╨┤╨░ ╨╜╨░&nbsp;╨╜╨╛╨▓╤Г╤О
                 ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╤Г, ╨┐╨╛╤Н╤В╨░╨┐╨╜╨╛╨│╨╛ ╨╖╨░╨┐╤Г╤Б╨║╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨╕&nbsp;╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨╕ ╨▒╨░╨╖╤Л ╨┤╨╗╤П ╨┤╨░╨╗╤М╨╜╨╡╨╣╤И╨╡╨│╨╛ ╤А╨░╨╖╨▓╨╕╤В╨╕╤П.
                 ╨Э╨░&nbsp;╤Б╤В╨░╤А╤В╨╡ ╨▒╤Л╨╗╨╕ ╨╖╨░╨┐╤Г╤Й╨╡╨╜╤Л ╨║╨╗╨░╤Б╤Б╨╕╤З╨╡╤Б╨║╨╕╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╨н╨Ф╨Ю, ╨░&nbsp;╨╖╨░╤В╨╡╨╝&nbsp;тАФ ╤Б╨╗╨╡╨┤╤Г╤О╤Й╨╕╨╣ ╤Н╤В╨░╨┐
                 ╤Б&nbsp;╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╝ ╨░╤А╤Е╨╕╨▓╨╛╨╝ ╨╕&nbsp;╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╨░╨╝╨╕.</p>
@@ -257,17 +214,17 @@
             <p class="gallery__sub">╨Ъ╨░╨║ ╨▓╤Л╨│╨╗╤П╨┤╨╡╨╗╨░ ╤А╨░╨▒╨╛╤В╨░ ╨╜╨░╨┤ ╨┐╤А╨╛╨╡╨║╤В╨╛╨╝: ╨║╨╛╨╝╨░╨╜╨┤╨░, ╨▓╤Б╤В╤А╨╡╤З╨╕ ╤Б&nbsp;╨╖╨░╨║╨░╨╖╤З╨╕╨║╨╛╨╝
               ╨╕&nbsp;╨╕╨╜╤В╨╡╤А╤Д╨╡╨╣╤Б╤Л ╤Б╨╕╤Б╤В╨╡╨╝╤Л ╨╜╨░&nbsp;╤А╨░╨╖╨╜╤Л╤Е ╤Н╤В╨░╨┐╨░╤Е ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П.</p>
           </div>
           <div class="carousel-nav">
             <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-left" />
+                <use href="assets/img/sprite.svg#icon-arrow-left" />
               </svg></button>
             <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-right" />
+                <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper gallery__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide"><img class="gallery__img" src="assets/img/article-post-gallery.jpg"
@@ -324,17 +281,13 @@
         <p class="video__sub">╨Ъ╨░╨║ ╨╝╤Л&nbsp;╨┐╨╡╤А╨╡╤Б╨╛╨▒╤А╨░╨╗╨╕ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╨┤╨╛&nbsp;╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╤Б╨╕╤Б╤В╨╡╨╝╤Л&nbsp;тАФ ╤Б&nbsp;╤З╨╡╨│╨╛ ╨╜╨░╤З╨╕╨╜╨░╨╗╨╕,
           ╨║╨░╨║╨╕╨╡ ╤И╨░╨│╨╕ ╤Г╨┐╤А╨╛╤Б╤В╨╕╨╗╨╕ ╨╕&nbsp;╤З╤В╨╛ ╤Н╤В╨╛ ╨┤╨░╨╗╨╛ ╨║╨╛╨╝╨░╨╜╨┤╨╡.</p>
         <div class="video__player">
           <img class="video__poster" src="assets/img/video-placeholder.jpg" alt="╨а╨░╨╖╨▒╨╛╤А ╨┐╤А╨╛╨╡╨║╤В╨░">
         <button class="video__play" type="button" aria-label="╨б╨╝╨╛╤В╤А╨╡╤В╤М ╨▓╨╕╨┤╨╡╨╛"
           data-video-src="assets/12488934_3840_2160_30fps.mp4">
-          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M74.7826 36.9877C77.1014 38.3265 77.1014 41.6735 74.7826 43.0123L25.2174 71.6288C22.8985 72.9675 20 71.2941 20 68.6165L20 11.3835C20 8.70594 22.8986 7.03246 25.2174 8.37124L74.7826 36.9877Z"
-              fill="white" />
-          </svg>
+          <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><use href="assets/img/sprite.svg#icon-play"/></svg>
         
         </button>
         </div>
       </div>
     </div>
   </section>
@@ -355,13 +308,13 @@
             aria-label="╨Я╨╛╨┤╤А╨╛╨▒╨╜╨╡╨╡ тАФ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П">
             <span class="stages__label">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</span>
             <p class="stages__desc">╨Т&nbsp;╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░&nbsp;Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░
               ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕&nbsp;╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛
               ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕&nbsp;╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
             <svg class="stages__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-              <use href="#icon-arrow" />
+              <use href="assets/img/sprite.svg#icon-arrow" />
             </svg>
           </a>
         </div>
       </div>
     </div>
   </section>
@@ -372,17 +325,17 @@
         <h2 class="events__heading">╨з╨╕╤В╨░╨╣╤В╨╡ ╤В╨░╨║╨╢╨╡</h2>
         <div class="events__head-actions">
           <a class="btn btn--ghost btn--md events__btn" href="events.html">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</a>
           <div class="carousel-nav">
             <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-left" />
+                <use href="assets/img/sprite.svg#icon-arrow-left" />
               </svg></button>
             <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-right" />
+                <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
       </div>
       <div class="swiper events__swiper">
         <div class="swiper-wrapper">
@@ -390,62 +343,46 @@
             <a class="events__card events__card--wide" href="#">
               <img class="events__bg" src="assets/img/webinar-1.png" alt="">
               <div class="events__info">
                 <h3 class="events__title">╨з╤В╨╛ ╤Г╤З╨╡╤Б╤В╤М ╨┐╨╡╤А╨╡╨┤ ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡╨╝ ╨н╨Ф╨Ю: ╤В╨╕╨┐╨╛╨▓╤Л╨╡ ╨╛╤И╨╕╨▒╨║╨╕ ╨╕&nbsp;╤Б╨╗╨░╨▒╤Л╨╡ ╨╝╨╡╤Б╤В╨░</h3>
                 <div class="events__meta"><span class="events__tag">╨н╨║╤Б╨┐╨╡╤А╤В╨╜╤Л╨╣ ╨╝╨░╤В╨╡╤А╨╕╨░╨╗</span><span
                     class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                  xmlns="http://www.w3.org/2000/svg">
-                  <path
-                    d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                </svg>
+                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </div>
             </a>
           </div>
           <div class="swiper-slide">
             <a class="events__card" href="#">
               <img class="events__bg" src="assets/img/webinar-2.png" alt="">
               <div class="events__info">
                 <h3 class="events__title">╨Я╨╛╤З╨╡╨╝╤Г ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤П ╨╜╨╡&nbsp;╤А╨░╨▒╨╛╤В╨░╨╡╤В ╨▒╨╡╨╖&nbsp;╨┐╨╡╤А╨╡╤Б╨▒╨╛╤А╨║╨╕ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░</h3>
                 <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                     2025</span></div>
-                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                  xmlns="http://www.w3.org/2000/svg">
-                  <path
-                    d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                </svg>
+                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </div>
             </a>
           </div>
           <div class="swiper-slide">
             <a class="events__card" href="#">
               <img class="events__bg" src="assets/img/webinar-3.png" alt="">
               <div class="events__info">
                 <h3 class="events__title">╨Я╤А╨╛╨╡╨║╤В╤Л ╨╖╨░╨║╨░╨╖╤З╨╕╨║╨╛╨▓ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗&nbsp;тАФ ╨▓&nbsp;╤З╨╕╤Б╨╗╨╡ ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓ DIRECTUM AWARDS
                   2026</h3>
                 <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                     2025</span></div>
-                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                  xmlns="http://www.w3.org/2000/svg">
-                  <path
-                    d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                </svg>
+                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </div>
             </a>
           </div>
           <div class="swiper-slide">
             <a class="events__card" href="#">
               <img class="events__bg" src="assets/img/webinar-4.png" alt="">
               <div class="events__info">
                 <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                 <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                  xmlns="http://www.w3.org/2000/svg">
-                  <path
-                    d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                </svg>
+                <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </div>
             </a>
           </div>
         </div>
       </div>
     </div>
@@ -454,61 +391,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40"
-                    height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -546,37 +449,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
   <script src="js/main.js"></script>
 </body>
 
diff --git a/client-detail.html b/client-detail.html
index a6b7fe4..2999285 100644
--- a/client-detail.html
+++ b/client-detail.html
@@ -20,57 +20,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
   
         </a>
   
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -79,13 +44,13 @@
           </div>
   
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -122,17 +87,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -219,17 +180,13 @@
     <section class="client-quote">
       <div class="container">
         <div class="client-quote__inner">
           <h2 class="client-quote__title">╨з╤В╨╛ ╨│╨╛╨▓╨╛╤А╨╕╤В<br>╨╛ ╨╜╨░╤Б ╨║╨╗╨╕╨╡╨╜╤В</h2>
           <div class="client-quote__grid">
             <div class="client-quote__quote">
-              <svg class="client-quote__icon" width="29" height="24" viewBox="0 0 29 24" fill="none" aria-hidden="true">
-                <path
-                  d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                  fill="#1342F3" />
-              </svg>
+              <svg class="client-quote__icon" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
               <p class="client-quote__text">╨Т ╨┐╤А╨╛╨╡╨║╤В╨╡ ╨╜╨░╨╝ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                 ╨║╨╛╨╝╨░╨╜╨┤╤Л ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г, ╨▒╨╛╨╗╤М╤И╨╛╨╡ ╨║╨╛╨╗╨╕╤З╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣ ╨╕ ╨╜╨╡╨╛╨▒╤Е╨╛╨┤╨╕╨╝╨╛╤Б╤В╤М ╤А╨░╨╖╨▓╨╕╨▓╨░╤В╤М
                 ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г ╨┐╨╛╤Н╤В╨░╨┐╨╜╨╛. SoftSnow ╨┐╨╛╨║╨░╨╖╨░╨╗╨╕ ╤Б╨╡╨▒╤П ╨║╨░╨║ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б
                 ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕, ╨╕ ╤Б ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╤П╨╝╨╕.</p>
               <div class="client-quote__author">
                 <img class="client-quote__avatar" src="assets/img/logo-ranepa.svg" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="64" height="64">
@@ -266,15 +223,13 @@
               <a href="#" aria-label="╨Я╨╛╨┤╤А╨╛╨▒╨╜╨╡╨╡ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" class="stages__card">
                 <span class="stages__label">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</span>
                 <p class="stages__desc">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                
-                <svg class="stages__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <path d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z" />
-                </svg>
+                <svg class="stages__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </a>
             </div>
 
             <div class="stages__item">
               <div class="stages__head">
                 <h3 class="stages__title">02. ╨а╨░╨╖╨▓╨╕╤В╨╕╨╡ ╤Б╨╕╤Б╤В╨╡╨╝╤Л: ╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╤Л╨╣ ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л</h3>
@@ -286,16 +241,13 @@
               <a href="#" aria-label="╨Я╨╛╨┤╤А╨╛╨▒╨╜╨╡╨╡ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" class="stages__card">
                 <span class="stages__label">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</span>
                 <p class="stages__desc">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
               
-                <svg class="stages__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <path
-                    d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"/>
-                </svg>
+                <svg class="stages__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
               </a>
             </div>
           </div>
         </div>
       </div>
     </section>
@@ -317,17 +269,17 @@
           <h2 class="events__heading">╨з╨╕╤В╨░╨╣╤В╨╡ ╤В╨░╨║╨╢╨╡</h2>
           <div class="events__head-actions">
             <button class="btn btn--ghost btn--md events__btn" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
             <div class="carousel-nav">
               <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
               <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
             </div>
           </div>
         </div>
         <div class="swiper events__swiper">
           <div class="swiper-wrapper">
@@ -335,53 +287,45 @@
               <a class="events__card events__card--wide" href="#">
                 <img class="events__bg" src="assets/img/webinar-1.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤Б╤А╨╡╨┤╨░ ╨▓╤Г╨╖╨░: ╨║╨░╨║ ╤Б╨▓╤П╨╖╨░╤В╤М ╤Б╨╡╤А╨▓╨╕╤Б╤Л, ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-2.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-3.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Ч╨░╨║╨░╨╖╤З╨╕╨║╨╕ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╕╨╗╨╕ ╤Б╨▓╨╛╨╕ ╨┐╤А╨╛╨╡╨║╤В╤Л ╨╜╨░ Directum Awards 2026</h3>
                   <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-4.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <a href="#" class="btn btn--ghost btn--lg events__cta" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</a>
@@ -391,61 +335,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -483,37 +393,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/clients.html b/clients.html
index 44adfac..57eecf5 100644
--- a/clients.html
+++ b/clients.html
@@ -22,57 +22,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
   
         </a>
   
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
   
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -166,356 +127,231 @@
           <button class="tab-filter" type="button" data-filter="vuz">╨Т╤Л╤Б╤И╨╕╨╡ ╤Г╤З╨╡╨▒╨╜╤Л╨╡ ╨╖╨░╨▓╨╡╨┤╨╡╨╜╨╕╤П</button>
           <button class="tab-filter" type="button" data-filter="gov">╨У╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╡ ╤Г╤З╤А╨╡╨╢╨┤╨╡╨╜╨╕╤П</button>
           <button class="tab-filter" type="button" data-filter="biz">╨С╨╕╨╖╨╜╨╡╤Б</button>
         </div>
         <div class="clients__grid" id="clientsGrid">
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ь╨╛╤Б╨║╨╛╨▓╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╨╕╨╜╤Б╤В╨╕╤В╤Г╤В ╨╝╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╤Е ╨╛╤В╨╜╨╛╤И╨╡╨╜╨╕╨╣ (╨Ь╨У╨Ш╨Ь╨Ю)</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-1.png" alt="╨Ь╨У╨Ш╨Ь╨Ю" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="biz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
 
             <div class="clients__body">
               <h3 class="clients__name">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨┐╤А╨╛╨╕╨╖╨▓╨╛╨┤╨╕╤В╨╡╨╗╤М ╨╖╨╛╨╗╨╛╤В╨░ ╨╕ ╤Б╨╡╤А╨╡╨▒╤А╨░ ╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗</h3>
               <p class="clients__desc">╨У╨╛╤А╨╜╨╛╨┤╨╛╨▒╤Л╨▓╨░╤О╤Й╨░╤П ╨┐╤А╨╛╨╝╤Л╤И╨╗╨╡╨╜╨╜╨╛╤Б╤В╤М</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-2.png" alt="╨Я╨╛╨╗╨╕╨╝╨╡╤В╨░╨╗╨╗" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="gov">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П (╨Т╨Ю╨н╨Ъ)</h3>
               <p class="clients__desc">╨н╨╜╨╡╤А╨│╨╡╤В╨╕╨║╨░</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-3.png" alt="╨Т╨Ю╨н╨Ъ" width="136" height="136">
             </div>
           </a>
           <a class="clients__card" href="#" data-category="biz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">Solidcore Resources</h3>
               <p class="clients__desc">╨У╨╛╤А╨╜╨╛╨┤╨╛╨▒╤Л╨▓╨░╤О╤Й╨░╤П ╨┐╤А╨╛╨╝╤Л╤И╨╗╨╡╨╜╨╜╨╛╤Б╤В╤М</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-4.png" alt="Solidcore Resources"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ь╨╛╤Б╨║╨╛╨▓╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤О╤А╨╕╨┤╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╝╨╡╨╜╨╕ ╨Ю. ╨Х. ╨Ъ╤Г╤В╨░╤Д╨╕╨╜╨░</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-5.png" alt="╨Ь╨У╨о╨Р" width="136" height="136">
             </div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨б╨░╨╜╨║╤В-╨Я╨╡╤В╨╡╤А╨▒╤Г╤А╨│╤Б╨║╨╕╨╣ ╨┐╨╛╨╗╨╕╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨Я╨╡╤В╤А╨░ ╨Т╨╡╨╗╨╕╨║╨╛╨│╨╛</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-6.png" alt="╨б╨Я╨▒╨Я╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П ╨┐╤А╨░╨▓╨╛╤Б╤Г╨┤╨╕╤П</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-7.png" alt="╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П ╨┐╤А╨░╨▓╨╛╤Б╤Г╨┤╨╕╤П"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨д╨╕╨╜╨░╨╜╤Б╨╛╨▓╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨┐╤А╨╕ ╨Я╤А╨░╨▓╨╕╤В╨╡╨╗╤М╤Б╤В╨▓╨╡ ╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╛╨╣ ╨д╨╡╨┤╨╡╤А╨░╤Ж╨╕╨╕</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-8.png" alt="╨д╨╕╨╜╨░╨╜╤Б╨╛╨▓╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ь╨╛╤Б╨║╨╛╨▓╤Б╨║╨╕╨╣ ╤Д╨╕╨╜╨░╨╜╤Б╨╛╨▓╨╛-╤О╤А╨╕╨┤╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-9.png" alt="╨Ь╨д╨о╨Р" width="136" height="136">
             </div>
           </a>
           <a class="clients__card" href="#" data-category="biz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Р╨╖╨╕╨░╤В╤Б╨║╨╛-╨в╨╕╤Е╨╛╨╛╨║╨╡╨░╨╜╤Б╨║╨╕╨╣ ╨▒╨░╨╜╨║</h3>
               <p class="clients__desc">╨С╨░╨╜╨║╨╛╨▓╤Б╨║╨╕╨╣ ╤Б╨╡╨║╤В╨╛╤А</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-10.png" alt="╨Р╨╖╨╕╨░╤В╤Б╨║╨╛-╨в╨╕╤Е╨╛╨╛╨║╨╡╨░╨╜╤Б╨║╨╕╨╣ ╨▒╨░╨╜╨║"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨б╨░╨╜╨║╤В-╨Я╨╡╤В╨╡╤А╨▒╤Г╤А╨│╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-11.png" alt="╨б╨Я╨▒╨У╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="biz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨о╨Э╨Ш╨Ъ╨Ю╨Э-╨Ш╨╜╤Д╨╛╤А╨╝</h3>
               <p class="clients__desc">╨Ш╨в ╨╕ ╨║╨╛╨╜╤Б╨░╨╗╤В╨╕╨╜╨│</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-12.png" alt="╨о╨Э╨Ш╨Ъ╨Ю╨Э-╨Ш╨╜╤Д╨╛╤А╨╝" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤Ж╨╕╤П ┬л╨б╨╕╨╜╨╡╤А╨│╨╕╤П┬╗</h3>
               <p class="clients__desc">╨Ю╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-13.png" alt="╨Ъ╨╛╤А╨┐╨╛╤А╨░╤Ж╨╕╤П ┬л╨б╨╕╨╜╨╡╤А╨│╨╕╤П┬╗"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Я╨╡╤А╨▓╤Л╨╣ ╨б╨░╨╜╨║╤В-╨Я╨╡╤В╨╡╤А╨▒╤Г╤А╨│╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╨╝╨╡╨┤╨╕╤Ж╨╕╨╜╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╝. ╨░╨║╨░╨┤.
                 ╨Ш.╨Я. ╨Я╨░╨▓╨╗╨╛╨▓╨░</h3>
               <p class="clients__desc">╨Ь╨╡╨┤╨╕╤Ж╨╕╨╜╤Б╨║╨╛╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-14.png" alt="╨Я╨б╨Я╨▒╨У╨Ь╨г ╨╕╨╝. ╨Я╨░╨▓╨╗╨╛╨▓╨░"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Э╨╕╨╢╨╡╨│╨╛╤А╨╛╨┤╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╝. ╨Э.╨Ш. ╨Ы╨╛╨▒╨░╤З╨╡╨▓╤Б╨║╨╛╨│╨╛</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-15.png" alt="╨Э╨Э╨У╨г ╨╕╨╝. ╨Ы╨╛╨▒╨░╤З╨╡╨▓╤Б╨║╨╛╨│╨╛"
                 width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="gov">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ю╨▒╤Й╨╡╤А╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨╜╨░╤А╨╛╨┤╨╜╤Л╨╣ ╤Д╤А╨╛╨╜╤В</h3>
               <p class="clients__desc">╨Ю╨▒╤Й╨╡╤Б╤В╨▓╨╡╨╜╨╜╨░╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╤П</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-16.png" alt="╨Ю╨Э╨д" width="136" height="136">
             </div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨б╤В╨░╨▓╤А╨╛╨┐╨╛╨╗╤М╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╨░╨│╤А╨░╤А╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Р╨│╤А╨░╤А╨╜╨╛╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-17.png" alt="╨б╤В╨У╨Р╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨б╨╡╨▓╨╡╤А╨╛-╨Т╨╛╤Б╤В╨╛╤З╨╜╤Л╨╣ ╤Д╨╡╨┤╨╡╤А╨░╨╗╤М╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╝╨╡╨╜╨╕ ╨Ь. ╨Ъ. ╨Р╨╝╨╝╨╛╤Б╨╛╨▓╨░</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-18.png" alt="╨б╨Т╨д╨г ╨╕╨╝. ╨Р╨╝╨╝╨╛╤Б╨╛╨▓╨░" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨б╨Я╨▒╨У╨н╨в╨г ┬л╨Ы╨н╨в╨Ш┬╗</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-19.png" alt="╨б╨Я╨▒╨У╨н╨в╨г ┬л╨Ы╨н╨в╨Ш┬╗" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ь╨╛╤Б╨║╨╛╨▓╤Б╨║╨╕╨╣ ╨╝╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-20.png"
                 alt="╨Ь╨╛╤Б╨║╨╛╨▓╤Б╨║╨╕╨╣ ╨╝╨╡╨╢╨┤╤Г╨╜╨░╤А╨╛╨┤╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В" width="136" height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨о╨│╨╛╤А╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-21.png" alt="╨о╨│╨╛╤А╤Б╨║╨╕╨╣ ╨У╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="biz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ъ╨╛╨╝╨╝╨╡╤А╤Б╨░╨╜╤В╤К DPO ┬л╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В┬╗</h3>
               <p class="clients__desc">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╨╛╨╡ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-22.png" alt="╨Ъ╨╛╨╝╨╝╨╡╤А╤Б╨░╨╜╤В╤К DPO" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Ю╨╝╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-23.png" alt="╨Ю╨╝╨У╨в╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Э╨░╨▒╨╡╤А╨╡╨╢╨╜╨╛╤З╨╡╨╗╨╜╨╕╨╜╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╨┐╨╡╨┤╨░╨│╨╛╨│╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В</h3>
               <p class="clients__desc">╨Я╨╡╨┤╨░╨│╨╛╨│╨╕╤З╨╡╤Б╨║╨╛╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-24.png" alt="╨Э╨з╨У╨Я╨г" width="136"
                 height="136"></div>
           </a>
           <a class="clients__card" href="#" data-category="vuz">
-            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10.639 0.203776 10.5775 0.158203 10.5C0.11263 10.4225 0.0807292 10.3382 0.0625 10.2471C0.0397135 10.1423 0.023763 10.0101 0.0146484 9.85059C0.00553385 9.68652 0.000976562 9.50423 0.000976562 9.30371C0.000976562 7.64941 0.356445 6.44857 1.06738 5.70117C1.77832 4.94922 2.94499 4.57324 4.56738 4.57324H9.3457L11.0205 4.66895L8.7168 2.56348L7.19922 1.01855C7.14453 0.963867 7.10352 0.900065 7.07617 0.827148C7.04883 0.749674 7.03516 0.669922 7.03516 0.587891C7.03516 0.419271 7.09212 0.280273 7.20605 0.170898C7.32454 0.0569661 7.4681 0 7.63672 0C7.80078 0 7.95345 0.0683594 8.09473 0.205078L12.6201 4.72363C12.7614 4.85579 12.832 5.00846 12.832 5.18164C12.832 5.35482 12.7614 5.50977 12.6201 5.64648L8.08105 10.1787C7.94889 10.3063 7.80078 10.3701 7.63672 10.3701C7.4681 10.3701 7.32454 10.3154 7.20605 10.2061C7.09212 10.0921 7.03516 9.95085 7.03516 9.78223C7.03516 9.7002 7.04883 9.62044 7.07617 9.54297C7.10807 9.46549 7.14909 9.39941 7.19922 9.34473L8.7168 7.7998L11.0273 5.69434L9.3457 5.79688H4.62891C3.79036 5.79688 3.12272 5.91764 2.62598 6.15918C2.13379 6.40072 1.77832 6.78353 1.55957 7.30762C1.34538 7.83171 1.23828 8.51758 1.23828 9.36523C1.23828 9.52474 1.24056 9.66602 1.24512 9.78906C1.25423 9.91211 1.25879 10.0329 1.25879 10.1514C1.25879 10.3291 1.19954 10.4749 1.08105 10.5889C0.967122 10.7028 0.821289 10.7598 0.643555 10.7598Z"
-                />
-            </svg>
+            <svg class="clients__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             <div class="clients__body">
               <h3 class="clients__name">╨Т╨╗╨░╨┤╨╕╨╝╨╕╤А╤Б╨║╨╕╨╣ ╨│╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В ╨╕╨╝. ╨Р. ╨У. ╨╕ ╨Э. ╨У. ╨б╤В╨╛╨╗╨╡╤В╨╛╨▓╤Л╤Е</h3>
               <p class="clients__desc">╨Т╤Л╤Б╤И╨╡╨╡ ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╨╜╨╕╨╡</p>
             </div>
             <div class="clients__logo"><img src="assets/img/clients/client-25.png" alt="╨Т╨╗╨У╨г ╨╕╨╝. ╨б╤В╨╛╨╗╨╡╤В╨╛╨▓╤Л╤Е"
                 width="136" height="136"></div>
@@ -536,17 +372,17 @@
               <p class="projects__sub">╨Э╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╤П╨╡╨╝ ╤А╨╡╤И╨╡╨╜╨╕╤П, ╨░&nbsp;╨▓╤Л╤Б╤В╤А╨░╨╕╨▓╨░╨╡╨╝ ╤А╨░╨▒╨╛╤З╤Г╤О ╤Б╨╕╤Б╤В╨╡╨╝╤Г: ╤Б&nbsp;╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣
                 ╨╗╨╛╨│╨╕╨║╨╛╨╣ ╨┐╤А╨╛╨╡╨║╤В╨░, ╤Н╤В╨░╨┐╨░╨╝╨╕ ╨╖╨░╨┐╤Г╤Б╨║╨░ ╨╕&nbsp;╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╨╛╨╝, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╨╝╨╛╨╢╨╜╨╛ ╨╕╨╖╨╝╨╡╤А╨╕╤В╤М.</p>
               <div class="projects__actions">
                 <div class="carousel-nav">
                   <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-left" />
+                      <use href="assets/img/sprite.svg#icon-arrow-left" />
                     </svg></button>
                   <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-right" />
+                      <use href="assets/img/sprite.svg#icon-arrow-right" />
                     </svg></button>
                 </div>
               </div>
 
             </div>
           </div>
@@ -554,18 +390,13 @@
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -573,52 +404,37 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -626,35 +442,25 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
@@ -681,61 +487,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -773,37 +545,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/contacts.html b/contacts.html
index 5464d1a..2a868fb 100644
--- a/contacts.html
+++ b/contacts.html
@@ -21,57 +21,22 @@
 
 <body>
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -80,13 +45,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -123,17 +88,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -183,27 +144,18 @@
                   <a href="mailto:info@softsnow.ru" class="contacts-map__value">info@softsnow.ru</a>
                 </div>
                 <div class="contacts-map__item">
                   <p class="contacts-map__label">╨Ь╤Л ╨▓ ╤Б╨╛╤Ж╤Б╨╡╤В╤П╤Е:</p>
                   <div class="contacts-map__social">
                     <a href="#" class="contacts-map__social-link" aria-label="Rutube">
-                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                        <path
-                          d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                          fill="#ED143B" />
-                        <path
-                          d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                          fill="#100943" />
-                      </svg>
+                      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube-plain"/></svg>
                     </a>
                     <a href="#" class="contacts-map__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <rect x="6" y="10" width="30" height="20" fill="white" />
-                        <path fill-rule="evenodd" clip-rule="evenodd"
-                          d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                          fill="#1F67F9" />
+                        <use href="assets/img/sprite.svg#icon-vk"/>
                       </svg>
                     </a>
                     <a href="#" class="contacts-map__social-link contacts-map__social-link--hh" aria-label="hh.ru">hh</a>
                   </div>
                 </div>
               </div>
@@ -253,61 +205,27 @@
 
     <footer class="footer">
       <div class="container footer__inner">
         <div class="footer__brand">
           <div class="footer__brand-top">
             <div class="footer__logo">
-              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                  fill="white" stroke="white" />
-                <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              </svg>
+              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
               <span class="footer__logo-text">SOFTSNOW</span>
             </div>
             <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
           </div>
           <div class="footer__brand-bottom">
             <div class="footer__social">
               <a href="#" class="footer__social-link" aria-label="Rutube">
-                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <g clip-path="url(#clip0_3007_679)">
-                    <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                      width="40" height="40">
-                      <path
-                        d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                        fill="white" />
-                    </mask>
-                    <g mask="url(#mask0_3007_679)">
-                      <path d="M40 0H0V40H40V0Z" fill="white" />
-                      <path
-                        d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                        fill="#ED143B" />
-                      <path
-                        d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                        fill="#100943" />
-                    </g>
-                  </g>
-                  <defs>
-                    <clipPath id="clip0_3007_679">
-                      <rect width="40" height="40" fill="white" />
-                    </clipPath>
-                  </defs>
-                </svg>
+                <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
               </a>
               <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_633_379)">
                     <rect x="6" y="10" width="30" height="20" fill="white" />
-                    <path fill-rule="evenodd" clip-rule="evenodd"
-                      d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                      fill="#1F67F9" />
+                    <use href="assets/img/sprite.svg#icon-vk"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_633_379">
                       <rect width="40" height="40" fill="white" />
                     </clipPath>
                   </defs>
@@ -345,37 +263,12 @@
             <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
           </div>
         </div>
       </div>
     </footer>
 
-    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-      <defs>
-        <symbol id="icon-arrow" viewBox="0 0 17 14">
-          <path
-            d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-          <path
-            d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-          <path
-            d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-      </defs>
-    </svg>
 
     <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
     <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
     <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
     <script src="js/main.js"></script>
 </body>
diff --git a/directum.html b/directum.html
index 762542f..d8f369a 100644
--- a/directum.html
+++ b/directum.html
@@ -22,57 +22,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
   
         </a>
   
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
   
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -333,71 +294,56 @@
                 ╨▓╤Л╤Б╤В╤А╨░╨╕╨▓╨░╤В╤М ╨╡╨┤╨╕╨╜╤Л╨╣ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣ ╨║╨╛╨╜╤В╤Г╤А ╨╕&nbsp;╨╝╨░╤Б╤И╤В╨░╨▒╨╕╤А╨╛╨▓╨░╤В╤М ╤Б╨╕╤Б╤В╨╡╨╝╤Г ╨┐╨╛╨┤&nbsp;╨╜╨╛╨▓╤Л╨╡ ╨╖╨░╨┤╨░╤З╨╕.</p>
               <div class="projects__actions">
                 <button class="btn btn--ghost btn--md projects__btn" type="button">╨Т╤Б╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л</button>
                 <div class="carousel-nav">
                   <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-left" />
+                      <use href="assets/img/sprite.svg#icon-arrow-left" />
                     </svg></button>
                   <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-right" />
+                      <use href="assets/img/sprite.svg#icon-arrow-right" />
                     </svg></button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
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
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
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
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░&nbsp;╨▒╨░╨╖╨╡
                   ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo projects__logo--sm" src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
@@ -416,68 +362,68 @@
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨С╨░╨╖╨╛╨▓╤Л╨╣</h3>
             <p class="vnedrenie__sub">╨Э╨░╤Б╤В╤А╨╛╨╣╨║╨░ ╤Б╨╕╤Б╤В╨╡╨╝╤Л ╨▒╨╡╨╖ ╨┤╨╛╤А╨░╨▒╨╛╤В╨╛╨║
             ╨╕ ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╨╣</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨б╤А╨╛╨║: 2тАУ3 ╨╝╨╡╤Б╤П╤Ж╨░</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>10 ╤З╨░╤Б╨╛╨▓ ╨┐╨╛╨┤╨┤╨╡╤А╨╢╨║╨╕</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>4 ╤З╨░╤Б╨╛╨▓ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
           </article>
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨б╤В╨░╨╜╨┤╨░╤А╤В╨╜╤Л╨╣<span class="vnedrenie__badge">╨Я╨╛╨┐╤Г╨╗╤П╤А╨╜╤Л╨╣</span></h3>
             <p class="vnedrenie__sub">╨Э╨░╤Б╤В╤А╨╛╨╣╨║╨░ ╤Б╨╕╤Б╤В╨╡╨╝╤Л ╤Б ╨▒╨░╨╖╨╛╨▓╤Л╨╝╨╕ ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕
             ╨╕ ╨░╨┤╨░╨┐╤В╨░╤Ж╨╕╤П╨╝╨╕</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨б╤А╨╛╨║: 4тАУ6 ╨╝╨╡╤Б╤П╤Ж╨╡╨▓</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>20 ╤З╨░╤Б╨╛╨▓ ╨┐╨╛╨┤╨┤╨╡╤А╨╢╨║╨╕</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>8 ╤З╨░╤Б╨╛╨▓ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛╨╡ ╤А╨░╨╖╨▓╨╕╤В╨╕╨╡</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
           </article>
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б╨╜╤Л╨╣</h3>
             <p class="vnedrenie__sub">╨Ш╨╜╨┤╨╕╨▓╨╕╨┤╤Г╨░╨╗╤М╨╜╨╛╨╡ ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡ ╤Б ╨╜╨╡╤В╨╕╨┐╨╛╨▓╤Л╨╝╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П╨╝╨╕</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨б╤А╨╛╨║: ╨╛╤В 6 ╨╝╨╡╤Б╤П╤Ж╨╡╨▓</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨б╨╗╨╛╨╢╨╜╨░╤П ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ь╨╕╨│╤А╨░╤Ж╨╕╤П ╨┤╨░╨╜╨╜╤Л╤Е</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>16 ╤З╨░╤Б╨╛╨▓ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
           </article>
         </div>
@@ -529,61 +475,27 @@
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
 
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 28.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -620,37 +532,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
diff --git a/event-detail.html b/event-detail.html
index e60293d..7b9151f 100644
--- a/event-detail.html
+++ b/event-detail.html
@@ -22,57 +22,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -222,16 +183,13 @@
     <section class="program" aria-label="╨Я╤А╨╛╨│╤А╨░╨╝╨╝╨░ ╤Б╨╡╨╝╨╕╨╜╨░╤А╨░">
       <div class="container">
         <div class="program__head">
           <h2 class="program__title">╨Я╤А╨╛╨│╤А╨░╨╝╨╝╨░ ╤Б╨╡╨╝╨╕╨╜╨░╤А╨░</h2>
           <a class="btn btn--outline btn--md program__download" href="#">
             ╨б╨║╨░╤З╨░╤В╤М ╨┐╤А╨╛╨│╤А╨░╨╝╨╝╤Г
-            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path d="M0.75 14.75H12.75M6.75 0.75V10.75M3.25 7.25L6.75 10.75L10.25 7.25"  stroke-width="1.5"
-                stroke-linecap="square" stroke-linejoin="round" />
-            </svg>
+            <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><use href="assets/img/sprite.svg#icon-download"/></svg>
 
           </a>
         </div>
         <div class="program__row">
           <div class="program__list" role="tablist" aria-label="╨С╨╗╨╛╨║╨╕ ╨┐╤А╨╛╨│╤А╨░╨╝╨╝╤Л">
             <button class="program__item is-active" type="button" role="tab" aria-selected="true" data-tab="1">
@@ -414,50 +372,38 @@
         <h2 class="event-partners__title">╨Я╨░╤А╤В╨╜╤С╤А╤Л<br> ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П</h2>
         <div class="event-partners__grid">
           <a href="#" class="card event-partners__card">
             <div class="event-partners-header">
               <h3 class="event-partners__name">Directum</h3>
               <p class="event-partners__text">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨░╤П ╨Ш╨в-╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</p>
-              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M0.639648 10.7598C0.521159 10.7598 0.420898 10.7347 0.338867 10.6846C0.261393 10.639 0.19987 10.5775 0.154297 10.5C0.108724 10.4225 0.0768229 10.3382 0.0585938 10.2471C0.0358073 10.1423 0.0198568 10.0101 0.0107422 9.85059C0.0016276 9.68652 -0.00292969 9.50423 -0.00292969 9.30371C-0.00292969 7.64941 0.352539 6.44857 1.06348 5.70117C1.77441 4.94922 2.94108 4.57324 4.56348 4.57324H9.3418L11.0166 4.66895L8.71289 2.56348L7.19531 1.01855C7.14062 0.963867 7.09961 0.900065 7.07227 0.827148C7.04492 0.749674 7.03125 0.669922 7.03125 0.587891C7.03125 0.419271 7.08822 0.280273 7.20215 0.170898C7.32064 0.0569661 7.46419 0 7.63281 0C7.79688 0 7.94954 0.0683594 8.09082 0.205078L12.6162 4.72363C12.7575 4.85579 12.8281 5.00846 12.8281 5.18164C12.8281 5.35482 12.7575 5.50977 12.6162 5.64648L8.07715 10.1787C7.94499 10.3063 7.79688 10.3701 7.63281 10.3701C7.46419 10.3701 7.32064 10.3154 7.20215 10.2061C7.08822 10.0921 7.03125 9.95085 7.03125 9.78223C7.03125 9.7002 7.04492 9.62044 7.07227 9.54297C7.10417 9.46549 7.14518 9.39941 7.19531 9.34473L8.71289 7.7998L11.0234 5.69434L9.3418 5.79688H4.625C3.78646 5.79688 3.11882 5.91764 2.62207 6.15918C2.12988 6.40072 1.77441 6.78353 1.55566 7.30762C1.34147 7.83171 1.23438 8.51758 1.23438 9.36523C1.23438 9.52474 1.23665 9.66602 1.24121 9.78906C1.25033 9.91211 1.25488 10.0329 1.25488 10.1514C1.25488 10.3291 1.19564 10.4749 1.07715 10.5889C0.963216 10.7028 0.817383 10.7598 0.639648 10.7598Z" />
-              </svg>
+              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
 
             </div>
             <div class="event-partners__logo">
               <img src="assets/img/directum.svg" alt="Directum">
             </div>
             <p class="event-partners__desc">╨н╨║╨╛╤Б╨╕╤Б╤В╨╡╨╝╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╤Л╤Е ╤А╨╡╤И╨╡╨╜╨╕╨╣ ╨┤╨╗╤П ╤Г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╨║╨╛╨╝╨┐╨░╨╜╨╕╨╡╨╣</p>
           </a>
           <a href="#" class="card event-partners__card">
             <div class="event-partners-header">
               <h3 class="event-partners__name">╨С╨╕╤В╤А╨╕╨║╤Б24</h3>
               <p class="event-partners__text">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</p>
-              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M0.639648 10.7598C0.521159 10.7598 0.420898 10.7347 0.338867 10.6846C0.261393 10.639 0.19987 10.5775 0.154297 10.5C0.108724 10.4225 0.0768229 10.3382 0.0585938 10.2471C0.0358073 10.1423 0.0198568 10.0101 0.0107422 9.85059C0.0016276 9.68652 -0.00292969 9.50423 -0.00292969 9.30371C-0.00292969 7.64941 0.352539 6.44857 1.06348 5.70117C1.77441 4.94922 2.94108 4.57324 4.56348 4.57324H9.3418L11.0166 4.66895L8.71289 2.56348L7.19531 1.01855C7.14062 0.963867 7.09961 0.900065 7.07227 0.827148C7.04492 0.749674 7.03125 0.669922 7.03125 0.587891C7.03125 0.419271 7.08822 0.280273 7.20215 0.170898C7.32064 0.0569661 7.46419 0 7.63281 0C7.79688 0 7.94954 0.0683594 8.09082 0.205078L12.6162 4.72363C12.7575 4.85579 12.8281 5.00846 12.8281 5.18164C12.8281 5.35482 12.7575 5.50977 12.6162 5.64648L8.07715 10.1787C7.94499 10.3063 7.79688 10.3701 7.63281 10.3701C7.46419 10.3701 7.32064 10.3154 7.20215 10.2061C7.08822 10.0921 7.03125 9.95085 7.03125 9.78223C7.03125 9.7002 7.04492 9.62044 7.07227 9.54297C7.10417 9.46549 7.14518 9.39941 7.19531 9.34473L8.71289 7.7998L11.0234 5.69434L9.3418 5.79688H4.625C3.78646 5.79688 3.11882 5.91764 2.62207 6.15918C2.12988 6.40072 1.77441 6.78353 1.55566 7.30762C1.34147 7.83171 1.23438 8.51758 1.23438 9.36523C1.23438 9.52474 1.23665 9.66602 1.24121 9.78906C1.25033 9.91211 1.25488 10.0329 1.25488 10.1514C1.25488 10.3291 1.19564 10.4749 1.07715 10.5889C0.963216 10.7028 0.817383 10.7598 0.639648 10.7598Z" />
-              </svg>
+              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             </div>
             <div class="event-partners__logo">
               <img src="assets/img/bitrix.png" alt="╨С╨╕╤В╤А╨╕╨║╤Б24">
 
             </div>
             <p class="event-partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╤Е ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╣
               ╨╕┬а╤Б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л.</p>
           </a>
           <a href="#" class="card event-partners__card">
             <div class="event-partners-header">
               <h3 class="event-partners__name">Univer&nbsp;Online</h3>
               <p class="event-partners__text">╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б ╤А╨╡╤И╨╡╨╜╨╕╨╣ ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</p>
-              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M0.639648 10.7598C0.521159 10.7598 0.420898 10.7347 0.338867 10.6846C0.261393 10.639 0.19987 10.5775 0.154297 10.5C0.108724 10.4225 0.0768229 10.3382 0.0585938 10.2471C0.0358073 10.1423 0.0198568 10.0101 0.0107422 9.85059C0.0016276 9.68652 -0.00292969 9.50423 -0.00292969 9.30371C-0.00292969 7.64941 0.352539 6.44857 1.06348 5.70117C1.77441 4.94922 2.94108 4.57324 4.56348 4.57324H9.3418L11.0166 4.66895L8.71289 2.56348L7.19531 1.01855C7.14062 0.963867 7.09961 0.900065 7.07227 0.827148C7.04492 0.749674 7.03125 0.669922 7.03125 0.587891C7.03125 0.419271 7.08822 0.280273 7.20215 0.170898C7.32064 0.0569661 7.46419 0 7.63281 0C7.79688 0 7.94954 0.0683594 8.09082 0.205078L12.6162 4.72363C12.7575 4.85579 12.8281 5.00846 12.8281 5.18164C12.8281 5.35482 12.7575 5.50977 12.6162 5.64648L8.07715 10.1787C7.94499 10.3063 7.79688 10.3701 7.63281 10.3701C7.46419 10.3701 7.32064 10.3154 7.20215 10.2061C7.08822 10.0921 7.03125 9.95085 7.03125 9.78223C7.03125 9.7002 7.04492 9.62044 7.07227 9.54297C7.10417 9.46549 7.14518 9.39941 7.19531 9.34473L8.71289 7.7998L11.0234 5.69434L9.3418 5.79688H4.625C3.78646 5.79688 3.11882 5.91764 2.62207 6.15918C2.12988 6.40072 1.77441 6.78353 1.55566 7.30762C1.34147 7.83171 1.23438 8.51758 1.23438 9.36523C1.23438 9.52474 1.23665 9.66602 1.24121 9.78906C1.25033 9.91211 1.25488 10.0329 1.25488 10.1514C1.25488 10.3291 1.19564 10.4749 1.07715 10.5889C0.963216 10.7028 0.817383 10.7598 0.639648 10.7598Z" />
-              </svg>
+              <svg class="event-partners__icon" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
             </div>
             <div class="event-partners__logo">
               <img src="assets/img/univer.png" alt="Univer Online">
 
             </div>
             <p class="event-partners__desc">╨б╨╛╨▒╤Б╤В╨▓╨╡╨╜╨╜╨░╤П ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╨░ SoftSnow ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓.</p>
@@ -655,61 +601,27 @@
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
 
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 28.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -746,37 +658,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/events.html b/events.html
index de94ec2..793b67d 100644
--- a/events.html
+++ b/events.html
@@ -22,57 +22,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -156,29 +117,19 @@
           <p class="page-hero__sub">╨Т╨╡╨▒╨╕╨╜╨░╤А╤Л, ╤Б╤В╨░╤В╤М╨╕ ╨╕&nbsp;╨╜╨╛╨▓╨╛╤Б╤В╨╕ SoftSnow: ╤А╨░╨╖╨▒╨╕╤А╨░╨╡╨╝ ╨║╨╡╨╣╤Б╤Л ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╨╕, ╨┤╨╡╨╗╨╕╨╝╤Б╤П
             ╨╛╨┐╤Л╤В╨╛╨╝ ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕&nbsp;╨░╨╜╨╛╨╜╤Б╨╕╤А╤Г╨╡╨╝ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П.</p>
           <div class="page-hero--media__actions">
             <a class="btn btn--outline btn--md" href="#">╨Я╨╛╨┤╨┐╨╕╤Б╨░╤В╤М╤Б╤П ╨╜╨░&nbsp;╤А╨░╤Б╤Б╤Л╨╗╨║╤Г</a>
             <div class="hero-socials">
               <a href="#" class="hero-socials__link" aria-label="Rutube">
-                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <path d="M40 0H0V40H40V0Z" fill="#100943" />
-                  <path
-                    d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                    fill="#ED143B" />
-                  <path
-                    d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                    fill="white" />
-                </svg>
+                <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube-dark"/></svg>
 
               </a>
               <a href="#" class="hero-socials__link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                   <circle cx="20" cy="20" r="20" fill="#FFFFFF" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </div>
@@ -203,19 +154,19 @@
                   <div class="events-featured__actions">
                     <a class="btn btn--outline btn--md" href="event-detail.html">╨Я╨╛╨┤╤А╨╛╨▒╨╜╨╡╨╡ ╨╛&nbsp;╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╕</a>
                     <div class="carousel-nav">
                       <button class="carousel-nav__btn" type="button" data-scroll-prev
                         aria-label="╨Я╤А╨╡╨┤╤Л╨┤╤Г╤Й╨╡╨╡ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡">
                         <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                          <use href="#icon-arrow-left" />
+                          <use href="assets/img/sprite.svg#icon-arrow-left" />
                         </svg>
                       </button>
                       <button class="carousel-nav__btn" type="button" data-scroll-next
                         aria-label="╨б╨╗╨╡╨┤╤Г╤О╤Й╨╡╨╡ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡">
                         <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                          <use href="#icon-arrow-right" />
+                          <use href="assets/img/sprite.svg#icon-arrow-right" />
                         </svg>
                       </button>
                     </div>
                   </div>
                 </article>
                 <a class="events-featured__media" href="event-detail.html">
@@ -236,19 +187,19 @@
                   <div class="events-featured__actions">
                     <a class="btn btn--outline btn--md" href="event-detail.html">╨Я╨╛╨┤╤А╨╛╨▒╨╜╨╡╨╡ ╨╛&nbsp;╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╕</a>
                     <div class="carousel-nav">
                       <button class="carousel-nav__btn" type="button" data-scroll-prev
                         aria-label="╨Я╤А╨╡╨┤╤Л╨┤╤Г╤Й╨╡╨╡ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡">
                         <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                          <use href="#icon-arrow-left" />
+                          <use href="assets/img/sprite.svg#icon-arrow-left" />
                         </svg>
                       </button>
                       <button class="carousel-nav__btn" type="button" data-scroll-next
                         aria-label="╨б╨╗╨╡╨┤╤Г╤О╤Й╨╡╨╡ ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡">
                         <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                          <use href="#icon-arrow-right" />
+                          <use href="assets/img/sprite.svg#icon-arrow-right" />
                         </svg>
                       </button>
                     </div>
                   </div>
                 </article>
                 <a class="events-featured__media" href="event-detail.html">
@@ -269,13 +220,13 @@
           <div class="projects__filters">
             <div class="projects__dropdowns">
               <details class="dropdown" data-filter="tem">
                 <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╤В╨╡╨╝╨╡">
                   <span class="dropdown__label">╨в╨╡╨╝╨░</span>
                   <span class="dropdown__count is-hidden"></span>
-                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
                 </summary>
                 <div class="dropdown__panel" role="group" aria-label="╨в╨╡╨╝╨░">
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="tem"
                       value="edo"> ╨н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В</label>
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="tem" value="hr">
                     ╨Ъ╨░╨┤╤А╨╛╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</label>
@@ -290,13 +241,13 @@
                 </div>
               </details>
               <details class="dropdown" data-filter="format">
                 <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╤Д╨╛╤А╨╝╨░╤В╤Г">
                   <span class="dropdown__label">╨д╨╛╤А╨╝╨░╤В</span>
                   <span class="dropdown__count is-hidden"></span>
-                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
                 </summary>
                 <div class="dropdown__panel" role="group" aria-label="╨д╨╛╤А╨╝╨░╤В">
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="format"
                       value="event"> ╨Ь╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П</label>
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="format"
                       value="article"> ╨б╤В╨░╤В╤М╨╕</label>
@@ -305,13 +256,13 @@
                 </div>
               </details>
               <details class="dropdown" data-filter="period">
                 <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╨┐╨╡╤А╨╕╨╛╨┤╤Г">
                   <span class="dropdown__label">╨Я╨╡╤А╨╕╨╛╨┤</span>
                   <span class="dropdown__count is-hidden"></span>
-                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                  <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
                 </summary>
                 <div class="dropdown__panel" role="group" aria-label="╨Я╨╡╤А╨╕╨╛╨┤">
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="period"
                       value="2025"> 2025 ╨│╨╛╨┤</label>
                   <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="period"
                       value="2024"> 2024 ╨│╨╛╨┤</label>
@@ -334,189 +285,189 @@
             <img class="events__bg" src="assets/img/placeholder.jpg" alt="">
             <div class="events__info">
               <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
               <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                   ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="event" data-tem="digital" data-format="event" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-2.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ч╨░╨║╨░╨╖╤З╨╕╨║╨╕ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╕╨╗╨╕ ╨┐╤А╨╛╨╡╨║╤В╤Л ╨╜╨░&nbsp;Directum Awards 2026</h3>
               <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                   ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="hr" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-3.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ъ╨н╨Ф╨Ю ╨▓&nbsp;╨▓╤Г╨╖╨╡: ╨╛╨┐╤Л╤В ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕&nbsp;╨┐╨╡╤А╨▓╤Л╨╡ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╤Л</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="hr" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/placeholder.jpg" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ъ╨░╨║ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╤В╤М ╨║╨░╨┤╤А╨╛╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨░</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="news" data-tem="digital" data-format="news" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-1.png" alt="">
             <div class="events__info">
               <h3 class="events__title">Directum Awards 2026: ╨╕╤В╨╛╨│╨╕ ╨╕&nbsp;╨┐╨╛╨▒╨╡╨┤╨╕╤В╨╡╨╗╨╕</h3>
               <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="news" data-tem="digital" data-format="news" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-2.png" alt="">
             <div class="events__info">
               <h3 class="events__title">SoftSnow ╨╜╨░&nbsp;╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╨╕ Digital University 2026</h3>
               <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="edo" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-3.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨ж╨╕╤Д╤А╨╛╨▓╨╛╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В ╨┤╨╗╤П&nbsp;╨▓╤Г╨╖╨╛╨▓: ╤З╨╡╨║-╨╗╨╕╤Б╤В ╨╖╨░╨┐╤Г╤Б╨║╨░</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="event" data-tem="strategy" data-format="event" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-4.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨б╤В╤А╨░╤В╨╡╨│╨╕╤З╨╡╤Б╨║╨░╤П ╤Б╨╡╤Б╤Б╨╕╤П ┬л╨С╤Г╨┤╤Г╤Й╨╡╨╡ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨░┬╗</h3>
               <div class="events__meta"><span class="events__tag">╨Ь╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╨╡</span><span class="events__date">25
                   ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="event" data-tem="hr" data-format="event" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-1.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Т╨╡╨▒╨╕╨╜╨░╤А: ╨Т╨╜╨╡╨┤╤А╨╡╨╜╨╕╨╡ ╨Ъ╨н╨Ф╨Ю ╨╖╨░ 30 ╨┤╨╜╨╡╨╣</h3>
               <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">15 ╨╛╨║╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="event" data-tem="digital" data-format="event" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-2.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ┬л╨ж╨╕╤Д╤А╨╛╨▓╨╛╨╣ ╨║╨░╨╝╨┐╤Г╤Б 2026┬╗</h3>
               <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">10 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="campaign" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-3.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Р╨▓╤В╨╛╨╝╨░╤В╨╕╨╖╨░╤Ж╨╕╤П ╨┐╤А╨╕╤С╨╝╨╜╨╛╨╣ ╨║╨░╨╝╨┐╨░╨╜╨╕╨╕: ╨║╨╡╨╣╤Б ╨Т╨и╨н</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">20 ╨╛╨║╤В╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="edo" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-4.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В: ╨╝╨╕╤Д╤Л ╨╕ ╤А╨╡╨░╨╗╤М╨╜╨╛╤Б╤В╤М</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">5 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="article" data-tem="project" data-format="article" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-1.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤А╨╛╨╡╨║╤В╨░╨╝╨╕ ╨▓ ╨▓╤Г╨╖╨╡: ╨╕╨╜╤Б╤В╤А╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╨┐╤А╨░╨║╤В╨╕╨║╨╕</h3>
               <div class="events__meta"><span class="events__tag">╨б╤В╨░╤В╤М╤П</span><span class="events__date">18 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="news" data-tem="digital" data-format="news" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-2.png" alt="">
             <div class="events__info">
               <h3 class="events__title">SoftSnow ╤Б╤В╨░╨╗ ╨┐╨░╤А╤В╨╜╤С╤А╨╛╨╝ ╨│╨╛╨┤╨░ Directum</h3>
               <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">1 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="news" data-tem="digital" data-format="news" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-3.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ю╤В╨║╤А╤Л╤В ╨┐╤А╨╕╤С╨╝ ╨╖╨░╤П╨▓╨╛╨║ ╨╜╨░ ╨│╤А╨░╨╜╤В ╨┐╨╛ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╨╕</h3>
               <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">12 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="news" data-tem="digital" data-format="news" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-4.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Э╨╛╨▓╨░╤П ╨▓╨╡╤А╤Б╨╕╤П ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╤Л Univer Online 2.0</h3>
               <div class="events__meta"><span class="events__tag">╨Э╨╛╨▓╨╛╤Б╤В╨╕</span><span class="events__date">25 ╨╜╨╛╤П╨▒╤А╤П
                   2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
           <article class="events__card" data-category="event" data-tem="strategy" data-format="event" data-period="2025">
             <img class="events__bg" src="assets/img/webinar-1.png" alt="">
             <div class="events__info">
               <h3 class="events__title">╨Ь╨░╤Б╤В╨╡╤А-╨║╨╗╨░╤Б╤Б: ╨б╤В╤А╨░╤В╨╡╨│╨╕╤З╨╡╤Б╨║╨╛╨╡ ╨┐╨╗╨░╨╜╨╕╤А╨╛╨▓╨░╨╜╨╕╨╡ ╨▓ ╨▓╤Г╨╖╨╡</h3>
               <div class="events__meta"><span class="events__tag">╨Ь╨░╤Б╤В╨╡╤А-╨║╨╗╨░╤Б╤Б</span><span class="events__date">2
                   ╨┤╨╡╨║╨░╨▒╤А╤П 2025</span></div>
               <svg class="events__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                <use href="#icon-arrow" />
+                <use href="assets/img/sprite.svg#icon-arrow" />
               </svg>
             </div>
           </article>
         </div>
         <p class="projects__empty" id="projectsEmpty" hidden>╨Я╨╛ ╨▓╤Л╨▒╤А╨░╨╜╨╜╤Л╨╝ ╤Д╨╕╨╗╤М╤В╤А╨░╨╝ ╨╝╨░╤В╨╡╤А╨╕╨░╨╗╤Л ╨╜╨╡ ╨╜╨░╨╣╨┤╨╡╨╜╤Л</p>
         <div class="events-list__more" id="projectsMore">
@@ -539,62 +490,28 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
 
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -631,37 +548,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/index.html b/index.html
index 71a31c5..7210fa9 100644
--- a/index.html
+++ b/index.html
@@ -23,55 +23,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none" xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
         
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
         
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -80,13 +47,13 @@
           </div>
         
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -123,17 +90,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button" data-fancybox data-src="#request-popup">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М
             ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
@@ -167,37 +130,37 @@
           <a href="solutions.html" class="card industries__card">
             <img class="industries__bg" src="assets/img/card-vuz-bg.jpg" alt="" aria-hidden="true">
             <h3 class="industries__title">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</h3>
             <p class="industries__text">╨а╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨░╨▓╤В╨╛╨╝╨░╤В╨╕╨╖╨░╤Ж╨╕╨╕ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓, ╤Б╨╛╨│╨╗╨░╤Б╨╛╨▓╨░╨╜╨╕╨╣, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░
               ╨╕&nbsp;╤Г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П.</p>
             <svg class="industries__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-              <use href="#icon-arrow" />
+              <use href="assets/img/sprite.svg#icon-arrow" />
             </svg>
           </a>
           <a href="solutions.html" class="card industries__card">
             <img class="industries__bg" src="assets/img/card-vuz-bg.jpg" alt="" aria-hidden="true">
             <h3 class="industries__title">╨Т╤Г╨╖╤Л</h3>
             <p class="industries__text">╨ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╨╕ ╤Г╤З╨╡╨▒╨╜╤Л╤Е, ╨░╨┤╨╝╨╕╨╜╨╕╤Б╤В╤А╨░╤В╨╕╨▓╨╜╤Л╤Е ╨╕&nbsp;╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨▓
               ╨╛╨▒╤А╨░╨╖╨╛╨▓╨░╤В╨╡╨╗╤М╨╜╨╛╨╣ ╤Б╤А╨╡╨┤╨╡.</p>
             <svg class="industries__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-              <use href="#icon-arrow" />
+              <use href="assets/img/sprite.svg#icon-arrow" />
             </svg>
           </a>
           <a href="solutions.html" class="card industries__card">
             <img class="industries__bg" src="assets/img/card-vuz-bg.jpg" alt="" aria-hidden="true">
             <h3 class="industries__title">╨С╨╕╨╖╨╜╨╡╤Б</h3>
             <p class="industries__text">╨Ш╨╜╤Б╤В╤А╤Г╨╝╨╡╨╜╤В╤Л ╨┤╨╗╤П ╨║╨╛╨╝╨┐╨░╨╜╨╕╨╣, ╨║╨╛╤В╨╛╤А╤Л╨╝ ╨▓╨░╨╢╨╜╨╛ ╤Г╤Б╨║╨╛╤А╨╕╤В╤М ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨┐╨╛╨▓╤Л╤Б╨╕╤В╤М ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨╛╤Б╤В╤М
               ╨╕&nbsp;╤Б╨╜╨╕╨╖╨╕╤В╤М ╨╛╨┐╨╡╤А╨░╤Ж╨╕╨╛╨╜╨╜╤Г╤О ╨╜╨░╨│╤А╤Г╨╖╨║╤Г.</p>
             <svg class="industries__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-              <use href="#icon-arrow" />
+              <use href="assets/img/sprite.svg#icon-arrow" />
             </svg>
           </a>
           <a href="#cta" class="card industries__card industries__card--cta">
             <h3 class="industries__title">╨Я╨╛╨╗╤Г╤З╨╕╤В╤М ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨░╤Ж╨╕╤О</h3>
             <svg class="industries__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-              <use href="#icon-arrow" />
+              <use href="assets/img/sprite.svg#icon-arrow" />
             </svg>
           </a>
         </div>
         <a href="#cta" class="btn btn--primary btn--lg industries__cta">╨Я╨╛╨╗╤Г╤З╨╕╤В╤М ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨░╤Ж╨╕╤О</a>
       </div>
     </section>
@@ -236,48 +199,48 @@
           <h2 class="tasks__heading">╨Ч╨░╨┤╨░╤З╨╕, ╨║╨╛╤В╨╛╤А╤Л╨╡ <br>╨╝╤Л ╨┐╨╛╨╝╨╛╨│╨░╨╡╨╝ ╤А╨╡╤И╨░╤В╤М</h2>
           <ul class="tasks__list">
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-1-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-2-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨Ъ╨░╨┤╤А╨╛╨▓╤Л╨╣ ╤Н╨╗╨╡╨║╤В╤А╨╛╨╜╨╜╤Л╨╣ ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-3-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-4-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤Б╤В╤А╨░╤В╨╡╨│╨╕╨╡╨╣</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-5-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤А╨╛╨╡╨║╤В╨░╨╝╨╕</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
             <li class="tasks__item"><a class="tasks__link" href="solutions.html">
                 <img class="tasks__bg" src="assets/img/accordion-6-bg.jpg" alt="" aria-hidden="true">
                 <span class="tasks__label">╨а╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</span>
                 <svg class="tasks__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a></li>
           </ul>
           <div class="tasks__footer">
             <button class="btn btn--ghost btn--lg" type="button">╨Т╤Б╨╡ ╤А╨╡╤И╨╡╨╜╨╕╤П</button>
           </div>
@@ -350,17 +313,17 @@
             <div class="partners__actions">
               <p class="partners__sub">╨б╤А╨╡╨┤╨╕ ╨╜╨░╤И╨╕╤Е ╨┐╨░╤А╤В╨╜╤С╤А╨╛╨▓ тАФ ╨▓╨╡╨╜╨┤╨╛╤А╤Л ╨╕&nbsp;╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╤Л, ╤А╨╡╤И╨╡╨╜╨╕╤П ╨║╨╛╤В╨╛╤А╤Л╤Е ╨┐╨╛╨╝╨╛╨│╨░╤О╤В
                 ╨╖╨░╨║╤А╤Л╨▓╨░╤В╤М ╨╖╨░╨┤╨░╤З╨╕</p>
               <div class="carousel-nav">
                 <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                     height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-left" />
+                    <use href="assets/img/sprite.svg#icon-arrow-left" />
                   </svg></button>
                 <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                     height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-right" />
+                    <use href="assets/img/sprite.svg#icon-arrow-right" />
                   </svg></button>
               </div>
             </div>
 
           </div>
         </div>
@@ -371,60 +334,60 @@
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="univer-online.html">
                 <h3 class="partners__name">Univer Online</h3>
                 <span class="partners__tag">╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б ╤А╨╡╤И╨╡╨╜╨╕╨╣ ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</span>
                 <img class="partners__logo" src="assets/img/logo-univer.png" alt="Univer Online" width="130"
                   height="130">
                 <p class="partners__desc">╨б╨╛╨▒╤Б╤В╨▓╨╡╨╜╨╜╨░╤П ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╨░ SoftSnow ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓.</p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">╨С╨╕╤В╤А╨╕╨║╤Б 24</h3>
                 <span class="partners__tag">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</span>
                 <img class="partners__logo" src="assets/img/logo-bitrix.png" alt="╨С╨╕╤В╤А╨╕╨║╤Б 24" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╤Е ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╣ ╨╕&nbsp;╤Б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л.</p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle-2.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle-3.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </div>
@@ -440,17 +403,17 @@
               ╨╗╨╛╨│╨╕╨║╨╛╨╣ ╨┐╤А╨╛╨╡╨║╤В╨░, ╤Н╤В╨░╨┐╨░╨╝╨╕ ╨╖╨░╨┐╤Г╤Б╨║╨░ ╨╕&nbsp;╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В╨╛╨╝, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╨╝╨╛╨╢╨╜╨╛ ╨╕╨╖╨╝╨╡╤А╨╕╤В╤М.</p>
                 <div class="projects__actions">
                   <button class="btn btn--ghost btn--md projects__btn" type="button">╨Т╤Б╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л</button>
                   <div class="carousel-nav">
                     <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15" height="14"
                         viewBox="0 0 15 14" aria-hidden="true">
-                        <use href="#icon-arrow-left" />
+                        <use href="assets/img/sprite.svg#icon-arrow-left" />
                       </svg></button>
                     <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15" height="14"
                         viewBox="0 0 15 14" aria-hidden="true">
-                        <use href="#icon-arrow-right" />
+                        <use href="assets/img/sprite.svg#icon-arrow-right" />
                       </svg></button>
                   </div>
                 </div>
 
               </div>
           </div>
@@ -458,17 +421,13 @@
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow"  width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -476,85 +435,62 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png" alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П"
                   width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
@@ -571,17 +507,17 @@
           <h2 class="events__heading">╨Т╨╡╨▒╨╕╨╜╨░╤А╤Л, ╨╝╨╡╤А╨╛╨┐╤А╨╕╤П╤В╨╕╤П ╨╕&nbsp;╨╝╨░╤В╨╡╤А╨╕╨░╨╗╤Л</h2>
           <div class="events__head-actions">
             <button class="btn btn--ghost btn--md events__btn" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
             <div class="carousel-nav">
               <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
               <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
             </div>
           </div>
         </div>
         <div class="swiper events__swiper">
           <div class="swiper-wrapper">
@@ -589,53 +525,45 @@
               <a class="events__card events__card--wide" href="#">
                 <img class="events__bg" src="assets/img/webinar-1.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤Б╤А╨╡╨┤╨░ ╨▓╤Г╨╖╨░: ╨║╨░╨║ ╤Б╨▓╤П╨╖╨░╤В╤М ╤Б╨╡╤А╨▓╨╕╤Б╤Л, ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-2.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-3.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Ч╨░╨║╨░╨╖╤З╨╕╨║╨╕ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╕╨╗╨╕ ╤Б╨▓╨╛╨╕ ╨┐╤А╨╛╨╡╨║╤В╤Л ╨╜╨░ Directum Awards 2026</h3>
                   <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card events__card--blue" href="#">
                 <img class="events__bg" src="assets/img/webinar-4.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <button class="btn btn--ghost btn--lg events__cta" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
@@ -656,58 +584,28 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z" fill="white" stroke="white"/>
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white"/>
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white"/>
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white"/>
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white"/>
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
 
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -745,37 +643,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <div class="modal-form" id="request-popup">
     <div class="modal-form__head">
       <div>
         <h3 class="modal-form__title">╨б╨▓╤П╨╖╨░╤В╤М╤Б╤П ╤Б ╨╜╨░╨╝╨╕</h3>
         <p class="modal-form__sub">╨Ю╤Б╤В╨░╨▓╤М╤В╨╡ ╤Б╨▓╨╛╨╕ ╨║╨╛╨╜╤В╨░╨║╤В╤Л ╨╕ ╨╝╤Л ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П ╤Б ╨▓╨░╨╝╨╕ ╨▓ ╨▒╨╗╨╕╨╢╨░╨╣╤И╨╡╨╡ ╨▓╤А╨╡╨╝╤П</p>
diff --git a/project-detail.html b/project-detail.html
index 519573f..903dcd0 100644
--- a/project-detail.html
+++ b/project-detail.html
@@ -21,57 +21,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -80,13 +45,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -123,17 +88,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -405,17 +366,13 @@
         <div class="video__inner">
           <h2 class="video__title">╨Т╨╕╨┤╨╡╨╛ ╨╛ ╨┐╤А╨╛╨╡╨║╤В╨╡</h2>
           <p class="video__sub">╨Ч╨░╨┐╨╕╤Б╤М ╨┤╨╡╨╝╨╛╨╜╤Б╤В╤А╨░╤Ж╨╕╨╕: ╨║╨░╨║ ╤Г╤Б╤В╤А╨╛╨╡╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╨н╨Ф╨Ю ╨Р╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ Directum RX</p>
           <div class="video__player">
             <img class="video__poster" src="assets/img/video-placeholder.jpg" alt="╨Т╨╕╨┤╨╡╨╛ ╨╛ ╨┐╤А╨╛╨╡╨║╤В╨╡">
             <button class="video__play" type="button" aria-label="╨б╨╝╨╛╤В╤А╨╡╤В╤М ╨▓╨╕╨┤╨╡╨╛" data-video-src="assets/12488934_3840_2160_30fps.mp4">
-              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M74.7826 36.9877C77.1014 38.3265 77.1014 41.6735 74.7826 43.0123L25.2174 71.6288C22.8985 72.9675 20 71.2941 20 68.6165L20 11.3835C20 8.70594 22.8986 7.03246 25.2174 8.37124L74.7826 36.9877Z"
-                  fill="white" />
-              </svg>
+              <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><use href="assets/img/sprite.svg#icon-play"/></svg>
 
             </button>
           </div>
         </div>
       </div>
     </section>
@@ -429,17 +386,17 @@
               <p class="gallery__sub">╨Ш╨╜╤В╨╡╤А╤Д╨╡╨╣╤Б╤Л ╤Б╨╕╤Б╤В╨╡╨╝╤Л ╨╕ ╤А╨░╨▒╨╛╤З╨╕╨╡ ╨╝╨╡╤Б╤В╨░ ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╡╨╣ ╨▓ ╨Ь╨╛╤Б╨║╨▓╨╡ ╨╕ ╤А╨╡╨│╨╕╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╤Д╨╕╨╗╨╕╨░╨╗╨░╤Е
                 ╨а╨Р╨Э╨е╨╕╨У╨б</p>
             </div>
             <div class="carousel-nav">
               <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
               <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
             </div>
           </div>
           <div class="swiper gallery__swiper">
             <div class="swiper-wrapper">
               <div class="swiper-slide">
@@ -472,17 +429,17 @@
           <h2 class="events__heading">╨з╨╕╤В╨░╨╣╤В╨╡ ╤В╨░╨║╨╢╨╡</h2>
           <div class="events__head-actions">
             <button class="btn btn--ghost btn--md events__btn" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
             <div class="carousel-nav">
               <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
               <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
             </div>
           </div>
         </div>
         <div class="swiper events__swiper">
           <div class="swiper-wrapper">
@@ -490,61 +447,45 @@
               <a class="events__card events__card--wide" href="#">
                 <img class="events__bg" src="assets/img/webinar-1.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤Б╤А╨╡╨┤╨░ ╨▓╤Г╨╖╨░: ╨║╨░╨║ ╤Б╨▓╤П╨╖╨░╤В╤М ╤Б╨╡╤А╨▓╨╕╤Б╤Л, ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-2.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-3.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Ч╨░╨║╨░╨╖╤З╨╕╨║╨╕ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╕╨╗╨╕ ╤Б╨▓╨╛╨╕ ╨┐╤А╨╛╨╡╨║╤В╤Л ╨╜╨░ Directum Awards 2026</h3>
                   <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-4.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
@@ -553,61 +494,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40"
-                    height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -645,37 +552,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
   <script src="js/main.js"></script>
 </body>
 
diff --git a/projects.html b/projects.html
index d308a39..fb5aa27 100644
--- a/projects.html
+++ b/projects.html
@@ -19,57 +19,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
   
         </a>
   
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -78,13 +43,13 @@
           </div>
   
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -121,17 +86,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -174,13 +135,13 @@
             </div>
           <div class="projects__dropdowns" id="projectsFiltersPanel">
               <details class="dropdown" data-filter="otrasl">
               <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╨╛╤В╤А╨░╤Б╨╗╨╕">
                 <span class="dropdown__label">╨Ю╤В╤А╨░╤Б╨╗╤М</span>
                 <span class="dropdown__count is-hidden"></span>
-                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </summary>
               <div class="dropdown__panel" role="group" aria-label="╨Ю╤В╤А╨░╤Б╨╗╤М">
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="otrasl"
                     value="gos"> ╨У╨╛╤Б╤Г╨┤╨░╤А╤Б╤В╨▓╨╡╨╜╨╜╤Л╨╣ ╤Б╨╡╨║╤В╨╛╤А</label>
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="otrasl"
                     value="energy"> ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╨║╨░</label>
@@ -195,13 +156,13 @@
               </div>
             </details>
             <details class="dropdown" data-filter="resh">
               <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╤А╨╡╤И╨╡╨╜╨╕╤П╨╝">
                 <span class="dropdown__label">╨а╨╡╤И╨╡╨╜╨╕╤П</span>
                 <span class="dropdown__count is-hidden"></span>
-                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
 
               </summary>
               <div class="dropdown__panel" role="group" aria-label="╨а╨╡╤И╨╡╨╜╨╕╤П">
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="resh" value="vuz">
                   ╨а╨╡╤И╨╡╨╜╨╕╤П ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</label>
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="resh" value="edo">
@@ -221,13 +182,13 @@
               </div>
             </details>
             <details class="dropdown" data-filter="produkty">
               <summary class="dropdown__trigger" aria-label="╨д╨╕╨╗╤М╤В╤А ╨┐╨╛ ╨┐╤А╨╛╨┤╤Г╨║╤В╨░╨╝">
                 <span class="dropdown__label">╨Я╤А╨╛╨┤╤Г╨║╤В╤Л</span>
                 <span class="dropdown__count is-hidden"></span>
-                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon-caret" /></svg>
+                <svg class="dropdown__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </summary>
               <div class="dropdown__panel" role="group" aria-label="╨Я╤А╨╛╨┤╤Г╨║╤В╤Л">
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="produkty"
                     value="rx"> Directum RX</label>
                 <label class="dropdown__option"><input class="dropdown__check" type="checkbox" name="produkty"
                     value="ario"> Directum Ario</label>
@@ -257,97 +218,73 @@
 
         <div class="projects__grid">
           <a class="card projects__card" href="#" data-otrasl="edu" data-resh="edo project" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                 Directum</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
               ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
               ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
             <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
               height="180">
           </a>
 
           <a class="card projects__card" href="#" data-otrasl="energy" data-resh="edo" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨Ч╨░╨┐╤Г╤Б╨║ ╨║╨╗╨░╤Б╤Б╨╕╤З╨╡╤Б╨║╨╕╤Е <br>╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨н╨Ф╨Ю ╨╕ ╤А╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П ╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╨╛╨│╨╛ ╨░╤А╤Е╨╕╨▓╨░</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
               Directum</p>
             <img class="projects__logo" src="assets/img/project-2.png"
               alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨╛╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╤Н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
           </a>
 
           <a class="card projects__card" href="#" data-otrasl="energy" data-resh="edo" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨Ч╨░╨┐╤Г╤Б╨║ ╨║╨╗╨░╤Б╤Б╨╕╤З╨╡╤Б╨║╨╕╤Е <br>╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨н╨Ф╨Ю ╨╕ ╤А╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П ╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╨╛╨│╨╛ ╨░╤А╤Е╨╕╨▓╨░</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
               Directum</p>
             <img class="projects__logo" src="assets/img/project-2.png"
               alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨╛╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╤Н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
           </a>
 
           <a class="card projects__card" href="#" data-otrasl="edu" data-resh="edo project" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                 Directum</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
               ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
               ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
             <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
               height="180">
           </a>
 
           <a class="card projects__card" href="#" data-otrasl="edu" data-resh="edo project" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                 Directum</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
               ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
               ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
             <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
               height="180">
           </a>
 
           <a class="card projects__card" href="#" data-otrasl="energy" data-resh="edo" data-produkty="rx">
             <div class="projects__top">
               <h3 class="projects__name">╨Ч╨░╨┐╤Г╤Б╨║ ╨║╨╗╨░╤Б╤Б╨╕╤З╨╡╤Б╨║╨╕╤Е <br>╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨н╨Ф╨Ю ╨╕ ╤А╨╡╨░╨╗╨╕╨╖╨░╤Ж╨╕╤П ╨┤╨╛╨╗╨│╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╨╛╨│╨╛ ╨░╤А╤Е╨╕╨▓╨░</h3>
-              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                  fill="#222222" />
-              </svg>
+              <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
             </div>
             <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
               Directum</p>
             <img class="projects__logo" src="assets/img/project-2.png"
               alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨╛╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╤Н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
           </a>
@@ -375,59 +312,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -465,36 +370,11 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/solution-detail.html b/solution-detail.html
index 1dfd377..1c9b796 100644
--- a/solution-detail.html
+++ b/solution-detail.html
@@ -23,57 +23,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -82,13 +47,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -125,17 +90,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -597,30 +558,25 @@
       <div class="container">
         <div class="testimonials__head">
           <h2 class="testimonials__title">╨з╤В╨╛ ╨│╨╛╨▓╨╛╤А╤П╤В ╨║╨╗╨╕╨╡╨╜╤В╤Л</h2>
           <div class="carousel-nav">
             <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-left" />
+                <use href="assets/img/sprite.svg#icon-arrow-left" />
               </svg></button>
             <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-right" />
+                <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -630,18 +586,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -651,18 +602,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -671,18 +617,13 @@
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -692,18 +633,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
@@ -729,17 +665,17 @@
                 ╨╕╤Б╨║╨╗╤О╤З╨░╨╡╤В ╨▒╤Г╨╝╨░╨│╤Г ╨╕ ╨┤╨╡╨╗╨░╨╡╤В ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╨╡╨╡.</p>
               <div class="projects__actions">
                 <button class="btn btn--ghost btn--md projects__btn" type="button">╨Т╤Б╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л</button>
                 <div class="carousel-nav">
                   <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-left" />
+                      <use href="assets/img/sprite.svg#icon-arrow-left" />
                     </svg></button>
                   <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-right" />
+                      <use href="assets/img/sprite.svg#icon-arrow-right" />
                     </svg></button>
                 </div>
               </div>
 
             </div>
           </div>
@@ -747,18 +683,13 @@
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -766,52 +697,37 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -819,35 +735,25 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
@@ -864,17 +770,17 @@
           <h2 class="events__heading">╨з╨╕╤В╨░╨╣╤В╨╡ ╤В╨░╨║╨╢╨╡</h2>
           <div class="events__head-actions">
             <button class="btn btn--ghost btn--md events__btn" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
             <div class="carousel-nav">
               <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-left" />
+                  <use href="assets/img/sprite.svg#icon-arrow-left" />
                 </svg></button>
               <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                   height="14" viewBox="0 0 15 14" aria-hidden="true">
-                  <use href="#icon-arrow-right" />
+                  <use href="assets/img/sprite.svg#icon-arrow-right" />
                 </svg></button>
             </div>
           </div>
         </div>
         <div class="swiper events__swiper">
           <div class="swiper-wrapper">
@@ -882,53 +788,45 @@
               <a class="events__card events__card--wide" href="#">
                 <img class="events__bg" src="assets/img/webinar-1.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤Б╤А╨╡╨┤╨░ ╨▓╤Г╨╖╨░: ╨║╨░╨║ ╤Б╨▓╤П╨╖╨░╤В╤М ╤Б╨╡╤А╨▓╨╕╤Б╤Л, ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-2.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-3.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Ч╨░╨║╨░╨╖╤З╨╕╨║╨╕ ┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗ ╨┐╤А╨╡╨┤╤Б╤В╨░╨▓╨╕╨╗╨╕ ╤Б╨▓╨╛╨╕ ╨┐╤А╨╛╨╡╨║╤В╤Л ╨╜╨░ Directum Awards 2026</h3>
                   <div class="events__meta"><span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-4.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-                    <path d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <button class="btn btn--ghost btn--lg events__cta" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
@@ -1045,61 +943,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -1150,18 +1014,18 @@
       <h3 class="features-popup__title">╨Ф╨░╤И╨▒╨╛╤А╨┤ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╛╨▓</h3>
       <div class="features-popup__media">
         <div class="features-popup__main">
           <img class="features-popup__img" src="" alt="">
           <button type="button" class="features-popup__nav features-popup__nav--prev" aria-label="╨Я╤А╨╡╨┤╤Л╨┤╤Г╤Й╨╕╨╣ ╤Н╨║╤А╨░╨╜">
             <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-              <use href="#icon-arrow-left" />
+              <use href="assets/img/sprite.svg#icon-arrow-left" />
             </svg>
           </button>
           <button type="button" class="features-popup__nav features-popup__nav--next" aria-label="╨б╨╗╨╡╨┤╤Г╤О╤Й╨╕╨╣ ╤Н╨║╤А╨░╨╜">
             <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-              <use href="#icon-arrow-right" />
+              <use href="assets/img/sprite.svg#icon-arrow-right" />
             </svg>
           </button>
         </div>
         <div class="features-popup__thumbs">
           <button type="button" class="features-popup__thumb" aria-label="╨н╨║╤А╨░╨╜ 1">
             <img src="assets/img/popup1.jpg" alt="">
@@ -1180,37 +1044,12 @@
           </button>
         </div>
       </div>
     </div>
   </div>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
   <script src="js/main.js"></script>
 </body>
 
diff --git a/solutions.html b/solutions.html
index 6b47554..4469f4c 100644
--- a/solutions.html
+++ b/solutions.html
@@ -21,57 +21,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
   
         </a>
   
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -80,13 +45,13 @@
           </div>
   
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
   
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -123,17 +88,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button" data-fancybox data-src="#request-popup">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М
             ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
@@ -188,18 +149,13 @@
                 <li class="catalog__feat">╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П ╤Б&nbsp;╨Я╨Ю╨б. ╨У╨╛╤Б╤Г╤Б╨╗╤Г╨│╨╕</li>
                 <li class="catalog__feat">╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П ╤Б&nbsp;╨б╨б╨в╨г</li>
                 <li class="catalog__feat">╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П ╤Б&nbsp;1╨б</li>
                 <li class="catalog__feat">╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П ╤Б&nbsp;╨╛╨╜╨╗╨░╨╣╨╜-╤А╨╡╨┤╨░╨║╤В╨╛╤А╨░╨╝╨╕</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -214,17 +170,13 @@
                 <li class="catalog__feat">╨Ю╨╖╨╜╨░╨║╨╛╨╝╨╗╨╡╨╜╨╕╨╡ ╤Б&nbsp;╨Ы╨Э╨Р</li>
                 <li class="catalog__feat">╨Ю╤В╨┐╤Г╤Б╨║╨░</li>
                 <li class="catalog__feat">╨Я╤А╨╕╤С╨╝ ╨╜╨░&nbsp;╤А╨░╨▒╨╛╤В╤Г</li>
                 <li class="catalog__feat">╨Ъ╨╛╨╝╨░╨╜╨┤╨╕╤А╨╛╨▓╨║╨╕ ╨╕&nbsp;╨░╨▓╨░╨╜╤Б╨╛╨▓╤Л╨╡ ╨╛╤В╤З╤С╤В╤Л</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -246,17 +198,13 @@
                 <li class="catalog__feat">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨┐╤А╨╕╨║╨░╨╖╨░╨╝╨╕ ╨┐╨╛&nbsp;╤Г╤З╨╡╨▒╨╜╨╛╨╣ ╨┤╨╡╤П╤В╨╡╨╗╤М╨╜╨╛╤Б╤В╨╕</li>
                 <li class="catalog__feat">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╨╖╨░╤П╨▓╨║╨░╨╝╨╕</li>
                 <li class="catalog__feat">╨е╤А╨░╨╜╨╕╨╗╨╕╤Й╨╡ ╨╗╨╕╤З╨╜╤Л╤Е ╨┤╨╡╨╗ ╤Б╤В╤Г╨┤╨╡╨╜╤В╨╛╨▓ ╨╕&nbsp;╤Б╨╛╤В╤А╤Г╨┤╨╜╨╕╨║╨╛╨▓</li>
                 <li class="catalog__feat">╨з╨░╤В-╨▒╨╛╤В╤Л</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -269,17 +217,13 @@
             <div class="catalog__feats catalog__feats--single">
               <ul class="catalog__col">
                 <li class="catalog__feat">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ ╤Ж╨╡╨╗╤П╨╝╨╕ ╨╕&nbsp;╨┐╨╛╨║╨░╨╖╨░╤В╨╡╨╗╤П╨╝╨╕</li>
                 <li class="catalog__feat">╨г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╨╡ KPI</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -295,17 +239,13 @@
                 <li class="catalog__feat">╨Я╨╗╨░╨╜╨╕╤А╨╛╨▓╨░╨╜╨╕╨╡ ╨┐╤А╨╛╨╡╨║╤В╨╛╨▓</li>
                 <li class="catalog__feat">╨Я╨╛╤А╤В╤Д╨╡╨╗╨╕ ╨╕&nbsp;╨┐╤А╨╛╨│╤А╨░╨╝╨╝╤Л</li>
                 <li class="catalog__feat">Agile-╨┤╨╛╤Б╨║╨╕</li>
                 <li class="catalog__feat">╨С╨░╨╖╨░ ╨╖╨╜╨░╨╜╨╕╨╣</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -319,17 +259,13 @@
                 <li class="catalog__feat">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</li>
                 <li class="catalog__feat">╨Т╨╕╨┤╨╡╨╛╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╨╕</li>
                 <li class="catalog__feat">╨б╨╕╤Б╤В╨╡╨╝╤Л ╤Г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╨╛╨▒╤Г╤З╨╡╨╜╨╕╨╡╨╝ (LMS)</li>
                 <li class="catalog__feat">╨Я╤А╨╛╨║╤В╨╛╤А╨╕╨╜╨│</li>
               </ul>
             </div>
-            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
-              <path opacity="0.5"
-                d="M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4795 1.25879 10.3359 1.25879 10.1582C1.25879 10.0352 1.25423 9.91211 1.24512 9.78906C1.24056 9.67057 1.23828 9.5293 1.23828 9.36523C1.23828 8.52214 1.34538 7.83854 1.55957 7.31445C1.77832 6.79036 2.13379 6.40527 2.62598 6.15918C3.12272 5.91764 3.79036 5.79688 4.62891 5.79688H9.3457L11.0273 5.69434L8.7168 7.80664L7.19922 9.35156C7.14909 9.40625 7.10807 9.47005 7.07617 9.54297C7.04883 9.62044 7.03516 9.7002 7.03516 9.78223C7.03516 9.95085 7.09212 10.0898 7.20605 10.1992C7.32454 10.3132 7.4681 10.3701 7.63672 10.3701C7.80078 10.3701 7.94889 10.3086 8.08105 10.1855L12.6201 5.64648C12.7614 5.51432 12.832 5.36165 12.832 5.18848C12.832 5.0153 12.7614 4.86035 12.6201 4.72363L8.09473 0.205078C7.95345 0.0683594 7.80078 0 7.63672 0C7.4681 0 7.32454 0.0546875 7.20605 0.164062C7.09212 0.277995 7.03516 0.419271 7.03516 0.587891C7.03516 0.669922 7.04883 0.749674 7.07617 0.827148C7.10352 0.904622 7.14453 0.970703 7.19922 1.02539L8.7168 2.57031L11.0205 4.66895L9.3457 4.57324H4.56738C2.94499 4.57324 1.77832 4.94694 1.06738 5.69434C0.356445 6.44629 0.000976562 7.64941 0.000976562 9.30371C0.000976562 9.50423 0.00553385 9.68652 0.0146484 9.85059C0.023763 10.0146 0.0397135 10.1491 0.0625 10.2539C0.0807292 10.3451 0.11263 10.4294 0.158203 10.5068C0.203776 10.5843 0.265299 10.6458 0.342773 10.6914C0.424805 10.737 0.525065 10.7598 0.643555 10.7598Z"
-                fill="#222222" />
-            </svg>
+            <svg class="catalog__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor" opacity="0.5"/></svg>
             <svg class="catalog__plus" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
               <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
               <path class="catalog__plus-v" d="M7 1V13" stroke="currentColor" stroke-width="1.5"
                 stroke-linecap="round" />
             </svg>
           </a>
@@ -351,61 +287,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                    width="40" height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -443,37 +345,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/univer-online.html b/univer-online.html
index 793f794..3557dea 100644
--- a/univer-online.html
+++ b/univer-online.html
@@ -22,57 +22,22 @@
 <body>
 
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -81,13 +46,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -124,17 +89,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -377,35 +338,30 @@
                 ╤Б╤А╨╡╨┤╤Г, ╤А╨░╨╖╨▓╨╕╨▓╨░╤О╤В ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л ╨╕&nbsp;╨┐╨╛╨╗╤Г╤З╨░╤О╤В ╨╕╨╖╨╝╨╡╤А╨╕╨╝╤Л╨╣ ╤Г╨┐╤А╨░╨▓╨╗╨╡╨╜╤З╨╡╤Б╨║╨╕╨╣ ╤Н╤Д╤Д╨╡╨║╤В.</p>
               <div class="projects__actions">
                 <button class="btn btn--ghost btn--md projects__btn" type="button">╨Т╤Б╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л</button>
                 <div class="carousel-nav">
                   <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-left" />
+                      <use href="assets/img/sprite.svg#icon-arrow-left" />
                     </svg></button>
                   <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-right" />
+                      <use href="assets/img/sprite.svg#icon-arrow-right" />
                     </svg></button>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="#">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#1342F3" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒
                   ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX
                   Intelligence</p>
                 <img class="projects__logo" src="assets/img/logo-ranepa-univer.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П"
@@ -413,34 +369,24 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="#">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#1342F3" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/logo-voek-univer.png" alt="╨Т╨Ю╨н╨Ъ" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="#">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨Ю╨н╨Ъ</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#1342F3" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨а╨░╨╖╨▓╨╕╤В╨╕╨╡ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣ ╤Б╤А╨╡╨┤╤Л ╨▓╤Г╨╖╨░: ╨╜╨╛╨▓╤Л╨╡ ╤Б╨╡╤А╨▓╨╕╤Б╤Л, ╨╝╨╛╨▒╨╕╨╗╤М╨╜╨╛╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡
                   ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╨╕ ╨╜╨░&nbsp;╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╨╡ Univer Online.</p>
                 <img class="projects__logo projects__logo--sm" src="assets/img/logo-voek-univer.png" alt="╨Т╨Ю╨н╨Ъ"
                   width="100" height="100">
               </a>
@@ -457,73 +403,73 @@
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨С╨░╨╖╨╛╨▓╤Л╨╣</h3>
             <p class="vnedrenie__sub">╨Я╨╛╨┤╤Е╨╛╨┤╨╕╤В, ╨╡╤Б╨╗╨╕ ╨▓╤Г╨╖╤Г ╨╜╤Г╨╢╨╜╨╛ ╨▒╤Л╤Б╤В╤А╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨║╨╛╨╜╨║╤А╨╡╤В╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╨╡╨╖&nbsp;╤Б╨╗╨╛╨╢╨╜╨╛╨╣
               ╨┐╨╡╤А╨╡╤Б╤В╤А╨╛╨╣╨║╨╕ ╨Ш╨в-╤Б╤А╨╡╨┤╤Л</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ю╨┤╨╕╨╜ ╤Б╨╡╤А╨▓╨╕╤Б ╨╕╨╗╨╕ ╨╝╨╛╨┤╤Г╨╗╤М</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨С╨░╨╖╨╛╨▓╨░╤П ╨╜╨░╤Б╤В╤А╨╛╨╣╨║╨░</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ь╨╕╨╜╨╕╨╝╤Г╨╝ ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╨╣</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨С╤Л╤Б╤В╤А╤Л╨╣ ╨╖╨░╨┐╤Г╤Б╨║</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╨▒╤Б╤Г╨┤╨╕╤В╤М ╨╖╨░╨┤╨░╤З╤Г</button>
           </article>
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨б╤В╨░╨╜╨┤╨░╤А╤В╨╜╤Л╨╣<span class="vnedrenie__badge">╨Я╨╛╨┐╤Г╨╗╤П╤А╨╜╤Л╨╣</span></h3>
             <p class="vnedrenie__sub">╨Я╨╛╨┤╤Е╨╛╨┤╨╕╤В ╨▓╤Г╨╖╨░╨╝, ╨║╨╛╤В╨╛╤А╤Л╨╝ ╨▓╨░╨╢╨╜╨╛ ╨╛╨▒╤К╨╡╨┤╨╕╨╜╨╕╤В╤М ╨╜╨╡╤Б╨║╨╛╨╗╤М╨║╨╛ ╤Б╨╡╤А╨▓╨╕╤Б╨╛╨▓ ╨╕&nbsp;╨▓╤Б╤В╤А╨╛╨╕╤В╤М ╨╕╤Е
               ╨▓&nbsp;╤Б╤Г╤Й╨╡╤Б╤В╨▓╤Г╤О╤Й╤Г╤О ╨╕╨╜╤Д╤А╨░╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Э╨╡╤Б╨║╨╛╨╗╤М╨║╨╛ ╤Б╨╡╤А╨▓╨╕╤Б╨╛╨▓</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Э╨░╤Б╤В╤А╨╛╨╣╨║╨░ ╨┐╨╛╨┤ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ш╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╨╕ ╤Б&nbsp;╤Б╨╕╤Б╤В╨╡╨╝╨░╨╝╨╕ ╨▓╤Г╨╖╨░</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛╨╡ ╤А╨░╨╖╨▓╨╕╤В╨╕╨╡</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╨▒╤Б╤Г╨┤╨╕╤В╤М ╨╖╨░╨┤╨░╤З╤Г</button>
           </article>
           <article class="card vnedrenie__card">
             <h3 class="vnedrenie__name">╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б╨╜╤Л╨╣</h3>
             <p class="vnedrenie__sub">╨Я╨╛╨┤╤Е╨╛╨┤╨╕╤В ╨┤╨╗╤П ╤Б╨╛╨╖╨┤╨░╨╜╨╕╤П ╨╡╨┤╨╕╨╜╨╛╨╣ ╤Н╨║╨╛╤Б╨╕╤Б╤В╨╡╨╝╤Л ╤Б&nbsp;╨┐╨╛╤А╤В╨░╨╗╨░╨╝╨╕, ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╝ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡╨╝,
               ╤Б╨╡╤А╨▓╨╕╤Б╨░╨╝╨╕ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕</p>
             <ul class="vnedrenie__list">
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Х╨┤╨╕╨╜╤Л╨╣ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣ ╨║╨╛╨╜╤В╤Г╤А</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б╨╜╨░╤П ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨Ь╨╕╨│╤А╨░╤Ж╨╕╤П ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╨╕</span>
               </li>
               <li class="vnedrenie__row">
-                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="#icon-check" /></svg>
+                <svg class="vnedrenie__done" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-check" /></svg>
                 <span>╨а╨░╨╖╨▓╨╕╤В╨╕╨╡ ╨┐╨╛╨┤ ╨╜╨╛╨▓╤Л╨╡ ╨╖╨░╨┤╨░╤З╨╕</span>
               </li>
             </ul>
             <button class="btn btn--primary vnedrenie__btn" type="button">╨Ю╨▒╤Б╤Г╨┤╨╕╤В╤М ╨╖╨░╨┤╨░╤З╤Г</button>
           </article>
         </div>
@@ -572,61 +518,27 @@
 
   <footer class="footer">
     <div class="container footer__inner">
       <div class="footer__brand">
         <div class="footer__brand-top">
           <div class="footer__logo">
-            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-              xmlns="http://www.w3.org/2000/svg">
-              <path
-                d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                fill="white" stroke="white" />
-              <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-            </svg>
+            <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
             <span class="footer__logo-text">SOFTSNOW</span>
           </div>
           <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
         </div>
         <div class="footer__brand-bottom">
           <div class="footer__social">
             <a href="#" class="footer__social-link" aria-label="Rutube">
-              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                <g clip-path="url(#clip0_3007_679)">
-                  <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40"
-                    height="40">
-                    <path
-                      d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                      fill="white" />
-                  </mask>
-                  <g mask="url(#mask0_3007_679)">
-                    <path d="M40 0H0V40H40V0Z" fill="white" />
-                    <path
-                      d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                      fill="#ED143B" />
-                    <path
-                      d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                      fill="#100943" />
-                  </g>
-                </g>
-                <defs>
-                  <clipPath id="clip0_3007_679">
-                    <rect width="40" height="40" fill="white" />
-                  </clipPath>
-                </defs>
-              </svg>
+              <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
             </a>
             <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_633_379)">
                   <rect x="6" y="10" width="30" height="20" fill="white" />
-                  <path fill-rule="evenodd" clip-rule="evenodd"
-                    d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                    fill="#1F67F9" />
+                  <use href="assets/img/sprite.svg#icon-vk"/>
                 </g>
                 <defs>
                   <clipPath id="clip0_633_379">
                     <rect width="40" height="40" fill="white" />
                   </clipPath>
                 </defs>
@@ -664,37 +576,12 @@
           <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
         </div>
       </div>
     </div>
   </footer>
 
-  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-    <defs>
-      <symbol id="icon-arrow" viewBox="0 0 17 14">
-        <path
-          d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-        <path
-          d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-        <path
-          d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-          fill="currentColor" />
-      </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-    </defs>
-  </svg>
 
   <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
   <script src="js/main.js"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/vuz.html b/vuz.html
index cd8cac6..f66d7ec 100644
--- a/vuz.html
+++ b/vuz.html
@@ -21,57 +21,22 @@
 
 <body>
   <header class="header">
     <div class="container">
       <div class="header__inner">
         <a href="index.html" class="logo" aria-label="SoftSnow тАФ ╨╜╨░ ╨│╨╗╨░╨▓╨╜╤Г╤О">
-          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" fill="none"
-            xmlns="http://www.w3.org/2000/svg">
-            <path
-              d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-              fill="#1342F3" stroke="#1342F3" />
-            <rect x="57.3281" y="32.9357" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="15.0469" y="33.556" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="0.5" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <rect x="34.3438" y="25.8656" width="6.167" height="6.30839" rx="3.0835" fill="#1342F3" stroke="#1342F3" />
-            <path
-              d="M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65.9062 0.539062H67.4062V6.82031H66.1641V2.76562L64.418 6.82031H63.75ZM56.5195 6.82031V1.60547H54.6211V0.539062H59.6602V1.60547H57.7617V6.82031H56.5195Z"
-              fill="#1342F3" />
-            <path fill-rule="evenodd" clip-rule="evenodd"
-              d="M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.4474V29.384L181.175 27.9904H181.13L183.123 26.8381L183.122 26.8371L187.462 24.341L196.203 29.382ZM184.884 29.5666L184.878 29.5695L182.214 31.0998L181.963 31.2433V37.5705L182.214 37.715L184.878 39.2443L187.196 40.5803L187.444 40.7238L187.694 40.5812L190.028 39.2443L190.03 39.2433L192.929 37.5695V31.2463L192.681 31.1017L187.532 28.092L184.884 29.5666Z"
-              fill="#1342F3" />
-            <path
-              d="M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947 38.7766L106.475 40.2414L106.725 40.3859L106.975 40.2424L111.95 37.3762L112.2 37.2316V30.8908L110.341 29.8117V26.0734L111.051 26.4767L115.467 29.0197V39.0851L106.709 44.1418L97.9678 39.0851V29.0256L98.8037 28.5656L98.8125 28.5607L102.414 26.4787L103.142 26.0685V29.8107Z"
-              fill="#1342F3" />
-            <path
-              d="M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448 91.79 26.7111C92.7253 27.2802 93.4889 28.0924 94.0098 29.051L91.1377 30.7297C90.8978 30.2894 90.56 29.9025 90.1475 29.6115C89.6415 29.2478 89.0435 29.0361 88.4277 28.9953L88.1631 28.9885C87.6473 28.9661 87.1387 29.0946 86.6973 29.3693L86.6855 29.3771L86.6738 29.3859C86.4631 29.5347 86.3058 29.7295 86.2002 29.9406C86.0947 30.1516 86.0324 30.4048 86.0439 30.6594C86.0559 30.957 86.1511 31.2353 86.3066 31.4797L86.3125 31.4885C86.4609 31.7111 86.6624 31.9181 86.9238 32.0607L86.9287 32.0637C87.7147 32.4817 88.5508 32.7997 89.4199 33.0109C90.0887 33.2195 90.6573 33.3964 91.0645 33.5461L91.417 33.6877C91.9594 33.9481 92.4797 34.2543 92.9697 34.5988L92.9775 34.6037C93.4535 34.9251 93.8446 35.3567 94.126 35.8557L94.2393 36.0734C94.5229 36.6701 94.6433 37.3206 94.5869 37.9699L94.584 38.0021L94.585 38.0344C94.6139 38.7221 94.4832 39.408 94.1953 40.0344L94.1934 40.0392C93.9147 40.6607 93.4845 41.2074 92.9502 41.6428C91.6282 42.5999 89.9936 43.1595 88.3594 43.0695C86.8771 43.1046 85.4194 42.7287 84.1348 41.9797C83.1365 41.3559 82.3579 40.4423 81.8984 39.3664L84.8867 37.6301C85.1908 38.2056 85.6314 38.7042 86.1826 39.0724C86.892 39.5515 87.7464 39.7887 88.6006 39.7521C89.3081 39.7502 89.9194 39.6503 90.3711 39.3928C90.8677 39.1096 91.1406 38.6522 91.1406 38.0783C91.1406 37.2537 90.4875 36.7112 89.6602 36.3615L89.6406 36.3537C89.3622 36.2493 88.5982 36.0178 87.4033 35.6594L87.3887 35.6545L87.374 35.6516L87.1201 35.5871C85.8616 35.2501 84.6957 34.6244 83.7148 33.7531C83.3709 33.4065 83.0935 32.9927 82.8896 32.5432L82.8057 32.3469C82.5984 31.8171 82.5056 31.2523 82.5342 30.6887L82.5352 30.6682V30.6476C82.5135 29.9826 82.6433 29.3163 82.9111 28.7082C83.1449 28.1775 83.485 27.6938 83.9082 27.2834L84.0947 27.1125C85.2221 26.1819 86.6605 25.693 88.1299 25.7375Z"
-              fill="#1342F3" />
-            <path
-              d="M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26.5695L156.042 26.6896C156.969 27.266 157.725 28.0715 158.243 29.0266L155.372 30.7043C155.135 30.2677 154.803 29.8854 154.394 29.59C153.815 29.1732 153.123 28.9546 152.412 28.9641C151.891 28.9418 151.386 29.0816 150.954 29.341L150.938 29.3508L150.923 29.3615C150.779 29.4632 150.643 29.5917 150.535 29.7531L150.438 29.926C150.334 30.1366 150.273 30.387 150.285 30.6398C150.297 30.9206 150.377 31.1977 150.536 31.4504C150.686 31.6924 150.901 31.8948 151.141 32.0314L151.147 32.0363L151.155 32.0402C151.949 32.4582 152.789 32.7855 153.654 33.0051C154.165 33.146 154.668 33.3091 155.165 33.4943L155.661 33.6877C156.199 33.9201 156.71 34.221 157.188 34.5695L157.195 34.5744L157.202 34.5803C157.746 34.9475 158.18 35.4577 158.465 36.049C158.749 36.6458 158.868 37.297 158.812 37.9465L158.809 37.9787L158.811 38.0109C158.839 38.6987 158.709 39.3846 158.421 40.0109L158.419 40.0148C158.14 40.6371 157.709 41.1847 157.174 41.6203C155.862 42.5912 154.23 43.1342 152.598 43.0295C151.125 43.073 149.667 42.6986 148.39 41.9582C147.389 41.3343 146.609 40.4197 146.148 39.342L149.134 37.6086C149.437 38.1859 149.882 38.6828 150.421 39.0539C151.128 39.5406 151.976 39.7694 152.829 39.7297C153.545 39.7297 154.165 39.6284 154.621 39.3683C155.118 39.0851 155.391 38.6277 155.391 38.0539C155.391 37.2232 154.727 36.6988 153.898 36.3391L153.887 36.3342L153.874 36.3303L153.575 36.2267C153.187 36.0995 152.533 35.902 151.628 35.6486L151.619 35.6457L151.609 35.6437C150.254 35.318 148.996 34.6593 147.948 33.7287C147.555 33.3325 147.25 32.8506 147.05 32.3303C146.848 31.7967 146.756 31.2296 146.784 30.6652L146.785 30.6418L146.784 30.6183C146.755 29.9574 146.884 29.2919 147.153 28.674C147.419 28.0628 147.823 27.5283 148.338 27.093L148.337 27.092C149.466 26.1573 150.892 25.6686 152.363 25.7131Z"
-              fill="#1342F3" />
-            <path
-              d="M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V42.6896H162.177V26.1564H164.896Z"
-              fill="#1342F3" />
-            <path
-              d="M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139 26.1564H221.99L217.368 42.674H213.372L210.101 31.4924L206.92 42.674H202.895L198.272 26.1564H202.123Z"
-              fill="#1342F3" />
-            <path
-              d="M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711L128.581 26.1418V29.4797Z"
-              fill="#1342F3" />
-            <path d="M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z" fill="#1342F3" />
-            <path d="M108.189 23.1135V32.9494H105.302V23.1135H108.189Z" fill="#1342F3" />
-          </svg>
+          <svg class="logo__mark" width="222" height="67" viewBox="0 0 222 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="#1342F3" stroke="#1342F3"/><use href="assets/img/sprite.svg#logo-wordmark" width="222" height="67" fill="#1342F3"/></svg>
 
         </a>
 
         <nav class="header__nav" aria-label="╨Ю╤Б╨╜╨╛╨▓╨╜╨░╤П ╨╜╨░╨▓╨╕╨│╨░╤Ж╨╕╤П">
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="#industries" class="header__link">
                 ╨Ю╤В╤А╨░╤Б╨╗╨╕
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -80,13 +45,13 @@
           </div>
 
           <div class="header__nav-item">
             <div class="header__dropdown">
               <a href="solutions.html" class="header__link">
                 ╨а╨╡╤И╨╡╨╜╨╕╤П
-                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="#icon-caret" /></svg>
+                <svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><use href="assets/img/sprite.svg#icon-caret" /></svg>
               </a>
 
               <div class="header__dropdown-panel">
                 <a href="#industries" class="header__dropdown-link">╨У╨╛╤Б╤Б╨╡╨║╤В╨╛╤А</a>
                 <a href="#industries" class="header__dropdown-link">╨Т╤Г╨╖╤Л</a>
                 <a href="#industries" class="header__dropdown-link">╨С╨╕╨╖╨╜╨╡╤Б</a>
@@ -123,17 +88,13 @@
         <div class="header__contacts">
           <div class="header__phone">
             <a href="tel:+78123201130" class="header__phone-label">╨Ъ╨╛╨╜╤В╨░╨║╤В╤Л</a>
             <a href="tel:+78123201130" class="header__phone-num">+7 (812) 320-11-30</a>
           </div>
           <button class="btn btn--search" type="button" aria-label="╨Я╨╛╨╕╤Б╨║">
-            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9" fill="none" aria-hidden="true">
-              <path fill-rule="evenodd"
-                d="M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994 14.4854L14.4854 15.8994L9.47461 10.8887C8.49384 11.587 7.2957 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z"
-                fill="#222222" />
-            </svg>
+            <svg width="15.9" height="15.9" viewBox="0 0 15.9 15.9"><use href="assets/img/sprite.svg#icon-search"/></svg>
           </button>
           <button class="btn btn--primary" type="button">╨Ю╤Б╤В╨░╨▓╨╕╤В╤М ╨╖╨░╤П╨▓╨║╤Г</button>
         </div>
       </div>
     </div>
   </header>
@@ -341,17 +302,17 @@
             <div class="partners__actions">
               <p class="partners__sub">╨б╤А╨╡╨┤╨╕ ╨╜╨░╤И╨╕╤Е ╨┐╨░╤А╤В╨╜╤С╤А╨╛╨▓ тАФ ╨▓╨╡╨╜╨┤╨╛╤А╤Л ╨╕&nbsp;╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╤Л, ╤А╨╡╤И╨╡╨╜╨╕╤П ╨║╨╛╤В╨╛╤А╤Л╤Е ╨┐╨╛╨╝╨╛╨│╨░╤О╤В
                 ╨╖╨░╨║╤А╤Л╨▓╨░╤В╤М ╨╖╨░╨┤╨░╤З╨╕</p>
               <div class="carousel-nav">
                 <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                     height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-left" />
+                    <use href="assets/img/sprite.svg#icon-arrow-left" />
                   </svg></button>
                 <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                     height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-right" />
+                    <use href="assets/img/sprite.svg#icon-arrow-right" />
                   </svg></button>
               </div>
             </div>
 
           </div>
         </div>
@@ -362,60 +323,60 @@
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="univer-online.html">
                 <h3 class="partners__name">Univer Online</h3>
                 <span class="partners__tag">╨Ъ╨╛╨╝╨┐╨╗╨╡╨║╤Б ╤А╨╡╤И╨╡╨╜╨╕╨╣ ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓</span>
                 <img class="partners__logo" src="assets/img/logo-univer.png" alt="Univer Online" width="130"
                   height="130">
                 <p class="partners__desc">╨б╨╛╨▒╤Б╤В╨▓╨╡╨╜╨╜╨░╤П ╤Ж╨╕╤Д╤А╨╛╨▓╨░╤П ╨┐╨╗╨░╤В╤Д╨╛╤А╨╝╨░ SoftSnow ╨┤╨╗╤П ╨▓╤Г╨╖╨╛╨▓.</p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">╨С╨╕╤В╤А╨╕╨║╤Б 24</h3>
                 <span class="partners__tag">╨Ъ╨╛╤А╨┐╨╛╤А╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╨╛╤А╤В╨░╨╗╤Л</span>
                 <img class="partners__logo" src="assets/img/logo-bitrix.png" alt="╨С╨╕╤В╤А╨╕╨║╤Б 24" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╤Е ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╣ ╨╕&nbsp;╤Б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л.</p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle-2.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card partners__card" href="#">
                 <h3 class="partners__name">Moodle</h3>
                 <span class="partners__tag">╨б╨╕╤Б╤В╨╡╨╝╨░ ╨┤╨╕╤Б╤В╨░╨╜╤Ж╨╕╨╛╨╜╨╜╨╛╨│╨╛ ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П</span>
                 <img class="partners__logo" src="assets/img/logo-moodle-3.png" alt="Moodle" width="130" height="130">
                 <p class="partners__desc">╨Я╨╗╨░╤В╤Д╨╛╤А╨╝╨░ ╨┤╨╗╤П ╨╛╤А╨│╨░╨╜╨╕╨╖╨░╤Ж╨╕╨╕ ╨╛╨╜╨╗╨░╨╣╨╜-╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤В╨╡╤Б╤В╨╕╤А╨╛╨▓╨░╨╜╨╕╤П ╨╕&nbsp;╤Г╤З╨╡╨▒╨╜╤Л╤Е ╨║╤Г╤А╤Б╨╛╨▓
                 </p>
                 <svg class="partners__arrow" width="17" height="14" viewBox="0 0 17 14" aria-hidden="true">
-                  <use href="#icon-arrow" />
+                  <use href="assets/img/sprite.svg#icon-arrow" />
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </div>
@@ -443,17 +404,17 @@
                 ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓.</p>
               <div class="projects__actions">
                 <button class="btn btn--ghost btn--md projects__btn" type="button">╨Т╤Б╨╡ ╨┐╤А╨╛╨╡╨║╤В╤Л</button>
                 <div class="carousel-nav">
                   <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-left" />
+                      <use href="assets/img/sprite.svg#icon-arrow-left" />
                     </svg></button>
                   <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                       height="14" viewBox="0 0 15 14" aria-hidden="true">
-                      <use href="#icon-arrow-right" />
+                      <use href="assets/img/sprite.svg#icon-arrow-right" />
                     </svg></button>
                 </div>
               </div>
 
             </div>
           </div>
@@ -461,18 +422,13 @@
         <div class="swiper projects__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -480,52 +436,37 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
 
                 </div>
                 <p class="projects__text">╨Т ╨а╨Р╨Э╨е╨╕╨У╨б ╤Г╤Б╨┐╨╡╤И╨╜╨╛ ╨╖╨░╨▓╨╡╤А╤И╤С╨╜ ╨┐╨╡╤А╨╡╤Е╨╛╨┤ ╨╜╨░ Directum RX. ╨б╨╛╨╖╨┤╨░╨╜╨░ ╨╛╤В╨║╨░╨╖╨╛╤Г╤Б╤В╨╛╨╣╤З╨╕╨▓╨░╤П
                   ╨░╤А╤Е╨╕╤В╨╡╨║╤В╤Г╤А╨░, ╨┐╨╛╨╗╤М╨╖╨╛╨▓╨░╤В╨╡╨╗╨╕ ╤А╨░╨▒╨╛╤В╨░╤О╤В ╤З╨╡╤А╨╡╨╖ ╨▓╨╡╨▒ ╨╕ ╨╝╨╛╨▒╨╕╨╗╤М╨╜╤Л╨╡ ╨┐╤А╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤П. ╨Я╨╛╤Н╤В╨░╨┐╨╜╨╛ ╨╛╤Ж╨╕╤Д╤А╨╛╨▓╨░╨╜╤Л ╨║╨╗╤О╤З╨╡╨▓╤Л╨╡
                   ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╤Л, ╨▓╨╜╨╡╨┤╤А╨╡╨╜╤Л ╨░╤А╤Е╨╕╨▓ ╨╕ ╨Ш╨Ш-╤Б╨╡╤А╨▓╨╕╤Б╤Л Directum RX Intelligence</p>
                 <img class="projects__logo" src="assets/img/project-1.png" alt="╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨░╤П ╨░╨║╨░╨┤╨╡╨╝╨╕╤П" width="180"
@@ -533,35 +474,25 @@
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo" src="assets/img/project-2.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="180" height="180">
               </a>
             </div>
             <div class="swiper-slide">
               <a class="card projects__card" href="projects.html">
                 <div class="projects__top">
                   <h3 class="projects__name">╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П</h3>
-                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z"
-                      fill="#222222" />
-                  </svg>
+                  <svg class="projects__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card" fill="currentColor"/></svg>
                 </div>
                 <p class="projects__text">╨ж╨╕╤Д╤А╨╛╨▓╨░╤П ╤В╤А╨░╨╜╤Б╤Д╨╛╤А╨╝╨░╤Ж╨╕╤П ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╨╛╨╛╨▒╨╛╤А╨╛╤В╨░ ╨Я╤А╨╡╨╖╨╕╨┤╨╡╨╜╤В╤Б╨║╨╛╨╣ ╨░╨║╨░╨┤╨╡╨╝╨╕╨╕ ╨╜╨░ ╨▒╨░╨╖╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╣
                   Directum</p>
                 <img class="projects__logo " src="assets/img/project-2-small.png"
                   alt="╨Т╨╛╨╗╨╛╨│╨╛╨┤╤Б╨║╨░╤П ╨Ю╨▒╨╗╨░╤Б╤В╨╜╨░╤П ╨н╨╜╨╡╤А╨│╨╡╤В╨╕╤З╨╡╤Б╨║╨░╤П ╨Ъ╨╛╨╝╨┐╨░╨╜╨╕╤П" width="100" height="100">
               </a>
@@ -632,30 +563,25 @@
       <div class="container">
         <div class="testimonials__head">
           <h2 class="testimonials__title">╨з╤В╨╛ ╨│╨╛╨▓╨╛╤А╤П╤В ╨║╨╗╨╕╨╡╨╜╤В╤Л</h2>
           <div class="carousel-nav">
             <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-left" />
+                <use href="assets/img/sprite.svg#icon-arrow-left" />
               </svg></button>
             <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤"><svg width="15"
                 height="14" viewBox="0 0 15 14" aria-hidden="true">
-                <use href="#icon-arrow-right" />
+                <use href="assets/img/sprite.svg#icon-arrow-right" />
               </svg></button>
           </div>
         </div>
         <div class="swiper testimonials__swiper">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ф╨╗╤П ╨╜╨░╤Б ╨▒╤Л╨╗╨╛ ╨▓╨░╨╢╨╜╨╛ ╨╜╨╡ ╨┐╤А╨╛╤Б╤В╨╛ ╨▓╨╜╨╡╨┤╤А╨╕╤В╤М ╨╛╤В╨┤╨╡╨╗╤М╨╜╤Л╨╣ ╤Б╨╡╤А╨▓╨╕╤Б, ╨░ ╨▓╤Л╤Б╤В╤А╨╛╨╕╤В╤М
                   ╤Б╨▓╤П╨╖╨░╨╜╨╜╤Г╤О ╤Ж╨╕╤Д╤А╨╛╨▓╤Г╤О ╤Б╤А╨╡╨┤╤Г. ╨Ъ╨╛╨╝╨░╨╜╨┤╨░ SoftSnow ╨│╨╗╤Г╨▒╨╛╨║╨╛ ╨┐╨╛╨│╤А╤Г╨╖╨╕╨╗╨░╤Б╤М ╨▓ ╨╖╨░╨┤╨░╤З╤Г ╨╕ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╨╗╨░ ╤А╨╡╤И╨╡╨╜╨╕╨╡, ╨║╨╛╤В╨╛╤А╨╛╨╡
                   ╨╛╤А╨│╨░╨╜╨╕╤З╨╜╨╛ ╨▓╤Б╤В╤А╨╛╨╕╨╗╨╛╤Б╤М ╨▓ ╨╜╨░╤И ╨Ш╨втАС╨║╨╛╨╜╤В╤Г╤А.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -665,18 +591,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ъ╨╛╨╝╨░╨╜╨┤╨╡ ╨▒╤Л╨╗ ╨▓╨░╨╢╨╡╨╜ ╨╜╨╡ ╤В╨╛╨╗╤М╨║╨╛ ╤В╨╡╤Е╨╜╨╕╤З╨╡╤Б╨║╨╕╨╣ ╤А╨╡╨╖╤Г╨╗╤М╤В╨░╤В, ╨╜╨╛ ╨╕ ╤Б╨┐╨╛╤Б╨╛╨▒╨╜╨╛╤Б╤В╤М
                   ╨┐╨╛╨╜╨╕╨╝╨░╤В╤М ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г ╨▓╤Г╨╖╨░: ╤Б╨╗╨╛╨╢╨╜╤Г╤О ╤Б╤В╤А╤Г╨║╤В╤Г╤А╤Г ╨╕ ╨╝╨╜╨╛╨╢╨╡╤Б╤В╨▓╨╛ ╤А╨╛╨╗╨╡╨╣. SoftSnow тАФ ╤Б╨╕╨╗╤М╨╜╤Л╨╣ ╨┐╨░╤А╤В╨╜╤С╤А, ╨║╨╛╤В╨╛╤А╤Л╨╣
                   ╤Г╨╝╨╡╨╡╤В ╤А╨░╨▒╨╛╤В╨░╤В╤М ╨╕ ╤Б ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨░╨╝╨╕, ╨╕ ╤Б ╨╕╨╜╤В╨╡╨│╤А╨░╤Ж╨╕╤П╨╝╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -686,18 +607,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ь╤Л ╨╕╤Б╨║╨░╨╗╨╕ ╨┐╨░╤А╤В╨╜╤С╤А╨░, ╨║╨╛╤В╨╛╤А╤Л╨╣ ╤Б╨╝╨╛╨╢╨╡╤В ╨┐╨╛╤Б╨╝╨╛╤В╤А╨╡╤В╤М ╨╜╨░ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╤О ╨▓╤Г╨╖╨░
                   ╤Ж╨╡╨╗╨╕╨║╨╛╨╝, ╨░ ╨╜╨╡ ╨┐╤А╨╡╨┤╨╗╨╛╨╢╨╕╤В╤М ╨╛╤З╨╡╤А╨╡╨┤╨╜╨╛╨╡ ╤В╨╛╤З╨╡╤З╨╜╨╛╨╡ ╤А╨╡╤И╨╡╨╜╨╕╨╡. ╨Т ╤А╨░╨▒╨╛╤В╨╡ ╤Б SoftSnow ╤Ж╨╡╨╜╨╜╨╛ ╤Б╨╛╤З╨╡╤В╨░╨╜╨╕╨╡ ╨╛╤В╤А╨░╤Б╨╗╨╡╨▓╨╛╨╣
                   ╤Н╨║╤Б╨┐╨╡╤А╤В╨╕╨╖╤Л, ╨│╨╕╨▒╨║╨╛╤Б╤В╨╕ ╨╕ ╨┐╨╛╨╜╤П╤В╨╜╨╛╨╣ ╨║╨╛╨╝╨╝╤Г╨╜╨╕╨║╨░╤Ж╨╕╨╕.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -706,18 +622,13 @@
                   <img class="testimonials__logo" src="assets/img/logo-ranepa.png" alt="╨а╨Р╨Э╨е╨╕╨У╨б" width="60" height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">SoftSnow ╨┐╨╛╨╝╨╛╨│╨╗╨╕ ╨╜╨░╨╝ ╨┐╨╡╤А╨╡╨▓╨╡╤Б╤В╨╕ ╨▓╨╜╤Г╤В╤А╨╡╨╜╨╜╨╕╨╡ ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╛╨╣
                   ╨║╨╛╨╜╤В╤Г╤А. ╨в╨╡╨┐╨╡╤А╤М ╨▓╤Б╤П ╨╕╤Б╤В╨╛╤А╨╕╤П ╨╖╨░╤П╨▓╨╛╨║, ╨┤╨╛╨║╤Г╨╝╨╡╨╜╤В╤Л ╨╕ ╤А╨╡╤И╨╡╨╜╨╕╤П ╤Е╤А╨░╨╜╤П╤В╤Б╤П ╨▓ ╨╛╨┤╨╜╨╛╨╝ ╨╝╨╡╤Б╤В╨╡, ╨░ ╨┐╤А╨╛╤Ж╨╡╤Б╤Б ╤Б╤В╨░╨╗
                   ╨┐╤А╨╛╨╖╤А╨░╤З╨╜╤Л╨╝ ╨┤╨╗╤П ╨▓╤Б╨╡╤Е ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨╛╨▓.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
@@ -727,18 +638,13 @@
                     height="50">
                 </div>
               </article>
             </div>
             <div class="swiper-slide">
               <article class="card testimonials__card">
-                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24" fill="none"
-                  aria-hidden="true">
-                  <path
-                    d="M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20.9961 23.877H14.9414Z"
-                    fill="#1342F3" />
-                </svg>
+                <svg class="testimonials__quote" width="29" height="24" viewBox="0 0 29 24"><use href="assets/img/sprite.svg#icon-quote"/></svg>
                 <p class="testimonials__text">╨Ю╤В╨┤╨╡╨╗╤М╨╜╨╛ ╨╛╤В╨╝╨╡╤З╤Г ╤Б╨║╨╛╤А╨╛╤Б╤В╤М ╨▓╨╜╨╡╨┤╤А╨╡╨╜╨╕╤П ╨╕ ╤В╨╛, ╨║╨░╨║ ╨║╨╛╨╝╨░╨╜╨┤╨░ ╤Г╤З╨╕╤В╤Л╨▓╨░╨╡╤В ╤Б╨┐╨╡╤Ж╨╕╤Д╨╕╨║╤Г
                   ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╤Б╨║╨╕╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓. ╨а╨╡╤И╨╡╨╜╨╕╨╡ ╨▒╤Л╤Б╤В╤А╨╛ ╤Б╤В╨░╨╗╨╛ ╤З╨░╤Б╤В╤М╤О ╨┐╨╛╨▓╤Б╨╡╨┤╨╜╨╡╨▓╨╜╨╛╨╣ ╤А╨░╨▒╨╛╤В╤Л ╨║╨░╨┤╤А╨╛╨▓╨╛╨╣ ╤Б╨╗╤Г╨╢╨▒╤Л.</p>
                 <div class="testimonials__footer">
                   <div class="testimonials__author">
                     <span class="testimonials__name">╨Ш╨╝╤П ╨д╨░╨╝╨╕╨╗╨╕╤П</span>
                     <span class="testimonials__role">╨Ф╨╛╨╗╨╢╨╜╨╛╤Б╤В╤М, ╨║╨╛╨╝╨┐╨░╨╜╨╕╤П</span>
@@ -766,18 +672,18 @@
 
             <div class="events__head-actions">
               <button class="btn btn--ghost btn--md events__btn" type="button">╨Я╨╡╤А╨╡╨╣╤В╨╕ ╨▓ ╨╝╨╡╨┤╨╕╨░╤Ж╨╡╨╜╤В╤А</button>
               <div class="carousel-nav">
                 <button class="carousel-nav__btn" type="button" data-scroll-prev aria-label="╨Э╨░╨╖╨░╨┤">
                   <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-left" />
+                    <use href="assets/img/sprite.svg#icon-arrow-left" />
                   </svg>
                 </button>
                 <button class="carousel-nav__btn" type="button" data-scroll-next aria-label="╨Т╨┐╨╡╤А╤С╨┤">
                   <svg width="15" height="14" viewBox="0 0 15 14" aria-hidden="true">
-                    <use href="#icon-arrow-right" />
+                    <use href="assets/img/sprite.svg#icon-arrow-right" />
                   </svg>
                 </button>
               </div>
             </div>
           </div>
         </div>
@@ -788,64 +694,48 @@
                 <img class="events__bg" src="assets/img/webinar-1.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Ъ╨░╨║ ╨░╨▓╤В╨╛╨╝╨░╤В╨╕╨╖╨╕╤А╨╛╨▓╨░╤В╤М ╨║╨╛╨╜╨║╤Г╤А╤Б╨╜╤Л╨╡ ╨┐╤А╨╛╤Ж╨╡╨┤╤Г╤А╤Л ╨▓ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨╡: ╨┐╨╛╤И╨░╨│╨╛╨▓╨╛╨╡
                     ╤А╤Г╨║╨╛╨▓╨╛╨┤╤Б╤В╨▓╨╛</h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-2.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Я╤П╤В╤М ╨┐╤А╨╡╨╕╨╝╤Г╤Й╨╡╤Б╤В╨▓ ╤Ж╨╕╤Д╤А╨╛╨▓╨╕╨╖╨░╤Ж╨╕╨╕ ╨║╨░╨┤╤А╨╛╨▓╤Л╤Е ╨┐╤А╨╛╤Ж╨╡╤Б╤Б╨╛╨▓ ╨▓ ╤Б╨╛╨▓╤А╨╡╨╝╨╡╨╜╨╜╨╛╨╝ ╤Г╨╜╨╕╨▓╨╡╤А╤Б╨╕╤В╨╡╤В╨╡
                   </h3>
                   <div class="events__meta"><span class="events__tag">╨Т╨╡╨▒╨╕╨╜╨░╤А</span><span class="events__date">25
                       ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-3.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨Э╨░╤Б╤В╤А╨╛╨╣╨║╨░ ╤Б╨╡╤А╨▓╨╕╤Б╨░ тАЬ╨Ъ╨╛╨╜╨║╤Г╤А╤Б ╨┐╤А╨╛╤Д╨╡╤Б╤Б╨╛╤А╤Б╨║╨╛-╨┐╤А╨╡╨┐╨╛╨┤╨░╨▓╨░╤В╨╡╨╗╤М╤Б╨║╨╛╨│╨╛ ╤Б╨╛╤Б╤В╨░╨▓╨░тАЭ ╨┐╨╛╨┤
                     ╤В╤А╨╡╨▒╨╛╨▓╨░╨╜╨╕╤П ╨▓╨░╤И╨╡╨│╨╛ ╨▓╤Г╨╖╨░</h3>
                   <div class="events__meta">
                     <span class="events__tag">╨Ъ╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П</span><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span>
                   </div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
             <div class="swiper-slide">
               <a class="events__card" href="#">
                 <img class="events__bg" src="assets/img/webinar-4.png" alt="">
                 <div class="events__info">
                   <h3 class="events__title">╨б╨╛╨▓╨╝╨╡╤Б╤В╨╜╨░╤П ╨║╨╛╨╜╤Д╨╡╤А╨╡╨╜╤Ж╨╕╤П ╨Я╨╛╨╗╨╕╤В╨╡╤Е╨░ ╨╕&nbsp;┬л╨б╨╛╤Д╤В╨б╨╜╨╛╤Г┬╗</h3>
                   <div class="events__meta"><span class="events__date">25 ╤Б╨╡╨╜╤В╤П╨▒╤А╤П 2025</span></div>
-                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" fill="none"
-                    xmlns="http://www.w3.org/2000/svg">
-                    <path
-                      d="M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.900065 7.0752 0.827148C7.04785 0.749674 7.03418 0.669922 7.03418 0.587891C7.03418 0.419271 7.09115 0.280273 7.20508 0.170898C7.32357 0.0569661 7.46712 0 7.63574 0C7.7998 0 7.95247 0.0683594 8.09375 0.205078L12.6191 4.72363C12.7604 4.85579 12.8311 5.00846 12.8311 5.18164C12.8311 5.35482 12.7604 5.50977 12.6191 5.64648L8.08008 10.1787C7.94792 10.3063 7.7998 10.3701 7.63574 10.3701C7.46712 10.3701 7.32357 10.3154 7.20508 10.2061C7.09115 10.0921 7.03418 9.95085 7.03418 9.78223C7.03418 9.7002 7.04785 9.62044 7.0752 9.54297C7.1071 9.46549 7.14811 9.39941 7.19824 9.34473L8.71582 7.7998L11.5869 5.18164ZM11.5801 5.6875L9.37207 5.79688H4.62793C3.78939 5.79688 3.12174 5.91764 2.625 6.15918C2.13281 6.40072 1.77734 6.78353 1.55859 7.30762C1.3444 7.83171 1.2373 8.51758 1.2373 9.36523C1.24186 9.51562 1.24414 9.6569 1.24414 9.78906C1.2487 9.92122 1.25326 10.042 1.25781 10.1514C1.25781 10.3291 1.19857 10.4749 1.08008 10.5889C0.966146 10.7028 0.820312 10.7598 0.642578 10.7598C0.524089 10.7598 0.423828 10.7347 0.341797 10.6846C0.264323 10.639 0.202799 10.5775 0.157227 10.5C0.111654 10.4225 0.0797526 10.3382 0.0615234 10.2471C0.038737 10.1423 0.0227865 10.0101 0.0136719 9.85059C0.00455729 9.68652 0 9.50423 0 9.30371C0 7.64941 0.355469 6.44857 1.06641 5.70117C1.77734 4.94922 2.94401 4.57324 4.56641 4.57324H9.37207L11.5732 4.67578C11.7145 4.6849 11.833 4.7373 11.9287 4.83301C12.029 4.92871 12.0791 5.04492 12.0791 5.18164C12.0791 5.31836 12.0312 5.43457 11.9355 5.53027C11.8398 5.62598 11.7214 5.67839 11.5801 5.6875Z" />
-                  </svg>
+                  <svg class="events__arrow" width="13" height="11" viewBox="0 0 13 11" aria-hidden="true"><use href="assets/img/sprite.svg#icon-arrow-card"/></svg>
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
@@ -966,61 +856,27 @@
 
     <footer class="footer">
       <div class="container footer__inner">
         <div class="footer__brand">
           <div class="footer__brand-top">
             <div class="footer__logo">
-              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" fill="none"
-                xmlns="http://www.w3.org/2000/svg">
-                <path
-                  d="M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.0771C56.7194 16.81 56.7463 18.5401 55.5967 19.3115L48.4385 24.1143C47.8282 24.5236 47.0403 24.5354 46.4189 24.1436L30.0166 13.7979L23.6416 17.7432L39.3027 28.5459L39.7041 28.8223L39.4365 29.2305L38.6689 30.4062L38.3877 30.835L37.9658 30.5439L21.4111 19.125L14.9453 23.127L47.1504 42.7773L57.8564 36.6328L58.2998 36.3779L58.5439 36.8271L59.2168 38.0635L59.4502 38.4922L59.0264 38.7354L49.4932 44.208L54.9707 47.5508C56.1798 48.2886 56.1909 50.0712 54.9922 50.8252L30.9932 65.9209C30.4106 66.2872 29.6789 66.3011 29.083 65.957L4.01953 51.4844C2.83114 50.798 2.73744 49.0915 3.83496 48.2715L10.1885 43.5244C10.7817 43.0812 11.5751 43.0314 12.2178 43.3994L29.1602 53.1064L35.4443 49.499L19.2324 39.2402L18.8193 38.9795L19.0703 38.5605L19.793 37.3555L20.0566 36.916L20.4893 37.1895L37.8027 48.1455L44.7705 44.1445L12.6533 24.5459L2.91211 30.5762L2.47656 30.8457L2.21777 30.4043L1.50586 29.1914L1.25879 28.7705L1.6748 28.5137L10.3525 23.1416L4.3877 19.502C3.17728 18.7631 3.16834 16.9778 4.37012 16.2256L29.041 0.783203ZM30.082 55.3525C29.5108 55.6805 28.8129 55.681 28.2412 55.3535L11.334 45.667L5.85156 49.7627L29.9961 63.7061L53.0566 49.2012L47.1133 45.5742L30.082 55.3525ZM6.30273 17.8525L12.6445 21.7227L29.0449 11.5723C29.6483 11.1988 30.4063 11.2014 31.0068 11.5801L47.3975 21.917L53.6436 17.7256L30.0244 3.00488L6.30273 17.8525Z"
-                  fill="white" stroke="white" />
-                <rect x="57.3281" y="32.9355" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="15.0469" y="33.5562" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="0.5" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-                <rect x="34.3438" y="25.8657" width="6.167" height="6.30839" rx="3.0835" fill="white" stroke="white" />
-              </svg>
+              <svg class="logo__icon" width="64" height="67" viewBox="0 0 64 67" aria-hidden="true"><use href="assets/img/sprite.svg#logo-mark" width="64" height="67" fill="white" stroke="white"/></svg>
               <span class="footer__logo-text">SOFTSNOW</span>
             </div>
             <p class="footer__tagline">╨а╨╛╤Б╤Б╨╕╨╣╤Б╨║╨╕╨╣ ╨░╨║╨║╤А╨╡╨┤╨╕╤В╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╤А╨░╨╖╤А╨░╨▒╨╛╤В╤З╨╕╨║ ╨╕&nbsp;╨╕╨╜╤В╨╡╨│╤А╨░╤В╨╛╤А</p>
           </div>
           <div class="footer__brand-bottom">
             <div class="footer__social">
               <a href="#" class="footer__social-link" aria-label="Rutube">
-                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
-                  <g clip-path="url(#clip0_3007_679)">
-                    <mask id="mask0_3007_679" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
-                      width="40" height="40">
-                      <path
-                        d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z"
-                        fill="white" />
-                    </mask>
-                    <g mask="url(#mask0_3007_679)">
-                      <path d="M40 0H0V40H40V0Z" fill="white" />
-                      <path
-                        d="M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.9543 -20 20 -11.0457 20 7.62939e-06C20 11.0457 28.9543 20 40 20Z"
-                        fill="#ED143B" />
-                      <path
-                        d="M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152 14.7409C26.3561 14.9511 26.5053 15.3408 26.5053 15.91V17.5891C26.5053 18.1889 26.3561 18.5786 26.1152 18.7887C25.8744 18.9988 25.3944 19.0886 24.7041 19.0886V19.0868ZM25.5148 10.0018H7.875V30H12.8867V23.4938H22.1228L26.5053 30H32.1174L27.2855 23.4632C29.0669 23.1992 29.8668 22.6533 30.5265 21.7536C31.1862 20.8539 31.5171 19.4155 31.5171 17.4957V15.9962C31.5171 14.8577 31.3965 13.958 31.1862 13.2684C30.9759 12.5788 30.6165 11.979 30.1059 11.4402C29.5666 10.9302 28.9662 10.5711 28.2454 10.3304C27.5245 10.1203 26.624 10 25.5148 10V10.0018Z"
-                        fill="#100943" />
-                    </g>
-                  </g>
-                  <defs>
-                    <clipPath id="clip0_3007_679">
-                      <rect width="40" height="40" fill="white" />
-                    </clipPath>
-                  </defs>
-                </svg>
+                <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><use href="assets/img/sprite.svg#icon-rutube"/></svg>
               </a>
               <a href="#" class="footer__social-link" aria-label="╨Т╨Ъ╨╛╨╜╤В╨░╨║╤В╨╡">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <g clip-path="url(#clip0_633_379)">
                     <rect x="6" y="10" width="30" height="20" fill="white" />
-                    <path fill-rule="evenodd" clip-rule="evenodd"
-                      d="M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8 37.2C5.62666 40 10.1467 40 19.2 40H20.8C29.84 40 34.36 40 37.2 37.2C40 34.3734 40 29.8534 40 20.8V19.2C40 10.16 40 5.64 37.2 2.8C34.3734 2.38419e-07 29.8534 0 20.8 0H19.2C10.16 0 5.64 2.38419e-07 2.8 2.8ZM6.74666 12.1733C6.96 22.5734 12.16 28.8134 21.28 28.8134H21.8134V22.8666C25.16 23.2 27.6934 25.6534 28.7066 28.8134H33.44C32.9546 27.0178 32.0938 25.3454 30.9148 23.9066C29.7358 22.468 28.2652 21.2956 26.6 20.4666C28.0922 19.558 29.381 18.3512 30.3858 16.922C31.3906 15.4928 32.09 13.8717 32.44 12.16H28.1466C27.2134 15.4667 24.44 18.4666 21.8134 18.7466V12.1733H17.5066V23.6934C14.84 23.0266 11.48 19.8 11.3333 12.1733H6.74666Z"
-                      fill="#1F67F9" />
+                    <use href="assets/img/sprite.svg#icon-vk"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_633_379">
                       <rect width="40" height="40" fill="white" />
                     </clipPath>
                   </defs>
@@ -1058,37 +914,12 @@
             <a href="#">╨Я╨╛╨╗╨╕╤В╨╕╨║╨░ ╨╛╨▒╤А╨░╨▒╨╛╤В╨║╨╕ ╨┐╨╡╤А╤Б╨╛╨╜╨░╨╗╤М╨╜╤Л╤Е ╨┤╨░╨╜╨╜╤Л╤Е</a>
           </div>
         </div>
       </div>
     </footer>
 
-    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
-      <defs>
-        <symbol id="icon-arrow" viewBox="0 0 17 14">
-          <path
-            d="M14.8975 7.17188L11.2061 10.5381L9.25488 12.5244C9.18457 12.5947 9.13184 12.6768 9.09668 12.7705C9.06152 12.8701 9.04395 12.9727 9.04395 13.0781C9.04395 13.2949 9.11719 13.4736 9.26367 13.6143C9.41602 13.7607 9.60059 13.834 9.81738 13.834C10.0283 13.834 10.2246 13.7461 10.4062 13.5703L16.2246 7.76074C16.4062 7.59082 16.4971 7.39453 16.4971 7.17188C16.4971 6.94922 16.4062 6.75 16.2246 6.57422L10.3887 0.74707C10.2188 0.583008 10.0283 0.500977 9.81738 0.500977C9.60059 0.500977 9.41602 0.571289 9.26367 0.711914C9.11719 0.858398 9.04395 1.04004 9.04395 1.25684C9.04395 1.3623 9.06152 1.46484 9.09668 1.56445C9.1377 1.66406 9.19043 1.74902 9.25488 1.81934L11.2061 3.80566L14.8975 7.17188ZM14.8887 6.52148L12.0498 6.38086H5.9502C4.87207 6.38086 4.01367 6.22559 3.375 5.91504C2.74219 5.60449 2.28516 5.1123 2.00391 4.43848C1.72852 3.76465 1.59082 2.88281 1.59082 1.79297C1.59668 1.59961 1.59961 1.41797 1.59961 1.24805C1.60547 1.07812 1.61133 0.922852 1.61719 0.782227C1.61719 0.553711 1.54102 0.366211 1.38867 0.219727C1.24219 0.0732422 1.05469 0 0.826172 0C0.673828 0 0.544922 0.0322266 0.439453 0.0966797C0.339844 0.155273 0.260742 0.234375 0.202148 0.333984C0.143555 0.433594 0.102539 0.541992 0.0791016 0.65918C0.0498047 0.793945 0.0292969 0.963867 0.0175781 1.16895C0.00585938 1.37988 0 1.61426 0 1.87207C0 3.99902 0.457031 5.54297 1.37109 6.50391C2.28516 7.4707 3.78516 7.9541 5.87109 7.9541H12.0498L14.8799 7.82227C15.0615 7.81055 15.2139 7.74316 15.3369 7.62012C15.4658 7.49707 15.5303 7.34766 15.5303 7.17188C15.5303 6.99609 15.4688 6.84668 15.3457 6.72363C15.2227 6.60059 15.0703 6.5332 14.8887 6.52148Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-right" viewBox="0 0 15 14">
-          <path
-            d="M7.76367 13.6914L6.33789 12.2656L8.76953 9.84375C9.10156 9.51172 9.44987 9.17643 9.81445 8.83789C10.179 8.49284 10.5404 8.1543 10.8984 7.82227C10.6055 7.8418 10.306 7.85807 10 7.87109C9.70052 7.8776 9.40755 7.88086 9.12109 7.88086H0V5.81055H9.12109C9.40755 5.81055 9.70052 5.81706 10 5.83008C10.306 5.83659 10.6022 5.84961 10.8887 5.86914C10.5306 5.53711 10.1693 5.20182 9.80469 4.86328C9.44661 4.52474 9.10156 4.18945 8.76953 3.85742L6.33789 1.43555L7.76367 0L14.6094 6.8457L7.76367 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-        <symbol id="icon-arrow-left" viewBox="0 0 15 14">
-          <path
-            d="M6.8457 13.6914L8.27148 12.2656L5.83984 9.84375C5.50781 9.51172 5.15951 9.17643 4.79492 8.83789C4.43034 8.49284 4.06901 8.1543 3.71094 7.82227C4.00391 7.8418 4.30339 7.85807 4.60938 7.87109C4.90885 7.8776 5.20182 7.88086 5.48828 7.88086H14.6094V5.81055H5.48828C5.20182 5.81055 4.90885 5.81706 4.60938 5.83008C4.30339 5.83659 4.00716 5.84961 3.7207 5.86914C4.07878 5.53711 4.4401 5.20182 4.80469 4.86328C5.16276 4.52474 5.50781 4.18945 5.83984 3.85742L8.27148 1.43555L6.8457 0L0 6.8457L6.8457 13.6914Z"
-            fill="currentColor" />
-        </symbol>
-      <symbol id="icon-caret" viewBox="0 0 14 8">
-        <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
-      </symbol>
-      <symbol id="icon-check" viewBox="0 0 24 24">
-        <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
-      </symbol>
-      </defs>
-    </svg>
 
     <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
     <script src="assets/vendor/fancybox/fancybox.umd.js"></script>
     <script src="js/main.js"></script>
 </body>
 
