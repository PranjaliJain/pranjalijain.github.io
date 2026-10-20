# Pranjali Jain’s website

Jekyll source for https://pranjalijain.github.io/.

## Preview locally

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000/. Restart the server after changing `_config.yml`.

## Content

- `_pages/about.md`: homepage sections and painting gallery.
- `_data/`: News, experience, publications, projects, teaching, service, and outreach.
- `_config.yml`: profile details and website settings.
- `images/MSR_photo_cropped.jpg`: profile photo.
- `images/paintings/`: displayed paintings.
- `files/Pranjali_Jain_PhD_CV.pdf`: the CV linked from the website. Replace this file to update the download.
- `_includes/`, `_layouts/`, `_sass/`, and `assets/`: the templates and theme dependencies used to build the website.

## Build and deploy

```sh
bundle exec jekyll build --safe
```

`_site/` is generated output, excluded from Git. GitHub Pages should build from `main` → `/(root)`. Commit and push the source files, including the PDF and images.

See LICENSE and THIRD_PARTY_LICENSES.md for attribution.
