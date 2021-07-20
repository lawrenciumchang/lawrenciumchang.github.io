<template>
  <div class="home">
    <vue-headful title="Lawrence Chang" />
    <Introduction />
    <FeaturedProjects />
    <FeaturedPhotography />
    <FeaturedAbout />
  </div>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import FeaturedPhotography from '@/components/FeaturedPhotography.vue';
import FeaturedAbout from '@/components/FeaturedAbout.vue';

export default {
  name: 'Home',
  components: {
    Introduction,
    FeaturedProjects,
    FeaturedPhotography,
    FeaturedAbout
  }
}
</script>

<style scoped lang="scss">
.home {
  @include page-layout;
}
</style>
