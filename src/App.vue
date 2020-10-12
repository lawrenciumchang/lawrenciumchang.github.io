<template>
  <div id="app">
    <CustomCursor />
    <Header />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CustomCursor from '@/components/CustomCursor.vue';

export default {
  components: {
    Header,
    Footer,
    CustomCursor
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
</style>

<style lang="scss">
  #app {
    cursor: none;
    font-family: 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
