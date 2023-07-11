import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  define: {
    global: "({})",
  },
  plugins: [svgr(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "node-fetch": "isomorphic-fetch",
      "@": path.resolve(__dirname, "./src"),
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@configs": `${path.resolve(__dirname, "./src/configs/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@public": `${path.resolve(__dirname, "./public/")}`,
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": `${path.resolve(__dirname, "./src/@types")}`,
      "@hooks": `${path.resolve(__dirname, "./src/hooks")}`,
      "@routes": `${path.resolve(__dirname, "./src/routes")}`,
      "@styles": `${path.resolve(__dirname, "./src/styles")}`,
      "@services": `${path.resolve(__dirname, "./src/services")}`,
    },
  },
});
