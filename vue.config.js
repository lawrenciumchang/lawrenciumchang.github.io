// vue.config.js
module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/global.scss";`
      }
    }
  }
}
