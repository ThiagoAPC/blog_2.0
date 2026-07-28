# Como criar um novo post

## 1. Criar o arquivo

Os posts ficam em `site/src/content/posts/`. O nome do arquivo define a URL do post.

**Formato obrigatório do nome:**
```
YYYY-MM-DD-titulo-do-post.mdx
```

**Exemplo:**
```
site/src/content/posts/2026-08-15-introducao-ao-spark.mdx
```
→ URL resultante: `/blog_2.0/posts/2026-08-15-introducao-ao-spark`

---

## 2. Frontmatter

Todo post começa com um bloco `---` com os metadados:

```yaml
---
title: "Título do Post"
description: "Descrição curta que aparece nos cards e no SEO (1-2 frases)."
pubDate: 2026-08-15
updatedDate: 2026-08-20        # opcional — data de atualização
tags: ["spark", "python", "etl"]
featured: false                # true = aparece na seção de destaque da home
draft: false                   # true = não aparece no site (rascunho)
lang: pt                       # pt ou en
---
```

**Campos obrigatórios:** `title`, `description`, `pubDate`, `tags`  
**Campos opcionais:** `updatedDate`, `featured`, `draft`, `lang`

---

## 3. Componentes disponíveis no MDX

### Callout (caixas de destaque)

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="tip" title="Dica">
  Texto da dica aqui.
</Callout>
```

**Tipos disponíveis:** `tip`, `warning`, `info`, `danger`

### Blocos de código

Usa Shiki com syntax highlight automático — basta indicar a linguagem:

````mdx
```python
df = spark.read.parquet("s3://bucket/dados/")
df.show()
```
````

Linguagens suportadas: `python`, `sql`, `bash`, `yaml`, `json`, `typescript`, etc.

---

## 4. Testar localmente

Com o Docker rodando:

```powershell
# Iniciar (na pasta site/)
cd "c:\Users\Usuario\Desktop\Projetos\blog_novo\site"
docker compose up
```

Acessar em: **http://localhost:4321/blog_2.0**

O servidor tem HMR — salvar o arquivo atualiza o browser automaticamente.  
Se o HMR não pegar (especialmente após criar arquivo novo), reiniciar o container:

```powershell
docker compose down ; docker compose up
```

---

## 5. Publicar

### Fluxo completo (recomendado)

```powershell
# 1. Criar branch a partir de develop
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" checkout develop
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" pull
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" checkout -b post/nome-do-post

# 2. Commitar
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" add -A
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" commit -m "post: título do post"

# 3. Push e PR para develop
git -C "c:\Users\Usuario\Desktop\Projetos\blog_novo" push -u origin post/nome-do-post
```

Depois abrir PR no GitHub: `post/nome-do-post → develop`

### Deploy para produção

Quando o PR for merged em `develop`, abrir outro PR: `develop → main`  
O merge em `main` dispara o GitHub Actions e publica em:  
**https://ThiagoAPC.github.io/blog_2.0**

---

## 6. Imagens

Salvar em `site/public/images/` e referenciar no MDX com o caminho completo:

```mdx
<figure class="my-6">
  <img
    src="/blog_2.0/images/nome-da-imagem.png"
    alt="Descrição da imagem"
    class="rounded-lg w-full"
  />
  <figcaption class="text-center text-sm text-muted mt-2">Legenda opcional</figcaption>
</figure>
```

Formatos recomendados: `.webp` (melhor compressão) ou `.png`.
