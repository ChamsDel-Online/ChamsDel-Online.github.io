# OG images

Each page has a matching 1200x630 PNG social share image in this directory.

## Generation

The PNGs in this folder were rendered from the sibling `.svg` files using `rsvg-convert`:

```bash
for f in *.svg; do
  rsvg-convert -w 1200 -h 630 "$f" -o "${f%.svg}.png"
done
```

Install on macOS with `brew install librsvg`.

## If you edit a headline

1. Edit the corresponding `.svg` file in this directory.
2. Re-run `rsvg-convert -w 1200 -h 630 slug.svg -o slug.png`.
3. Commit both files.

## Default fallback

`default.png` is used by pages that don't have their own dedicated OG image. It mirrors the homepage.

## Design spec

- Canvas: 1200 x 630
- Background: `#0E0E0B`
- Headline font: Lora 400, 56px, `#F2EDE4`, left-aligned, 80px left padding
- Label: Inter 500, 13px, amber (`#C8913A`) for site/product, green (`#4A9B6F`) for free tool
- Byline: `Chaminda Delpagodage. @chams_builds` bottom-left
- Amber accent bar 48x3px, bottom-right
- Subtle grid pattern, top-right quadrant, very low opacity

Labels currently used:

- `CHAMSDEL.ONLINE` — site pages (home, products, blog, tools)
- `PRODUCT  CHAMSDEL.ONLINE` — individual product pages
- `FREE TOOL  CHAMSDEL.ONLINE` — individual tool pages
