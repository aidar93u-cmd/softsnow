# Task 7 — Группировка паттернов (отчёт)

Дата: 2026-08-25. Ветка: `refactor/css-cleanup`. Коммит: `8979736 refactor(css): group same-intent duplicate declarations`.
Файл: `css/sections.css` (единственный; base.css/media.css не тронуты).

## Вывод текущих групп

Реестр РЕЕСТР-B (71 группа / 174 инстанса) устарел после Task 6 (снос font-only дублей + вливание pages-слоя). Ре-деривация по сегодняшнему sections.css (вне @media; в файле @media нет вообще): **55 групп / 147 лишних инстансов**. Пометки merge/skip из реестра наложены на текущие группы.

## Диспозиция

**MERGE — 46 групп, 181 правило → 46 сгруппированных правил, схлопнуто 135 инстансов.**

| Текущая группа | × | Интент (метка) | Соответствие реестру |
|---|---|---|---|
| margin-bottom: 5rem | 20 | Ритм секций | G01 ✓ |
| display: none | 16 | Скрытые состояния | G03 ✓ (см. примечание про [hidden]/.is-hidden) |
| background sea + color white | 12 | Фирменный hover | G02 ✓ (члены из base.css не тронуты) |
| color: var(--color-white) | 12 | Белый текст на тёмном/hover | G04 ✓ |
| color: var(--color-sea) | 8 | Акцентный цвет текста | G05 ✓ |
| overflow: visible | 6 | Свайперы | G06 ✓ |
| font-size: var(--fs-body-16) | 5 | Типографика 16 | G07 ✓ |
| fill: var(--color-white) | 5 | Иконка белеет на hover | G09 ✓ |
| flex/column/gap .625rem | 5 | Вертикальный стек | G11 ✓ |
| black + margin-bottom 5rem | 5 | Тёмная секция | G10 ✓ |
| margin-bottom: 3.125rem | 5 | Отступ под заголовком секции | новый (остаток G44/G68 после Task 6), интент общий → merge |
| position: relative | 4 | Контейнер позиционирования | G08 ✓ |
| fs-body-20/500 | 4 | Подзаголовок 20/500 | G12 ✓ |
| 3×: грид-4 центр / типографика статьи / крупное фото / rotate180 / белая панель / transition .4s / кнопка «ещё» / сепаратор списка | 3 | — | G19, G17, G21, G25, G18, G22*, G13, G24 ✓ (*G22: замечание про `all` — вне скоупа, тела сохранены дословно) |
| 25 групп ×2 | 2 | близнецы/панели/гриды и пр. | G31, G35, G32, G33, G14, G36, G34, G41, G37, G29, G39, G67(ост.), G58, G57, G61, G62, G64, G65, G71, G55, G70, G56 ✓ |

Примечания:
- **display:none**: bare `[hidden]`/`.is-hidden` в sections.css НЕ добавлялись (утилиты !important уже в base.css:288/600); в группу вошли только существовавшие члены sections.css (в т.ч. составные `.x[hidden]`, `.x.is-hidden` — сохранены дословно).
- **G64 (background:#1342f3)**: захардкоженное значение сохранено как есть (замена на var() = отдельное решение, не эта задача).

**SKIP — 9 групп / 12 инстансов (остаток):**

| Группа | × | Причина |
|---|---|---|
| margin-bottom: 2.5rem (.testimonials__quote/.page-hero/.vnedrenie__title) | 3 | G66 skip: иконка vs секция |
| margin-top: .625rem (.vnedrenie/.projects--eco/.cta--directum) | 3 | G15 skip |
| flex-shrink: 0 (.tasks__arrow/.program__download/.features__dot) | 3 | G28 skip: слишком общий |
| width: 100% (.events__card--wide/.features__panels) | 2 | G51 skip |
| flex+gap-sm (.event-partners__grid/.hero-socials) | 2 | G20 skip |
| margin: 0 (.tasks-lists-section .tasks/.article-block__quote) | 2 | G59 skip |
| background white (.tasks__inner/.clients__card:hover .clients__logo) | 2 | G54 skip |
| keyframes «to» ×2 | — | G52 skip: кадры @keyframes, не правила (не тронуты сканером) |
| margin-bottom: 1.25rem (.projects__filterbar/.reasons__name) | 2 | новая, случайная коллизия → skip |

## Числа

| Метрика | До | После |
|---|---|---|
| Правил вне @media | 707 | 578 |
| Групп дублей тел | 55 | 9 |
| Wasted instances | **147** | **12** |

## Верификация

1. **Pair-equivalence**: мультимножество пар (селектор → нормализованные декларации) до/после — 733 == 733, нулевые различия (скрипт task7-verify-pairs.ps1).
2. **Spot-equivalence** (ритм 5rem, sea-hover, display:none): каждый исходный селектор-член встречается ровно в одной сгруппированной правиле с идентичными декларациями (task7-verify-spot.ps1).
3. **Пустые правила**: `\{\s*\}` → 0 совпадений.
4. **Геометрия DOM** (getBoundingClientRect всех элементов, old/new css hot-swap в одном сеансе, 1905px): index.html — 0 аномалий (только равномерный сдвиг x=+1.5px у анимированного clients-marquee, зависит от времени, не от css); solution-detail.html — 0; projects.html — 0.
5. Каскад: media.css подключается последним и перекрывает независимо от позиции правил внутри sections.css; специфичности не изменены (группа = тот же набор селекторов).

Замечания: при группировке старые баннеры страниц (`/* ==== X ==== */`), стоявшие перед удаляемыми правилами, попали внутрь селекторных списков; исправлено переносом на собственные строки (комментарии не влияют на рендер). Один тройной перевод строки из HEAD схлопнут до одинарного — чистая косметика.

Скрипты: C:\Temp\opencode\task7-{derive,transform,verify-pairs,verify-spot}.ps1.
