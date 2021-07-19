<template>
  <div class="home">
    <vue-headful title="Lawrence Chang" />
    <CustomCursor />
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue';
import CustomCursor from '@/components/CustomCursor.vue';

export default {
  name: 'Home',
  components: {
    HomePage,
    CustomCursor
  }
}
</script>

<style scoped lang="scss">
.home {
  @include page-layout;
}
</style>
