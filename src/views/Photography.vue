<template>
  <div class="photography">
    <vue-headful title="Photography | Lawrence Chang" />
    <CustomCursor />
    <PhotographyPage />
  </div>
</template>

<script>
import PhotographyPage from '@/components/PhotographyPage.vue';
import CustomCursor from '@/components/CustomCursor.vue';

export default {
  name: 'Photography',
  components: {
    PhotographyPage,
    CustomCursor
  }
}
</script>

<style scoped lang="scss">
.photography {
  @include page-layout;
}
</style>
