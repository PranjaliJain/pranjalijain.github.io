# Pranjali Jain’s website

Jekyll source for https://pranjalijain.github.io/.

## Preview locally

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000/. Restart the server after changing `_config.yml`.

## Content

- `_pages/about.md`: About page and biography.
- `_pages/*.html`: separate News, publications, education, experience, teaching, and Art pages.
- `_data/`: News, experience, publications, and teaching.
- `_config.yml`: profile details and website settings.
- `images/MSR_photo_cropped.jpg`: profile photo.
- `images/paintings/`: displayed paintings.
- `files/Pranjali_Jain_PhD_CV.pdf`: the CV linked from the website. Replace this file to update the download.
- `_includes/` and `_layouts/`: shared navigation, page layouts, and content rendering.
- `_sass/_personal.scss`: white and purple styles.
- `assets/js/site.js`: compatibility for old homepage section links.

## Build and deploy

```sh
bundle exec jekyll build --safe
```

`_site/` is generated output, excluded from Git. GitHub Pages should build from `main` → `/(root)`. Commit and push the source files, including the PDF and images.

See LICENSE and THIRD_PARTY_LICENSES.md for attribution.
