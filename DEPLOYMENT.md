# GitHub Pages Deployment Guide

This project is configured to be deployed on GitHub Pages.

## Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` or `master` branch.

### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save the settings

2. **Push your code:**
   - The workflow will automatically run on push to `main`/`master` branch
   - Check the **Actions** tab to see the deployment progress
   - Once complete, your site will be available at: `https://[your-username].github.io/[repository-name]/`

3. **Update the base path (if needed):**
   - The base path is automatically set to your repository name
   - If your repository name is different, update `VITE_BASE_PATH` in `.github/workflows/deploy.yml`

## Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update the base path in `vite.config.ts`:**
   - Replace `/m4softwares/` with your actual repository name
   - Or set the `VITE_BASE_PATH` environment variable

3. **Build for GitHub Pages:**
   ```bash
   npm run build:gh-pages
   ```

4. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

   Note: You'll need to install `gh-pages` first if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```

## Important Notes

- **Base Path**: For project repositories, GitHub Pages serves from a subdirectory (`/repository-name/`). The configuration handles this automatically.
- **Custom Domain**: If you're using a custom domain, set `base: '/'` in `vite.config.ts`
- **404 Handling**: GitHub Pages doesn't support client-side routing by default. If you add routing later, you'll need a `404.html` file that redirects to `index.html`

## Troubleshooting

- If assets aren't loading, check that the base path matches your repository name
- Ensure GitHub Pages is enabled in repository settings
- Check the Actions tab for any build errors

