import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    root: "src/",
    publicDir: "../static",
    server: {
        host: true, // Open to local network and display URL
        open: true, // Open in browser on development server start
    },
    build: {
        outDir: "../dist", // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
    }
})
