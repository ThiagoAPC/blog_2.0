# Instructions: Local Development, Docker & Testing Setup

[cite_start]You are continuing the setup for the **"Late Night Data Thoughts"** blog[cite: 2]. Your task is to establish a containerized local environment using Docker so the developer can run and preview the blog locally with zero dependency conflicts.

---

## 🐳 1. Docker & Docker Compose Configuration

Create a multi-stage `Dockerfile` and a `docker-compose.yml` optimized for fast hot-reloading during development and clean production builds.

### Requirements:
1. **`Dockerfile`**:
   * Base image: `node:20-alpine` (lightweight and stable).
   * Enable `pnpm` or `npm`.
   * Multi-stage setup: `development` stage for live preview and `build` stage for static export.

2. **`docker-compose.yml`**:
   * Service name: `blog-dev`.
   * Port mapping: `4321:4321` (Astro default port).
   * Volume mounts: Bind current working directory to `/app` inside the container for instant hot-module replacement (HMR).
   * Exclude `node_modules` in volumes to prevent OS architecture conflicts.

---

## 🛠️ 2. npm / pnpm Scripts Definition

Update `package.json` to include standard commands for local testing:

```json
"scripts": {
  "dev": "astro dev --host",
  "build": "astro check && astro build",
  "preview": "astro preview --host",
  "astro": "astro",
  "lint": "prettier --check .",
  "format": "prettier --write ."
}
```

---

## 📋 3. Local Testing Workflow Checklist for the Agent

Implement the following to ensure smooth developer experience:
* [ ] Verify that running `docker compose up` starts the server and reflects changes to `.mdx` posts in real-time.
* [ ] Ensure `astro check` verifies TypeScript types and Content Collection schemas before building.
* [ ] Test static build production preview locally (`docker compose exec blog-dev npm run build`).