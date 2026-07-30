$ErrorActionPreference = "Stop"

# PDF exported from Overleaf
$sourceCv = "G:\My Drive\Mineth_Weerasinghe_CV.pdf"

# Your portfolio Git repository
$portfolioRepo = "D:\Portfolio-Site"

$destinationCv = Join-Path `
    $portfolioRepo `
    "public\Mineth_Weerasinghe_CV.pdf"

Write-Host "Copying the latest CV..."

Copy-Item `
    -Path $sourceCv `
    -Destination $destinationCv `
    -Force

Set-Location $portfolioRepo

git add "public/Mineth_Weerasinghe_CV.pdf"

git diff --cached --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host "The CV has not changed."
    exit 0
}

$date = Get-Date -Format "yyyy-MM-dd HH:mm"

git commit -m "Update CV - $date"
git push origin main

Write-Host "CV updated successfully."
