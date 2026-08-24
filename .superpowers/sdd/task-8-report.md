# Task 8 Report: transition:all → точечные свойства

**Commit:** `6b06fd2` — `fix(css): replace forbidden transition:all with targeted properties`
**Scope:** 52 replacements (base.css 5 + sections.css 47). media.css: 0 occurrences.
**Verification:** grep `\ball\b` внутри transition-деклараций = **0**. `git diff --numstat` = ровно 52/52 (5+5 base, 47+47 sections), посторонних строк в diff нет. Browser smoke test (file://index.html): computed `.btn` → `background-color, border-color, color @ .4s`, `.partners__card` → `background-color, color @ .4s`.

Длительность/функция сохранены дословно (все исходные значения — `0.4s`; шесть строк events были `0.4s all`). Свойства каждого списка выведены из state-правил (`:hover` / `.is-active` / `.is-open` / `[open]` / `:checked`) того же селектора или его потомков.

## base.css

| Строка | Селектор | Было | Стало | Обоснование (state-правило) |
|---|---|---|---|---|
| 286 | `.btn` | `all 0.4s` | `background-color .4s, border-color .4s, color .4s` | hovers всех вариантов меняют bg/border/color (`.btn--primary/--white/--black/--outline*/--ghost:hover`) |
| 307 | `.btn svg` | `all 0.4s` | `stroke .4s` | `.btn--outline-white:hover svg`, `.btn--outline:hover svg` меняют только stroke |
| 313 | `.btn--outline-white svg` | `all 0.4s` | `stroke .4s` | `.btn--outline-white:hover svg { stroke }` |
| 418 | `.carousel-nav__btn` | `all 0.4s` | `background-color .4s, color .4s` | `:hover` → bg sea + color white (svg на currentColor следует за color) |
| 442 | `.tabs__btn` | `all 0.4s` | `background-color .4s, color .4s` | `:hover` → color; `.is-active` → bg+color |

## sections.css

| Строка | Селектор | Было | Стало | Обоснование |
|---|---|---|---|---|
| 66 | `.header__caret` | `all 0.4s` | `transform .4s` | hover/focus-within/`.dropdown[open]`/mobile `.is-open` → rotate(180deg) |
| 379 | `.tasks-lists-section .tasks__bg` | `all 0.4s` | `opacity .4s` | item:hover → opacity 1 |
| 389 | `.tasks-lists-section .tasks__item::after` | `all 0.4s` | `opacity .4s` | item:hover::after → opacity 1 |
| 413 | `.tasks__link` | `all 0.4s` | `color .4s` | `.tasks__item:hover .tasks__link` → color white |
| 645 | `.partners__card` | `all 0.4s` | `background-color .4s, color .4s` | card:hover → bg sea + color white |
| 669 | `.partners__desc` | `all 0.4s` | `opacity .4s` | card:hover .desc → opacity 0.8 |
| 745 | `.projects__card` | `all 0.4s` | `background-color .4s, color .4s` | :hover/:focus-visible → bg sea + color white |
| 908 | `.projects__chip` | `all 0.4s` | `background-color .4s, border-color .4s, color .4s` | чипы (категория из брифа); :hover → color sea; bg/border в списке про запас — никогда не меняются, анимации не порождают |
| 916 | `.projects__chip-x` | `all 0.4s` | `color .4s` | chip:hover .chip-x → color sea |
| 936 | `.projects__reset` | `all 0.4s` | `background-color .4s, color .4s` | reset:hover → bg sea + color white |
| 962 | `.dropdown__trigger` | `all 0.4s` | `background-color .4s, color .4s` | trigger:hover → bg sea + color white |
| 983 | группа: `.dropdown__caret path`, `.audience__card--accent .audience__name`, `.vnedrenie__name` | `all 0.4s` | `stroke .4s, color .4s` | union по группе: path → stroke (trigger:hover svg path); name'ы наследуют color-флип карточек. Группировку селекторов сохранены 1:1 |
| 989 | `.dropdown__caret` | `all 0.4s` | `transform .4s` | `.dropdown[open]` → rotate(180deg) |
| 1036 | `.dropdown__check` | `all 0.4s` | `background-color .4s, border-color .4s` | `:checked` → bg+border sea |
| 1046 | `.dropdown__check::after` | `all 0.4s` | `transform .4s` | `:checked::after` → scale(1) |
| 1163 | `.events__card--wide .events__info` | `0.4s all` | `background-color .4s, color .4s` | card:hover .info → bg sea + color white |
| 1170 | `.events__title` | `0.4s all` | `color .4s` | собственных меняющихся свойств нет; цвет наследуется от info (флип black→white) |
| 1179 | `.events__meta` | `0.4s all` | `color .4s` | аналог title; `--blue` вариант задаёт color статикой |
| 1187 | `.events__tag` | `0.4s all` | `border-color .4s` | card:hover .tag → border white |
| 1193 | `.events__date` | `0.4s all` | `color .4s` | card:hover .date → color white |
| 1201 | `.events__arrow` | `0.4s all` | `fill .4s` | card:hover .arrow → fill white |
| 1563 | `.faq__q` | `all 0.4s` | `color .4s` | q:hover → color sea |
| 1577 | `.faq__icon` | `all 0.4s` | `transform .4s` | `.is-open` → rotate(180deg); color = currentColor (анимируется через q) |
| 1584 | `.faq__a` | `all 0.4s` | `grid-template-rows .4s` | `.is-open` → 0fr→1fr (плавный аккордеон) |
| 1593 | группа: `.faq__a > p`, `.tasks__a > p` | `all 0.4s` | `padding-bottom .4s` | is-open → padding-bottom 2.5rem/1.875rem |
| 1671 | `.stages__card` | `all 0.4s` | `background-color .4s, color .4s` | card:hover → bg sea + color white |
| 1680 | `.stages__label` | `all 0.4s` | `color .4s` | наследует флип цвета карточки |
| 1689 | `.stages__desc` | `all 0.4s` | `color .4s` | наследует флип цвета карточки |
| 1697 | `.stages__arrow` | `all 0.4s` | `fill .4s` | card:hover .arrow → fill white |
| 2037 | `.vnedrenie__card` | `all 0.4s` | `background-color .4s, color .4s` | card:hover → bg sea + color white |
| 2044 | `.vnedrenie__sub` | `all 0.4s` | `color .4s` | наследует флип |
| 2053 | `.vnedrenie__list` | `all 0.4s` | `color .4s` | наследует флип |
| 2060 | `.vnedrenie__row` | `all 0.4s` | `color .4s` | наследует флип; done-потомок получает color напрямую от hover-правила |
| 2096 | `.vnedrenie__badge` | `all 0.4s` | `border-color .4s, color .4s` | card:hover badge → border white + color white |
| 2822 | `.tab-filter` | `all 0.4s` | `background-color .4s, color .4s` | :hover/.is-active → bg sea + color white |
| 2837 | `.clients__card` | `all 0.4s` | `background-color .4s, color .4s` | card:hover → bg sea + color white |
| 2975 | `.audience__card--accent` | `all 0.4s` | `background-color .4s, color .4s` | :hover → bg sea + color white |
| 2980 | `.audience__card--accent svg` (inline после `fill`) | `all 0.4s` | `fill .4s` | accent:hover svg → fill white |
| 3022 | `.program__item` | `all 0.4s` | `background-color .4s, border-color .4s, color .4s` | :hover/.is-active → bg+border sea + color white |
| 3035 | `.program__num` | `all 0.4s` | `background-color .4s, border-color .4s, color .4s` | item hover/is-active num → bg+border white + color sea |
| 3269 | `.industries__card` | `all 0.4s` | `color .4s` | non-cta :hover → color white (фон раскрывается дочерними bg/::after) |
| 3279 | `.industries__bg` | `all 0.4s` | `opacity .4s` | hover → opacity 1 |
| 3287 | `.industries__card:not(--cta)::after` | `all 0.4s` | `opacity .4s` | hover::after → opacity 1 |
| 3294 | группа: industries title/text/arrow | `all 0.4s` | `color .4s` | text → color напрямую (non-cta hover); arrow/title → cta-hover и наследование |
| 3596 | `.tasks__a` | `all 0.4s` | `grid-template-rows .4s` | is-open → 0fr→1fr |
| 3809 | `.features-popup__nav` | `all 0.4s` | `border-color .4s, color .4s` | :hover → border-color sea + color sea |
| 3902 | `.catalog__arrow` | `all 0.4s` | `opacity .4s, transform .4s` | card:hover arrow → opacity 1 + scale(2) |

## Особые случаи

1. **Групповые селекторы (строки 983, 1593, 3294)** — оставлены одной декларацией со списком-объединением свойств всех членов группы; структура правил не менялась.
2. **Элементы без собственных меняющихся свойств** (`.events__title`, `.events__meta`, `.stages__label/desc`, `.vnedrenie__sub/list/row`) — при `all` ничего сами не анимировали (менялся унаследованный цвет родителя, который следует за его transition автоматически). Им назначен `color .4s` — минимальный список, соответствующий реальному изменению computed value.
3. **`.dropdown__check:focus-visible`** — outline больше не анимируется (при `all` появление focus-outline анимировалось инцидентно). Финальное состояние идентично, исчезла лишь 0.4s-анимация обводки при фокусе с клавиатуры.
4. **Инлайн-декларация** sections.css:2980 (`fill:...;transition:...` одной строкой) — заменена только декларация transition.

## Concerns

- Наивный grep из брифа (`transition:[^;]*\ball\b`) даёт 1 совпадение — **комментарий** в base.css:83 (уже до задачи содержал кракозябры-моджибейк). Это проза, не декларация; по инструкции «не трогать ничего кроме transition-строк» комментарий оставлен как есть. Grep по декларациям = 0.
- Инцидент в процессе: первая попытка патча через `[IO.File]::ReadAllText/WriteAllText` с latin1 испортила UTF-8-кириллицу в sections.css (ReadAllText сниффает BOM и игнорирует переданную кодировку). Откат через `git checkout -- css/sections.css`, повторный патч сделан байтово (`ReadAllBytes` + latin1 `GetString/GetBytes` + `WriteAllBytes`) — BOM/CRLF/кириллица сохранены, diff чистый.

## Fix round 1

**Commit:** `d1c1eb8` — `fix(css): restore bg/color fade lost in transition targeting (industries cta, catalog arrow)`
**Scope:** 2 декларации в css/sections.css, ничего больше. `git diff --numstat HEAD~1` = ровно `2  2  css/sections.css`.

| Строка | Селектор | Было | Стало | Обоснование |
|---|---|---|---|---|
| 3269 | `.industries__card` | `color .4s` | `background-color .4s, color .4s` | cta-вариант участвует в групповом hover (строка 691): `.industries__card--cta:hover { background: var(--color-sea); color: var(--color-white) }` — фон white→sea перестал анимироваться после 6b06fd2 |
| 3902 | `.catalog__arrow` | `opacity .4s, transform .4s` | `opacity .4s, transform .4s, color .4s` | стрелка `fill="currentColor"` и входит в групповой hover (строка 448): `.catalog__card:hover .catalog__arrow { color: var(--color-white) }` — глиф раньше таял через color-анимацию |

Проверка: оба групповых hover-правила существуют на заявленных строках (448, 691); новые списки совпадают с принятым в файле форматом `background-color .4s, color .4s` (ещё 9 мест). EOL/кодировка не тронуты (Edit tool, точечная замена).
