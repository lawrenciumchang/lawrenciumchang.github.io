<template>
  <div class="photography">
    <vue-headful title="Photography | Lawrence Chang" />
    <PhotographyPage />
  </div>
</template>

<script>
import PhotographyPage from '@/components/PhotographyPage.vue';

export default {
  name: 'Photography',
  components: {
    PhotographyPage
  }
}
</script>

<style scoped lang="scss">
.photography {
  @include page-layout;
}
</style>
