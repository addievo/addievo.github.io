// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://adityav.au',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  adapter: cloudflare(),
  redirects: {
    '/booking': { status: 302, destination: 'https://latticelabs.au/booking' },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
