# Deploying Vanguard UI Kit Docs to GitHub Pages

## Option 1: Manual Deployment (Recommended)

### Step 1: Build the docs
```bash
cd "d:\AI\DREAM-PIXELS-FORGE\MVP\DEVS\vanguard-uikit\docs"
npm run build
```

### Step 2: Create gh-pages branch
```bash
# Go to docs dist folder
cd dist

# Initialize git and create orphan branch
git init
git add -A
git commit -m "Deploy docs to GitHub Pages"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Dream-Pixels-Forge/vanguard-uikit.git

# Push to gh-pages branch
git push -f origin master:gh-pages
```

### Step 3: Enable GitHub Pages
1. Go to your repository: https://github.com/Dream-Pixels-Forge/vanguard-uikit
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/(root)** folder
5. Click **Save**

Your site will be live at: `https://dream-pixels-forge.github.io/vanguard-uikit/`

---

## Option 2: Using GitHub Actions (Automatic)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
    paths:
      - 'docs/**'

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: docs/package-lock.json

      - name: Install dependencies
        run: cd docs && npm ci

      - name: Build
        run: cd docs && npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Option 3: Using gh-pages Package

### Install gh-pages:
```bash
cd "d:\AI\DREAM-PIXELS-FORGE\MVP\DEVS\vanguard-uikit"
npm install --save-dev gh-pages
```

### Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d docs/dist"
  }
}
```

### Deploy:
```bash
npm run deploy
```

---

## Verify Deployment

After deployment, visit:
- **Main Site**: https://dream-pixels-forge.github.io/vanguard-uikit/
- **Repository**: https://github.com/Dream-Pixels-Forge/vanguard-uikit

## Update Docs

Whenever you make changes:
```bash
cd docs
npm run build
# Then redeploy using your chosen method
```
