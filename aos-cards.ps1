# Скрипт: проставить data-aos + data-aos-delay на каждую .card.*__card в контейнерах сеток/слайдеров
# Логика: в каждом .swiper-wrapper, .partners__grid, .catalog__list, .events-list__grid, .partners__grid и т.д.
# пройтись по прямым child-карточкам .card и проставить data-aos с шагом 120 мс (для длинных списков)
# или 200 мс (короткие). Сбрасывать счётчик при смене контейнера.

$pages = @('index.html','about.html','solutions.html','clients.html','events.html','projects.html','client-detail.html','solution-detail.html','project-detail.html','event-detail.html','article-detail.html','vuz.html','directum.html','univer-online.html','contacts.html','license.html','doc.html')

# Карта: имя контейнера -> массив классов карточек, которые надо анимировать (внутри контейнера)
$containerMap = @{
  'swiper-wrapper' = @('partners__card','projects__card','testimonials__card','facts__card','events__card')
  'partners__grid' = @('partners__card')
  'catalog__list' = @('catalog__card')
  'events-list__grid' = @('events__card')
}

# Карточки вне слайдеров/сеток
$standaloneCards = @(
  @{ pattern = 'class="card partners__card partners__card--eco"'; step = 120 }
  @{ pattern = 'class="card vnedrenie__card"'; step = 200 }
)

# Для каждой страницы обработаем
$totalAdded = 0
foreach ($pg in $pages) {
  $p = Resolve-Path $pg
  $c = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
  $added = 0

  # 1) Стандартные контейнеры (swiper-wrapper, partners__grid, и т.д.)
  foreach ($containerName in $containerMap.Keys) {
    $cardClasses = $containerMap[$containerName]
    $containerPattern = '<div class="' + [regex]::Escape($containerName) + '">'
    $containerRx = [regex]::Escape($containerPattern)
    $containerMatches = [regex]::Matches($c, $containerRx)
    foreach ($cm in $containerMatches) {
      # Найдём закрывающий </div> контейнера (для swiper-wrapper он на той же глубине)
      $start = $cm.Index
      # Простая стратегия: ищем далее все подходящие card-классы до следующего </div></div> на уровень выше
      # Для надёжности — найдём парный </div> вручную по стеку
      $depth = 0
      $pos = $start
      $end = -1
      $len = $c.Length
      while ($pos -lt $len) {
        $nextOpen = $c.IndexOf('<div', $pos)
        $nextClose = $c.IndexOf('</div>', $pos)
        if ($nextClose -lt 0) { break }
        if ($nextOpen -lt 0 -or $nextOpen -gt $nextClose) {
          $depth--
          $pos = $nextClose + 6
          if ($depth -eq 0) { $end = $pos; break }
        } else {
          $depth++
          $pos = $nextOpen + 4
        }
      }
      if ($end -lt 0) { continue }
      $body = $c.Substring($start, $end - $start)
      $bodyStart = $start + $containerPattern.Length

      # Найдём все card-карточки в body по очереди, проставим data-aos
      $idx = 0
      foreach ($cardClass in $cardClasses) {
        $cardRx = '<a class="card ' + [regex]::Escape($cardClass) + '(?:[^"]*)"\s*([^>]*)>'
        $cardRx2 = '<article class="card ' + [regex]::Escape($cardClass) + '(?:[^"]*)"\s*([^>]*)>'
        $cardRx3 = '<div class="card ' + [regex]::Escape($cardClass) + '(?:[^"]*)"\s*([^>]*)>'

        foreach ($rx in @($cardRx, $cardRx2, $cardRx3)) {
          $cardMatches = [regex]::Matches($body, $rx)
          foreach ($cardM in $cardMatches) {
            $globalIdx = $cardM.Index + $bodyStart
            $existing = $cardM.Value
            # Уже есть data-aos?
            if ($existing -match 'data-aos=') { continue }
            $delay = $idx * 120
            # Вставим data-aos после открывающего тега
            $newTag = $existing.Substring(0, $existing.IndexOf('>')) + ' data-aos="fade-up" data-aos-delay="' + $delay + '">'
            $c = $c.Substring(0, $globalIdx) + $newTag + $c.Substring($globalIdx + $existing.Length)
            $added++
            $idx++
          }
        }
      }
    }
  }

  # 2) Standalone карточки вне контейнеров (partners__card--eco, vnedrenie__card)
  foreach ($rule in $standaloneCards) {
    $pattern = [regex]::Escape($rule.pattern)
    $matches = [regex]::Matches($c, $pattern)
    $idx = 0
    foreach ($m in $matches) {
      $start = $m.Index
      $end = $c.IndexOf('>', $start)
      if ($end -lt 0) { continue }
      $tag = $c.Substring($start, $end - $start + 1)
      if ($tag -match 'data-aos=') { continue }
      $delay = $idx * $rule.step
      $newTag = $tag + ' data-aos="fade-up" data-aos-delay="' + $delay + '"'
      $c = $c.Substring(0, $end + 1) + '' + $c.Substring($end + 1)
      $c = $c.Substring(0, $start) + $newTag + $c.Substring($end + 1)
      $added++
      $idx++
    }
  }

  if ($added -gt 0) {
    [System.IO.File]::WriteAllText($p, $c, [System.Text.Encoding]::UTF8)
    Write-Host ("$pg : " + $added)
    $totalAdded += $added
  }
}
Write-Host ("TOTAL: " + $totalAdded)
