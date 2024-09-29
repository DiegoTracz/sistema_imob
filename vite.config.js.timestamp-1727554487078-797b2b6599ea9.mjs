// vite.config.js
import { defineConfig } from "file:///Users/juliovedovatto/Projects/tmp/sistema_teste/node_modules/vite/dist/node/index.js";
import laravel from "file:///Users/juliovedovatto/Projects/tmp/sistema_teste/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///Users/juliovedovatto/Projects/tmp/sistema_teste/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/juliovedovatto/Projects/tmp/sistema_teste";
console.log(resolve(__vite_injected_original_dirname, "resources/metronic"));
process.exit();
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    laravel({
      input: "resources/js/app.js",
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "resources/js"),
      "~": resolve(__vite_injected_original_dirname, "node_modules"),
      "@metronic": resolve(__vite_injected_original_dirname, "resources/metronic")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvanVsaW92ZWRvdmF0dG8vUHJvamVjdHMvdG1wL3Npc3RlbWFfdGVzdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9qdWxpb3ZlZG92YXR0by9Qcm9qZWN0cy90bXAvc2lzdGVtYV90ZXN0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvanVsaW92ZWRvdmF0dG8vUHJvamVjdHMvdG1wL3Npc3RlbWFfdGVzdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5jb25zb2xlLmxvZyhyZXNvbHZlKF9fZGlybmFtZSwgJ3Jlc291cmNlcy9tZXRyb25pYycpKTtcbnByb2Nlc3MuZXhpdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6ICcvJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6ICdyZXNvdXJjZXMvanMvYXBwLmpzJyxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdyZXNvdXJjZXMvanMnKSxcbiAgICAgICAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMnKSxcbiAgICAgICAgICAgICdAbWV0cm9uaWMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3Jlc291cmNlcy9tZXRyb25pYycpLFxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQVMsb0JBQW9CO0FBQy9WLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBSHhCLElBQU0sbUNBQW1DO0FBS3pDLFFBQVEsSUFBSSxRQUFRLGtDQUFXLG9CQUFvQixDQUFDO0FBQ3BELFFBQVEsS0FBSztBQUViLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLG9CQUFvQjtBQUFBLFVBQ2hCLE1BQU07QUFBQSxVQUNOLGlCQUFpQjtBQUFBLFFBQ3JCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDdEMsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN0QyxhQUFhLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsSUFDeEQ7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
