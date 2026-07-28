# Instructions: Security, GitHub Versioning & Free Hosting (GitHub Pages)

[cite_start]You are setting up the operational workflow, security posture, versioning strategy, and automated deployment pipeline for **"Late Night Data Thoughts"** [cite: 2] hosted on **GitHub Pages** (100% free tier).

---

## 🔒 1. Security Best Practices for Static Blogs

[cite_start]Since this is a Static Site Generator (SSG) blog[cite: 5], security focuses on pipeline integrity, secret management, and safe content delivery.

### Key Rules to Implement:
1. **Zero Secret Leaks:**
   * Create a robust `.gitignore` ignoring `.env`, `.env.local`, `node_modules/`, `.astro/`, and `dist/`.
   * Ensure no private tokens, API keys, or personal credentials are ever committed.
2. **Dependency Security:**
   * Enable GitHub Dependabot alerts for security vulnerability scanning in dependencies.
3. **HTTP Security Headers (via GitHub Pages / HTML meta tags):**
   * Configure Content Security Policy (CSP) meta tags in `BaseLayout.astro` to allow scripts/styles only from trusted sources (e.g., self, Mermaid.js, Google Fonts).
   * Enforce `referrer-policy: strict-origin-when-cross-origin`.

---

## 🌿 2. Git & Versioning Strategy

Implement a simple, scalable branch and release strategy suited for a solo data engineer blogging platform:

### Workflow Model:
* **`main` branch:** Represents the live blog. Direct pushes or merged PRs to `main` trigger automatic deployment.
* **Content Updates (Publishing Posts):**
  * [cite_start]Adding a new `.mdx` file directly to `src/content/posts/` [cite: 7] on `main` instantly publishes the post.
* **Feature Development (Layout, Architecture, Components):**
  * Use short-lived feature branches (e.g., `feature/dark-mode`, `feature/mermaid-support`).
  * Merge into `main` via Pull Request (PR) after testing locally in Docker.
* **Release Tagging (SemVer):**
  * Create semantic GitHub Releases (e.g., `v1.0.0` for initial launch, `v1.1.0` for new layout features) to track major blog evolution milestones.

---

## 🚀 3. Automated Deployment (GitHub Actions to GitHub Pages)

Create `.github/workflows/deploy.yml` to build and deploy the Astro site automatically when changes hit `main`.

```yaml
name: Deploy "Late Night Data Thoughts" to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

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
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Astro static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

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

## ⚙️ 4. Astro Configuration Updates
Ensure `astro.config.mjs` has the correct `site` and `base` URLs configured for GitHub Pages hosting:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://<your-github-username>.github.io',
  // base: '/late-night-data-thoughts', // Uncomment if using subpath repository
  integrations: [tailwind(), mdx()],
});
```