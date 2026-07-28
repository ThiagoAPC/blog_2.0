# Late Night Data Thoughts — v2.0

> *Um blog minimalista focado em conteúdo sobre Engenharia de Dados, Pipelines, Sistemas Distribuídos, Arquitetura de Dados e Engenharia de Software.*

---

## Motivação e Arquitetura

A versão anterior deste blog apresentava limitações comuns a frameworks de documentação padronizados (como o Docusaurus):

* **Design Rígido e Genérico:** Layouts pré-formatados que se assemelhavam mais a manuais de software do que a um diário pessoal de engenharia.
* **Fricção na Customização:** Alta complexidade para modificar estruturas de página, paginação e tipografia.
* **Sobrecarga de Scripts:** Execução desnecessária de JavaScript para uma plataforma primariamente voltada à leitura.

### Solução Proposta (v2)

Esta reescrita migra a plataforma para uma pilha baseada em **Astro + Tailwind CSS + MDX**, priorizando alto contraste, legibilidade e performance (inspirada na estrutura do *AkitaOnRails*):

* **HTML Estático por Padrão:** O Astro gera páginas estáticas puras, garantindo tempo de carregamento em milissegundos e consumo mínimo de recursos no cliente.
* **Controle Total de Estilização:** Utilização do Tailwind CSS para um design limpo, tipografia precisa, suporte a Dark Mode e ausência de elementos visuais desnecessários.
* **Suporte Nativo a Código e Diagramas:** Integração com **Mermaid.js** (para arquiteturas de dados, DAGs e fluxos ETL) e **Shiki** (para destaque de sintaxe em SQL, Python, Scala, Rust e Terraform).
* **Fluxo de Publicação Simplificado:** A criação de novos artigos é realizada via inclusão de arquivos `.mdx` no diretório `src/content/posts/`.

---

## Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Framework** | Astro 5.x (Static Site Generation) |
| **Estilização** | Tailwind CSS v4 |
| **Gerenciamento de Conteúdo** | MDX + Content Collections |
| **Diagramas e Código** | Mermaid.js + Shiki |
| **Ambiente de Desenvolvimento** | Docker & Docker Compose |
| **CI/CD e Hospedagem** | GitHub Actions ➔ GitHub Pages |

---

## Execução Local

Para executar o ambiente localmente em container, sem necessidade de instalar dependências do Node na máquina host:

```bash
# Clonar o repositório
git clone [https://github.com/seu-usuario/late-night-data-thoughts.git](https://github.com/seu-usuario/late-night-data-thoughts.git)
cd late-night-data-thoughts

# Subir o servidor de desenvolvimento local
docker compose up
