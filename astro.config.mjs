// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
vite: {
  plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"), 
      },
    },
  },

});