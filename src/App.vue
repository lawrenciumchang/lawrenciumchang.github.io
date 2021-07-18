<template>
  <div id="app">
    <Header />
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  methods: {
    enter() {
      window.scrollTo(0,0);
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;900&display=swap');
</style>

<style lang="scss">
  #app {
    font-family: 'Inter', sans-serif;
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
