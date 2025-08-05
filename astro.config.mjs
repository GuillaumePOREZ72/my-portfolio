// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  vite: {
      site: 'https://github.com/GuillaumePOREZ72.github.io',
      base: 'my-portfolio',
      trailingSlash: 'always',
      plugins: [tailwindcss()],
  },
});