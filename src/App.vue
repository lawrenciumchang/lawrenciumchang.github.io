<template>
  <div id="app">
    <Menu />
    <transition
      name="fade"
      mode="out-in"
      @enter="enter"
    >
      <router-view :key="$route.fullPath" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  methods: {
    enter() {
      window.scrollTo(0,0);
    }
  },
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap');
</style>

<style lang="scss">
  #app {
    font-family: 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
