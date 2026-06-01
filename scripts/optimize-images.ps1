param(
  [int]$WebMax = 1920,
  [int]$ThumbMax = 480,
  [int]$Quality = 82,
  [switch]$ImagesOnly,
  [switch]$VideosOnly
)

$ErrorActionPreference = 'Stop'

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$sourceRoot = Join-Path $repoRoot 'src\assets\roland'
$targetRoot = Join-Path $repoRoot 'public\images'
$groups = @('summer', 'winter', 'shared')

if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
  throw 'ImageMagick CLI was not found. Install ImageMagick and make sure magick is available on PATH.'
}

$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue

foreach ($group in $groups) {
  $sourceDir = Join-Path $sourceRoot $group
  if (-not (Test-Path $sourceDir)) {
    Write-Warning "Skipping missing source folder: $sourceDir"
    continue
  }

  $webDir = Join-Path $targetRoot "web\$group"
  $thumbDir = Join-Path $targetRoot "thumbs\$group"
  New-Item -ItemType Directory -Force $webDir, $thumbDir | Out-Null

  if (-not $VideosOnly) {
    $images = @(
      Get-ChildItem $sourceDir -File -Filter *.jpg
      Get-ChildItem $sourceDir -File -Filter *.jpeg
    ) | Sort-Object Name

    foreach ($image in $images) {
      $baseName = [IO.Path]::GetFileNameWithoutExtension($image.Name)
      $webOut = Join-Path $webDir "$baseName.webp"
      $thumbOut = Join-Path $thumbDir "$baseName.webp"

      magick $image.FullName -auto-orient -resize "${WebMax}x${WebMax}>" -strip -quality $Quality -define webp:method=6 $webOut
      magick $image.FullName -auto-orient -resize "${ThumbMax}x${ThumbMax}>" -strip -quality $Quality -define webp:method=6 $thumbOut

      Write-Host "Optimized $group/$($image.Name)"
    }
  }

  if (-not $ImagesOnly) {
    $videos = Get-ChildItem $sourceDir -File -Filter *.mp4 | Sort-Object Name

    foreach ($video in $videos) {
      $baseName = [IO.Path]::GetFileNameWithoutExtension($video.Name)
      $webOut = Join-Path $webDir $video.Name
      $thumbOut = Join-Path $thumbDir "$baseName.webp"

      Copy-Item -LiteralPath $video.FullName -Destination $webOut -Force

      if ($ffmpeg) {
        & $ffmpeg.Source -y -i $video.FullName -vf "thumbnail,scale='min($ThumbMax,iw)':-2" -frames:v 1 $thumbOut | Out-Null
      } else {
        Write-Warning "Copied video $group/$($video.Name), but thumbnail generation requires ffmpeg on PATH."
      }

      Write-Host "Processed video $group/$($video.Name)"
    }
  }
}

Write-Host "Done. Web images written to public/images/web and thumbnails to public/images/thumbs."
