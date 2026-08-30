$p = 'about.html'
$c = [System.IO.File]::ReadAllText($p, [System.Text.Encoding]::UTF8)
# Эта карточка: facts__card--partner с "Свой R&D"
$old = '<div class="card facts__card facts__card--partner">' + "`r`n" + '                <h3 class="facts__name">Свой R&D</h3>'
$new = '<div class="card facts__card facts__card--partner" data-aos="fade-up" data-aos-delay="720">' + "`r`n" + '                <h3 class="facts__name">Свой R&D</h3>'
$cnt = ([regex]::Matches($c, [regex]::Escape($old))).Count
Write-Host ("matches: " + $cnt)
if ($cnt -gt 0) {
  $c = $c.Replace($old, $new)
  [System.IO.File]::WriteAllText($p, $c, [System.Text.Encoding]::UTF8)
  Write-Host "applied"
}
