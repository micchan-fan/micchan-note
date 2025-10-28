import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://micchan.fan/',
  integrations: [sitemap()],
  server: {
    host: '0.0.0.0',
  },
});
