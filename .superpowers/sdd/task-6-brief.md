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
