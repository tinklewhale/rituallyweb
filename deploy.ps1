# deploy.ps1

# 1. Build the project
Write-Host "Building project..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# 2. Navigate to build output
cd dist

# 3. Initialize new git repo for deployment
Write-Host "Initializing deployment repo..."
git init
git checkout -b main
git add -A

# 4. Commit using current timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "deploy: $timestamp"

# 5. Push to gh-pages branch of origin
# Using the remote URL explicitly or assuming the parent has it.
# Let's get the parent's remote URL
$remoteUrl = git -C .. remote get-url origin
Write-Host "Pushing to $remoteUrl (gh-pages)..."

# Ensure we force push to overwrite "gh-pages" branch
git push -f $remoteUrl main:gh-pages

cd ..
Write-Host "Deployment complete!"
