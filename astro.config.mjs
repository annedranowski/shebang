import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    })
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  site: 'https://annedranow.xyz', // Update this
  head: [
    {
      tag: 'script',
      attrs: { 
        async: true, 
        src: 'https://www.googletagmanager.com/gtag/js?id=G-C0CBPR3W6J',
        type: 'text/partytown'
      }
    },
    {
      tag: 'script',
      attrs: { type: 'text/partytown' },
      content: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-C0CBPR3W6J');
      `
    }
  ]
});