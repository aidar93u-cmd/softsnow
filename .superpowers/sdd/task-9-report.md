# Task 9 Report — Цвета → токены, чистка токенов и мёртвых классов

**Commit:** `56b8f29` — refactor(css): tokenize repeated colors, drop unused tokens and reserved classes
**Branch:** refactor/css-cleanup · **Дата:** 2026-08-25

## 1. Derivation (literal → count → token)

Пересчёт по факту (аудит был до консолидации; первый grep был case-sensitive — uppercase-варианты найдены на верификации):

| Литерал | Найдено | Где | → Токен |
|---|---|---|---|
| `#222222B2`/`b2` | 6 | sections ×5, media ×1 (4 из них — fallback неопределённого `var(--grey, …)`) | `--color-dark-a70` |
| `#2222221a`/`1A` | 4 | base ×1, sections ×3 (uppercase) | `--color-dark-a10` |
| `#1342F31A`/`31a` | 3 | sections ×3 | `--color-sea-a10` |
| `#fff` | 4 | base ×1, sections ×3 (**1 в комментарии** — оставлен) | `--color-white` |
| `#1342f3` bare | 2 (+2 определения токенов) | sections ×2 | `--color-sea` |

Нейминг согласован с конвенцией `:root` (`--color-<имя>`). Токены добавлены в цветовую группу с комментарием provenance.

## 2. Replacement log

- sections.css:164,188,238,1594 + media.css:2274 — `var(--grey, #222222B2)` → **`var(--color-grey)`**. Обоснование: `--grey` не определён нигде (css/html/js) — рендерился всегда fallback, а он визуально идентичен существующему `--color-grey` (rgba(34,34,34,.7)). Заодно устранена мёртвая ссылка на несуществующую переменную.
- sections.css:3651 — `#222222B2` → `var(--color-dark-a70)`
- base.css:443 + sections.css:3114,3361,3729 — `#2222221A` → `var(--color-dark-a10)`
- sections.css:1997,2114,4081 — `#1342F31A` → `var(--color-sea-a10)`
- base.css:362, sections.css:271,2683 — `#fff` → `var(--color-white)`
- sections.css:1799,1918 — `#1342f3` → `var(--color-sea)`

Не тронуто (по правилам): rgba()-one-offs (11 шт.), цвета в комментариях (`sections.css:2692` — единственный остаток литерала), svg, литералы ≤2 использований.

## 3. Deletions

- Токены `--transition-slow`, `--z-header`, `--z-popover` — grep `var(--…)` по css+html+js: 0 совпадений → удалены (группа Z-index убрана целиком).
- Классы `.btn--white`, `.btn--black`, `.btn--outline-dark`, `.card--project`, `.card--company` (+ компаньоны `.btn--white:hover`, `.btn--black:hover`, `.btn--outline-dark:hover`, `.card--company img`, комментарий «Dark outline») — grep по css/*.css, *.html, js/main.js: 0 ссылок вне самих правил → удалены. Комментарий «Button variants» очищен от white/black строк.

## 4. FIGMA.md changes

Файл фактически в корне репозитория (**не** `docs/FIGMA.md` — путь из брифа/AGENTS.md не соответствует реальности):
- Tokens: добавлены 3 альфа-токена; пометка об удалении 3 неиспользуемых токенов; путь реализации исправлен на «блок tokens в css/base.css».
- Components: `.card--project`, `.card--company` → статус «удалено 2026-08-25, задача 9».
- Блок event-detail: `.btn--outline-dark` помечен удалённым; отмечено, что `.btn--white`/`.btn--black` в FIGMA.md не упоминались вовсе.

## 5. AGENTS.md (по списку Files из брифа)

- Component Registry: Cards → только `.card`.
- Known quirks: запись о зарезервированных классах заменена на «удалены 2026-08-25, задача 9 — не пересоздавать».

## 6. Verification

```
css literals: остаток = 6 определений токенов в :root + 1 закомментированная строка ✓
deleted names in css/html/js: 0 ✓
brace balance base/sections/media: 92=92 / 581=581 / 733=733 ✓
git show --stat HEAD: только 5 целевых файлов ✓
```

## Concerns / отклонения от инструкции

1. Staging включил `AGENTS.md` и корневой `FIGMA.md` (в задании был путь `docs/FIGMA.md`) — файл по этому пути не существует; AGENTS.md включён по явному списку Files в брифе.
2. `--color-blue-alt: #1342F3` дублирует `--color-sea` — вне скоупа задачи, не тронут (кандидат на отдельную чистку).
