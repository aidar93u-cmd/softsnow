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
