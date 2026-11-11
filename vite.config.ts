import { defineConfig } from "vite";
import { motionStudio } from "motion-studio";

// Optional local editor only; the static production build is unchanged.
export default defineConfig({
  appType: "mpa",
  plugins: [motionStudio()],
  server: { host: "127.0.0.1", port: 4174, strictPort: true },
});
