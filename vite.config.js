// / <reference types="vitest" />
// / <reference types="vite/client" />

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base   : "/odin-memory-cards/",
  define : { "process.env": {} },
  resolve: { alias: { util: "util/" } },
  test   : {
    environment: "node",
    globals    : true,
  },
});
