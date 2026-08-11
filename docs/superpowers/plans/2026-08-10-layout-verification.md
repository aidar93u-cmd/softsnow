# План: пошаговая сверка вёрстки с макетом SoftSnow

Макет: Figma «SoftSnow Work (Copy)», 1920px. Источник данных: `C:\Temp\opencode\figma-analysis.txt` (289 строк — точные координаты/типографика/цвета всех секций).

## Метод проверки каждой секции
1. Координаты/высоты из макета → факт в браузере (`chrome-devtools`).
2. Типографика (font-family, size, weight, line-height, color) → computed style.
3. Цвета фонов/текста → computed style.
4. Отступы, gap, padding, border-radius.
5. Картинки: путь, размеры, пропорции (ref → `assets/img/`).
6. Расхождение → правка HTML/CSS → перепроверка.

## Секции (координаты из макета, canvas 1920×8184)
| # | Секция | Y | H | Макет |
|---|--------|---|----|-------|
| 1 | Header (INSTANCE) | 0–144 | 144 | стр. 13-44 |
| 2 | Hero | 144–1017 | 873 | стр. 6-12 |
| 3 | Отрасли (4 карточки 460×460) | 1014–1474 | 460 | стр. 45-61 |
| 4 | Цифры о нас (5 колонок) | 1474–2003 | 529 | стр. 62-79 |
| 5 | Задачи (6 ссылок ×180, hover-фон) | 2003–3568 | 1565 | стр. 80-105 |
| 6 | Компании (10 логотипов 256×256) | 3568–4154 | 586 | стр. 155-177 |
| 7 | Партнёры (5 карточек 460×510) | 4154–5034 | 880 | стр. 106-147 |
| 8 | Проекты (3 карточки 930×460) | 5114–5944 | 830 | стр. 219-247 |
| 9 | Вебинары (4 карточки) | 6024–6879 | 855 | стр. 178-218 |
| 10 | CTA | 6959–7519 | 560 | стр. 148-154 |
| 11 | Футер | 7599–8119 | 520 | стр. 248-289 |

Итого 7802px контентных (без учёта канваса 8184 — 39 верх + 343 низ? уточнить: канвас 8184, футер до 8119).

## Ключевые токены макета (для сверки)
- Фон канваса: #E8E8E8
- Текст: #222222, акцент #1342F3, белый #FFFFFF
- h1: Inter 500 100px; h2: Inter 500 70px; заголовки карточек: 40px (500); числа: 75px (500); подписи: 16px/14px/12px
- Кнопки: bg #1342F3, белый 16px 600, radius 50px
- Карточки: белые, radius 20px
- Футер: bg #222222, белый 14px

## Ход работ
- [ ] 1. Header (144)
- [ ] 2. Hero (873) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-116&t=6Appii0VEIyZsgQG-4
- [ ] 3. Отрасли (460) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-155&t=6Appii0VEIyZsgQG-4
- [ ] 4. Цифры (529) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-172&t=6Appii0VEIyZsgQG-4
- [ ] 5. Задачи (1565) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-190&t=6Appii0VEIyZsgQG-4
- [ ] 6. Компании (586) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-268&t=6Appii0VEIyZsgQG-4
- [ ] 7. Партнёры (880) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-218&t=6Appii0VEIyZsgQG-4
- [ ] 8. Проекты (830) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=648-4437&t=6Appii0VEIyZsgQG-4
- [ ] 9. Вебинары (855) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-291&t=6Appii0VEIyZsgQG-4
- [ ] 10. CTA (560) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=633-261&t=6Appii0VEIyZsgQG-4
- [ ] 11. Футер (520) https://www.figma.com/design/FYv0RWNkawci4wbgFQnlw1/SoftSnow-Work--Copy-?node-id=648-4438&t=6Appii0VEIyZsgQG-4
- [ ] Финальный прогон: консоль, swiper, hover, итоговая высота
