import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    UnoCSS(),
  ],
});
