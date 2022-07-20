import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  build: {
    rollupOptions: { output: { manualChunks: undefined } },
  },
  plugins: [
    viteSingleFile({
      useRecommendedBuildConfig: false,
      removeViteModuleLoader: true,
    }),
  ],
});
