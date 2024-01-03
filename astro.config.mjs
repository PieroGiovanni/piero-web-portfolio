import { defineConfig } from "astro/config";
import Compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), Compress()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      defaultLocale: false,
    },
  },
});
