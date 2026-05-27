[![buymeacoffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-dumindu-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=ffffff&labelColor=333333)](https://www.buymeacoffee.com/dumindu)

# 🦄 E25DX

Your next documentation theme...

https://github.com/dumindu/E25DX/assets/1280428/00935567-6d50-4e1b-bb0c-cbd159ad37f0

## 🌱 Inspiration

- Build a simple, modular but customizable technical documentation.
- Build the website without using node/npm or any external frameworks(CSS, JS, icon, font).
- Demo
  - [![learning-rust.github.io](https://img.shields.io/github/stars/learning-rust/learning-rust.github.io?style=for-the-badge&logo=rust&label=learning-rust.github.io&labelColor=333333&color=F46623)](https://learning-rust.github.io)
  - [![learning-cloud-native-go.github.io](https://img.shields.io/github/stars/learning-cloud-native-go/learning-cloud-native-go.github.io?style=for-the-badge&logo=go&logoColor=ffffff&label=learning-cloud-native-go.github.io&labelColor=333333&color=00ADD8)](https://learning-cloud-native-go.github.io)

## ✅ Features

- [x] Responsive and adaptive layouts.
- [x] Built-in light and dark modes.
- [x] Customizable sidebars using Hugo data templates.
- [x] Support for multiple documentation sets.
- [x] Support for maintaining a blog.
- [x] Implement a menu via Hugo configs.
- [x] Integrate a search via Pagefind.

## Folder structure

```
├── content
│   └── en
│       ├── docs
│       │   └── page.md
│       └── blog
│           └── page.md
├── i18n
│   └── en.yaml
│
├── layouts
│   ├── _shortcodes
│   │   └── blockquote.html
│   ├── _markup
│   │   ├── render-blockquote-alert.html
│   │   └── render-link.html
│   ├── _partials
│   │   ├── main-content
│   │   │   ├── cover.html
│   │   │   ├── footer.html
│   │   │   └── nav.html
│   │   ├── sections
│   │   │   ├── card-grid.html
│   │   │   └── hero.html
│   │   ├── blog
│   │   │   ├── list-body.html
│   │   │   └── list-footer.html
│   │   ├── components
│   │   │   └── theme-dropdown.html
│   │   ├── favicons.html
│   │   ├── icon.html
│   │   ├── analytics.html
│   │   ├── og-x-seo.html
│   │   └── site
│   │       ├── header.html
│   │       ├── footer.html
│   │       ├── left-sidebar.html
│   │       └── right-sidebar.html
│   ├── blog
│   │   └── list.html
│   ├── home.html
│   └── single.html
│
├── static
│   ├── favicon
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   └── favicon.ico
│   ├── logo.svg
│   ├── manifest.json
│   └── sw.js
│
├── assets
│   ├── icons                         # Any icon can be added in svg, width="20px", height="20px"
│   ├── css
│   │   ├── site
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   ├── layout-home.css
│   │   │   ├── layout-column-1.css
│   │   │   ├── layout-column-2.css
│   │   │   ├── layout-blog-list.css
│   │   │   ├── sidebar-left.css
│   │   │   └── sidebar-right.css
│   │   ├── blog
│   │   │   ├── list-body.css
│   │   │   └── list-footer.css
│   │   ├── main-content
│   │   │   └── article.css
│   │   ├── components                # Any new component can be added here with/without layouts/_partials
│   │   │   ├── alert.css
│   │   │   ├── badge.css
│   │   │   ├── button.css
│   │   │   ├── chroma.css
│   │   │   └── dropdown.css
│   │   ├── sections                  # Any new page UI section can be added here with sample data yaml
│   │   │   ├── card-grid.css
│   │   │   └── hero.css
│   │   ├── reset.css
│   │   └── theme.css
│   └── js
│       ├── components
│       │   └── dropdown.js
│       └── site
│           ├── color-preference.js
│           ├── off-canvas.js
│           └── table-of-contents.js
├── data
│   ├── en
│   │   ├── docs
│   │   │   └── sidebar.yml         # Controls /docs sidebar
│   │   └── home
│   │       ├── card-grid.yaml      # Controls card-grid
│   │       └── hero.yaml           # Controls hero unit
│   └── themes.yaml
├── hugo.yaml
└── theme.toml

```

## 🚀 Getting Started

### [Install Hugo](https://gohugo.io/installation/)

- Use prebuilt binaries via https://github.com/gohugoio/hugo/releases/latest
- Verify the installation via `hugo version`

### Create a new Hugo site with the E25DX theme.

#### 1. Foundation

```shell
hugo new site newsite
cd newsite

git init
git submodule add https://github.com/dumindu/E25DX.git themes/E25DX

rm hugo.toml && cp themes/E25DX/hugo.yaml .
cp themes/E25DX/static/sw.js ./static/
cp themes/E25DX/static/manifest.json ./static/
```

> 💡 We don't need generated `archetypes`, `assets`, `i18n`, `layouts` folders in the `newsite` folder

#### 2. Configuration

- `newsite/hugo.yaml`
  - languages: en:title and en:description
  - params: project, author and home
- `newsite/static/sw.js`
  - cacheName prefix: ex. todo-
- `newsite/static/manifest.json`
  - name, short_name, description

#### 3. Sample documentation set

- Add `newsite/content/en/docs/_overview.md` for overview

  ```markdown
  ---
  title: Overview
  url: "docs/overview"
  aliases:
  - "/docs"
  ---

  Overview
  ```

- Add `newsite/content/en/docs/a1.hello-world.md` as the first page of first section

  ```markdown
  ---
  title: Hello World
  slug: hello-world
  ---

  Hello World
  ```

- Add `newsite/content/en/docs/b1.modules.md` as the first page of the second section

  ```markdown
  ---
  title: Modules
  slug: modules
  ---

  Module
  ```

- Add `newsite/data/en/docs/sidebar.yml` for section titles and page titles

  ```markdown
  - title: Documentation
    pages:
      - title: Overview

  - title: Basics
    pages:
      - title: Hello World

  - title: Beyond The Basics
    pages:
      - title: Modules
  ```

#### 4. Sample blog

- Add `newsite/content/en/blog/2026_1_hello_world/index.md`

  ```markdown
  ---
  title: Hello World
  slug: "hello-world"
  summary: Hello World Summary
  ---

  Hello World
  ```

- Add any image of png (or jpg) for `newsite/content/en/blog/2026_1_hello_world/cover.png` for blog post cover image

#### 5. Sample page

- Add `newsite/content/en/page/about/index.md` for about page

  ```markdown
  ---
  title: About
  url: "about"
  ---

  About
  ```

- Add any image of png (or jpg) for `newsite/content/en/page/about/cover.png` for about page cover image

#### 6. Main menu

- Update `newsite/hugo.yaml` to add menu configurations

  ```markdown
  menus:
    main:
      - identifier: home
        name: Home
        pre: <i aria-hidden>🏡</i>
        pageRef: /
        weight: 1
      - identifier: docs
        name: Docs
        pre: <i aria-hidden>📖</i>
        pageRef: /docs
        weight: 2
      - identifier: blog
        name: Blog
        pre: <i aria-hidden>🖊️</i>
        pageRef: /blog
        weight: 3
      - identifier: about
        name: About
        pre: <i aria-hidden>🧑‍💻</i>
        pageRef: /page/about
        weight: 4
  ```

#### 7. Run and build the site for production.

- Run `hugo server` to preview the site.

  > 💡 If you see `ERROR Failed to read Git log: fatal: your current branch 'main' does not have any commits yet`,
  > Change `newsite/hugo.yaml` -> `enableGitInfo: false` (if you want to run `hugo server` before commit the changes.)

- Run `hugo build --minify ` to build the site for production.

---

[![buymeacoffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-dumindu-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=ffffff&labelColor=333333)](https://www.buymeacoffee.com/dumindu)