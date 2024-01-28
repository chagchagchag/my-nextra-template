const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  distDir: 'dist',
  basePath: '/my-nextra-template'
})
