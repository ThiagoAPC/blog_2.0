# Instructions for Building "Late Night Data Thoughts" Blog

You are acting as a Senior Frontend & UX Engineer specializing in modern content platforms. Your task is to build a highly customized, ultra-fast, minimalist personal tech blog titled **"Late Night Data Thoughts"**, focused on Data Engineering.

---

## 🎯 Project Overview & Core Philosophy
* **Blog Name:** Late Night Data Thoughts
* **Topic:** Data Engineering, Pipelines, Distributed Systems, Cloud Architecture, Databases, and Software Craftsmanship.
* **Aesthetic Reference:** Inspired by minimalist developer blogs like AkitaOnRails.
  * High-contrast, typography-first layout.
  * Light theme default (Pure white `#FFFFFF` canvas, sharp dark text `#0F172A`).
  * Dark mode support (Deep dark background `#090D16` with muted light text `#E2E8F0`).
  * Zero clutter: No heavy hero banners or unnecessary animations. Focus entirely on scannability, reading comfort, and code legibility.

---

## 🏗️ Tech Stack Specifications
1. **Framework:** Astro 5.x (using Content Collections for type-safe Markdown/MDX handling).
2. **Styling:** Tailwind CSS v4.
3. **Content Format:** MDX (`.mdx`) located in `src/content/posts/`.
4. **Code Highlighting:** Shiki (with themes like `github-light` and `github-dark`).
5. **Diagrams:** Mermaid.js support for architecture flowcharts and data pipelines.

---

## 🎨 Visual & Layout Requirements

### 1. Global Structure
* **Header:** Minimal header containing:
  * Brand Title: `Late Night Data Thoughts`
  * Links: "Sobre", "GitHub", "RSS", Language Switcher, Dark/Light Mode Toggle, Search bar.
* **Main Area (Two-Column Layout on Desktop):**
  * **Left/Center Column (Content):** Post feed with "Destaques" (Featured) section at the top, followed by chronological post lists. Option to toggle view between **Lista** (List) and **Grade** (Grid).
  * **Right Sidebar (Navigation Archive):** Chronological index grouped by Year and Month (e.g., "2026 - Julho", "2026 - Junho", "2025 - Novembro") for instant filtering.

### 2. Post Item Design (List View)
* Red/Rust accent bullet or icon (e.g., `#B91C1C`).
* Post Title: Bold typography with hover underline effect.
* Tag List below title: `#tag-name` format with subtle grey color.
* Subtitle/Snippet: Concise 1-2 line description.
* Metadata: Estimated reading time and publish date.

### 3. Individual Post Page Layout
* Reading-optimized max width (`max-w-3xl` / ~68ch).
* Table of Contents (TOC) floating or sticky at the top/side.
* Styled Blockquotes, Callout boxes (Info, Warning, Tip, Note).
* Perfectly formatted Data Tables for schema/benchmark comparisons.
* Clean copy-code button on all code blocks.

---

## ⚙️ Content Collection Schema (Astro)
Define `src/content/config.ts` with the following schema:

```typescript
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
```

---

## 🚀 Key Functional Features to Implement
1. **Workflow Efficiency:** Adding a new post must be as simple as adding a file like `src/content/posts/2026-07-28-my-data-pipeline.mdx`.
2. **Search:** Client-side lightweight search (e.g., Pagefind or Fuse.js) via standard shortcut (Cmd/Ctrl + K).
3. **Tags System:** Filtering posts by tags (e.g., `#spark`, `#iceberg`, `#sql`, `#duckdb`).
4. **RSS Feed & Sitemap:** Automatically generated on build.

---

## 📋 Implementation Steps for the Agent
1. Initialize a clean Astro project with Tailwind CSS and `@astrojs/mdx`.
2. Configure Astro Content Collections and set up Shiki code highlighting.
3. Build base layout components (`BaseLayout.astro`, `Header.astro`, `Sidebar.astro`, `Footer.astro`).
4. Build post components (`PostCardList.astro`, `PostCardGrid.astro`, `TagPill.astro`).
5. Create sample MDX blog posts covering Data Engineering topics (with SQL/Python code blocks, tables, and Mermaid diagrams) to showcase layout capabilities.
6. Test Dark Mode toggle and responsive mobile design.