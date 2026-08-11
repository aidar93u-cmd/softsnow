# Figma → Code Registry

Живой реестр соответствия макета «SoftSnow Work (Copy)» (fileKey `FYv0RWNkawci4wbgFQnlw1`) и кода. Обновлять после каждой секции/страницы. **Проверять перед созданием нового компонента.** Процесс — в `docs/FIGMA_WORKFLOW.md`, постоянные правила — в `AGENTS.md`.

## Tokens

| Figma | CSS | Примечание |
|---|---|---|
| Primary / Accent | `--color-sea` | `#1342F3` |
| Text | `--color-black` | `#222222` |
| Background light | `--bg-light` / `--bg-light-alt` | `#F5F4F5` / `#F5F5F5` |
| Card background | `--color-white` | `#FFFFFF` |
| Canvas / border | `--bg-border` | `#E8E8E8` |
| h1 | `--fs-h1` | 100px, weight 500 |
| h2 | `--fs-h2` | 70px |
| Numbers | `--fs-numbers` | 75px, weight 500 |
| Card titles | `--fs-h3` | 40px |
| Captions | `--fs-body-14` / `--fs-body-16` | 14–16px |
| Font | `--font-heading` / `--font-body` | Inter, 400/500/600/700 (Google Fonts) |
| Button radius 50px | в `components.css`/`sections.css` | НЕ глобальный токен (см. Token Rules) |
| Card radius 20px | `--radius-lg` | |

Реализация: `css/tokens.css`.

## Components

| Figma Pattern | Code | Variants | Status |
|---|---|---|---|
| Container (1790px) | `.container` | — | done |
| Primary Button | `.btn--primary` | — | done |
| Outline Button | `.btn--outline` | — | done |
| Ghost Button | `.btn--ghost` | — | done |
| Section Title | `.section-title` | — | done |
| Section Label | `.section-label` | — | done |
| Body Text | `.body-text` | — | done |
| Card | `.card` | — | done |
| Project Card | `.card--project` | — | done |
| Company Card | `.card--company` | — | done |
| Slider | `.slider` | — | done |
| Slider button | `.slider__button` | — | done |
| Carousel nav | `.carousel-nav` | `__btn` | done |

Реализация: `css/components.css`.

## Pages

### Home (index.html)

| # | Figma Section | Figma node | Code | Status |
|---|---|---|---|---|
| 1 | Header | `863:18238` | `.header` | done |
| 2 | Hero | `633:116` (Frame 2094) | `.hero` | done |
| 3 | Industries (4 карточки) | `633:155` | `.industries` | done |
| 4 | Numbers (5 колонок) | `633:172` | `.stats` | done |
| 5 | Tasks (6 ссылок) | `633:190` | `.tasks` | done |
| 6 | Companies (10 логотипов) | `633:268` | `.clients` | done |
| 7 | Partners (5 карточек, карусель) | `633:218` | `.partners` | done |
| 8 | Projects (3 карточки) | `648:4437` | `.projects` | done |
| 9 | Webinars/Events (4 карточки, карусель) | `633:291` | `.events` | done |
| 10 | CTA | `633:261` | `.cta` | done |
| 11 | Footer | `648:4438` | `.footer` | done |

Реализация: `css/sections.css`. Фреймы секций и их координаты — таблица в `AGENTS.md`. Дампы: `C:\Temp\opencode\figma-<секция>.json`.

### About

Ещё не создана. Перед вёрсткой — FIGMA_AUDIT (правило 7 AGENTS.md), затем заполнить таблицу здесь.

## Known Discrepancies

| № | Секция | Расхождение | Статус |
|---|---|---|---|
| — | — | (актуальных нет) | — |

## Workflow

```
FIGMA → Figma MCP Audit → Design System + Components + Tokens
     → Existing Code Audit → Figma → Code Mapping
     → existing/new component → Section Agent → DOM measurement
     → Figma QA → Screenshot → Fix discrepancies → Next section
     → Page architecture review
```

Цель: section-specific layout + shared components + shared tokens + shared behavior. НЕ один гигантский глобальный CSS и НЕ изолированный CSS на каждый фрейм. Наличие section-классов (`hero`, `tasks`, `projects`) — норма; плохо только дублирование компонентов внутри них.
