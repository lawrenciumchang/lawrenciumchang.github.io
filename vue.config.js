// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/lawrenciumchang.github.io/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/global.scss";`
      }
    }
  }
}
