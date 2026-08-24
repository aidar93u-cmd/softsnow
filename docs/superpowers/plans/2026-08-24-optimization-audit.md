# Аудит оптимизации — реестры (Task 1)

Дата: 2026-08-24. Ветка: `refactor/css-cleanup`. Тип задачи: READ-ONLY анализ + этот файл.

Методика и сырые данные:
- SVG: скан всех 15 `*.html`, пути `d="…"` длиной ≥40 символов, группировка по первым 80 символам. Машиночитаемый экспорт: `C:\Temp\opencode\sprite-inventory.xml` (CliXML, объекты `{Id, Pages, Count, PathPrefix}`; PathPrefix — сырые первые 80 символов значения `d` без нормализации пробелов — для точного текстового поиска при замене).
- Дубли CSS: `C:\Temp\opencode\css-audit.ps1` → `C:\Temp\opencode\css-rules.xml` (825 правил вне @media, 651 уникальное тело) → полная группировка в `C:\Temp\opencode\dupes-full.txt`.
- Вендоры: регэксп-матрица по всем страницам (class="swiper…", `__swiper`/`swiper-wrapper`/`swiper-slide` токены, `data-fancybox`, `.video`, `.gallery`, подключения css/js).

Итоговые числа: SVG — 49 уникальных длинных путей, 27 повторяющихся групп, **439 повторяющихся инстансов**, из них 60 — уже существующие определения `<symbol>` (не трогать) → **379 инстансов в зоне замены**. CSS — **71 группа дублей** / 174 лишних инстанса; merge — 61 группа (160 инстансов), skip — 10 групп (14 инстансов).

---

## РЕЕСТР-A «Спрайт» — повторяющиеся SVG

Именование по роли (контекст вхождения проверен по разметке; направления стрелок проверены рендером). Один символ может покрывать несколько вариантов пути (разные экспорты одного глифа).

| # | Id символа | Роль / контекст | Страницы | Вхожд. | Ключ поиска (первые ~80 символов `d`) |
|---|------------|-----------------|----------|--------|----------------------------------------|
| A1 | `icon-arrow-card` | Диагональная стрелка карточек-ссылок 13×11 (`.projects__arrow`, `.events__arrow`) | article-detail, client-detail, clients, directum, index, project-detail, projects, solution-detail, univer-online, vuz | 60 | `M11.5869 5.18164L8.71582 2.56348L7.19824 1.01855C7.14355 0.963867 7.10254 0.9000` |
| A2 | `icon-arrow-card` | Та же стрелка, вариант экспорта (`.clients__icon`, `.stages__arrow`); рендером совпадает с A1 | clients, client-detail | 27 | `M0.643555 10.7598C0.525065 10.7598 0.424805 10.7347 0.342773 10.6846C0.265299 10` |
| A3 | `icon-arrow-card` | Та же стрелка, вариант экспорта (`.catalog__arrow`, у пути `opacity="0.5"`) | solutions | 6 | `M0.643555 10.7598C0.821289 10.7598 0.967122 10.7028 1.08105 10.5889C1.19954 10.4` |
| A4 | `icon-arrow-card` | Та же стрелка, вариант экспорта (`.event-partners__icon`) | event-detail | 3 | `M0.639648 10.7598C0.521159 10.7598 0.420898 10.7347 0.338867 10.6846C0.261393 10` |
| A5 | `logo-mark` | Снежинка-марк логотипа: хедер `.logo__mark` (222×67, #1342F3) + футер `.logo__icon` (64×67, white; остальные 4 пути футер-марка — `<rect>`, в подсчёт не входят) | все 15 | 30 | `M29.041 0.783203C29.6425 0.406715 30.4008 0.405932 31.0029 0.78125L55.5439 16.07` |
| A6 | `logo-wordmark` | Буквы/кубы вордмарка «SoftSnow» хедера (10 путей одного SVG 222×67) | все 15 | 10×15=150 | см. таблицу A6 ниже |
| A7 | `icon-search` | Кнопка поиска в хедере (`.btn--search`) | все 15 | 15 | `M6 0C9.31371 0 12 2.68629 12 6C12 7.2957 11.587 8.49384 10.8887 9.47461L15.8994` |
| A8 | `icon-rutube` | Соцсеть Rutube: красный круг #ED143B + тёмный знак #100943 + маска-круг (3 пути одного SVG) в футере/hero-socials/contacts-map | все 15 | 17+17+15=49 | `M40 20C51.0458 20 60 11.0457 60 7.62939e-06C60 -11.0457 51.0458 -20 40 -20C28.95` / `M24.7041 19.0868H12.8867V14.4105H24.7041C25.3944 14.4105 25.8744 14.5308 26.1152` / `M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40` |
| A9 | `icon-vk` | Соцсеть VK (#1F67F9, evenodd) | все 15 | 17 | `M2.8 2.8C2.38419e-07 5.62666 0 10.1467 0 19.2V20.8C0 29.84 2.38419e-07 34.36 2.8` |
| A10 | `icon-quote` | Кавычка отзыва (`.testimonials__quote`, #1342F3) | about, article-detail, client-detail, solution-detail, vuz | 17 | `M0 23.877L4.29688 0H13.1836L6.05469 23.877H0ZM14.9414 23.877L19.2383 0H28.125L20` |
| A11 | `icon-play` | Кнопка play видео (`.video__play`, белый) | about, article-detail, project-detail | 3 | `M74.7826 36.9877C77.1014 38.3265 77.1014 41.6735 74.7826 43.0123L25.2174 71.6288` |
| A12 | `icon-download` | Иконка «скачать» в кнопке (about hero, event-detail `.program__download`) | about, event-detail | 2 | `M0.75 14.75H12.75M6.75 0.75V10.75M3.25 7.25L6.75 10.75L10.25 7.25` |
| — | `existing-icon-arrow` / `-right` / `-left` / `-caret` | **Уже спрайт** — определения `<symbol>` (по 1 на страницу), НЕ заменять | все 15 | 4×15=60 | `M14.8975 7.17188…` / `M7.76367 13.6914…` / `M6.8457 13.6914…` / `M0.441406 0.441956…` |

**Суммы:** повторяющихся инстансов всего 439; в зоне замены (без existing- defs) **379**: arrow-card 96, logo-mark 30, logo-wordmark 150, search 15, rutube 49, vk 17, quote 17, play 3, download 2.

### A6 детально: 10 путей вордмарка `logo-wordmark` (каждый 15×, все страницы)

| Ключ (первые 80 символов `d`) |
|---|
| `M63.75 6.82031L61.9922 2.74219V6.82031H60.7617V0.539062H62.25L64.0781 5.01562L65` |
| `M88.1299 25.7375L88.1436 25.7385L88.1572 25.7375C89.438 25.7076 90.6968 26.0448` |
| `M103.142 29.8107L101.517 30.7453L101.267 30.8898V37.2316L101.517 37.3762L103.947` |
| `M108.189 23.1135V32.9494H105.302V23.1135H108.189Z` |
| `M128.581 29.4797H122.277V33.3293H128.452V36.6447H122.277V42.6574H118.817V26.1711` |
| `M144.11 26.1486V29.4797H139.763V42.6574H136.271V29.4797H131.924V26.1486H144.11Z` |
| `M152.363 25.7131L152.374 25.7141H152.385C153.592 25.7 154.782 25.9899 155.834 26` |
| `M164.896 26.1564L171.909 36.0588V26.173H175.321V42.6896H172.618L165.652 32.8146V` |
| `M196.203 29.382V39.4484L191.785 42.008L187.461 44.4885L183.138 42.008L178.72 39.` |
| `M202.123 26.1564L205.177 38.6613L208.723 26.1564H211.508L215.051 38.6516L218.139` |

Примечания для Task 2:
1. A1–A4 проверены рендером — визуально один глиф (стрелка вправо с изогнутым хвостом). Совпадение с существующим `#icon-arrow` (17×14) попиксельно не проверялось — при замене можно рассмотреть сведение к нему, иначе новый `#icon-arrow-card` 13×11.
2. `logo-mark`/`logo-wordmark`: хедер синий (#1342F3), футер белый — символ собирать на `currentColor` (у путей есть и `stroke`).
3. `icon-rutube` — один SVG из 3 путей + маска; менять весь блок целиком на `<use>`. У 2 «лишних» инстансов (17 vs 15) маска-круг может отсутствовать (упрощённый SVG в hero-socials/contacts-map).
4. Одиночные пути (22 шт., 1 вхождение) в спрайт не включены.
5. Отклонение от плана: ожидалось ≈426 повторяющихся инстансов, измерено 439 (в зону замены 379). Разложение сумм сходится точно до инстанса; расхождение с оценкой плана — методика подсчёта (граница 40/60/80 символов, учёт symbol-defs), на решения задач не влияет.

---

## РЕЕСТР-B «Дубли деклараций» — все 71 группа

Источник: `css-rules.xml` (правила вне @media), полная группировка. Критерий merge — одинаковый интент (бренд-hover, ритм секций, hidden-state, swiper-overflow, типовые цвета, одинаковые паттерны карточек/панелей/грид). Skip — случайные совпадения тел у разных по смыслу селекторов и keyframes.

| Гр. | × | Члены (файл → селектор) | Нормализованное тело | Вердикт |
|-----|---|--------------------------|----------------------|---------|
| G01 | 20 | sections: .clients, .partners, .projects, .events, .cta, .page-hero--media.page-hero, .audience, .testimonials, .hero-vuz, .contacts-map, .article-about, .article-block; event-detail: .event-about, .seminar-topics, .event-partners; events: .events-featured, .events-list; solution-detail: .features; solutions: .catalog; univer-online: .services | `margin-bottom: 5rem` | **merge** — ритм секций |
| G02 | 18 | sections: .partners__card:hover, .projects__reset:hover, .dropdown__trigger:hover, .events__card:hover .events__info, .tab-filter.is-active, .stages__card:hover, .vnedrenie__card:hover; components: .btn--outline:hover, .btn--ghost:hover, .btn--black:hover, .carousel-nav__btn:hover, .tabs__btn.is-active; utilities: ::selection; clients: .tab-filter:hover, .clients__card:hover; event-detail: .audience__card--accent:hover, .event-partners__card:hover; index: .industries__card--cta:hover | `background: var(--color-sea);color: var(--color-white)` | **merge** — бренд-hover/active |
| G03 | 17 | sections: .projects__card[hidden], .projects__chips:empty, .projects__reset.is-hidden, .dropdown__trigger::-webkit-details-marker, .dropdown__count.is-hidden, .events__card[hidden], (.industries__cta,.projects__cta,.events__cta,.registry__stats); components: .modal-form__success.is-hidden; events: .events-list__more[hidden]; index: .events__card--blue::after; project-detail: .goals__results--m, .arch__img--mobile; projects: .projects__filters-toggle, (.projects__filters-head,.projects__apply), .projects__more[hidden]; solution-detail: .hero__footer--stats::after; solutions: .catalog__plus | `display: none` | **merge** — hidden-state |
| G04 | 12 | sections: .tasks__item:hover .tasks__link, .projects__card:hover/:focus-visible (.projects__name/.projects__text/.projects__year), .events__card:hover .events__date, .footer__contacts a, .cta--blue, .events__card--blue .events__title, .vnedrenie__card:hover .vnedrenie__done; clients: .clients__card:hover .clients__desc; index: .industries__card:not(–cta):hover (+ .industries__text), .industries__card--cta:hover (.industries__title,.industries__arrow); solutions: .catalog__card:hover (.catalog__head,.catalog__feat,.catalog__arrow) | `color: var(--color-white)` | **merge** — белый текст |
| G05 | 9 | sections: .header__link:hover, .header__dropdown-link:hover, .hero__brand, (.projects__chip:hover, .projects__chip:hover .projects__chip-x), .header__link.is-active, .faq__q:hover; components: .breadcrumb a:hover; about: .approach__text span; index: .industries__card--cta .industries__arrow | `color: var(--color-sea)` | **merge** — акцентный цвет |
| G06 | 6 | sections: .partners__swiper, .projects__swiper, .events__swiper, .testimonials__swiper, .gallery__swiper; about: .facts__swiper | `overflow: visible` | **merge** — swiper-overflow |
| G07 | 5 | sections: .testimonials__role; event-detail: .program__speaker-role, .seminar-topics_header .seminar-topics__num; solution-detail: .hero__label; solutions: .catalog__feat | `font-size: var(--fs-body-16)` | **merge** — типографика 16 |
| G08 | 5 | sections: .logo__mark, .header__dropdown, .dropdown; components: .form-field; solution-detail: .features-popup__media | `position: relative` | **merge** — контейнер позиционирования |
| G09 | 5 | sections: .events__card:hover .events__arrow, .stages__card:hover .stages__arrow; clients: .clients__card:hover .clients__icon; event-detail: .audience__card--accent:hover svg, .event-partners__card:hover .event-partners__icon | `fill: var(--color-white)` | **merge** — иконка на hover |
| G10 | 5 | sections: .client-intro, .goals, .video, .gallery; client-detail: .client-quote | `color: var(--color-black);margin-bottom: 5rem` | **merge** — секционный ритм |
| G11 | 5 | sections: .team__inner; event-detail: .program__speaker-info; project-detail: .impl__stages li; solution-detail: .registry__bottom; univer-online: .univer-registry__bottom | `display: flex;flex-direction: column;gap: 0.625rem` | **merge** — вертикальный стек |
| G12 | 4 | sections: .testimonials__name; event-detail: .event-about__date-time, .program__speaker-name; solution-detail: .features__demo-title | `font-size: var(--fs-body-20);font-weight: 500` | **merge** — подзаголовок 20/500 |
| G13 | 3 | clients: .clients__more; events: .events-list__more; projects: .projects__more | `display: flex;justify-content: center;margin-top: 2.5rem` | **merge** — кнопка «ещё» |
| G14 | 3 | sections: .vnedrenie__card:hover .vnedrenie__btn; components: .btn--outline-white:hover; index: .industries__card--cta | `background: var(--color-white);color: var(--color-sea)` | **merge** — инверсный бренд |
| G15 | 3 | sections: .vnedrenie; directum: .projects--eco, .cta--directum | `margin-top: 0.625rem` | **skip** — случайное совпадение |
| G16 | 3 | sections: .dropdown__check:focus-visible; components: .form-check__input:focus-visible + .form-check__box; utilities: :focus-visible | `outline: 2px solid var(--color-sea);outline-offset: 2px` | **merge** — focus-ring |
| G17 | 3 | sections: .article-block__text p, .article-block__quote blockquote p, .article-block__lead | `font-size: var(--fs-body-20);line-height: 1.4` | **merge** — типографика статьи |
| G18 | 3 | sections: .faq__inner, .gallery__inner; client-detail: .client-quote__inner | `background: var(--color-white);border-radius: var(--radius-lg);padding: 1.875rem 2.5rem` | **merge** — белая панель |
| G19 | 3 | sections: .audience__grid; clients: .clients__grid; events: .events-list__grid | `display: grid;gap: var(--gap-sm);grid-template-columns: repeat(4, 1fr);justify-content: center` | **merge** — грид 4 колонки |
| G20 | 3 | components: .carousel-nav; event-detail: .event-partners__grid; events: .hero-socials | `display: flex;gap: var(--gap-sm)` | **skip** — слишком общий |
| G21 | 3 | sections: .client-intro__media img, (.article-about__img, .article-block__img); client-detail: .client-quote__photo | `border-radius: var(--radius-lg);height: 35rem;object-fit: cover;width: 100%` | **merge** — крупное фото |
| G22 | 3 | sections: .dropdown__caret path, .audience__card--accent .audience__name; components: .btn svg | `transition: all 0.4s` | **merge** — движение 0.4s (заодно рассмотреть замену `all` на конкретные свойства) |
| G23 | 3 | sections: .logo__icon; components: .modal-form.is-open; utilities: svg | `display: block` | **skip** — разные интенты (svg-reset vs модалка) |
| G24 | 3 | sections: .tasks__item + .tasks__item, .faq__list, .faq__item + .faq__item | `border-top: 1px solid var(--bg-border)` | **merge** — сепаратор списка |
| G25 | 3 | sections: (.header__dropdown:hover/:focus-within .header__caret), .dropdown[open] .dropdown__caret, .faq__item.is-open .faq__icon | `transform: rotate(180deg)` | **merge** — открытая каретка |
| G26 | 3 | sections: .tasks-lists-section (.tasks__bg hover/::after); index: .industries__card:not(–cta):hover (.industries__bg/::after); solutions: .catalog__card:hover .catalog__arrow path | `opacity: 1` | **merge** — reveal на hover |
| G27 | 3 | sections: .projects__heading; utilities: h2; about: .team__heading | `font-size: var(--fs-h2);letter-spacing: -0.07em` | **merge** — заголовок H2 |
| G28 | 3 | sections: .tasks__arrow; event-detail: .program__download; solution-detail: .features__dot | `flex-shrink: 0` | **skip** — слишком общий |
| G29 | 2 | sections: .contacts-banner__avatar; event-detail: .program__avatar | `border-radius: 50%;height: 8.125rem;object-fit: cover;width: 8.125rem` | **merge** — аватар |
| G30 | 2 | sections: .article-about__inner, .article-block__inner | `background: var(--color-white);border-radius: var(--radius-lg);display: grid;gap: 0.625rem;grid-template-columns: 1fr 1fr;padding: 2.5rem` | **merge** — карточка статьи |
| G31 | 2 | solution-detail: .registry__title; univer-online: .univer-registry__title | `font-size: var(--fs-h3);letter-spacing: -0.05em;margin-bottom: 1.875rem;max-width: 23.125rem` | **merge** — близнецы страниц |
| G32 | 2 | solution-detail: .registry__desc; univer-online: .univer-registry__desc | `font-size: var(--fs-body-16);max-width: 37.5rem` | **merge** — близнецы страниц |
| G33 | 2 | sections: .vnedrenie--univer .vnedrenie__sub; solution-detail: .features__demo-sub | `font-size: var(--fs-body-14)` | **merge** — типографика 14 |
| G34 | 2 | directum: .partners--eco .partners__grid; univer-online: .services__grid | `display: grid;gap: 0.625rem;grid-template-columns: repeat(4, 1fr)` | **merge** — грид 4 колонки |
| G35 | 2 | sections: .team__flex; projects: .projects__grid | `display: grid;gap: 0.625rem;grid-template-columns: repeat(2, 1fr)` | **merge** — грид 2 колонки |
| G36 | 2 | sections: .team; vuz: .ecosystem | `margin-bottom: 5rem;margin-top: 5rem` | **merge** — секционный ритм |
| G37 | 2 | solution-detail: .registry__inner-block; univer-online: .univer-registry__inner-block | `height: 100%;max-width: 100%` | **merge** — близнецы страниц |
| G38 | 2 | components: .btn--outline-dark:hover, .btn--black | `background: var(--color-black);color: var(--color-white)` | **merge** — чёрная кнопка |
| G39 | 2 | event-detail: .program__row; solution-detail: .features__body | `align-items: stretch;display: flex;gap: var(--gap-sm)` | **merge** — строка-ряд |
| G40 | 2 | event-detail: .event-about__title, .program__title | `font-size: var(--fs-h2);font-weight: 500` | **merge** — заголовок страницы |
| G41 | 2 | event-detail: .event-about__date-num; solution-detail: .hero__num | `color: var(--color-sea);font-size: var(--fs-h3);font-weight: 500` | **merge** — крупная цифра |
| G42 | 2 | components: .breadcrumb__current, .tabs__btn:hover | `color: var(--color-black)` | **merge** — чёрный текст-состояние |
| G43 | 2 | components: .modal-form__fields, .modal-form__checks | `display: flex;flex-direction: column;gap: 0.625rem;margin-bottom: var(--gap-2xl)` | **merge** — форма модалки |
| G44 | 2 | event-detail: .seminar-topics__title, .event-partners__title | `font-size: var(--fs-h2);font-weight: 500;margin-bottom: 3.125rem` | **merge** — заголовок секции |
| G45 | 2 | components: .breadcrumb a, .breadcrumb__sep | `color: var(--color-grey)` | **merge** — серый текст |
| G46 | 2 | components: .form-check__text; client-detail: .stages__text | `color: var(--color-black);font-size: var(--fs-body-16)` | **merge** — текст 16 чёрный |
| G47 | 2 | sections: .reasons__title; univer-online: .services__title | `font-size: var(--fs-h2);font-weight: 500;letter-spacing: -0.07em` | **merge** — заголовок H2 |
| G48 | 2 | sections: .dropdown__trigger:hover svg path; components: .btn--outline:hover svg | `stroke: var(--color-white)` | **merge** — stroke на hover |
| G49 | 2 | sections: .projects__arrow path; solutions: .catalog__arrow path | `fill: currentColor` | **merge** — стрелка currentColor |
| G50 | 2 | sections: .clients__marquee; utilities: section | `overflow: hidden` | **skip** — разный интент (маска vs база) |
| G51 | 2 | sections: .events__card--wide; solution-detail: .features__panels | `width: 100%` | **skip** — слишком общий |
| G52 | 2 | sections: `to`, `to` (кадры @keyframes) | `opacity: 1;transform: none` | **skip** — keyframes, не дубли правил |
| G53 | 2 | sections: .dropdown__check:checked; components: .form-check__input:checked + .form-check__box | `background: var(--color-sea);border-color: var(--color-sea)` | **merge** — checked-состояние |
| G54 | 2 | sections: .tasks__inner; clients: .clients__card:hover .clients__logo | `background: var(--color-white)` | **skip** — случайное совпадение |
| G55 | 2 | sections: .stats__heading, .clients__heading | `font-size: var(--fs-h3);margin-bottom: 3.125rem;text-align: center` | **merge** — подзаголовок секции |
| G56 | 2 | sections: .hero .flex, .client-intro__content | `display: flex;flex-direction: column;height: 100%` | **merge** — растянутая колонка |
| G57 | 2 | sections: .tasks__item.is-open .tasks__a, .faq__item.is-open .faq__a | `grid-template-rows: 1fr` | **merge** — аккордеон открыт |
| G58 | 2 | sections: .tasks__item.is-open .tasks__icon--minus; solution-detail: .tasks__icon--plus | `opacity: 1;transform: rotate(0deg)` | **merge** — иконка аккордеона |
| G59 | 2 | sections: .tasks-lists-section .tasks, .article-block__quote | `margin: 0` | **skip** — generic reset |
| G60 | 2 | sections: .video__title, .gallery__title | `font-size: var(--fs-h2);font-weight: 500;line-height: 1` | **merge** — медиа-заголовок |
| G61 | 2 | sections: .video__inner; events: .events-featured__panel | `background: var(--color-white);border-radius: var(--radius-lg);padding: 1.875rem 2.5rem 2.5rem` | **merge** — белая панель |
| G62 | 2 | sections: .goals__item; event-detail: .program__speaker | `align-items: center;display: flex;gap: var(--gap-lg)` | **merge** — строка с иконкой |
| G63 | 2 | sections: .reasons; index: .industries | `margin-bottom: 7.5rem` | **merge** — секционный ритм |
| G64 | 2 | sections: .gallery__dot.is-active; index: .events__card--blue | `background: #1342f3` | **merge** — бренд-синий; ⚠ захардкожен — заменить на `var(--color-sea)` |
| G65 | 2 | sections: .video__poster; events: .events-featured__media img | `height: 100%;object-fit: cover;width: 100%` | **merge** — обложка cover |
| G66 | 2 | sections: .testimonials__quote, .page-hero | `margin-bottom: 2.5rem` | **skip** — иконка vs секция, случайное совпадение |
| G67 | 2 | sections: .audience__name; event-detail: .seminar-topics__name | `font-size: var(--fs-h3);max-width: 23.75rem` | **merge** — название карточки |
| G68 | 2 | sections: .audience__title, .faq__title | `font-size: var(--fs-h2);margin-bottom: 3.125rem` | **merge** — заголовок секции |
| G69 | 2 | sections: (.program__item:hover, .program__item.is-active); components: .btn--white:hover | `background: var(--color-sea);border-color: var(--color-sea);color: var(--color-white)` | **merge** — бренд-hover с рамкой |
| G70 | 2 | sections: .client-intro__text, .article-about__content | `max-width: 40.9375rem` | **merge** — текстовая колонка |
| G71 | 2 | sections: .faq__a > p; solution-detail: .tasks__a > p | `color: var(--grey, #222222B2);margin: 0;min-height: 0;overflow: hidden;transition: all 0.4s` | **merge** — аккордеон-ответ |

**Итог: 71 группа. Merge: 61 (160 лишних инстансов). Skip: 10 — G15, G20, G23, G28, G50, G51, G52, G54, G59, G66 (14 инстансов).**

---

## РЕЕСТР-C «Вендоры» — матрица подключений per page

`Sw-использование` = токены `swiper`/`swiper-*`/`__swiper` в разметке (контейнеры/обёртки/слайды). `Fb` = fancybox css+js. `FbAttr` = `data-fancybox`.

| Страница | Swiper css | Sw-использование | Fancybox css/js | FbAttr | .video | .gallery | Вердикт |
|---|---|---|---|---|---|---|---|
| about.html | + | 17 | + / + | 0 | 1 | 0 | не трогать |
| article-detail.html | + | 12 | + / + | 0 | 1 | 1 | не трогать |
| client-detail.html | + | 6 | – | 0 | 0 | 0 | не трогать (Fancybox и так нет) |
| clients.html | + | 8 | – | 0 | 0 | 0 | не трогать |
| **contacts.html** | **+** | **0** | **+ / +** | 0 | 0 | 0 | **снять Swiper и Fancybox (css+js)** |
| directum.html | + | 5 | – | 0 | 0 | 0 | не трогать |
| **event-detail.html** | **+** | **0** | – | 0 | 0 | 0 | **снять Swiper** |
| events.html | + | 4 | – | 0 | 0 | 0 | не трогать |
| index.html | + | 21 | + / + | 2 | 0 | 0 | не трогать (попап формы) |
| project-detail.html | + | 12 | + / + | 0 | 1 | 1 | не трогать |
| projects.html | – | 0 | – | 0 | 0 | 0 | ок (уже чисто) |
| solution-detail.html | + | 21 | + / + | 1 | 0 | 0 | не трогать (попап формы) |
| **solutions.html** | **+** | **0** | – | **1** | 0 | 0 | **снять Swiper; удалить осиротевший `data-fancybox`+`data-src` у кнопки (библиотека не подключена — кнопка мертва)** |
| univer-online.html | + | 5 | – | 0 | 0 | 0 | не трогать |
| vuz.html | + | 28 | – / **+ (js без css)** | 0 | 0 | 0 | не трогать; ⚠ находка вне скоупа: `fancybox.umd.js` подключён, но ни одного маркера использования нет — кандидат на снятие в отдельной задаче |

Ожидания плана подтверждены: Swiper не используется на contacts / event-detail / solutions / projects (на projects уже снят); contacts — единственная страница с Fancybox без маркеров использования; solutions.html содержит осиротевший `data-fancybox` (`<button class="btn btn--primary" data-fancybox data-src="#request-popup">`, библиотека не подключена).

Безопасность снятия: `initSwiper` в `js/main.js` итерирует пустой NodeList, если разметки нет (`new Swiper` не вызывается → нет ReferenceError при отсутствии библиотеки); Fancybox-ветки в main.js защищены `typeof Fancybox === 'undefined'`.

---

## Самопроверка (Task 1)

- РЕЕСТР-A: сумма повторяющихся инстансов по группам = 439 (60+30+27+17+17+17+17+15×13+6+3+3+2 — сходится с измерением скрипта); в зоне замены 379 после исключения 60 уже-спрайтовых symbol-defs. Ожидание плана ≈426: отклонение +13 задокументировано (методика подсчёта), на задачи 2/7/8 не влияет.
- РЕЕСТР-B: групп 71 (совпадает с аудитом), лишних инстансов 174 (61 merge-группа → 160, 10 skip-групп → 14; 160+14=174 ✓). У каждой merge-группы перечислены все члены.
- РЕЕСТР-C: все 4 ожидания плана подтверждены измерениями; дополнительно задокументированы: vuz.html — fancybox JS без использования (вне скоупа), projects.html уже чист.
- Экспорт для Task 2: `C:\Temp\opencode\sprite-inventory.xml` — 49 объектов (27 повторяющихся с Id, 22 одиночных с Id=UNRESOLVED), `{Id, Pages, Count, PathPrefix}`, PathPrefix — сырой текст из HTML.
