# Mobile projects.html — Figma 1736:16278

Дата: 2026-08-24. Статус: done.

## Аудит (FIGMA_AUDIT)

Мобильный фрейм «Проекты» 375×2644: Content = Projects (Cover + Filters) + CTA + Footer.
Header/Footer/CTA — общие мобильные блоки, не трогались.

| Секция | Figma | Code |
|---|---|---|
| Cover (page-hero) | r12, bg #F5F4F5, p[16,16,24,16], backlink «Главная» 14, title 40/500/100%, sub 14/130% | `.page-hero` — уже покрыт общим блоком Solutions (media.css ≤768), правок не требовал |
| Filter | пилюля h50 r50 white, «Фильтры» 14/500 + бейдж-круг 24 #E8E8E8 со счётчиком | mobile-only дубликат `.projects__filters-toggle` + `.projects__filters-count` |
| Cards/Projects | колонка, gap 16, gap до фильтра 24 | `.projects__grid` flex column |
| Card/Project | r12, p[24,16], name 19/1.2, text 14 rgba(34,34,34,.7), стрелка сверху справа, лого-круг 80 справа снизу, зона футера ~100px | `.projects__card` + `__name/__text/__logo` |

## Имплементация (FIGMA_IMPLEMENT)

- `projects.html`: добавлена кнопка `.projects__filters-toggle` (aria-expanded/aria-controls), `.projects__dropdowns` получил `id="projectsFiltersPanel"`.
- `css/sections.css`: `.projects__filters-toggle { display: none }` (базово скрыта).
- `css/media.css` (MOBILE ≤768, блок «Projects page (Figma 1736:16278)»): герой-зазор 48px (`.page-hero:has(+ .projects-page)`), тоггл-пилюля + бейдж, панель фильтров в колонку (`.is-filters-open`), статичные dropdown-панели full-width, reset full-width, карточки 1 колонка r12 p[24,16], name 19, text 14/70%, `margin-bottom: 6.25rem` под зону лого, лого 80px круг (right 1rem, bottom 1.5rem).
- `js/main.js` (initDropdown): тоггл панели `.is-filters-open` на `.projects__filters`, закрытие по клику вне `.projects__filterbar`, счётчик выбранных фильтров в бейдже.

## Поведение

- Кнопка «Фильтры» открывает/закрывает панель (3 группы-аккордеона), клик вне — закрывает.
- Бейдж показывает суммарное число выбранных чекбоксов; чипы и «Сбросить фильтрацию» работают как на десктопе.
- Фильтрация/«Показать еще» — без изменений (по умолчанию видно 4 карточки, как в макете).

## Отличия от макета (осознанные)

1. «Показать еще» оставлен: в макете 4 карточки без кнопки, в проде 6 — без кнопки недостижимы.
2. Текст «Date» в футере карточки не переносился — плейсхолдер макета, реальных данных нет.
3. Шеврон слева от «Главная» в backlink не добавлялся — прецедент Solutions (тот же компонент).

## Верификация (FIGMA_QA, chrome-devtools, 375×812)

- Горизонтального скролла нет (`scrollWidth <= clientWidth`).
- Герой: backlink y16 fs14, title 40px, sub 14/19.6, зазор до каталога 48. ✓
- Тоггл: 50px высота, пилюля, бейдж «0». ✓
- Карточки: gap 16, паддинг 24/16, name 19px, text 14px rgba(34,34,34,.7), лого 80×80 круг (right 16, bottom 24). ✓
- Панель фильтров: открывается/закрывается, фильтрация, чипы, сброс, бейдж-счётчик. ✓
- Десктоп 1440: тоггл скрыт, грид 2 колонки, дропдауны инлайн, карточка 683px — без изменений. ✓
