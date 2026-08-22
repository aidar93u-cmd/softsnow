# FIGMA_WORKFLOW.md

Процесс: как MCP + субагенты выполняют работу по макету Figma. Постоянные правила кода — в `AGENTS.md`, живое состояние маппинга — в `FIGMA.md`.

## Общая схема

```
FIGMA → Figma MCP Audit → Design System + Components + Tokens
     → Existing Code Audit → Figma → Code Mapping
     → existing/new component → Section Agent → DOM measurement
     → Figma QA → Screenshot → Fix discrepancies → Next section
     → Page architecture review
```

## Типы задач (не смешивать в одном агенте)

### FIGMA_AUDIT
Читает Figma, ничего не меняет:
- inspect nodes, variables, components, typography, assets
- map to existing components
- identify new components

### FIGMA_IMPLEMENT
Меняет код:
- implement section
- reuse components
- match dimensions, typography, spacing, colors
- use exact SVG
- verify DOM
- screenshot

### FIGMA_QA
Только проверяет:
- Figma vs DOM: dimensions, typography, spacing, colors, assets
- responsive
- screenshot
- report discrepancies

## Секции маленькими task-ами

После FIGMA_AUDIT каждая секция — отдельный task субагенту. В task указывается РАЗРЕШЁННЫЙ набор компонентов из реестра:

```
Section: Industries
Figma: <URL>
Node: 633:155
Allowed components:
- .container
- .section-title
- .card
- .btn
```

Субагент не создаёт дубликаты разрешённых компонентов. Если существующий компонент не точно совпадает с вариантом Figma — сначала решить, уместен ли модификатор/вариант; новый компонент — только при действительно ином паттерне. В конце — сверка по процедуре ниже.

Шаблон task: `docs/superpowers/templates/figma-section.md`.

## Component vs Section Decision

Порядок решения перед созданием CSS-класса или компонента:

1. Это глобальный design token? → `tokens.css`
2. Это переиспользуемый UI-паттерн в нескольких местах/страницах? → `components.css`
3. Это существующий компонент с визуальным вариантом? → модификатор, а не новый компонент
4. Это layout/контент конкретной секции? → `sections.css`
5. Это разовый элемент внутри существующей секции? → BEM-класс секции только при необходимости

Никогда не создавай новый shared-компонент только потому, что Figma содержит frame. Frame Figma — дизайн-объект, а не автоматически код-компонент.

Например Figma:

```
Frame
 ├── Frame
 │   ├── Text
 │   └── Vector
 └── Frame
```

НЕ означает создание:

```
.card-wrapper
.card-content
.card-icon
.card-text
```

## Figma Structure vs DOM

Структура Figma используется, чтобы понять визуальную композицию. Это НЕ требование дословно воспроизводить дерево узлов Figma.

DOM должен оставаться:
- семантическим
- доступным
- минимальным
- поддерживаемым

Не добавляй обёртки только чтобы повторить внутреннюю иерархию фреймов Figma.

Проверяй:
- количество визуальных элементов
- порядок
- содержимое
- семантические связи
- повторяющиеся компоненты
- layout-отношения

Не требуй 1:1 соответствия каждого фрейма Figma каждому элементу DOM.

## Измерения (Coordinate Comparison)

Не полагайся на глобальный canvas-сдвиг как основной метод. Сравнивай координаты относительно корневого фрейма секции.

Figma:
```
relativeY = child.absoluteBoundingBox.y - section.absoluteBoundingBox.y
```

DOM:
```
relativeY = child.getBoundingClientRect().top - section.getBoundingClientRect().top
```

Для X:
```
relativeX = child.x - section.x
```

Для width/height — сравнивать размеры напрямую.

Известный глобальный сдвиг (например 26px) — только как диагностическая справка, никогда не источник истины.

## Допуски (Measurement Tolerance)

Сравнивая Figma и DOM, используй практические допуски.

Геометрия:
- X/Y: ±1px
- width/height: ±1px

Типографика:
- font-size: точно
- font-weight: точно
- line-height: ±1px там, где требует рендеринг шрифта в браузере

Цвета:
- RGB: точно, где доступно
- alpha: тоже проверять

Не вноси CSS-правки ради незначительных различий субликсельного рендеринга. Браузерный `getBoundingClientRect()` и Figma не обязаны давать идентичную высоту текста из-за rasterization шрифта.

## Token Rules

Не создавай и не меняй design token только чтобы починить одну секцию.

Перед добавлением токена:
1. Проверить, нет ли значения уже.
2. Проверить, встречается ли значение в нескольких фреймах Figma.
3. Определить, действительно ли это значение дизайн-системы.

Если значение секционное — оставить его в CSS секции, а не засорять `tokens.css`.

Никогда не добавляй произвольные токены вроде:
```
--hero-padding-37
--projects-gap-13
--section-margin-42
```
если значение не является доказанно частью дизайн-системы.

## Verification Isolation

Во время FIGMA_IMPLEMENT и FIGMA_QA запрещено:
- рефакторить несвязанный CSS
- переименовывать существующие классы
- реорганизовывать файлы
- менять архитектуру компонентов
- обновлять зависимости
- заменять библиотеки
- менять JS-архитектуру
- менять несвязанные секции
- нормализовать несвязанные отступы
- «чистить» существующий код

Разрешено только исправлять код, необходимый для целевой секции.

Архитектурный рефакторинг — отдельная задача после завершения страницы (правило 11 AGENTS.md).

## Получение макетов (Figma Console MCP)

Все данные макетов брать через **figma-console-mcp** (инструменты `figma_*`), не через скриншоты/картинки и не через REST API напрямую (он троттлится).

**Подключение (NPX Local Mode, стабильно — без pairing-кодов):**
1. MCP-сервер `figma` настроен в `~/.config/opencode/opencode.json`:
   ```json
   "figma": {
     "type": "local",
     "command": ["npx", "-y", "figma-console-mcp@latest"],
     "enabled": true,
     "environment": {
       "FIGMA_ACCESS_TOKEN": "figd_...",
       "ENABLE_MCP_APPS": "true"
     }
   }
   ```
   `FIGMA_ACCESS_TOKEN` — личный PAT Figma (scopes: File content/versions Read, Variables Read, Comments RW). Генерируется на https://help.figma.com/…/Manage-personal-access-tokens.
2. Плагин **Figma Desktop Bridge**: в Figma desktop Plugins → Development → Import plugin from manifest… → `~/.figma-console-mcp/plugin/manifest.json` (создаётся сервером при старте), затем запустить плагин в открытом файле. Он сам сканирует порты 9223–9232 и коннектится к локальному MCP-серверу по WebSocket.
3. В Figma desktop открыт файл «SoftSnow Work (Copy)» (fileKey `FYv0RWNkawci4wbgFQnlw1`).
4. Проверка: `figma_figma_get_status` (или `figma_figma_diagnose`) → `connected: true`, иначе просить пользователя запустить плагин, работать не продолжать.

**НЕ использовать:** Remote SSE (`mcp-remote …/sse`, read-only 9 инструментов) и Cloud Mode pairing (`figma_pair_plugin`, коды живут ~минуту и слетают) — для этого проекта они были причиной обрывов сессий. NPX Local Mode даёт все 114 инструментов без pairing.

**Node ID:** из URL-ссылки `node-id=633-155` → `633:155` (дефисы → двоеточие, никогда не использовать дефисы).

**Инструменты для извлечения данных:**
- `figma_get_file_data` — дерево узлов файла (depth=1-2, verbosity=summary, осторожно с токенами).
- `figma_get_component` / `figma_get_component_for_development` — метаданные компонента/узла с визуалом.
- `figma_get_variables` / `figma_get_styles` — токены и стили.
- `figma_execute` — произвольный Figma Plugin API-код для выгрузки узла целиком: тип, `absoluteBoundingBox` (x/y/w/h), `fills`/`strokes` (цвет, alpha, SOLID/IMAGE), `style` TEXT (fontSize/fontWeight/lineHeightPx), `characters`, `vectorPaths`, `cornerRadius`, `effects`.
- `figma_capture_screenshot` / `figma_take_screenshot` — скриншот узла.

**ВАЖНО:** у TEXT-узла `styleOverrideTable` + `characterStyleOverrides` = смешанное форматирование одной строки (часть символов другим цветом/весом). `characterStyleOverrides[i]` — id стиля i-го символа; его `fills`/`fontWeight` → отдельный CSS-класс/span. Проверять ОБЯЗАТЕЛЬНО у каждого заголовка/текста.

## Дампы (оптимальная схема)

Не заставляй каждый section-агент заново тянуть Figma через MCP, если есть валидный JSON dump.

```
Figma Console MCP
      ↓
one-time extraction
      ↓
validated JSON dumps
      ↓
section agents
```

Субагент использует dump для численного анализа. MCP снова нужен только если:
- dump устарел
- дизайн изменился
- нужных данных нет
- требуется screenshot
- нужно проверить новый node

**Дампы:** `C:\Temp\opencode\figma-<секция>.json` (скрипт `figma-fetch-sections.js` в `C:\Temp\opencode`). Разбор дампа — node-скриптами в стиле `C:\Temp\opencode\hero.js` / `btndump.js` (рекурсивный `walk`: тип, имя, box, fills, TEXT → characters/fs/fw/fill).

**SVG-иконки:** брать из `vectorPaths` узла (`d`/viewBox), собирать inline-SVG в `index.html`. НЕ перерисовывать от руки и не брать чужие иконки.

## Процедура проверки секции

Секции проверяются строго по одной, в порядке таблицы из `AGENTS.md`, каждая — через субагента (task) для изоляции контекста.

Порядок внутри секции (не менять):
1. **Структура** — дерево узлов фрейма vs DOM секции: сколько карточек/ссылок/колонок, вложенность, семантика (h1-h3, ul, a). Figma structure ≠ DOM structure (см. выше).
2. **Размеры** — relative box каждого элемента: x/y/w/h относительно секции (см. «Измерения»), проверять через `getBoundingClientRect`.
3. **Типографика** — font-size, weight, line-height, color из `style` → computed style. Смешанное форматирование (`styleOverrideTable`) разбирать по диапазонам символов.
4. **Отступы** — padding/margin/gap/border-radius фреймов.
5. **Цвета** — `fills`/`strokes` (RGB из 0..1 → 0..255) → computed style/background. Проверять и alpha.
6. **SVG-иконки** — `vectorPaths` узла → inline-SVG в HTML, сверить размеры/цвета/отступы.
7. **Картинки** — IMAGE-филлы и RECTANGLE/image: размеры, пропорции; файлы в `assets/img/`.

Фиксация: расхождение → правка HTML/CSS → повторный замер. После секции — скриншот и запись результата в `docs/superpowers/plans/`.

Контрольные значения браузерного замера: viewport окна **1935×900** (страница 1920 без скроллбара), замеры через `chrome-devtools_evaluate_script` + `getBoundingClientRect`.

## Для новой страницы

Создаётся план `docs/superpowers/plans/<дата>-<страница>.md` и сначала запускается FIGMA_AUDIT:

```
FIGMA_AUDIT
Page: <FIGMA URL>

Analyze the complete page.
Do not modify code.
Use figma-console-mcp (tools `figma_*`).

Return:
1. Page sections
2. Existing shared components reused
3. Existing components requiring variants
4. New components
5. New design tokens
6. Page-specific sections
7. Figma → code mapping
8. Required assets
9. Interactions
10. Responsive differences
```

И только после этого — секции маленькими task-ами.
