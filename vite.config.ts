import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Preserve the project's custom SSR error-handling entry point.
      server: { entry: "server" },
    }),
    viteReact(),
    // The previous project configuration used Cloudflare as its Nitro target.
    nitro({
      preset: "cloudflare_module",
      // Lovable deploys dist/ rather than Nitro's default .output/ directory.
      output: { dir: "dist" },
    }),
  ],
});
