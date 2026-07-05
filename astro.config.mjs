import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to the custom domain once DNS is configured.
// When serving from a project page (user.github.io/repo), also set `base`.
export default defineConfig({
  site: 'https://dernindustries.com',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});
