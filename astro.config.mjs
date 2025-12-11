// @ts-check
import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";

/**
 * Astro config
 * - Adds Vite resolve.alias entries so imports like:
 *     ~/layouts/RootLayout.astro
 *     layouts/RootLayout.astro
 *     components/Button.astro
 *   resolve to the right files under ./src
 */
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // kept: ~ and @ for convenience
        "~": path.resolve("./src"),
        "@": path.resolve("./src"),

        // common bare import aliases used in your codebase
        "layouts": path.resolve("./src/layouts"),
        "components": path.resolve("./src/components"),
        "pages": path.resolve("./src/pages"),
        "data": path.resolve("./src/data"),
        "styles": path.resolve("./src/styles"),
      },
    },
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      langAlias: {
        hetu_script: "javascript",
      },
    },
    gfm: true,
    rehypePlugins: [
      [rehypeSlug, {}],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["heading-link"],
            "aria-hidden": "true",
          },
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["icon", "icon-link"] },
            children: [{ type: "text", value: " #" }],
          },
        },
      ],
    ],
  },

  integrations: [react(), mdx(), pagefind()],

  redirects: {
    "/docs": "/docs/get-started/introduction",
    "/docs/get-started": "/docs/get-started/introduction",
    "/docs/developing-plugins": "/docs/developing-plugins/introduction",
    "/docs/plugin-apis": "/docs/plugin-apis/webview",
    "/docs/reference": "/docs/reference/models",
  },
});
