// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marksowell.com', // Your domain
  base: '/dev',                   // Serves the Astro site under /dev
  trailingSlash: "ignore",
  output: "static",
  outDir: './dist/dev',
  build: {
    assets: 'astro'
  }
});
