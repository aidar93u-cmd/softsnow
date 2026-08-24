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
