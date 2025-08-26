# Astro Starter (KaTeX + Clean Homepage)

## Quickstart
```bash
# 1) Extract & install
npm i
# 2) Run locally
npm run dev
# 3) Build & preview
npm run build && npm run preview
```

## Deploy to Vercel/Render/..
- Create a new Git repo and push this folder.
- In Vercel: "Add New Project" → import your repo → Framework auto-detects Astro.
- After deploy, attach your domain in Vercel's "Domains" tab.

## Math (KaTeX)
KaTeX is enabled via remark/rehype plugins in `astro.config.mjs`. Use `$...$` for inline, `$$...$$` for display math.

## Comments (optional)
The layout includes a commented Giscus snippet. Replace the placeholders and move it to your post layout when ready.
