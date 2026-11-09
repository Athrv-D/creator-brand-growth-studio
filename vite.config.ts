import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Preserve the project's custom SSR error-handling entry point.
      server: { entry: "server" },
    }),
    viteReact(),
    // Preserve the Cloudflare deployment target.
    nitro({ preset: "cloudflare_module" }),
  ],
});