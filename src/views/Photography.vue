<template>
  <div class="photography">
    <vue-headful title="Photography | Lawrence Chang" />
    <h1 v-scroll-reveal>photography</h1>
    <PhotoGrid />
  </div>
</template>

<script>
import PhotoGrid from '@/components/PhotoGrid.vue';

export default {
  name: 'Photography',
  components: {
    PhotoGrid
  }
}
</script>

<style scoped lang="scss">
.photography {
  @include page-layout;
  min-height: 100vh;
  h1 {
    padding-bottom: 24px;
    padding-top: 100px;
  }
}
</style>
