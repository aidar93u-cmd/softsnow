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
