// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const nitroPreset =
  process.env.NITRO_PRESET ||
  (process.env.VERCEL ? "vercel" : undefined) ||
  (process.env.NETLIFY ? "netlify" : undefined) ||
  (process.env.CF_PAGES ? "cloudflare-pages" : undefined);

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
export default defineConfig({
  // Provider output is needed only in a hosting build. Keep ordinary local builds
  // as standard Vite/TanStack Start builds.
  cloudflare: false,
  plugins: nitroPreset ? [nitro({ preset: nitroPreset })] : [],
  tanstackStart: {
    server: { entry: "server" },
  },
});
