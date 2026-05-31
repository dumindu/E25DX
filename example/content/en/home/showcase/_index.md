---
headless: true

title: See it in action
description: Let's explore the folder structure of your project.
---

{{< accordion-vertical-tabs count="6" tabHeight="3.75rem" label="Select feature" >}}
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
{{< tab label="Override CSS" >}}

Override any CSS.

```shell {title="Folder Structure"}
├── themes
│   └── E25DX
│       └── assets
│           └── css
│               └── sections
│                   └── bento.css
└── assets
    └── css
        └── sections
            └── bento.css
```

{{< /tab >}}
{{< tab label="Override Layouts" >}}

Override any HTML layout, partial, markup or shortcode.

```shell {title="Folder Structure"}
├── themes
│   └── E25DX
│       └── layouts
│           └── _partials
│               └── site
│                   └── footer.html
└── layouts
    └── _partials
        └── site
            └── footer.html
```

{{< /tab >}}

{{< /accordion-vertical-tabs >}}