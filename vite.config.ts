/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 replace with your repo name
  plugins: [react()],
  test: {
    globals: true,         // allows using expect/describe without import
    environment: "jsdom",  // simulates browser
    setupFiles: "./setupTests.ts",
  },
})
