# Оптимизация HTML/CSS SoftSnow — дизайн

Дата: 2026-08-24. Ветка: `refactor/css-cleanup` (от коммита `3c7ccba` «фиксированная версия»).

## Цель

Код удобен, сокращён, читаем, без дубликатов. **Визуальный результат 1:1 не меняется** (AGENTS.md п.11).

## Решения (утверждены)

1. Объём: чистка + реструктуризация sections.css по владению (вариант A).
2. Registry-резерв (`btn--white/--black/--outline-dark`, `card--project/--company`) — оставить.
3. media.css не резать — единая точка адаптива.
4. Stylelint минимально: встроенные правила, без package.json/плагинов.
5. Без скриншот-верификации на каждом шаге; ручная визуальная проверка человеком по запросу.
6. AGENTS.md сверяется с фактическим кодом, а не принимается на веру.

## Порядок каскада после рефакторинга

```
tokens.css → utilities.css → components.css → sections.css → css/pages/<страница>.css → media.css
```

## Этапы

| # | Этап | Содержание |
|---|------|-----------|
| 0 | Бейслайн | Стартовый прогон stylelint, фиксация текущих нарушений |
| 1 | Мёртвый код | Удаление бесспорного: `cta--center__*` ×4, `facts__`, `tasks__icon--closed`, `partners__logo--eco`, `form-check--invalid` и др. Перед каждым удалением — проверка динамической сборки классов в JS. Токены (~22) — сверка с FIGMA.md |
| 2 | SVG-спрайты | Добавить в существующий спрайт: `#icon-chevron` (×33), `#icon-check` (×23), логотип (×15) |
| 3 | Дубли селекторов | 9 дублей: консолидировать случайные (`.carousel-nav__btn`, `.is-hidden`), намеренный `.tasks__inner` задокументировать |
| 4 | Реструктуризация | Странично-уникальные блоки → `css/pages/<name>.css`; каждая страница +1 `<link>`. Блоки переносятся целиком |
| 5 | Guard | `.stylelintrc.json`: `no-duplicate-selectors`, `declaration-block-no-duplicate-properties`; запуск `npx stylelint "css/**/*.css"` |

## Правило владения

Селектор используется на 2+ страницах → общий файл (`sections.css`). На одной странице → `css/pages/<name>.css`. Модификаторы следуют за базовым блоком.

Странично-уникальные кандидаты (по скану): `ecosystem` (vuz), `univer-registry`/`services` (univer-online), `event-hero`/`events-featured`/`events-list`/`program`/`seminar-topics` (events/event-detail), `contacts-map`/`contacts-banner` (contacts), `article-block` (article-detail), `client-quote` (client-detail), `approach` (about), `catalog` (solutions/solution-detail — уточнить при аудите).

## Риски

- Динамическая сборка классов в main.js (конкатенация) → искать шаблоны, не только точные имена.
- Каскадные зависимости между файлами → блок переезжает целиком со всеми правилами.
- AGENTS.md может устареть → факты первичны, доку обновляем в конце.

## Верификация

- После каждого этапа: stylelint + ручная проверка страниц человеком (список затронутых страниц прикладывается).
- Коммиты атомарные по этапам в ветке.

## Скилы

ponytail-audit (этап 1–3) → code-simplification, verification-before-completion (2–4) → writing-plans → adversarial-reviewer (финал).
