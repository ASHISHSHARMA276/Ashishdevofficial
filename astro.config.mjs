// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "data": fileURLToPath(new URL("./src/data", import.meta.url)),
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
