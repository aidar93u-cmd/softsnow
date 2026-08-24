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
