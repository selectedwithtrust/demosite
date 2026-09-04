# The Square Pizza — starter website

A complete one-page restaurant website in plain HTML and CSS. No framework, no build
step, no monthly platform fee. It ships with the [Selected With Trust](https://selectedwithtrust.com)
trust badge, a verified reviews wall, and a commission-free booking widget already wired in.

**Live demo:** https://demo.selectedwithtrust.com

```
index.html          the whole site
assets/styles.css    all styling — edit the tokens at the top to re-skin
the-square-pizza.zip  the distributable template (produced by build-zip.sh)
build-zip.sh         regenerates the zip, stripping demo-only bits
```

---

## Make it yours

1. **Text & menu** — open `index.html`, change the copy. It's just HTML; search for
   "The Square Pizza", the address, and the menu items.
2. **Colours & fonts** — open `assets/styles.css` and edit the `:root` tokens
   (`--tomato`, `--ink`, `--paper`, `--font-display`, …). Dark mode picks up the
   same tokens automatically.
3. **Booking widget, badge & reviews wall** — replace the placeholder UUID
   `00000000-0000-4000-8000-000000000000` in all three embed snippets with your own
   Selected With Trust listing ID (find it on your dashboard). The reviews wall and
   the seal are the same `badge.js` script with a different `data-swt-style`
   (`wall` vs `seal`).
   - Remove `data-swt-demo` / `data-swt-demo="table"` once your listing is on the
     **Starter plan or above** — that switches the booking widget from preview to
     live bookings and the wall from sample reviews to your real ones.
   - The badge and reviews wall work on any plan (they just show demo data until
     you have live reviews).
4. **Delete the demo bits** — remove every block between
   `<!-- swt-demo-only:start -->` and `<!-- swt-demo-only:end -->` (the top banner,
   the "Want a site like this?" section, the footer credit, the `noindex` tag).
   `build-zip.sh` already does this for the packaged `the-square-pizza.zip`.

## Prefer a visual editor? Use Publii

[Publii](https://getpublii.com) is a free, open-source desktop app that gives you a
WYSIWYG editor and one-click publishing — no code.

1. Install Publii, create a new site.
2. Rebuild these three sections as Publii pages/posts, or paste the markup into a
   custom HTML block. Move `assets/styles.css` into your theme's `assets/css` and
   `@import` it, or drop the rules into the theme's custom CSS.
3. Add the badge and booking `<div>` + `<script>` snippets as a custom HTML block on
   the relevant page.
4. Set the server under **Settings → Server** (see hosting below) and hit **Sync**.

## Hosting — pick one, all have a free tier

| Host | Notes |
|------|-------|
| **Bunny CDN** | EU company, ~€1/mo minimum. Storage Zone + Pull Zone. What we use for the paid setup. |
| **Cloudflare Pages** | Easiest: drag the folder in, add your domain, done. Free, unlimited bandwidth. |
| **GitHub Pages** | Free. Push the folder to a repo, enable Pages. Needs a GitHub account. |
| **Netlify** | Free tier, drag-and-drop deploy. 100 GB/mo bandwidth. |

Point your own domain at whichever you pick. Domain registration and renewal stay
with you.

## Rebuild the zip

```sh
./build-zip.sh
```

Produces `the-square-pizza.zip` with the demo-only blocks removed.

---

## Want us to do it?

- **€150 one-off** — we deploy it to Bunny CDN, point your domain, 30-minute call,
  and 15 days of free support questions (about the site or Selected With Trust).
- **€300 one-off** — the above plus a one-hour on-site session where we build it
  with you.
- After 15 days: optional **€5/month** ongoing support.

[Get in touch →](https://selectedwithtrust.com/support.html)
