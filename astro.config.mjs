import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    mdx(),
    partytown()
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  site: 'https://annedranow.xyz'
});