import { defineConfig } from 'astro/config';

import rename from 'astro-rename';
import HashRenamer from './src/lib/hash-renamer';

import tailwind from "@astrojs/tailwind";

const renamer = new HashRenamer();

// https://astro.build/config
export default defineConfig({
  integrations: [
      tailwind(),
      rename({
          rename: {
              strategy: (key) => renamer.rename(key),
          }
      })
  ]
});