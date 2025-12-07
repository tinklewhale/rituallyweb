# Check if script is running as Administrator (optional check, though strictly not needed for user folder usually)
# But good practice to ensure we have write permissions or handle errors gracefully

$scriptPath = $MyInvocation.MyCommand.Path
$rootDir = (Get-Item $scriptPath).Directory.Parent
$assetsPath = Join-Path $rootDir.FullName "src\assets"
$maxWidth = 1920
$quality = 75 # JPEG Quality 0-100

Add-Type -AssemblyName System.Drawing

if (!(Test-Path $assetsPath)) {
    Write-Error "Assets directory not found: $assetsPath"
    exit 1
}

$files = Get-ChildItem -Path $assetsPath -Filter "*.jpg"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    
    try {
        $image = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new dimensions
        $newWidth = $image.Width
        $newHeight = $image.Height
        
        if ($image.Width -gt $maxWidth) {
            $newWidth = $maxWidth
            $newHeight = [int]($image.Height * ($maxWidth / $image.Width))
            Write-Host "  Resizing from $($image.Width)x$($image.Height) to ${newWidth}x${newHeight}"
        } else {
            Write-Host "  No resize needed (Width: $($image.Width))"
        }

        # Create new bitmap
        $bitmap = new-object System.Drawing.Bitmap $newWidth, $newHeight
        $graph = [System.Drawing.Graphics]::FromImage($bitmap)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($image, 0, 0, $newWidth, $newHeight)
        
        # Encoder parameters for quality
        $encoder = [System.Drawing.Imaging.Encoder]::Quality
        $encoderParams = new-object System.Drawing.Imaging.EncoderParameters 1
        $encoderParams.Param[0] = new-object System.Drawing.Imaging.EncoderParameter $encoder, $quality
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }

        # Save to temp file first to avoid locking issues (though we are replacing original, let's backup first)
        $image.Dispose() # Release file lock
        
        # Backup original
        $backupPath = "$($file.FullName).bak"
        if (!(Test-Path $backupPath)) {
             Copy-Item $file.FullName $backupPath
             Write-Host "  Backed up original to $($file.Name).bak"
        }

        # Save optimized version
        $bitmap.Save($file.FullName, $codec, $encoderParams)
        $bitmap.Dispose()
        $graph.Dispose()
        
        $newSize = (Get-Item $file.FullName).Length
        Write-Host "  Optimized! New size: $([math]::round($newSize / 1KB, 2)) KB"

    } catch {
        Write-Error "Failed to process $($file.Name): $_"
    }
}

Write-Host "Optimization complete."
