import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import {} from "vite-react-ssg";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // It will cause Hydration Failed
    // formatting: 'minify',
    mock: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
