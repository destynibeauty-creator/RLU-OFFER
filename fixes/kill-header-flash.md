# Fixing the header flash on full-bleed pages

## What is happening

Your certification page, Lash Cash Q4 page, and Retention Ritual page each hide the
theme header and footer with CSS that lives **inside the page template**:

```css
#shopify-section-header, .announcement-bar, footer.site-footer { display:none !important }
```

Shopify renders the page in order: header section first, then page content. Your hiding
rule is in the page content, so the browser has already painted the header by the time it
reads the rule. It shows, then vanishes. That is the flash.

Nothing is broken. The CSS is just arriving too late.

## The fix

Move the rule into `theme.liquid`, inside `<head>`, where it runs before anything paints.
Scope it to only the templates that want it, so the rest of your store keeps its header.

**Online Store > Themes > ... > Edit code > Layout > theme.liquid**

Find the closing `</head>` tag and paste this directly above it:

```liquid
{%- comment -%} Full-bleed pages: hide theme chrome before first paint {%- endcomment -%}
{%- assign fullbleed = "LMCEO,lash-cash-q4,retention-ritual" | split: "," -%}
{%- if fullbleed contains template.suffix -%}
<style>
  .shopify-section-group-header-group,
  .shopify-section-header, #shopify-section-header,
  header.site-header, .site-header, .header-wrapper,
  .announcement-bar, .announcement-bar-section, #shopify-section-announcement-bar,
  .shopify-section-group-footer-group,
  .shopify-section-footer, #shopify-section-footer,
  footer.site-footer, .site-footer { display: none !important }
  html, body { background: #080808 !important }
</style>
{%- endif -%}
```

Save. The flash is gone.

## Getting the suffix names right

`template.suffix` is the part of the filename after `page.` and before `.liquid`.

| Template file | Suffix to list |
|---|---|
| `templates/page.LMCEO.liquid` | `LMCEO` |
| `templates/page.lash-cash-q4.liquid` | `lash-cash-q4` |
| `templates/page.retention-ritual.liquid` | `retention-ritual` |

Check your actual filenames in the Templates folder and match them exactly. The comparison
is case sensitive, so `LMCEO` and `lmceo` are not the same. Any page whose suffix is not on
the list keeps the normal header, which is what you want everywhere else.

To add a page later, just add its suffix inside the quotes, comma separated.

## Leave the CSS in the page templates too

Do not delete the hiding rules from the page files. Keeping both means the pages still work
correctly if the theme is ever swapped or the snippet is lost. Two copies of the same rule
costs nothing.

## Why the background line is in there

`html, body { background:#080808 }` stops the white flash between the header disappearing
and your dark page painting. Without it you trade a header flash for a white one.
