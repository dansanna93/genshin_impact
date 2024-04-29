module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://gsi.fly.dev/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}