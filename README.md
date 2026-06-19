# Paratha House — Website

A single-page site for **Paratha House, Domlur, Bengaluru**
(267, Ground Floor, JK Golf View, Amarjyoti Layout, Domlur — 560071).
Dishes, prices and details come from the restaurant's live Google listing
(North Indian · Healthy Food, serves veg & non-veg, opens daily 11:30 AM, ★ 3.9).
Pure front-end — no backend, no build step. Open `index.html` and it works.

Styled with **Tailwind CSS** (loaded via the Play CDN in `index.html`, so there's
still nothing to compile). The theme — colours, fonts, custom animations — lives
in the `tailwind.config` block at the top of `index.html`. A small `css/styles.css`
holds a few component classes and the scroll-reveal / card-tilt helpers.

## What's inside
```
paratha-house/
├── index.html        ← all the page content
├── css/styles.css    ← warm & rustic theme, all styling
└── js/
    ├── menu-data.js  ← 👈 EDIT THIS to change dishes, prices, photos
    └── app.js        ← interactions (menu drawer, item popup, animations)
```

## Run it locally
Just double-click `index.html`, or for a proper local server:
```bash
cd paratha-house
python3 -m http.server 4321
# then open http://localhost:4321
```

## How to customise (no coding needed for the common stuff)

**Add / change a dish** → open `js/menu-data.js`. Each item looks like:
```js
{
  name: "Aloo Paratha",
  price: 90,
  veg: true,
  spicy: 1,                 // 0 = mild, 1, 2, 3 = hot
  tags: ["Bestseller"],     // shows a badge; also feeds the homepage "Signatures"
  desc: "Soft whole-wheat flatbread stuffed with...",
  img: "https://images.unsplash.com/photo-..."   // paste any image URL
}
```
- Items tagged `"Bestseller"` or `"Chef's Pick"` automatically appear in the
  homepage **Signatures** grid (first 6).
- To use your **own food photos**, drop them in the `assets/` folder and set
  `img: "assets/aloo.jpg"`.

**Update address / hours / phone** → search for those in `index.html` (the
"Visit" section). Phone is currently a placeholder `+91 00000 00000`.

**Add Swiggy / Zomato ordering links** → in `index.html`, find the two
`data-order` links in the Visit section and replace `href="#"` with your real
URLs (then they'll just open the link instead of showing the reminder popup).

## Put it online (free)
Any static host works — drag the `paratha-house` folder into:
- **Netlify** (netlify.com/drop) — drag & drop, live in seconds
- **Vercel**, **Cloudflare Pages**, or **GitHub Pages**

Images currently load from Unsplash (royalty-free). For a fully self-contained
site, swap them for your own photos in `assets/`.
```
```
