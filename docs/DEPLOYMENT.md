# Deployment Guide

## GitHub Pages
This project is designed to be hosted on GitHub Pages.

1. Push the code to your GitHub repository.
2. Go to **Settings** > **Pages**.
3. Select the `master` (or `main`) branch and the `/ (root)` folder.
4. Click **Save**.

Your Spatial Knowledge Engine will be live at `https://<username>.github.io/mgd-gi/`.

## Local Hosting
Since the project uses ES Modules, you need a local server to avoid CORS issues with iframes:
```bash
npx serve .
```
or
```bash
python3 -m http.server
```
