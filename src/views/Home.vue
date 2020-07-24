<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Homepage />
    <!-- <router-link to="/gundam-kingdom">Gundam Kingdom</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Homepage from '@/components/Homepage.vue';

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
