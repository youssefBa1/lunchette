import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // This sets up the alias for your source folder
    },
  },
});
