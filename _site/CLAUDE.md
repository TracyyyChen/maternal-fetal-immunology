# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

Requires Ruby 3.3 (not 4.x — too new for Jekyll; not 2.6 — too old). Use Homebrew:
```
brew install ruby@3.3
```

Run the local preview server:
```
bundle exec jekyll serve
```

Site is served at `http://localhost:4000/maternal-fetal-immunology/`.

## Deployment

Pushing to `main` on GitHub triggers an automatic GitHub Pages build. The live site is at `https://TracyyyChen.github.io/maternal-fetal-immunology/`. Build status is visible in the repository's Actions tab.

## Architecture

This is a Jekyll static site using the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme via `remote_theme: mmistakes/minimal-mistakes@4.28.0`. No local theme files exist — the theme is fetched at build time.

**Content pages** (`learn-part1.md` through `learn-part6.md`, `about.md`, `resources.md`) use `layout: single` with `sidebar: nav: "learn"` for the course pages.

**Landing page** (`index.md`) uses `layout: splash` with a `feature_row` defined in front matter.

**Navigation** is defined entirely in `_data/navigation.yml`. The `learn` key drives the sidebar on all course pages; the `main` key drives the top nav.

**CSS** lives in `assets/css/main.scss`. It imports the Minimal Mistakes theme first, then adds all custom overrides. Notable patterns:
- Fonts: Lora (headings) + Nunito Sans (body/sidebar/nav) via Google Fonts
- Color palette: coral `#C97C5D` for buttons, teal `#5F8F8B` for links
- Decorative corner illustrations use `body::before` / `body::after` CSS pseudo-elements with `background-image`, scoped by `body.layout--splash` vs default
- `.video-wrap` and `.figure-wrap` are utility classes for embedded YouTube iframes and figures in content pages

**Images** are in `assets/images/`. Slide illustrations for corner decorations are in `assets/images/background_options/`.

**Custom footer** is in `_includes/footer.html` — this overrides the theme default to fix a broken link.

## Key Conventions

**Image paths in markdown** must use the `relative_url` filter to work on GitHub Pages:
```liquid
{{ "/assets/images/filename.png" | relative_url }}
```
Plain `/assets/images/...` paths will break on the deployed site due to the `/maternal-fetal-immunology` baseurl.

**CSS paths** (in `main.scss`) use relative paths from the CSS file location:
```css
url('../images/background_options/Slide7.png')
```

**Video embeds** use a wrapper div:
```html
<div class="video-wrap">
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="..." frameborder="0" allowfullscreen></iframe>
</div>
```

**Do not commit or push** unless the user explicitly asks. The user manages their own git workflow.

**Do not overwrite files** the user may have edited manually. Always check `git diff <file>` before staging a file that wasn't modified in the current session.
