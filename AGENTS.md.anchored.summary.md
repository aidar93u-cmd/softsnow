## Objective
- Создать страницу «Проекты» (Projects) 1:1 из Figma node `844:7243`, переиспользуя общие блоки (header/footer/CTA/projects-grid), без per-page CSS. Все предыдущие задачи (страница РАНХиГС, унификация шапки/футера, правка CTA `896:12368`) завершены.

## Important Details
- Жёсткое правило: не создавать отдельный CSS на страницу — только общие файлы (`tokens.css`, `utilities.css`, `components.css`, `sections.css`).
- Реальный дизайн — светлый. Токены: `--color-black:#222222`, `--color-sea:#1342F3`, `--color-white:#FFFFFF`, `--bg-light:#F5F4F5`, `--bg-border:#E8E8E8` (body bg), `--radius-lg:20px`, `--radius-xl:50px`, `--fs-h1:100px`, `--fs-h2:70px`, `--fs-h3:40px`, `--fs-body-16:16px`, `--fs-body-14:14px`.
- Figma-мост: синхронный `throw new Error('DUMP:'+JSON.stringify(...))` после обхода `figma.root`; для dynamic-page `figma.getNodeByIdAsync`. Вьюпорт 1920×1080.
- **Спрайт иконок** `#icon-arrow`/`#icon-arrow-right`/`#icon-arrow-left` определён как inline `<svg><defs><symbol>` в ТЕЛЕ каждой страницы (в каждом *.html, строки ~209-221). Без него стрелки ломаются. Переносится копированием в новые страницы.
- AGENTS.md workflow: Design Audit перед кодом (read Figma node → map to component registry → implement).

## Work State
### Completed
- **Страница «Проекты» создана**: `projects.html`, проверена рендером в браузере (viewport 1920×1080, full-page screenshot, no console errors).
  - Структура 1:1 с node `844:7243`: header (из `clients.html`, active «Проекты») → hero (`#f5f4f5`, breadcrumb «Главная / Проекты», H1 «Проекты» 100px, subtitle) → filters (3 dropdown-кнопки 225×64: «Отрасль»/«Решения»[active, blue]/«Продукты») → grid (2 кол × 930px, gap 10, 6 карточек 930×460) → «Показать еще» → CTA (идентичен `clients.html`) → footer.
  - Переиспользованы без дублей: `.breadcrumb`, `.projects__card` (уже заточен под эту раскладку: title 40px, text absolute top:157px, logo 180×180 bottom-right), `.cta`+`.cta__title/__text/__btn`, SVG-спрайт `#icon-arrow`, `.btn`.
  - Новый CSS ТОЛЬКО в `sections.css` (блок «Projects page»): `.projects-hero`, `.projects-hero__title/__sub`, `.projects-page`, `.projects__filters`, `.projects__filter`(+`.is-active`), `.projects__filter-caret`, `.projects__grid`, `.projects__more`.
  - Замеры совпали с Figma: header 144px, H1 100px, filters 225×64 (active bg `#1342F3`), grid cols 930px+930px gap 10px, cards 930×460, arrow → `#icon-arrow`, CTA title 70px, все 6 картинок грузятся (naturalWidth 180), caret active = white.
- Предыдущее: унификация header/footer по 4 pages; CTA `896:12368` (`.cta--blue`) сверен и исправлен (inner 755px, title 70px).
- **Дополнительно (продолжение):** nav-пункт «Проекты» подключён ко всем страницам → `projects.html` (index: `projects.html`; subpages: `projects.html`). Файл `FIGMA.md` дополнен разделом «Проекты (projects.html)» с маппингом node `844:7243` и новым page-specific CSS в `sections.css`.

### Active
- (none — задача выполнена)

### Blocked
- (none)

## Next Move
- (none) — страница готова, навигация подключена, реестр обновлён.
- При необходимости: сверка по процедуре FIGMA_WORKFLOW.md (допуски ±1px) и/или добавление JS-поведения фильтров (сейчас статичны).

## Relevant Files
- `C:\Users\aidar\Desktop\softsnow\pages\projects.html` — НОВАЯ страница «Проекты» (1:1)
- `C:\Users\aidar\Desktop\softsnow\pages\clients.html` — донор header/footer/CTA/спрайта
- `C:\Users\aidar\Desktop\softsnow\css\sections.css` — добавлен блок «Projects page» (~строки 690-740)
- `C:\Users\aidar\Desktop\softsnow\css\tokens.css`, `components.css`, `utilities.css`
- `C:\Users\aidar\Desktop\softsnow\assets\img\project-1.png`, `project-2.png`, `cta-bg.png`
- Figma `FYv0RWNkawci4wbgFQnlw1` nodes: `844:7243` (Проекты page), `844:7246` (hero), `844:7284` (filters), `844:7296` (grid 6 cards), `844:7335` (CTA), `844:7342` (footer)
