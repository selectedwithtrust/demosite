# The Square Pizza - Publii theme

The same one-page restaurant site as the plain-HTML template in the parent folder,
packaged as an installable [Publii](https://getpublii.com) theme so you can edit
every part of it visually, with no code.

**Live example:** https://demo.selectedwithtrust.com

```
the-square-pizza/            the theme
  config.json                theme options (what you see in Publii's Theme panel)
  index.hbs                  the one-pager - built entirely from the theme options
  partials/
    trust-seal.hbs           Selected With Trust badge (Visit panel)
    reviews-wall.hbs         Selected With Trust verified reviews wall
    booking.hbs              Selected With Trust commission-free booking widget
    head.hbs navbar.hbs footer.hbs menu.hbs
  page.hbs post.hbs 404.hbs  extra pages / news / error page
  assets/css/style.css       all styling
  theme-variables.js         turns the colour + width options into CSS variables
  thumbnail.png              gallery image (400x300)
the-square-pizza-theme.zip   the installable package (produced by build-theme-zip.sh)
build-theme-zip.sh           rebuilds the zip
make-thumbnail.js            regenerates thumbnail.png (no dependencies)
```

---

## Install

1. Download **`the-square-pizza-theme.zip`** from this folder.
2. In Publii: open your site, go to **Theme -> Install theme -> Install from file**,
   pick the zip.
3. Activate it. Open **Theme** to see the settings.

## Make it yours - all in Publii, no code

Open **Theme -> The Square Pizza**. Everything is grouped:

- **Restaurant** - the kicker, headline, intro paragraph, button labels, and the
  little square glyph before the name. The name itself is your Publii site name
  (**Site Settings -> Basic**), or upload a logo there to replace the wordmark.
- **Menu** - the section heading and intro, plus two editable lists (name, price,
  optional description). Add or remove rows with the repeater controls.
- **Visit** - intro text, address, phone, and an opening-hours table you edit row
  by row. Also the heading and text for the verified-business panel.
- **Selected With Trust** - paste your **listing ID** (from your Selected With
  Trust dashboard) and the three widgets go live. Toggles let you show or hide the
  reviews wall and the booking section, pick the badge style, and switch the
  booking widget between table reservations and appointments.
  - **Demo mode** (on by default) makes all three widgets show sample data and
    never take a real booking. Turn it off once your listing exists - the badge
    and reviews wall work on any plan; live booking needs the Starter plan or
    above.
- **Colours** - nine colour pickers (background, panels, text, lines, accent,
  secondary). Dark mode uses its own fixed palette.
- **Layout** - content width.
- **Footer** - show or hide the "Free starter website by Selected With Trust" line.

Menus: by default the top navigation is generated automatically (Menu / Visit /
Reviews / Book a table). If you build a menu under Publii's **Menus** tab and
assign it to *Main menu*, that replaces the automatic one.

## Publish

Set your host under **Server** (Bunny CDN, Cloudflare Pages, GitHub Pages, Netlify -
all have a free tier) and hit **Sync**. See the parent folder's README for host
notes.

## Rebuild the zip

```sh
./build-theme-zip.sh
```

Regenerates `thumbnail.png` and repackages `the-square-pizza/` into
`the-square-pizza-theme.zip`.

---

## Prefer plain files?

The parent folder has the same site as a single `index.html` + `styles.css` with
no build step and no CMS. Pick whichever you would rather maintain.
