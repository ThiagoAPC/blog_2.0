# 🌙 Late Night Data Thoughts — v2.0

> *A modern, minimal, and content-first blog about Data Engineering, Pipelines, Distributed Systems, and Software Craftsmanship.*

---

## 🎯 Why Modernize? (Motivation & Lessons Learned)

The previous version of this blog suffered from common limitations found in off-the-shelf documentation frameworks like Docusaurus:

* ❌ **Rigid & Generic Design:** Pre-packaged documentation layouts that felt like a software manual rather than a personal engineering journal.
* ❌ **Customization Friction:** High complexity to change layout structures, pagination, or implement clean typography.
* ❌ **Heavy Footprint:** Unnecessary JavaScript bloat for a content-focused site.

### 💡 The Solution (v2 Architecture)
This complete rewrite shifts to an **Astro + Tailwind CSS + MDX** stack inspired by classic, high-contrast developer blogs (*AkitaOnRails* style):

* ⚡ **Zero-JS by Default:** Astro builds static, pure HTML pages for sub-second loading speeds.
* 🎨 **Total Styling Freedom:** Unconstrained layout design with Tailwind CSS — clean typography, pure white/black themes, and seamless Dark Mode.
* 📊 **Data-Engineered Content:** Built-in support for **Mermaid.js** (for DAGs & architecture diagrams) and **Shiki** (for exact code syntax highlighting in SQL, Python, Scala, Rust, and Terraform).
* 📝 **Frictionless Publishing:** Adding a post is as simple as dropping a `.mdx` file into `src/content/posts/`.

---

## 🏗️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Astro 5.x (Static Site Generation) |
| **Styling** | Tailwind CSS v4 |
| **Content** | MDX + Content Collections |
| **Diagrams & Code** | Mermaid.js + Shiki |
| **Local Dev** | Docker & Docker Compose |
| **CI/CD & Hosting** | GitHub Actions ➔ GitHub Pages (100% Free) |

---

## 🚀 Quick Start (Local Development)

Run the environment locally via Docker without worrying about Node versioning:

```bash
# Clone the repository
git clone [https://github.com/your-username/late-night-data-thoughts.git](https://github.com/your-username/late-night-data-thoughts.git)
cd late-night-data-thoughts

# Spin up local dev server with hot-reloading
docker compose up
