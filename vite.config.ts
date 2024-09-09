import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    remix(),
    Unocss(),
  ],
  resolve: {
    alias: {
      '~': '/src',
    },
  },
});
