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
