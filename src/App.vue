<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
    @import url('https://use.typekit.net/bpp7urt.css');
</style>

<style lang="scss">
  #app {
    font-family: 'museo-sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
