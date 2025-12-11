// @ts-check
import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  // Vite-level config used by Astro
  vite: {
    // resolve alias so imports like "~/..." work
    resolve: {
      alias: {
        "~": path.resolve("./src"),
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()],
  },

  // Markdown / MDX config (kept from your original)
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
          behavior: "wrap", // Adds the link at the end of the heading
          properties: {
            className: ["heading-link"], // Add a class for styling
            "aria-hidden": "true",
          },
          content: {
            // Optional: Use an SVG icon or text for the link
            type: "element",
            tagName: "span",
            properties: { className: ["icon", "icon-link"] },
            children: [{ type: "text", value: " #" }],
          },
        },
      ],
    ],
  },

  // Integrations (kept from your original)
  integrations: [react(), mdx(), pagefind()],

  // Redirects (kept from your original)
  redirects: {
    "/docs": "/docs/get-started/introduction",
    "/docs/get-started": "/docs/get-started/introduction",
    "/docs/developing-plugins": "/docs/developing-plugins/introduction",
    "/docs/plugin-apis": "/docs/plugin-apis/webview",
    "/docs/reference": "/docs/reference/models",
  },
});
