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

Ещё не создана. Перед вёрсткой — FIGMA_AUDIT (правило 7 AGENTS.md), затем заполнить таблицу здесь.

### Решения (solutions.html)

Каталог решений, фрейм `733:17470` (1920×3250).

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18269` | `.header` | done |
| 2 | Hero (bg + breadcrumbs + h1 «Решения») | `736:17807` / `2238` | `.s-hero` + `.breadcrumbs` | done |
| 3 | Каталог (6 карточек-решений) | `2147239884` | `.catalog` (новая) | done |
| 4 | CTA | `2210` | `.cta` | done |
| 5 | Footer | `2147239878` | `.footer` | done |

Карточка решения: слева заголовок `.catalog__name` (40px) + платформа `.catalog__platform` (16px), справа `.catalog__feats` 2 колонки 460/420 (модификатор `--single` — 1 колонка), стрелка `#icon-arrow`. Стрелки-ссылки: «Решения для вузов» → `solution-detail.html`, остальные → `#` (детальные страницы ещё не созданы).

### Детальная решений (solution-detail.html)

Страница решения, фрейм `922:19917` (1920×9989). Секции: s-hero (bg, breadcrumbs, title, stats), registry, s-tasks (аккордеон «+»), s-audience (4 карточки), s-features (tabs 890/460, 5 панелей, переключение по `data-tab`), cta--dark, testimonials (swiper 617), events--readalso, cta--center, faq, footer. Стили в `css/solution.css`.

`s-features` табы: кнопки `.tabs__btn` с `data-tab` (0–4), панели `.s-features__panel` со стеком `.s-features__panels` (absolute, 1790×560). Каждая панель = `.s-features__content` (890×560, белая карточка: название/описание/пункты/demo) + `.s-features__img` (890×560) — при переключении меняется и контент, и картинка. Активная панель `.is-active` — opacity 1, остальные 0 + `translateY(16px)`, transition 0.4s (`!important`, обход reduced-motion). Переключение в `js/main.js` (`.tabs` handler) — `classList.toggle('is-active')` + `aria-hidden`.

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
| 3 | Tabs (Все отрасли / Вузы / Гос / Бизнес) | `826:1511` | `.c-filter` | done |
| 4 | Clients grid (16 карточек 460×360) | `826:1522` | `.c-clients__grid` | done |
| 5 | Detail hero (h1 70px + логотип клиента) | `896:11276` | `.page-hero--detail` | done |
| 6 | Footer | — | `.footer` | done (reused) |

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
| 4 | «Будет полезно для» (4 карточки 460×460) | `896:9593` | `.s-audience` + `.s-audience__card--accent` | done (reused) |
| 5 | «Программа семинара» (4 пункта, круг 64×64, 2-й активный; IMAGE 925×560 + label «Блок 1») | `896:9608` | `.program` | done |
| 6 | CTA «Забронируйте место» (bg sea, r20) | `896:9557` | `.cta--blue` | done (reused) |
| 7 | «Что разберём на семинаре» (6 карточек 590×360, 2×3) | `896:9564` | `.seminar-topics` (+`.seminar-topics__inner` white r20) | done |
| 8 | «Партнеры мероприятия» (3 карточки 617×510, лого 130×130 r50) | `896:9643` | `.event-partners` | done |
| 9 | «Почему нам доверяют ВУЗЫ?» (title + 3 блока: иконка 40×40 + 40/500 + 16/400) | `896:9667` | `.trust` | done |
| 10 | «С нами работают» | `896:9715` | `.clients` | done (reused) |
| 11 | FAQ (4 вопроса, первый открыт) | `896:9693` | `.faq` | done (reused) |
| 12 | Footer | `896:9509` | `.footer` | done (reused) |

Добавлен shared-вариант кнопки `.btn--outline-dark` в `css/components.css` (border `#222`, текст `#222` 600; hover: bg black, white text) — используется в detail hero. Отклонения (компромисс по токенам): title/btn/date/CTA — `--color-sea` #216CF3 и dark-outline вместо #1342f3 (см. план `2026-08-15-events-pages.md`). FAQ открывается через существующий `js/main.js` аккордеон (первый `.faq__item` авто-open).

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
