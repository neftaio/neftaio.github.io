/** @type {import('next').NextConfig} */
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: "/.mdx?$/",
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkFronmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

module.exports = nextConfig;
