<template>
  <div class="home">
    <Homepage />
    <!-- <router-link to="/gundam-kingdom">Gundam Kingdom</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue';

export default {
  name: 'Home',
  components: {
    Homepage
  }
}
</script>
