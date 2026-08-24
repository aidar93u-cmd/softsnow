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
