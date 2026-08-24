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
