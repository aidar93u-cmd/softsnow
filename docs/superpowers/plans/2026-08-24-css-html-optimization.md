# HTML/CSS Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Почистить и реструктурировать HTML/CSS SoftSnow (мёртвый код, SVG-дубли, дубли селекторов, разбивка sections.css по владению) без изменения визуального результата.

**Architecture:** Статический многостраничник. Каскад после рефакторинга: `tokens.css → utilities.css → components.css → sections.css → css/pages/<страница>.css → media.css`. media.css не режется. Registry-резерв не удаляется.

**Tech Stack:** Ванильный HTML/CSS/JS, PowerShell 5.1 для скриптов, npx stylelint (без package.json).

## Global Constraints

- Визуальный результат 1:1 неизменен (AGENTS.md п.11).
- Никаких скриншот-проверок агентом; визуальную проверку делает человек по запросу (список страниц прикладывается).
- Ветка `refactor/css-cleanup`; атомарный коммит на задачу.
- `!important` не добавлять. Registry-резерв (`btn--white/--black/--outline-dark`, `card--project/--company`) НЕ удалять.
- AGENTS.md сверять с фактическим кодом; факты первичны.
- Перед удалением любого класса: проверка точного имени И шаблонов конкатенации в `js/main.js` (`grep -i <prefix>`).

---

### Task 0: Stylelint guard + baseline

**Files:**
- Create: `.stylelintrc.json`
- Create: `C:\Temp\opencode\stylelint-baseline.txt` (артефакт, не в git)

- [x] **Step 1: Создать конфиг**

```json
{
  "rules": {
    "no-duplicate-selectors": true,
    "declaration-block-no-duplicate-properties": [true, { "ignore": ["consecutive-duplicates"] }],
    "block-no-empty": true
  }
}
```

- [x] **Step 2: Baseline-прогон**

Run: `npx --yes stylelint "css/**/*.css" > C:\Temp\opencode\stylelint-baseline.txt 2>&1; (Get-Content C:\Temp\opencode\stylelint-baseline.txt | Measure-Object -Line).Lines`
Expected: файл с текущими нарушениями (число строк > 0 возможно); это база сравнения, не блокер.

- [x] **Step 3: Commit**

```bash
git add .stylelintrc.json
git commit -m "chore: add stylelint config"
```

---

### Task 1: Мёртвый CSS (верифицированный список)

**Files:**
- Modify: `css/sections.css` (~2522–2562: блок `.cta--center*`; ~3885: `.partners__logo--eco`; 722: устаревший комментарий)
- Modify: `css/components.css` (386: `.form-check--invalid .form-check__box`)
- НЕ трогать: всё `facts__*` (false positive — класс собирается в `main.js:50` как `'swiper-slide facts__screen'`).

**Interfaces:** Produces: отсутствие селекторов `cta--center`, `cta--center__inner/__title/__text/__btn`, `partners__logo--eco`, `form-check--invalid` в css/*.css.

- [x] **Step 1: Финальная проверка перед удалением**

Run: `Select-String -Path *.html,js\*.js -Pattern 'cta--center|partners__logo--eco|form-check--invalid'`
Expected: пусто (0 совпадений в HTML/JS). Если что-то нашлось — СТОП, класс живой, исключить из удаления.

- [x] **Step 2: Удалить блоки**

Прочитать каждый блок от строки объявления до закрывающей `}` (включая соседние правила блока), удалить целиком. Комментарий sections.css:722 заменить с «controlled by JavaScript via .tasks__icon--closed» на актуальный факт: иконки управляются через `tasks__icon--plus/--minus` (класс `--closed` нигде не существует).

- [x] **Step 3: Проверка**

Run: `npx --yes stylelint "css/**/*.css"` — не хуже baseline; `git diff --stat` показывает только удаления в 2 файлах.

- [x] **Step 4: Commit**

```bash
git add css/sections.css css/components.css
git commit -m "refactor: remove dead CSS (cta--center, partners__logo--eco, form-check--invalid)"
```

---

### Task 2: Неиспользуемые токены

**Files:**
- Modify: `css/tokens.css`
- Read: `docs/FIGMA.md` (реестр токенов)

**Interfaces:** Produces: список удалённых токенов для обновления FIGMA.md в Task 8.

- [x] **Step 1: Вычислить неиспользуемые**

Скрипт: извлечь все `--var-name:` из tokens.css; для каждого искать `\bvar\(--var-name\b` по всем css + js/main.js (только использование через `var()`, объявление не считается). Вывести список.

- [x] **Step 2: Сверить с FIGMA.md**

Каждый кандидат проверить: есть ли пометка «резерв»/«запланирован» в FIGMA.md. Резервные оставить. Остальные удалить.

- [x] **Step 3: Проверка + Commit**

Run: `npx --yes stylelint "css/**/*.css"; git diff --stat`
Expected: только удаления в tokens.css.

```bash
git add css/tokens.css
git commit -m "refactor: remove unused design tokens"
```

---

### Task 3: SVG-спрайты (chevron, check)

**Files:**
- Modify: все 15 `*.html` (блок `<symbol id="icon-*">` ~строки 756–768 в index.html; вхождения заменяемые)

**Interfaces:** Produces: новые symbol-id `icon-caret` (chevron 14×8), `icon-check` (галочка). Паттерн замены: `<svg class="X" width=W height=H viewBox="V" fill="none"...><path d="D".../></svg>` → `<svg class="X" width=W height=H viewBox="V" aria-hidden="true"><use href="#icon-caret"/></svg>`. Классы/размеры сохраняются на внешнем svg; path уезжает в symbol.

- [x] **Step 1: Извлечь эталонные блоки**

Chevron (33×): `<svg class="header__caret" width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25"/></svg>`. Для check (23×): взять полный блок первого вхождения `M7.5 12.5L10.5` (grep по всем html, прочитать контекст ±3 строки, зафиксировать viewBox и атрибуты).

- [x] **Step 2: Добавить symbols во все 15 спрайтов**

После `#icon-arrow-left` вставить (id и содержимое из Step 1):

```html
<symbol id="icon-caret" viewBox="0 0 14 8">
  <path d="M0.441406 0.441956L6.94141 6.94196L13.4414 0.441956" stroke="currentColor" stroke-width="1.25" />
</symbol>
<symbol id="icon-check" viewBox="<из Step 1>">
  <path d="M7.5 12.5L10.5 15.5L16.5 9" stroke="currentColor" ... />
</symbol>
```

PowerShell-скриптом по всем *.html: вставка после строки с `</symbol>` последнего существующего (якорь: символ `icon-arrow-left`).

- [x] **Step 3: Заменить инлайн-вхождения**

Скриптом: многострочная замена полного svg-блока (регекс от `<svg[^>]*>` до `</svg>` содержащего целевой `d="M0.441406` / `d="M7.5 12.5L10.5"`) на `<use>`-вариант с сохранением внешних атрибутов (class/width/height/viewBox). После замены: `Select-String -Pattern 'M0\.441406|M7\.5 12\.5L10\.5' -Path *.html` должен находить ТОЛЬКО определения в symbol (по 1 на страницу), не инлайны.

- [x] **Step 4: Ручная проверка (запрос человеку)**

Попросить пользователя глазами глянуть dropdown-каретку в шапке solutions.html и чек-иконки solution-detail.html.

- [x] **Step 5: Commit**

```bash
git add -A *.html
git commit -m "refactor: dedupe caret/check SVGs into sprite symbols"
```

Логотип (×15, большой multi-path svg в шапке): отдельное решение — вынести в `#icon-logo-mark` тем же паттерном. Сделать в этом же таске шагами 3a–3c, если замена проходит чисто; иначе отдельным таском позже.

---

### Task 4: Дубли селекторов

**Files:**
- Modify: `css/utilities.css` (15: `.carousel-nav__btn`)
- Modify: `css/components.css` (212–230: `.carousel-nav__btn`, `:hover`)
- Modify: `css/sections.css` (2089: `.is-hidden`)

- [x] **Step 1: Прочитать оба объявления каждого дубля**

`.carousel-nav__btn`: utilities.css:15 vs components.css:212. Если наборы свойств идентичны или utilities-версия покрывается components — удалить из utilities.css (components загружается после utilities, каскад не меняется). `.is-hidden`: sections.css:2089 vs components.css:406 — если декларации одинаковы (`display:none`), удалить из sections.css (components раньше sections, специфичность одинаковая, порядок загрузки даёт тот же результат: правило останется применимым из components.css).

- [x] **Step 2: Проверка отсутствия регрессий каскада**

Для каждого удалённого правила убедиться: между старым местом и новым местом нет промежуточного правила с той же специфичностью, переопределяющего свойства (grep селектора по всем css). Задокументировать вывод в коммит-сообщении.

- [x] **Step 3: Commit**

```bash
git add css/utilities.css css/sections.css css/components.css
git commit -m "refactor: consolidate duplicated selectors (.carousel-nav__btn, .is-hidden)"
```

Дубль `.tasks__inner` (намеренный вариант, AGENTS.md подтверждает) — НЕ трогать; добавить однострочный комментарий `/* variant for solutions pages */` над вторым объявлением.

---

### Task 5: Карта владения секциями

**Files:**
- Create: `docs/superpowers/plans/2026-08-24-ownership-map.md` (артефакт аудита, коммитится)

- [x] **Step 1: Скрипт владения**

Для каждого top-level класса (все корневые селекторы sections.css без `__`/`--`) посчитать страницы с `class="...<name>[ |--]"`. Скрипт учитывает модификаторы: класс считается используемым, если встречается как префикс до `__`/пробела/кавычки.

- [x] **Step 2: Разнести по корзинам**

В карту: `shared (≥2 стр.)` / `unique (<страница>)` / `unused`. Столбец «уникальных» сверить вручную с таблицей страниц из AGENTS.md; расхождения фиксировать как «AGENTS.md устарел: …». Ожидаемые кандидаты на вынос: vuz→`ecosystem`; univer-online→`univer-registry`,`services`,`goals?`(общие с project-detail — проверить); event-detail→`event-hero`,`event-about`,`program`,`seminar-topics`; events→`events-featured`,`events-list`; contacts→`contacts-map`,`contacts-banner`; article-detail→`article-block`; client-detail→`client-quote`; about→`approach`; directum→`eco-card` (проверить!). Всё, что ≥2 страниц — остаётся.

- [x] **Step 3: Commit карты**

```bash
git add docs/superpowers/plans/2026-08-24-ownership-map.md
git commit -m "docs: section ownership map for CSS restructure"
```

---

### Task 6: Перенос уникальных блоков в css/pages/

**Files:**
- Create: `css/pages/vuz.css`, `univer-online.css`, `event-detail.css`, `events.css`, `contacts.css`, `article-detail.css`, `client-detail.css`, `about.css` (+ любые по карте Task 5)
- Modify: соответствующие `*.html` (+1 `<link>`), `css/sections.css` (удаление перенесённого)

**Interfaces:** Produces: порядок подключения в каждой странице: `tokens → utilities → components → sections → pages/<имя>.css → media → swiper/fancybox`.

- [x] **Step 1: По странице (одна итерация = одна страница)**

Вырезать из sections.css ВСЕ правила блока (базовый + модификаторы + вложенные составные селекторы вида `.block__x .other-y`), вставить в новый `css/pages/<name>.css` с заголовком-комментарием `/* ==== <page>.html — <block> ==== */`. В HTML добавить `<link rel="stylesheet" href="css/pages/<name>.css">` сразу после `sections.css` и ДО `media.css`.

- [x] **Step 2: Проверка каждой итерации**

`npx --yes stylelint "css/**/*.css"` чисто; `grep -c "<name>__" css/sections.css` → 0 для перенесённого префикса; открыть страницу глазами пользователем (чекпоинт после всех страниц, не каждой).

- [x] **Step 3: Commits**

Один коммит на страницу:

```bash
git add css/pages/<name>.css css/sections.css <name>.html
git commit -m "refactor: move <block> styles to css/pages/<name>.css"
```

- [x] **Step 4: Ручная проверка (чекпоинт человеку)**

Список затронутых страниц + что смотреть (перенесённые секции, мобильная версия опционально).

---

### Task 7: Обновление документации

**Files:**
- Modify: `AGENTS.md` (структура css/: добавить `pages/*.css`, правило владения, порядок каскада; снять устаревшие утверждения, опровергнутые фактурой)
- Modify: `docs/FIGMA.md` (токены после Task 2, новые symbol-id, карта владения)

- [x] **Step 1: Внести правки** (кратко, без переписывания всего файла).
- [x] **Step 2: Commit**: `git commit -m "docs: update AGENTS.md and FIGMA.md after CSS restructure"`

---

### Task 8: Финал

- [x] **Step 1:** `npx --yes stylelint "css/**/*.css"` — 0 ошибок.
- [x] **Step 2:** adversarial-reviewer скилл по полному диффу ветки против master.
- [x] **Step 3:** Отчёт пользователю: diff-статистика (строк до/после по каждому файлу), список страниц для ручной проверки с приоритетами, оставшиеся известные компромиссы.
