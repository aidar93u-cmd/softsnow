# Figma → Code Registry

Живой реестр соответствия макета «SoftSnow Work (Copy)» (fileKey `FYv0RWNkawci4wbgFQnlw1`) и кода. Обновлять после каждой секции/страницы. **Проверять перед созданием нового компонента.** Процесс — в `docs/FIGMA_WORKFLOW.md`, постоянные правила — в `AGENTS.md`.

## Tokens

| Figma | CSS | Примечание |
|---|---|---|
| Primary / Accent | `--color-sea` | `#1342F3` |
| Text | `--color-black` | `#222222` |
| Background light | `--bg-light` / `--bg-light-alt` | `#F5F4F5` / `#F5F5F5` |
| Card background | `--color-white` | `#FFFFFF` |
| Canvas / border | `--bg-border` | `#E8E8E8` |
| h1 | `--fs-h1` | 100px, weight 500 |
| h2 | `--fs-h2` | 70px |
| Numbers | `--fs-numbers` | 75px, weight 500 |
| Card titles | `--fs-h3` | 40px |
| Captions | `--fs-body-14` / `--fs-body-16` | 14–16px |
| Font | `--font-heading` / `--font-body` | Inter, 400/500/600/700 (Google Fonts) |
| Button radius 50px | в `components.css`/`sections.css` | НЕ глобальный токен (см. Token Rules) |
| Card radius 20px | `--radius-lg` | |

Реализация: `css/tokens.css`.

## Components

| Figma Pattern | Code | Variants | Status |
|---|---|---|---|
| Container (1790px) | `.container` | — | done |
| Primary Button | `.btn--primary` | — | done |
| Outline Button | `.btn--outline` | — | done |
| Ghost Button | `.btn--ghost` | — | done |
| Section Title | `.section-title` | — | done |
| Section Label | `.section-label` | — | done |
| Body Text | `.body-text` | — | done |
| Card | `.card` | — | done |
| Project Card | `.card--project` | — | done |
| Company Card | `.card--company` | — | done |
| Slider | `.slider` | — | done |
| Slider button | `.slider__button` | — | done |
| Carousel nav | `.carousel-nav` | `__btn` | done |

Реализация: `css/components.css`.

## Pages

### Home (index.html)

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18238` | `.header` | done |
| 2 | Hero | `633:116` (Frame 2094) | `.hero` | done |
| 3 | Industries (4 карточки) | `633:155` | `.industries` | done |
| 4 | Numbers (5 колонок) | `633:172` | `.stats` | done |
| 5 | Tasks (6 ссылок) | `633:190` | `.tasks` | done |
| 6 | Companies (10 логотипов) | `633:268` | `.clients` | done |
| 7 | Partners (5 карточек, карусель) | `633:218` | `.partners` | done |
| 8 | Projects (3 карточки) | `648:4437` | `.projects` | done |
| 9 | Webinars/Events (4 карточки, карусель) | `633:291` | `.events` | done |
| 10 | CTA | `633:261` | `.cta` | done |
| 11 | Footer | `648:4438` | `.footer` | done |

Реализация: `css/sections.css`. Фреймы секций и их координаты — таблица в `AGENTS.md`. Дампы: `C:\Temp\opencode\figma-<секция>.json`.

### About

Частично сверстана. Секция «Факты компании» (node `1453:13586`, 1870×1030) — после `.cta--blue`:

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Шапка «SoftSnow — аккредитованная IT-компания» + carousel-nav (без кнопки) | `1453:13587` | `.projects__head` + `.projects--about .projects__actions` (margin-left:auto) | done |
| 2 | Слайд-сетка: big 930×660 + 2 small 460×325 + wide 930×325 | `1453:13595` | `.facts__screen` (grid 4×2, gap 10) + `.facts__card(--big/--wide/--partner)` | done |

Слайдер: `.facts__swiper` — на десктопе JS (`initFactsSlider` в main.js) чанкует карточки по 4 в экран-слайд, `<768` каждая карточка — отдельный слайд; rebuild по `matchMedia('(min-width: 768px)')`. Карточки не ссылки (`.card facts__card`), картинки `assets/img/about-{award,accreditation,partner,po}.png` absolute right/bottom 30px. В макете один экран контента — второй экран добавлен как контентный плейсхолдер. После `.video` — секция «Наш подход» `.approach` (без макета: предтайтл `.approach__label` + центрированный текст `.approach__text` с синим span). После неё — «Наша команда» (node `1453:13633`, 1870×1500): `.team__head` (белая карточка 22.5rem: заголовок 70px + подпись 16px max-w 655px) + `.team__grid` 3×2 карточки 617×560 (`--radius-lg`) c белой плашкой `.team__plate` (10px radius, имя 20px + роль 14px) слева-снизу. Фото — временные из проекта (`popup1–5.jpg`, `client-quote.jpg`), заменить на реальные. Имена 3–6 в макете «Имя Фамилия» — плейсхолдеры. Остальные секции страницы — перед доработкой сверять с макетом about (FIGMA_AUDIT).

### Решения (solutions.html)

Каталог решений, фрейм `733:17470` (1920×3250).

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18269` | `.header` | done |
| 2 | Hero (bg + breadcrumbs + h1 «Решения») | `736:17807` / `2238` | `.hero` + `.breadcrumbs` | done |
| 3 | Каталог (6 карточек-решений) | `2147239884` | `.catalog` (новая) | done |
| 4 | CTA | `2210` | `.cta` | done |
| 5 | Footer | `2147239878` | `.footer` | done |

Карточка решения: слева заголовок `.catalog__name` (40px) + платформа `.catalog__platform` (16px), справа `.catalog__feats` 2 колонки 460/420 (модификатор `--single` — 1 колонка), стрелка `#icon-arrow`. Стрелки-ссылки: «Решения для вузов» → `solution-detail.html`, остальные → `#` (детальные страницы ещё не созданы).

### Детальная решений (solution-detail.html)

Страница решения, фрейм `922:19917` (1920×9989). Секции: hero (bg, breadcrumbs, title, stats), registry, tasks (аккордеон «+»), audience (4 карточки), features (tabs 890/460, 5 панелей, переключение по `data-tab`), cta--dark, testimonials (swiper 617), events--readalso, cta--center, faq, footer. Стили в `css/solution.css`.

`features` табы: кнопки `.tabs__btn` с `data-tab` (0–4), панели `.features__panel` со стеком `.features__panels` (absolute, 1790×560). Каждая панель = `.features__content` (890×560, белая карточка: название/описание/пункты/demo) + `.features__img` (890×560) — при переключении меняется и контент, и картинка. Активная панель `.is-active` — opacity 1, остальные 0 + `translateY(16px)`, transition 0.4s (`!important`, обход reduced-motion). Переключение в `js/main.js` (`.tabs` handler) — `classList.toggle('is-active')` + `aria-hidden`.

**Мобильная версия** (Figma `1742:12742`, done 2026-08-23, отчёт
`docs/superpowers/plans/2026-08-23-solution-detail-mobile.md`): hero без фото +
кнопка внизу; статы из hero переехали в карточку реестра (дубль
`.registry__stats`, скрыт на PC); tasks — аккордеон с круглой кнопкой 38px;
features — чипы-скролл + панель в колонку; testimonials 300px свайп; projects —
заголовок 32px (модификатор `.projects--solution`) + кнопка `.projects__cta`
под каруселью; events — кнопка `.events__cta`. CSS — media.css ≤768 блок
«Solution detail».

### Проекты (projects.html)

Полная страница проектов, фрейм `844:7243` (1920×3421). Дубликат секции «Реализованные проекты» главной (node `648:4437`), но как самостоятельная страница.

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18238` | `.header` | done (reused) |
| 2 | Hero (breadcrumbs + h1 «Проекты» 100px + subtitle 16px) | `844:7246` | `.page-hero` + `.breadcrumb` | done |
| 3 | Filters (3 dropdown-кнопки: Отрасль / Решения[active] / Продукты) | `844:7284` | `.projects__filters` / `.projects__filter` (+`.is-active`) | done |
| 4 | Projects grid (6 карточек 930×460) | `844:7296` | `.projects__grid` + `.projects__card` | done |
| 5 | «Показать еще» | — | `.projects__more` + `.btn` | done |
| 6 | CTA | `844:7335` | `.cta` | done (reused) |
| 7 | Footer | `844:7342` | `.footer` | done (reused) |

Новый page-specific CSS только в `css/sections.css` (блок «Projects page»): `.projects-page`, `.projects__filters`, `.projects__filter`(+`.is-active`), `.projects__filter-caret`, `.projects__grid`, `.projects__more`. Карточки переиспользуют `.projects__card` из секции главной (title 40px, text absolute `top:157px`, logo 180×180 bottom-right). SVG-спрайт `#icon-arrow` обязателен на странице. Nav «Проекты» на всех страницах ведёт сюда.

## Страница «Клиенты» (listing) и «Карточка клиента» (detail)

Listing `clients.html` (frame `826:1472`), detail `client-detail.html` (frame `896:11276`). Обе используют общий `.page-hero`; detail — с модификатором `.page-hero--detail` (big title 70px `--fs-h2` + логотип клиента `.page-hero__media`/`.page-hero__logo` 185×185 bottom-right). `.breadcrumb` — общий компонент в `css/components.css`. Дубликаты `.c-hero*` удалены из `css/sections.css`.

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18238` | `.header` | done (reused) |
| 2 | Hero (breadcrumbs + h1 100px + subtitle 16px) | `826:1475` | `.page-hero` + `.hero-block-page-inner` | done |
| 3 | Tabs (Все отрасли / Вузы / Гос / Бизнес) | `826:1511` | `.tab-filter` | done |
| 4 | Clients grid (16 карточек 460×360) | `826:1522` | `.clients__grid` | done |
| 5 | Detail hero (h1 70px + логотип клиента) | `896:11276` | `.page-hero--detail` | done |
| 6 | «Что говорит о нас клиент» (white r20, h2 70/500, цитата: иконка 40×40 #1342F3 + текст 16/400 rgba(34,34,34,.7) 655px + автор: аватар 64×64 + имя 20/500 + роль 16/400; фото 890×560 r20) | `1075:32386` | `.client-quote` | done |
| 7 | Footer | — | `.footer` | done (reused) |

`client-detail.html`: секция `.client-quote` добавлена после `.stats--client` (по макету). Page-specific CSS в `css/sections.css` (блок «Client detail page»): `.client-quote` (+`__inner/__title/__grid/__quote/__icon/__text/__author/__avatar/__name/__role/__photo`). Цитата — inline-SVG иконка (тот же path, что в `.testimonials__quote`), аватар — `assets/img/logo-ranepa.png`, фото — `assets/img/client-quote.jpg` (экспорт из Figma `Frame 2211`).

### Медиацентр (events.html)

Listing событий, фрейм `895:9289` (1920×4048). Стили в `css/sections.css` (блок «Media/events page»). Дампы: `C:\Temp\opencode\figma-*.json`.

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `895:9301` | `.header` | done (reused) |
| 2 | Hero (breadcrumbs + h1 «Медиацентр» 100px + subtitle + btn «Подписаться на рассылку» + соцсети Rutube/VK) | `895:9292` | `.page-hero` + `.page-hero--media` (btn + `.page-hero__socials`) | done |
| 3 | «Не пропустите ближайшие мероприятия» + 2 wide-карточки 890×560 | `895:9316`/`895:9318` | `.events` + `.events__card--wide` | done (reused) |
| 4 | Tabs (Все/Мероприятия/Статьи/Новости) + сетка 6 карточек 460×560 + «Показать ещё» | `895:9335`/`895:9336` | `.events__tabs` + `.events__card` + `.btn--ghost` `.events__more` | done |
| 5 | CTA | `895:9413` | `.cta` | done (reused) |
| 6 | Footer | `895:9420` | `.footer` | done (reused) |

Отклонения: heroBtn 262×64 (макет 256), зазор CTA→footer 80 (сайтовый). Tabs и «Показать ещё» — статично (как projects/clients).

### Детальная мероприятия (event-detail.html)

Detail события, фрейм `896:9497` (1920×7991). Стили в `css/sections.css` (блок «Event detail page»).

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `896:9508` | `.header` | done (reused) |
| 2 | Hero (IMAGE bg 1870×758, h1 «Стратегический рывок…» 100/500 opacity .7, btn «Зарегистрироваться» 216×64, 2 текста снизу 16/500) | `896:9498` | `.event-hero` (reuse `.hero`) | done |
| 3 | «Что обсудим на семинаре» (white r20, 360h, дата «22 апреля 2026» 40/500 + время) | `896:9551` | `.event-about` | done |
| 4 | «Будет полезно для» (4 карточки 460×460) | `896:9593` | `.audience` + `.audience__card--accent` | done (reused) |
| 5 | «Программа семинара» (4 пункта, круг 64×64, 2-й активный; IMAGE 925×560 + label «Блок 1») | `896:9608` | `.program` | done |
| 6 | CTA «Забронируйте место» (bg sea, r20) | `896:9557` | `.cta--blue` | done (reused) |
| 7 | «Что разберём на семинаре» (6 карточек 590×360, 2×3) | `896:9564` | `.seminar-topics` (+`.seminar-topics__inner` white r20) | done |
| 8 | «Партнеры мероприятия» (3 карточки 617×510, лого 130×130 r50) | `896:9643` | `.event-partners` | done |
| 9 | «Почему нам доверяют ВУЗЫ?» (title + 3 блока: иконка 40×40 + 40/500 + 16/400) | `896:9667` | `.trust` | done |
| 10 | «С нами работают» | `896:9715` | `.clients` | done (reused) |
| 11 | FAQ (4 вопроса, первый открыт) | `896:9693` | `.faq` | done (reused) |
| 12 | Footer | `896:9509` | `.footer` | done (reused) |

Добавлен shared-вариант кнопки `.btn--outline-dark` в `css/components.css` (border `#222`, текст `#222` 600; hover: bg black, white text) — используется в detail hero. Отклонения (компромисс по токенам): title/btn/date/CTA — `--color-sea` #216CF3 и dark-outline вместо #1342f3 (см. план `2026-08-15-events-pages.md`). FAQ открывается через существующий `js/main.js` аккордеон (первый `.faq__item` авто-open).

### Детальная проекта (project-detail.html)

Detail проекта, фрейм `1128:8159` (COMPONENT, fileKey `tK0WpkPKL3pQGAyCfynr3b`). Стили в `css/sections.css` (блок «Project detail page»).

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | Header | `.header` | done (reused) |
| 2 | Hero (breadcrumbs Главная/Проекты/… + h1 70px + sub) | `.page-hero--detail` + `.page-hero__title--detail` | done |
| 3 | «О клиенте» (текст + название + фото) | `.client-intro--project` | done |
| 4 | «Цели проекта» (4 пункта) + «Текущие результаты» 700/10 000/1 000 | `.goals` | done; mobile (Figma 1736:15780/1736:15787) done — карточки раздельно, дубль `.goals__results--m` |
| 5 | «Реализация проекта» (01 Контекст, 02 Описание, 03 Архитектура, 04 Этапы, 05 Команда) | `.impl` | done; mobile (Figma 1736:15794) done — текст 15/125, синие точки 5px, разделители, `mobile-diagram.svg` |
| 6 | «Видео о проекте» (плеер 1790×700) | `.video` | done |
| 7 | «Галерея проекта» (4 слайда 1790×742 + точки) | `.gallery` | done |
| 8 | «Читайте также» (4 карточки, 4-я синяя) | `.events--readalso` (reused) + `.events__card--blue` | done |
| 9 | Footer | `.footer` | done (reused) |

Особенности: `.client-intro--project` — вариант `.client-intro` (текст 16/400 + `.client-intro__name` 16/500, фото 890×560 справа). Цели — grid 4 колонки, числа/синяя карточка `#1342f3` напрямую (не токен); mobile — карточки раздельно через дубли `.goals__results--m`. `.arch` — `<img>` диаграмма: десктоп `diagram.svg`, мобилка `mobile-diagram.svg` (переключение классами `.arch__img--desktop/--mobile`). `.video__poster` 1790×700 с play 80×80 (плейсхолдер `project-1.png`). `.gallery__swiper` — swiper slidesPerView 1 + точки `.gallery__dot` (syncDots, `slideTo(i)`, aria-selected) в `js/main.js`. Плейсхолдеры помечены `ponytail:` (видео `project-1.png`, галерея `project-2.png`, клиент `o-kliente.jpg`) — под замену реальными ассетами.

### Экосистема (directum.html)

Лендинг про Directum, SECTION `1060:18355` (fileKey `tK0WpkPKL3pQGAyCfynr3b`). Стили в `css/sections.css` (блок «Directum page»). Собрана сплайсом: head/header/footer/sprite из `index.html` + `<main>` из `C:\Temp\opencode\directum-main.html`.

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | Header | `.header` | done (reused) |
| 2 | Hero (bg 1870×758, h1 1021px, 2 заметки) | `.hero` + `.event-hero` + `.directum-hero__*` | done |
| 3 | «Экосистема решений Directum» (6 карточек без стрелки) | `.partners` + `.partners--eco` | done |
| 4 | «Почему выбирают Directum» (4 пункта) | `.reasons` (NEW) | done |
| 5 | CTA синий «Расскажите о вашей задаче» | `.cta--blue` + `.cta--blue--directum` | done |
| 6 | «Проекты на базе экосистемы» (3 карты, name 24px) | `.projects` + `.projects--eco` | done |
| 7 | «Варианты внедрения» (3 карточки, средняя синяя + бейдж) | `.vnedrenie` (NEW) | done |
| 8 | «SoftSnow — официальный партнёр Directum» | `.d-partner` (NEW) | done |
| 9 | CTA светлый «Подберём решение под ваш контур?» | `.cta` (reused) | done |
| 10 | Footer | `.footer` | done (reused) |

Особенности: межсекционные отступы 10px. `.partners--eco` — карточки `<article>` (не ссылка), `.partners__arrow` скрыт, tag 16px. Иконки «Почему выбирают» — inline-SVG 64×64 (viewBox 64 + translate(12 12)) stroke `--color-sea`. Свайперы `.partners__swiper`/`.projects__swiper` — существующие инициализации в `js/main.js`. Плейсхолдеры `ponytail:` — 6 лого продуктов (`.partners__logo--eco`), лого Directum (`.d-partner__logo--placeholder`); hero-bg `hero-bg.jpg`; CTA `cta-bg.png`. Отклонения — см. план `2026-08-17-directum-page.md` (цвет `--color-sea` вместо `#1342F3`, бейдж «Популярный» top 30/right 40, lamp собрана вручную).

### Экосистема (univer-online.html)

Лендинг «Экосистема Univer Online», FRAME `1065:18683` (fileKey `tK0WpkPKL3pQGAyCfynr3b`, 1920×8688). Стили в `css/sections.css` (блок «Univer Online page»). Собрана сплайсом: head/header/footer/sprite из `index.html` + `<main>` из `C:\Temp\opencode\univer-main.html`.

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | Header | `.header` | done (reused) |
| 2 | Hero (bg 1870×758, h1 100px, 2 заметки, btn 184×64) | `.hero` (копия из `index.html`, контент заменён) | done |
| 3 | «Решение включено в реестр Минцифры» | `.univer-registry` (NEW, структура как `.registry`) | done |
| 4 | «Основа цифровой среды вуза» (4 карточки) | `.audience` (reused) | done |
| 5 | «Почему выбирают Univer Online» (4 пункта) | `.reasons` + `.reasons--univer` | done |
| 6 | CTA синий «Расскажите нам о задачах вашего университета» (btn outline) | `.cta--blue` + `.cta--blue--univer` | done |
| 7 | «Ключевые решения внутри Univer Online» (7 карточек 460×510, grid 4+3) | `.services` (NEW) + `.partners__card` | done |
| 8 | «Проекты на базе экосистемы» (3 карты swiper) | `.projects` (reused) | done |
| 9 | «Варианты внедрения» (3 карточки, средняя синяя + бейдж) | `.vnedrenie` + `.vnedrenie--univer` | done |
| 10 | «SoftSnow — команда» (title + 2 текста + коллаж телефонов) | `.team` (NEW) | done |
| 11 | CTA светлый «Подберём решение под задачи вашего университета» | `.cta` (reused) | done |
| 12 | Footer | `.footer` | done (reused) |

Особенности: межсекционные отступы 10px. Иконки «Почему выбирают» — PNG `icon-reason-1..4.png` (40×40) на круге 64×64 bg `--color-sea`. Иконки «Ключевые решения» — PNG `svc-1..7.png` (130×130) через `.partners__card img` (margin auto). Галочки «Вариантов внедрения» — inline-SVG (круг white + path `currentColor`). Коллаж телефонов — `phone-1..4.png` (main 330px, остальные 300px, `object-fit: cover`). Свайперы `.projects__swiper` — существующие инициализации в `js/main.js`. Ссылка: partners-карточка Univer Online на главной → `univer-online.html`. Отклонения — см. план `2026-08-17-univer-ecosystem.md`.

### Цифровая трансформация вуза (vuz.html)

Лендинг «Цифровая трансформация документооборота Президентской библиотеки» (fileKey `43Ny8TAsFnSrmCOYtYTZIV`). Секция добавлена в конец `<main>` перед футером.

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | «Помогаем связать процессы…» FRAME `1366:20995` (1870×1071, white r20) | `.ecosystem` + `.ecosystem__inner` (NEW) | done |
| 1a | Кольцо 640 (border 2 `--color-sea`) + ядро 400 (`--color-sea`, текст fs40 white) | `.ecosystem__ring` / `.ecosystem__core` | done |
| 1b | 6 карточек 500×111 (r20, border rgba(34,34,34,.1); левые flip: текст right + иконка справа) | `.eco-card` (+`--flip`, `--1..--6`) | done |

Особенности: диаграмма — absolute-позиционирование в `.ecosystem__diagram` (1790×640, координаты из Figma: кольцо x575 y0; карточки (170/112/170, 94/265/436) и (1120/1178/1120, …)); ≤1200px — grid 2 кол. (кольцо сверху по центру), ≤767px — 1 кол. Иконки — оригинальные SVG из библиотек Figma через Iconify API (ion:school-outline, material-symbols-light:task-alt-rounded/work-outline, ion:folder-open-outline, ci:file-document, reicon:chart-trend), круг 64 bg `#1342F31A`, svg 40 `currentColor`. QA 2026-08-21: все координаты ±1px при 1920px.

### Детальная статьи (article-detail.html)

Страница статьи, фрейм `1453:10113` «Детальная статьи» (1920×8041). Стили в `css/sections.css` (блок «Article detail page»).

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | Header | `.header` | done (reused) |
| 2 | Hero (breadcrumb + h1 70/500 ls-3 + 4 тега-пилюли r50 h40 + дата) | `.page-hero--detail` + `.article-hero__meta/__tags/__date` (NEW) | done |
| 3 | «О статье» (текст 20/140% слева + img 890×560 r20 справа, white r20 pad40) | `.article-about` (NEW) | done |
| 4 | CTA «Скачайте полезный материал» (bg sea r20, btn outline-white + иконка download) | `.cta--blue` (reused) | done |
| 5 | «Сначала процесс, потом продукт» (h2 слева; справа img + текст 20 + цитата с иконкой + автор справа-снизу) | `.article-block` (NEW) + `__quote/__author` | done |
| 6 | Галерея (h2+sub+carousel-nav, swiper 1790×742 r20, точки ×4) | `.gallery` (reused; nav уже привязан в main.js) | done |
| 7 | «Цифровизация как „слой сверху“» (текст + лид + список из 3 буллетов: точка 6px sea) | `.article-block--points` + `__lead/__points` (NEW) | done |
| 8 | «Разбор проекта» видео (плеер 1790×700 r20, play 80×80) | `.video` (reused) | done |
| 9 | «На практике» (текст + карточка-ссылка border #222 2px r20: name 30/500 + desc 15 + стрелка) | `.article-block` + `.stages__card--dark` (reused из client-detail) → project-detail.html | done |
| 10 | «Читайте также» (btn ghost + carousel-nav + 1 wide + 3 карточки) | `.events` (reused как в project-detail) | done |
| 11 | Footer | `.footer` | done (reused) |

Плейсхолдеры `ponytail:` — картинки статьи (`client-quote.jpg`, `popup1.jpg`, галерея `gallery1.jpg`, видео `video-placeholder.jpg`, аватар автора `logo-ranepa.png`) — под замену реальными ассетами. Имя/должность автора в макете — плейсхолдеры. Багфикс каскада: `.page-hero__title.page-hero__title--detail` поднят по специфичности (перебивался `.page-hero__title` 100px; по макетам детальных страниц заголовок 70px ls-3) — затронуло также project-detail/client-detail.

### Попап «Связаться с нами» (index.html)

FRAME `1470:10500` («Форма», 720×924, white r20, padding 40). Открывается по кнопке шапки «Оставить заявку» (`data-fancybox data-src="#request-popup"`), Fancybox v5 inline. reCAPTCHA из макета не переносится (по требованию).

| # | Figma Section | Code | Status |
|---|---|---|---|
| 1 | Заголовок + подзаголовок + крестик | `.modal-form__head` / `__title` / `__sub` / `__close` | done |
| 2 | Поля ФИО*, E-mail*, Телефон* (+7 маска), Название организации, Комментарий | `.form-field` + `.form-field__input/__label` (shared, components.css) | done |
| 3 | Чекбоксы согласие/рассылка | `.form-check` + `.form-check__input/__box/__text` (shared) | done |
| 4 | Кнопка «Отправить» | `.btn--primary` + `.modal-form__submit` | done |
| 5 | Экран успеха (после валидного сабмита) | `.modal-form__success` | done |

Особенности: плавающий лейбл — CSS (`:focus` / `:not(:placeholder-shown)`), у textarea лейбл сверху. Валидация — Just-validate 4.3 (`assets/vendor/just-validate/`, локально), `validateOnInput` — ошибки при вводе; классы ошибок `form-field--invalid` на инпуте + генерируемый `.form-field__msg`. Сброс формы по событию `fancybox:afterClose`. Fancybox подключён только на index.html; `Fancybox.bind('[data-fancybox]', { Toolbar:false, closeButton:false })`. Адаптив: media.css 768 (padding/title) и 576 (ширина `calc(100vw - 2rem)`, строка полей в столбец, кнопка full-width).

## Known Discrepancies

| № | Секция | Расхождение | Статус |
|---|---|---|---|
| — | — | (актуальных нет) | — |

## Workflow

```
FIGMA → Figma MCP Audit → Design System + Components + Tokens
     → Existing Code Audit → Figma → Code Mapping
     → existing/new component → Section Agent → DOM measurement
     → Figma QA → Screenshot → Fix discrepancies → Next section
     → Page architecture review
```

Цель: section-specific layout + shared components + shared tokens + shared behavior. НЕ один гигантский глобальный CSS и НЕ изолированный CSS на каждый фрейм. Наличие section-классов (`hero`, `tasks`, `projects`) — норма; плохо только дублирование компонентов внутри них.

## Mobile (index.html)

Источник: Figma node `1742:17748` (375×4504), дамп `C:\Temp\opencode\figma-mobile-index.json`. CSS: хвост `css/media.css` (блок «MOBILE — Figma 1742:17748») + токен-тиры ≤768/≤576. Правила — в AGENTS.md «Mobile adaptation».

| # | Figma Section | Code (mobile) | Status |
|---|---|---|---|
| 1 | Navbar (64px, поиск+бургер) | `.header__inner` + `.btn--search` (order) | done |
| 2 | Hero (фото+градиент, h1 30, кнопка full) | `.hero`, `.hero-block-inner::before` | done |
| 3 | Industries (стопка r12 + `.industries__cta`) | `.industries__grid` 1fr | done |
| 4 | Stats (стек, 42px, без «часов») | `.stats__grid` 1fr | done |
| 5 | Tasks (карточка r10, строки, кнопка) | `.tasks-lists-section .tasks__inner` | done |
| 6 | Companies (кружки 130, marquee) | `.client-image` 8.125rem | done |
| 7 | Eco-system (текст-карточка + карусель 300) | `.partners__head`, `.partners__swiper` | done |
| 8 | Projects (титул-карточка + карусель + `.projects__cta`) | `.projects__head`, `.projects__swiper` | done |
| 9 | Media (заголовок + карусель 300×240 + `.events__cta`) | `.events__head`, `.events__swiper` | done |
| 10 | CTA (светлая карточка, слева) | `.cta__body` | done |
| 11 | Footer (2 тёмные карточки в колонку) | `.footer__inner` 1fr | done |

Известные отличия от макета: 4-я карточка мероприятий не переведена в синий вариант (`Type=Blue` в макете); стрелка в строках задач — `#icon-arrow` (в макете шеврон).

## Mobile (projects.html)

Источник: Figma node `1736:16278` «Проекты» (375×2644). CSS: хвост `css/media.css` (блок «Projects page (Figma 1736:16278)» в MOBILE ≤768). Header/footer/CTA — общие мобильные блоки (уже сделаны).

| # | Figma Section | Code (mobile) | Status |
|---|---|---|---|
| 1 | Cover → Page-header (r12, p[16,16,24,16], backlink «Главная», title 40/500, sub 14) | `.page-hero` / `.hero-block-page-inner` (общий блок Solutions) | done |
| 2 | Filter: пилюля «Фильтры» h50 + бейдж-счётчик | `.projects__filters-toggle` + `.projects__filters-count` (mobile-only дубликат, JS-тоггл `is-filters-open`) | done |
| 3 | Cards/Projects: 1 колонка, gap 16, карточка r12 p[24,16] | `.projects-page .projects__grid/card` | done |
| 4 | Card: name 19/1.2, text 14 rgba(34,34,34,.7), лого-круг 80 справа снизу | `.projects__name/text/logo` | done |
| 5 | Панель фильтров (3 группы в колонку, статичные панели) | `.projects__dropdowns` (переиспользованы desktop-`details`) | done |

Отличия от макета: «Показать еще» оставлен (в макете 4 карточки без кнопки, в проде 6 — иначе недостижимы); текст «Date» в карточках не переносился (плейсхолдер макета, данных нет).
