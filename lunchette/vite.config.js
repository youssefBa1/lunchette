<<<<<<< HEAD
import { defineConfig } from "vite";
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> parent of 3a8c8d2 (navbar + sidebar)

export default defineConfig({
<<<<<<< HEAD
  resolve: {
    alias: {
      "@": "/src", // This sets up the alias for your source folder
    },
  },
});
=======
  plugins: [react()],
})
>>>>>>> parent of 3a8c8d2 (navbar + sidebar)
