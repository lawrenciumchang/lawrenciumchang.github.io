// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/design/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/global.scss";`
      }
    }
  }
}
