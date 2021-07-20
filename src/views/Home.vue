<template>
  <div class="home">
    <vue-headful title="Lawrence Chang" />
    <CustomCursor />
    <Introduction />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomCursor from '@/components/CustomCursor.vue';
import Introduction from '@/components/Introduction.vue';

export default {
  name: 'Home',
  components: {
    CustomCursor,
    Introduction
  }
}
</script>

<style scoped lang="scss">
.home {
  @include page-layout;
}
</style>
