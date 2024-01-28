const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  distDir: 'out',
  themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/reading-notes" : "";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
}

// module.exports = withNextra({
//   // distDir: 'dist',
//   // basePath: '/my-nextra-template'
// })

module.exports = {
  ...withNextra,
  ...nextConfig,
}