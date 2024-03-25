import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kevhec.dev/',
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
  integrations: [mdx(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        es: 'es-CO'
      }
    }
  })]
});