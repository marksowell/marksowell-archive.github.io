// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://marksowell.com', // Your domain
  base: '/dev',                          // Serve the site under /dev
  srcDir: './dev',                       // Source directory for Astro project
  publicDir: './public',                 // Static assets (like images)
});
