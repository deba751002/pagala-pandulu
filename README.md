# Pagala ♥ Pandulu

A love-story photo website. No build step: open `index.html` or visit the GitHub Pages link.

- **Main site (pastel gallery)** — `index.html`, `style.css`, `app.js`, `photos.js`. All 63 photos, in four chapters.
- **Dark cinematic version** — `dark/index.html` (kept as an alternate design).

## Edit content
- Names, dates, letter, reasons and chapter titles: the `CONFIG` block at the top of `app.js`.
- Photo list per chapter: `photos.js` (`[photo number, width, height]`).

## Photos
Each photo exists in three sizes: `images/s/` (grid, small), `images/m/` (dark site frames) and `images/` (full size, opened in the viewer). Name: `pNN.jpg`.

## Update the live site
Any change pushed to the `main` branch goes live on GitHub Pages in about 1 minute.

- **From this computer:** `git add . && git commit -m "your message" && git push`
- **From anywhere (browser):** open the repo on github.com and press `.` to open the web editor.
