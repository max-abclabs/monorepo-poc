import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
const path = resolve(__dirname, "..", "..", "libs");
export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { "@careos": path } },
});
