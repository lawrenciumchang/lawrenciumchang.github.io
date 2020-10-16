<template>
  <div class="home">
    <CustomCursor />
    <Homepage />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue';
import CustomCursor from '@/components/CustomCursor.vue';

export default {
  name: 'Home',
  components: {
    Homepage,
    CustomCursor
  }
}
</script>

<style scoped lang="scss">
.home {
  @include page-layout;
}
</style>
