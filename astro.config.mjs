import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
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