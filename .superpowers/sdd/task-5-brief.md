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
