# План: страница «Клиенты» (2026-08-12)

Новая подстраница `pages/clients.html` по макету «Клиенты» (node `826:1472`, frame 1870×4455) в файле «SoftSnow Work (Copy)». Многостраничный паттерн: `pages/solution-detail.html` + `css/solution.css` (precedent: подпапка `pages/`, `../`-пути, `../css/*.css`).

## Статус этапов

| # | Этап | Статус |
|---|------|--------|
| 0 | FIGMA_AUDIT (page `826:1472`) | [x] |
| 1 | План (этот файл) | [x] |
| 2 | IMPLEMENT: `.page-hero` | [ ] |
| 3 | IMPLEMENT: `.clients-grid` | [ ] |
| 4 | Сборка страницы (header/projects/cta/footer reuse) | [ ] |
| 5 | FIGMA_QA + скриншоты + сверка | [ ] |
| 6 | Обновить `FIGMA.md` | [ ] |

## Результат аудита (mapping)

| Figma | Code | Решение |
|---|---|---|
| Header INSTANCE `863:18238` | `.header` | reuse (копия из `solution-detail.html`) |
| Page hero `826:1475` (Frame 2094, 1870×503, bg `#F5F4F5`, r20) | `.page-hero` | NEW section |
| Бредкроumb `826:1503` | `.breadcrumbs` | reuse (`solution.css` → `components.css`) |
| h1 «Клиенты» 100px/500 `#222222` | `h1.page-hero__title` | `--fs-h1` |
| Подзаголовок 16px, max-w 652 | `.page-hero__sub` | `--fs-body-16` |
| Tabs (4 pills) `826:1514`–`826:1521` | `.tabs` / `.tabs__btn` / `.is-active` | reuse (handler в `main.js`) |
| Client Card `812:121` (460×360, white, r20) | `.clients-grid__card` | NEW (section-level; НЕ `.partners__card`) |
| Grid `826:1522` (1870×1470) | `.clients-grid` | NEW section |
| «Показать ещё» | `.btn--outline` | reuse |
| Projects `826:1717` | `.projects` | reuse |
| CTA `826:1747` (Frame 2210) / Footer `826:1754` | `.cta` / `.footer` | reuse |

## Новые файлы

- `pages/clients.html` — страница (по паттерну `solution-detail.html`).
- `css/sections.css` — страница «Клиенты»: стили `.c-hero`/`.c-clients` влиты в общий `sections.css` (без per-page файла).

## Перенос shared-классов

`.tabs`/`.tabs__btn`/`.tabs__btn.is-active` и `.breadcrumbs*` сейчас лежат в `css/solution.css`. Они нужны по 2-му экземпляру (страница «Клиенты») → перенести оба блока в `css/components.css` (shared registry), из `solution.css` удалить. Это безопасно: селекторы не переопределяются в `solution.css` поверх (проверить перед переносом). НЕ трогать стили как есть — только место хранения.

**Выполнено:** `css/solution.css` упразднён — `.tabs`/`.breadcrumbs` перенесены в `components.css`, layout-секции (`.s-hero`, `.s-tasks`, `.s-audience`, `.s-features`, `.cta--dark/-center`, `.testimonials`, `.faq`, `.catalog`, `.registry`, `.events--readalso`) — в `sections.css`. Ссылки на `solution.css` убраны из `solution-detail.html` и `solutions.html`. Per-page CSS-файлов больше нет.

## Данные секций (из аудита)

### `.page-hero` — node `826:1475` (Frame 2094, 1870×503, bg `#F5F4F5`, radius 20)
- Содержимое: breadcrumb `826:1503` (160×22), h1 «Клиенты», subtitle (max-w 652px). Inset-фреймы `826:1476`/`826:1501` пустые — фоновой картинки нет.
- Координаты дочерних относительно фрейма — уточнить субагенту по живой Figma (дамп `figma-clients.json` относится к другой секции — НЕ использовать).

### `.clients-grid` — node `826:1511` (Frame 2147239930, 1870×1658)
- Сетка `826:1522` (1870×1470): камеры 16 Client Cards 460×360, x 45997/46467/46937/47407, y 1013/1383/1753/2123, gap 10. В сетке также есть `cursor-*` RECTANGLE (21×23, `46697,1585`) — в DOM не включать.
- Tabs: 4 pills 151/268/283/113×64, radius 50, gap 10, 16px/500: active = `#1342F3` bg + white text, inactive = white bg + black text. Тексты: «Все отрасли», «Высшие учебные заведения», «Государственные учреждения», «Бизнес».
- Client Card `812:121` (460×360, white, r20): name 20px/500 `#222222`, category 14px (`--fs-body-14`), SLOT логотип 136×136, стрелка → `#icon-arrow` top-right.
- Категории карточек: «Высшее образование», «Горнодобывающая промышленность», «Энергетика», «Банковский сектор», «ИТ и консалтинг», «Образование», «Медицинское образование», «Общественная организация».
- Клиенты (16): МГИМО, Полиметалл, ВОЭК, Solidcore Resources, МГЮА им. О. Е. Кутафина, СПбПУ Петра Великого, Российская академия правосудия, Финансовый университет при Правительстве РФ, МФЮА, Азиатско-Тихоокеанский банк, СПбГУ, ЮНИКОН-Информ, Корпорация «Синергия», ПСПбГМУ им. акад. И. П. Павлова, ННГУ им. Н. И. Лобачевского, Общероссийский народный фронт.
- «Показать ещё» `.btn--outline` 460×64 по центру (по паттерну `.tasks__footer`).

## Логотипы

На странице «Клиенты» нужны 16 логотипов клиентов (SLOT 136×136). В `assets/img/` уже есть `client-1.png … client-10.png` (карусель главной, 136×136) с теми же SLOT-лого. Проверить соответствие имён макету и добавить недостающие (11–16) через `figma_capture_screenshot`/export SLOT-узлов на карточках `826:1523`–`826:1713`. Имена файлов `client-N.png` сохранить.

## Отложено (не в этом этапе)

- Фильтрация по табам и подгрузка «Показать ещё» не описаны в макете → статическая сетка + кнопка-ссылка. Поведение — отдельная задача.
- Responsive/mobile — отдельная задача (главная тоже 1920px).

## Допуски и процедура

По `docs/FIGMA_WORKFLOW.md`: измерения relative к фрейму секции, ±1px, Figma ≠ DOM 1:1 (только визуал). Verification Isolation: НЕ трогать несвязанные секции/файлы.

## Итоги секций (заполняется субагентами)

### `.page-hero`
- [ ] …

### `.clients-grid`
- [ ] …