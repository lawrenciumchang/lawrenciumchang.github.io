<template>
  <div class="featured-photography">
    <DraggableContainer />
    <h1 v-scroll-reveal class="contained">photography</h1>
    <div v-scroll-reveal class="overflow-container">
      <div class="scroll-container">
        <div class="item-container" v-for="index in 6" :key="index">
          <img v-lazy="'/assets/images/photography/' + index + '.jpg'" />
        </div>
      </div>
    </div>
    <router-link v-scroll-reveal class="contained view-more large" to="/photography" @click="gaTrackClick('Home', 'View Photography')">view all</router-link>
    
  </div>
</template>

<script>
import DraggableContainer from '@/components/DraggableContainer.vue';

export default {
  name: 'FeaturedPhotography',
  components: {
    DraggableContainer
  }
}
</script>

<style scoped lang="scss">
.featured-photography {
  padding-bottom: 100px;

  .contained {
    @include page-layout;
  }

  h1 {
    margin-bottom: 24px !important;
  }

  .overflow-container {
    margin-bottom: 20px;
  }

  .view-more {
    display: block;
  }
}
img[lazy=loading] {
  opacity: 0;
  transition: $ease-in;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
