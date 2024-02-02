import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://kevhec.github.io',
  base: '/portfolio',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "./src/styles/base";
            `
        }
      }
    }
  },
  integrations: [mdx()]
});