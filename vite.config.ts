import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // vite config
    plugins: [react()],
    define: {
      "process.env": env,
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      VITE_API_GATEWAY: JSON.stringify(env.VITE_API_GATEWAY),
      VITE_API_KEY_SUPABASE: JSON.stringify(env.VITE_API_KEY_SUPABASE),
    },
  };
});
