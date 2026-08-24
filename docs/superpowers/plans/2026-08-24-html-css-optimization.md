# Оптимизация HTML/CSS/JS — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Сократить вес и дублирование HTML/CSS/JS SoftSnow, сохранив визуальный результат 1:1.

**Architecture:** Статический многостраничник без build-step. Внешний SVG-спрайт вместо инлайнов; CSS консолидируется в 3 файла (base → sections → media); дедупликация по отчёту парсера правил; машинные проверки эквивалентности вместо скриншотов (финальный контроль — пользователь).

**Tech Stack:** Чистые HTML/CSS/JS, Swiper/Fancybox (локальные вендоры), PowerShell для проверок.

**Спека:** `docs/superpowers/specs/2026-08-24-html-css-optimization-design.md`

## Global Constraints

- Визуальный результат не меняется ни в одном таске.
- Без build-step и минификации исходников; header/footer остаются дублированными.
- `!important` новых не добавлять; существующие 2 на `[hidden]`/`.is-hidden` остаются (исключение задокументируется в Task 13).
- Глобальный `transition: all` запрещён контрактом (AGENTS.md).
- Flex-комбинации НЕ выносить в утилиты.
- Пути из HTML: `assets/img/...`, из CSS: `../assets/img/...`.
- Коммит после каждого таска, conventional commits. Если пользователь запретил коммиты — пропускать шаги Commit.
- Проверки выполняются PowerShell 5.1; скрипты аудита лежат в `C:\Temp\opencode\css-audit*.ps1` и переиспользуются.

---

### Task 1: Аудит-реестр решений

**Files:**
- Create: `docs/superpowers/plans/2026-08-24-optimization-audit.md`

**Interfaces:**
- Produces: три реестра, которые потребляют задачи 2, 3, 7, 8:
  - РЕЕСТР-A «спрайт»: `id символа → источник(и)` для всех повторяющихся SVG;
  - РЕЕСТР-B «сливать»: список групп дублей тел деклараций с пометкой merge/skip;
  - РЕЕСТР-C «вендоры»: финальная матрица подключений per page.

- [ ] **Step 1: Инвентарь SVG**

```powershell
# Уникальные длинные пути и где встречаются (по всем html)
$h = Get-ChildItem *.html; $map = @{}
foreach ($f in $h) { $c = Get-Content $f.FullName -Raw
  foreach ($m in [regex]::Matches($c, '<path[^>]*d="([^"]{40,})"')) {
    $d = $m.Groups[1].Value; $key = $d.Substring(0,60)
    if (-not $map.ContainsKey($key)) { $map[$key] = @{ N=0; Pages=@(); Sample=$d } }
    $map[$key].N++; if ($map[$key].Pages -notcontains $f.Name) { $map[$key].Pages += $f.Name } } }
$map.GetEnumerator() | Sort-Object { -$_.Value.N } | ForEach-Object {
  "{0}x  pages=[{1}]  len={2}" -f $_.Value.N, ($_.Value.Pages -join ','), $_.Value.Sample.Length }
```

Каждой группе присвоить id по роли: `icon-arrow*` (уже существуют как symbol), `logo-mark`, `logo-footer`, `icon-*` по смыслу (посмотреть контекст вхождения в HTML). Записать в РЕЕСТР-A: id, страницы, число вхождений, первые 80 символов пути (для поиска при замене).

- [ ] **Step 2: Реестр дублей**

Запустить `C:\Temp\opencode\css-audit.ps1`, полный вывод 71 группы перенести в РЕЕСТР-B с колонкой merge/skip. Критерий merge: одинаковый интент (hover-бренд, ритм секций, hidden-state, swiper-overflow, типовые цвета). Skip: случайное совпадение тел разных по смыслу селекторов.

- [ ] **Step 3: Матрица вендоров (подтверждение)**

```powershell
Get-ChildItem *.html | ForEach-Object { $c = Get-Content $_.FullName -Raw
  [PSCustomObject]@{ Page=$_.Name
    SwExact = ([regex]::Matches($c,'class="([^"]*\s)?swiper(\s|"|-[a-z])')).Count
    FbAttr  = ([regex]::Matches($c,'data-fancybox')).Count
    Video   = ([regex]::Matches($c,'class="[^"]*\bvideo\b')).Count
    Gallery = ([regex]::Matches($c,'class="[^"]*\bgallery\b')).Count } } | Format-Table
```

Ожидаемый итог (проверить!): снять Swiper с contacts, event-detail, solutions; снять Fancybox с contacts; в solutions.html удалить осиротевший `data-fancybox` (библиотека не подключена). Остальное не трогать.

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/plans/2026-08-24-optimization-audit.md
git commit -m "docs: optimization audit registry (sprite/dupes/vendors)"
```

---

### Task 2: Спрайт и favicon

**Files:**
- Create: `assets/img/sprite.svg`
- Create: `assets/img/favicon.svg`

**Interfaces:**
- Consumes: РЕЕСТР-A из Task 1.
- Produces: `assets/img/sprite.svg#<id>` — символы для всех id реестра; `assets/img/favicon.svg`.

- [ ] **Step 1: Собрать спрайт**

Каркас файла (символы добавить из РЕЕСТР-A, копируя содержимое `<svg>`-инлайнов целиком вместе с атрибутами fill/stroke):

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-arrow" viewBox="0 0 17 14"><!-- path из текущих defs страниц --></symbol>
  <symbol id="icon-arrow-right" viewBox="0 0 15 14">...</symbol>
  <symbol id="icon-arrow-left" viewBox="0 0 15 14">...</symbol>
  <symbol id="logo-mark" viewBox="0 0 222 67">...</symbol>
  <!-- остальные id из РЕЕСТР-A -->
</svg>
```

Правила: каждый `<symbol>` сохраняет viewBox источника; заливки фиксированных цветов остаются внутри символа; для currentColor-иконок fill убирается из symbol и остаётся на использующем `<svg>`.

- [ ] **Step 2: favicon**

Создать `assets/img/favicon.svg` — упрощённый знак лого на прозрачном фоне:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#1342F3" d="<!-- путь знака из logo-mark -->"/></svg>
```

- [ ] **Step 3: Проверка целостности**

Все id реестра присутствуют в спрайте:

```powershell
$s = Get-Content assets\img\sprite.svg -Raw
Import-Clixml C:\Temp\opencode\sprite-inventory.xml | ForEach-Object {
  if ($s -notmatch ('id="' + [regex]::Escape($_.Id) + '"')) { "MISSING: " + $_.Id } }
```

- [ ] **Step 4: Commit**

```bash
git add assets/img/sprite.svg assets/img/favicon.svg
git commit -m "feat: external SVG sprite and favicon"
```

---

### Task 3: Замена инлайнов на `<use>` постранично

**Files:**
- Modify: все 15 `*.html`

**Interfaces:**
- Consumes: спрайт из Task 2, РЕЕСТР-A.
- Produces: HTML без длинных дублированных path; ссылки вида `<use href="assets/img/sprite.svg#id"/>`.

- [ ] **Step 1: Подключение спрайта**

В начало `<body>` каждой страницы (сразу после открывающего тега) вставить загрузку внешнего спрайта для старых браузеров не нужна (современные `<use href="внешний файл">` поддерживают) — просто заменяем ссылки.

Для каждой страницы:
1. Существующие локальные `<use href="#icon-x"/>` → `<use href="assets/img/sprite.svg#icon-x"/>`.
2. Локальный блок `<svg style="display:none">…defs…</svg>` со старыми symbol — удалить.
3. Инлайновые повторы из РЕЕСТР-A заменить на:

```html
<svg class="<исходный класс>" width="<исходная ширина>" height="<исходная высота>" aria-hidden="true"><use href="assets/img/sprite.svg#<id>"/></svg>
```

- [ ] **Step 2: Машинная проверка**

```powershell
$bad = 0; Get-ChildItem *.html | ForEach-Object { $c = Get-Content $_.FullName -Raw
  $bad += ([regex]::Matches($c, '<path[^>]*d="([^"]{100,})"')).Count          # длинных path не осталось
  $bad += ([regex]::Matches($c, '<use href="#')).Count }                      # локальных use не осталось
"осталось проблемных вхождений: $bad"   # ожидаем 0
```

Проверка соответствия ссылок спрайту: каждый `href="assets/img/sprite.svg#X"` имеет символ X (скриптом, аналогично Step 3 Task 2).

- [ ] **Step 3: Commit**

```bash
git add *.html
git commit -m "refactor(html): replace inline SVG duplicates with external sprite"
```

---

### Task 4: Консолидация ядра CSS → base.css

**Files:**
- Create: `css/base.css`
- Modify: все 15 `*.html` (ссылки)
- Delete: после Task 5 (не сейчас): `css/tokens.css`, `css/utilities.css`, `css/components.css`

**Interfaces:**
- Produces: `css/base.css` = tokens + utilities + components в текущем порядке каскада.

- [ ] **Step 1: Слить файлы**

```powershell
$dst = 'css\base.css'
'' | Set-Content $dst -Encoding UTF8
foreach ($f in 'tokens','utilities','components') {
  Add-Content $dst "/* ==== from $f.css ==== */" -Encoding UTF8
  Get-Content "css\$f.css" -Raw -Encoding UTF8 | Add-Content $dst -Encoding UTF8 }
```

- [ ] **Step 2: Эквивалентность**

```powershell
$a = ((Get-Content css\tokens.css -Raw),(Get-Content css\utilities.css -Raw),(Get-Content css\components.css -Raw)) -join "`n"
$b = Get-Content css\base.css -Raw
$a.Trim() -eq $b.Trim()   # ожидаем True
```

- [ ] **Step 3: Обновить `<link>` на всех страницах**

Заменить три строки:

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/utilities.css">
<link rel="stylesheet" href="css/components.css">
```
на одну:
```html
<link rel="stylesheet" href="css/base.css">
```

Старые файлы пока оставить на диске (удаляются в Task 5 единым коммитом).

- [ ] **Step 4: Commit**

```bash
git add css/base.css *.html
git commit -m "refactor(css): merge tokens+utilities+components into base.css"
```

---

### Task 5: Слияние pages/*.css в sections.css

**Files:**
- Modify: `css/sections.css`, все 15 `*.html`
- Delete: `css/pages/*`, `css/tokens.css`, `css/utilities.css`, `css/components.css`

**Interfaces:**
- Consumes: sections.css из HEAD, 13 файлов `css/pages/*.css`.
- Produces: единый sections.css; структура ссылок `base.css → sections.css → media.css`.

- [ ] **Step 1: Дописать страничные блоки в конец**

```powershell
$files = Get-ChildItem css\pages\*.css | Sort-Object Name
foreach ($f in $files) {
  Add-Content css\sections.css "" -Encoding UTF8
  Add-Content css\sections.css ("/* ==== from pages/" + $f.Name + " ==== */") -Encoding UTF8
  Get-Content $f.FullName -Raw -Encoding UTF8 | Add-Content css\sections.css -Encoding UTF8 }
```

- [ ] **Step 2: Эквивалентность множества селекторов до/после**

```powershell
function SelSet($paths) { $t = ($paths | ForEach-Object { Get-Content $_.FullName -Raw }) -join "`n"
  $t = [regex]::Replace($t,'/\*.*?\*/','','Singleline')
  @([regex]::Matches($t,'(?s)([^{}@][^{}]*)\{') | ForEach-Object { $_.Groups[1].Value.Trim() }) |
    ForEach-Object { [regex]::Replace($_,'\s+',' ') } | Sort-Object -Unique }
$before = SelSet @(Get-ChildItem css\tokens.css, css\utilities.css, css\components.css, css\sections.css) +
          SelSet @(Get-ChildItem css\pages\*.css)
$after  = SelSet @(Get-ChildItem css\base.css, css\sections.css)
Compare-Object ($before | Sort-Object -Unique) ($after | Sort-Object -Unique)   # ожидаем пусто
```

- [ ] **Step 3: Ссылки и удаление**

На всех страницах убрать строку `<link rel="stylesheet" href="css/pages/<name>.css">`. Затем:

```powershell
Remove-Item css\pages -Recurse
Remove-Item css\tokens.css, css\utilities.css, css\components.css
```

- [ ] **Step 4: Проверка отсутствия ссылок**

```powershell
Get-ChildItem *.html | Select-String -Pattern 'css/(pages|tokens|utilities|components)'   # ожидаем пусто
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "refactor(css): consolidate into base+sections+media"
```

---

### Task 6: Типографика заголовков h1–h4

**Files:**
- Modify: `css/base.css` (зона utilities), `css/sections.css`

- [ ] **Step 1: Базовый слой в base.css**

Перед блоком секций (в конце utilities-зоны base.css) добавить — значения взять как доминирующие из текущих `__title`-правил (сверить по РЕЕСТР-B перед вставкой):

```css
h1, h2, h3, h4 { margin: 0; font-family: var(--font-heading); }
h1 { font-size: var(--fs-h1); font-weight: 600; line-height: 1.15; }
h2 { font-size: var(--fs-h2); font-weight: 600; line-height: 1.2; }
h3 { font-size: var(--fs-h3); font-weight: 600; line-height: 1.25; }
h4 { font-size: var(--fs-body-20); font-weight: 500; line-height: 1.3; }
```

⚠️ Значения weight/line-height выверить по факту: собрать их из существующих правил заголовков и взять модальные значения. Если у какого-то уровня два доминирующих начертания — базой берётся большее, меньшее остаётся локальным модификатором.

- [ ] **Step 2: Зачистка дублей**

По списку правил с `__title` (46 шт., из аудита): удалить `font-size/font-weight/line-height/font-family`, если значения совпадают с новым слоем. Отличающиеся — оставить. Каждое удаление фиксировать в описании коммита (число).

- [ ] **Step 3: Проверка**

Повторный запуск `css-audit.ps1`: группы дублей с телами, состоящими только из `font-*`, должны исчезнуть. Полный прогон числа дублей записать в отчёт.

- [ ] **Step 4: Commit**

```bash
git add css
git commit -m "refactor(css): shared heading typography layer, drop per-section copies"
```

---

### Task 7: Группировка паттернов

**Files:**
- Modify: `css/base.css`, `css/sections.css`

**Interfaces:**
- Consumes: РЕЕСТР-B (только помеченные merge).

- [ ] **Step 1: Сгруппировать по интенту**

Примеры (селекторы брать из РЕЕСТР-B):

```css
/* Ритм секций */
.clients, .partners, .projects, .events, .cta /* ...все из группы */ { margin-bottom: 5rem; }

/* Фирменный hover */
.partners__card:hover, .projects__reset:hover /* ... */ { background: var(--color-sea); color: var(--color-white); }

/* Скрытые состояния — рядом с существующими [hidden]/.is-hidden в base.css */
[hidden], .is-hidden /* ...остальные из группы */ { display: none; }

/* Свайперы */
.partners__swiper, .projects__swiper, .events__swiper, .testimonials__swiper, .gallery__swiper, .facts__swiper { overflow: visible; }
```

Сгруппированное правило размещается в файле там, где стояло первое правило группы; индивидуальные правила удаляются. Каждая группа = отдельный слайд правки.

- [ ] **Step 2: Проверка**

`css-audit.ps1`: счётчик «Wasted duplicate rule instances» должен упасть с 174 до ≤ 30 (остаток — skip-группы из реестра). Числа зафиксировать.

- [ ] **Step 3: Commit**

```bash
git add css
git commit -m "refactor(css): group same-intent duplicate declarations"
```

---

### Task 8: transition:all → точечные свойства

**Files:**
- Modify: `css/base.css`, `css/sections.css`, `css/media.css`

- [ ] **Step 1: Найти все 52**

```powershell
Get-ChildItem css\*.css | Select-String -Pattern 'transition:[^;]*\ball\b' | ForEach-Object { "$($_.Path):$($_.LineNumber): $($_.Line.Trim())" }
```

- [ ] **Step 2: Заменить по категориям селектора**

| Контекст селектора | Замена |
|---|---|
| `:hover` ссылок/текста, меню | `transition: color .2s` (если меняется фон — добавить `background-color .2s`) |
| `.btn*`, кнопки, чипы | `transition: background-color .2s, border-color .2s, color .2s` |
| Карточки (`*__card`, `*__item`, `*__link`) | `transition: background-color .2s, border-color .2s, color .2s, box-shadow .2s, transform .2s` |
| Иконки/стрелки/svg внутри карточек | `transition: fill .2s, transform .2s` |
| Поля форм | `transition: border-color .2s, box-shadow .2s` |
| Неясный случай | `transition: background-color .2s, color .2s, opacity .2s, transform .2s` |

Длительность/функция берутся из исходного значения (`all .3s ease` → сохранить `.3s ease`). Свойство, реально меняющееся на hover, смотреть в соответствующем `:hover`-правиле того же селектора.

- [ ] **Step 3: Проверка**

```powershell
(Get-ChildItem css\*.css | Select-String -Pattern 'transition:[^;]*\ball\b').Count   # ожидаем 0
```

- [ ] **Step 4: Commit**

```bash
git add css
git commit -m "fix(css): replace forbidden transition:all with targeted properties"
```

---

### Task 9: Цвета → токены, чистка токенов и мёртвых классов

**Files:**
- Modify: `css/base.css`, `docs/FIGMA.md`, `AGENTS.md`

- [ ] **Step 1: Добавить токены альфа-оттенков**

В `:root` блока tokens в base.css добавить (имена согласовать с существующим стилем нейминга токенов в файле):

```css
--color-dark-a70: #222222b2;  /* 6 использований */
--color-dark-a10: #2222221a;  /* 4 */
--color-sea-a10: #1342f31a;   /* 3 */
```

- [ ] **Step 2: Заменить использования**

Хардкоды ≥3 использований → токены: перечисленные выше; `#fff` ×4 → `var(--color-white)` (проверить наличие токена; если называется иначе — использовать существующее имя); `#1342f3` ×3 → `var(--color-sea)` (аналогично). Одноразовые (≤2) не трогать.

```powershell
Get-ChildItem css\*.css | Select-String -Pattern '#[0-9a-fA-F]{3,8}\b' | Group-Object { $_.Line.Trim().Substring(0,[Math]::Min(60,$_.Line.Trim().Length)) } | Sort-Object Count -Descending | Select-Object -First 10
# остаток: только одноразовые
```

- [ ] **Step 3: Удалить неиспользуемые токены**

Из `:root` удалить `--transition-slow`, `--z-header`, `--z-popover` (предварительно grep по css+html+js подтвердит отсутствие `var(--…)`).

- [ ] **Step 4: Удалить зарезервированные мёртвые классы**

Удалить правила `.btn--white`, `.btn--black`, `.btn--outline-dark`, `.card--project`, `.card--company` из base.css. Проверка:

```powershell
(Get-ChildItem css\*.css, *.html, js\*.js | Select-String -Pattern 'btn--white|btn--black|btn--outline-dark|card--project|card--company').Count   # ожидаем 0
```

- [ ] **Step 5: FIGMA.md**

В реестре FIGMA.md пометить эти 5 классов как удалённые, обновить список токенов.

- [ ] **Step 6: Commit**

```bash
git add css docs/FIGMA.md
git commit -m "refactor(css): tokenize repeated colors, drop unused tokens and reserved classes"
```

---

### Task 10: Head-гигиена: favicon, description, OG

**Files:**
- Modify: все 15 `*.html`

- [ ] **Step 1: favicon на все страницы**

После `<meta name="viewport"...>`:

```html
<link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">
```

- [ ] **Step 2: meta description на 4 страницах**

Добавить после `<title>` (тексты ниже — черновики, выверить по содержимому страницы при правке):

- `projects.html`: «Реализованные проекты SoftSnow: внедрение цифровых решений для вузов, госсектора и бизнеса. Фильтр по отраслям, решениям и продуктам.»
- `project-detail.html`: «Разбор реализованного проекта SoftSnow: цели, этапы внедрения, результаты и отзывы клиента.»
- `client-detail.html`: «Опыт сотрудничества SoftSnow с клиентом: задачи, этапы работ, цифры проекта и отзыв.»
- `article-detail.html`: «Материал SoftSnow о внедрении цифровых решений: ход проекта, цифры и практические выводы.»

- [ ] **Step 3: OG-теги на все страницы**

Шаблон (title/description брать из существующих `<title>`/`description` страницы программно; og:url — имя файла поверх базового домена; изображение общее):

```html
<meta property="og:title" content="<из <title> страницы>">
<meta property="og:description" content="<из meta description страницы>">
<meta property="og:type" content="website">
<meta property="og:url" content="https://softsnow.cz07146.tw1.ru/<имя_файла>">
<meta property="og:image" content="https://softsnow.cz07146.tw1.ru/assets/img/hero-bg.jpg">
```

- [ ] **Step 4: Проверка**

```powershell
Get-ChildItem *.html | ForEach-Object { $c = Get-Content $_.FullName -Raw
  [PSCustomObject]@{ Page=$_.Name; Fav=$c -match 'favicon\.svg'; Desc=$c -match 'name="description"'; OG=([regex]::Matches($c,'property="og:')).Count } } | Format-Table
# Fav=y везде, Desc=y везде, OG>=5 везде
```

- [ ] **Step 5: Commit**

```bash
git add *.html
git commit -m "seo(head): favicon, meta descriptions, Open Graph tags"
```

---

### Task 11: Скрипты: defer, лишние вендоры, alt

**Files:**
- Modify: все 15 `*.html`

**Interfaces:**
- Consumes: РЕЕСТР-C из Task 1.

- [ ] **Step 1: defer на локальные скрипты**

На всех страницах всем локальным `<script src="assets/...">` и `<script src="js/main.js">` добавить атрибут `defer`:

```html
<script src="assets/vendor/swiper/swiper-bundle.min.js" defer></script>
<script src="js/main.js" defer></script>
```

⚠️ Скрипт Яндекс.Карт на contacts.html (`api-maps.yandex.ru`) не трогать. main.js уже инициализируется по DOMContentLoaded — defer безопасен; проверить отсутствие в main.js `document.write` (grep).

- [ ] **Step 2: Снять мёртвые подключения (по РЕЕСТР-C)**

- contacts.html, event-detail.html, solutions.html: удалить `<link ... swiper-bundle.min.css">` и `<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>`;
- contacts.html: удалить обе строки Fancybox;
- solutions.html: удалить осиротевший атрибут `data-fancybox="..."` (библиотека не подключена).

- [ ] **Step 3: alt в directum.html**

Шести `<img>` без alt добавить осмысленные русские подписи по содержимому изображения (имя файла/ближайший заголовок карточки).

- [ ] **Step 4: Проверка**

```powershell
(Get-ChildItem *.html | Select-String -Pattern '<script(?![^>]*defer)[^>]*src="(?!https://api-maps)').Count   # ожидаем 0
Get-ChildItem *.html | Select-String -Pattern 'swiper-bundle.min.js"' | ForEach-Object Page   # только страницы со свайперами
```

- [ ] **Step 5: Commit**

```bash
git add *.html
git commit -m "perf(html): defer local scripts, remove dead vendor includes, add missing alts"
```

---

### Task 12: main.js ревизия

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Guards**

Каждая init-функция должна выходить рано при отсутствии контейнера:

```js
if (!document.querySelector('.<селектор>')) return;
```

Пройти 17 функций, недостающие guard'ы добавить. После снятия Fancybox с contacts убедиться, что вызовы popup-init защищены проверкой `typeof Fancybox !== 'undefined'` (или эквивалентной) — иначе на страницах без библиотеки будет ReferenceError.

- [ ] **Step 2: Дубли**

Если `initDemoPopup` и `initVideoPopup` различаются только селектором — объединить в один параметризованный хелпер. Если различий больше — оставить как есть.

- [ ] **Step 3: Проверка синтаксиса**

```powershell
node --check js\main.js   # ожидаем тихо (exit 0)
```

- [ ] **Step 4: Commit**

```bash
git add js/main.js
git commit -m "refactor(js): early guards for absent containers, optional popup-helper dedup"
```

---

### Task 13: Переименования, документация, финальные метрики

**Files:**
- Modify: `css/*.css`, `*.html`, `js/main.js`, `AGENTS.md`, `docs/FIGMA.md`, `docs/superpowers/specs/2026-08-24-html-css-optimization-design.md`

- [ ] **Step 1: Кандидаты на переименование**

Пройтись по секционным классам на предмет нарушения правила №4 («не называть по визуалу»). Переименовывать только явные случаи; каждый батч: замена во всех html+css+js одной командой, пример:

```powershell
Get-ChildItem *.html, css\*.css, js\*.js | ForEach-Object {
  (Get-Content $_.FullName -Raw) -replace '\bold-name\b','new-name' | Set-Content $_.FullName -NoNewline -Encoding UTF8 }
```

- [ ] **Step 2: AGENTS.md**

Правки контракта:
1. Правило №5 (иконки): внешний спрайт `assets/img/sprite.svg` обязателен для повторяющихся иконок; новые инлайновые копии запрещены.
2. Раздел «Архитектура»: CSS = 3 файла `base.css / sections.css / media.css`; папки `css/pages/` больше нет; порядок каскада и зоны ответственности обновить.
3. Раздел «Известные квирки»: удалить пункты про удалённые классы; добавить исключение «два `!important` на `[hidden]`/`.is-hidden` — намеренно».
4. Пометить `docs/superpowers/plans/2026-08-24-ownership-map.md` как устаревший (шапка-примечание).

- [ ] **Step 3: FIGMA.md**

Обновить карту секций/компонентов под новые имена классов и структуру CSS.

- [ ] **Step 4: Финальные метрики**

Полный прогон трёх аудит-скриптов; результаты (было → стало) дописать в спеку, раздел «Метрики успеха»:

```text
Дубли тел: 71 группа / 174 лишних → <N> / <M>
transition:all: 52 → 0
HTML суммарно: 938 KB → <X> KB
Мёртвых классов вне реестра: 0 → 0
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "docs: sync AGENTS.md/FIGMA.md with optimized architecture; final metrics"
```

---

## Самопроверка плана (выполнена)

1. **Покрытие спеки:** все 7 фаз спеки отображены в таски 1–13 (аудит→T1, спрайт→T2-3, консолидация→T4-5, дедупликация→T6-9, HTML-гигиена→T10-11, main.js→T12, переименования+доки→T13).
2. **Плейсхолдеры:** тексты description для 4 страниц даны явно; OG-поля выводятся из существующего контента страниц детерминированно; имена альфа-токенов даны дефолтом с оговоркой сверить стиль нейминга.
3. **Консистентность имён:** реестры РЕЕСТР-A/B/C вводятся в T1, потребляются в T2/T7/T11 соответственно; структура base/sections/media одинакова во всех тасках.
