Add-Type -AssemblyName System.Drawing

function Ensure-Dir([string]$path) {
  $dir = Split-Path $path -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
}

function New-UiIcon([string]$path, [string]$label, [int[]]$bg, [int[]]$fg) {
  Ensure-Dir $path
  $size = 128
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $bgColor = [System.Drawing.Color]::FromArgb($bg[0], $bg[1], $bg[2])
  $fgColor = [System.Drawing.Color]::FromArgb($fg[0], $fg[1], $fg[2])
  $g.Clear($bgColor)

  $frame = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(201, 155, 106)), 3
  $g.DrawEllipse($frame, 10, 10, 108, 108)

  $brush = New-Object System.Drawing.SolidBrush $fgColor
  $font = New-Object System.Drawing.Font 'Georgia', 42, [System.Drawing.FontStyle]::Bold
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF 0, 0, $size, $size
  $g.DrawString($label, $font, $brush, $rect, $sf)

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $font.Dispose(); $brush.Dispose(); $frame.Dispose(); $g.Dispose(); $bmp.Dispose()
}

$root = Join-Path $PSScriptRoot '..\assets\icons'
$icons = @{
  'menu\home.png' = @('Г', @(255,249,242), @(112,36,49))
  'menu\candle.png' = @('С', @(255,249,242), @(112,36,49))
  'menu\diffuser.png' = @('Д', @(255,249,242), @(112,36,49))
  'menu\car.png' = @('А', @(255,249,242), @(112,36,49))
  'menu\gift.png' = @('П', @(255,249,242), @(112,36,49))
  'menu\inventory.png' = @('И', @(255,249,242), @(112,36,49))
  'menu\collection.png' = @('К', @(255,249,242), @(112,36,49))
  'stats\sales.png' = @('П', @(255,249,242), @(112,36,49))
  'stats\happy.png' = @('Д', @(255,249,242), @(112,36,49))
  'stats\mood.png' = @('Н', @(255,249,242), @(112,36,49))
  'stats\hearts.png' = @('С', @(255,249,242), @(112,36,49))
  'categories\candle.png' = @('С', @(255,249,242), @(112,36,49))
  'categories\diffuser.png' = @('Д', @(255,249,242), @(112,36,49))
  'categories\perfume.png' = @('А', @(255,249,242), @(112,36,49))
  'categories\flower.png' = @('Ц', @(255,249,242), @(112,36,49))
  'inventory\candle.png' = @('С', @(255,249,242), @(112,36,49))
  'inventory\diffuser.png' = @('Д', @(255,249,242), @(112,36,49))
  'inventory\bottle.png' = @('Ф', @(255,249,242), @(112,36,49))
  'inventory\flower.png' = @('Д', @(255,249,242), @(112,36,49))
  'inventory\plus.png' = @('+', @(255,249,242), @(201,155,106))
  'ui\task.png' = @('З', @(255,249,242), @(112,36,49))
  'ui\hint.png' = @('?', @(255,249,242), @(112,36,49))
  'ui\trophy.png' = @('Р', @(255,249,242), @(112,36,49))
  'ui\mood.png' = @('Н', @(255,249,242), @(112,36,49))
  'ui\star.png' = @('★', @(255,249,242), @(201,155,106))
  'ui\fire.png' = @('С', @(255,249,242), @(201,155,106))
  'ui\story.png' = @('И', @(255,249,242), @(112,36,49))
  'ui\gem.png' = @('А', @(255,249,242), @(112,36,49))
  'ui\heart.png' = @('♥', @(255,249,242), @(112,36,49))
  'ui\gift.png' = @('П', @(255,249,242), @(112,36,49))
  'ui\brand.png' = @('Л', @(255,249,242), @(112,36,49))
}

foreach ($entry in $icons.GetEnumerator()) {
  $path = Join-Path $root $entry.Key
  $label = $entry.Value[0]
  $bg = $entry.Value[1]
  $fg = $entry.Value[2]
  New-UiIcon $path $label $bg $fg
}

Write-Output "Generated $($icons.Count) icons in $root"
