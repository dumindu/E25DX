---
headless: true

title: See it in action
description: Let's explore the folder structure of your project.
---

{{< accordion-vertical-tabs count="5" tabHeight="3.75rem" label="Select feature" >}}
{{< tab label="Home" >}}

Customize each widget via a YAML data file or an index.md that serves this section.

```shell {title="Project Structure"}
├── content
│   └── en
│       └── home
│           └── showcase
│               └── index.md
├── data
│   └── en
│       └── home
│           ├── hero.yaml
│           ├── bento.yaml
│           └── card-grid.yaml
│
├── hugo.yaml
└── themes
    └── E25DX
```

{{< /tab >}}
{{< tab label="Docs" >}}

Maintain your documents in Markdown, and use the sidebar.yml to order them in the sidebar. 

```shell {title="Project Structure"}
├── content
│   └── en
│       └── docs
│           ├── page-1.md
│           └── page-2.md
├── data
│   └── en
│       └── docs
│           └── sidebar.yml
├── hugo.yaml
└── themes
    └── E25DX
```

{{< /tab >}}
{{< tab label="Blog" >}}

You can use any folder name instead of "blog" or "page-slug" for pages.

```shell {title="Project Structure"}
├── content
│   └── en
│       └── blog
│           ├── page-1.md
│           ├── page-2
│           │   ├── cover.jpg
│           │   └── index.md
│           └── _index.md
├── hugo.yaml
└── themes
    └── E25DX
```

{{< /tab >}}
{{< tab label="Extra" >}}

Maintain isolated pages outside the documentation and blog.

```shell {title="Project Structure"}
├── content
│   └── en
│       └── page
│           ├── other.md
│           └── other-2
│               ├── cover.jpg
│               └── index.md
├── hugo.yaml
└── themes
    └── E25DX
```

{{< /tab >}}
{{< tab label="Customize" >}}

Maintain isolated pages outside the documentation and blog.

```shell {title="Project Structure"}
├── assets
│   ├── css
│   │   ├── components
│   │   │   ├── accordion-vertical-tabs.css
│   │   │   ├── alert.css
│   │   │   ├── badge.css
│   │   │   ├── button.css
│   │   │   ├── checkbox.css
│   │   │   ├── chroma.css
│   │   │   ├── code-window.css
│   │   │   ├── dropdown.css
│   │   │   └── tabs.css
│   │   ├── sections
│   │   │   ├── bento.css
│   │   │   ├── card-grid.css
│   │   │   ├── hero.css
│   │   │   └── showcase.css
│   │   └── theme.css
│   └── icons
│       ├── bento
│       │   ├── extension.svg
│       │   ├── palette.svg
│       │   ├── rocket_launch.svg
│       │   └── shield.svg
│       ├── card-grid
│       │   ├── gohugo.svg
│       │   ├── pagefind.svg
│       │   ├── terminal.svg
│       │   └── web.svg
│       └── icon-name.svg # 20 x 20 any SVG
└── layouts
    ├── _markup
    │   ├── render-blockquote-alert.html
    │   ├── render-codeblock.html
    │   └── render-link.html
    └── _partials
        └── sections
            ├── bento.html
            ├── card-grid.html
            ├── hero.html
            └── showcase.html
```
{{< /tab >}}
{{< /accordion-vertical-tabs >}}