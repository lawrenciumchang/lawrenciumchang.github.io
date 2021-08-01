<template>
  <div class="featured-photography">
    <h1 v-scroll-reveal class="contained">photography</h1>
    <div v-scroll-reveal class="overflow-container">
      <div class="scroll-container">
        <div class="photo" v-for="index in 6" :key="index">
          <img v-lazy="'/assets/images/photography/' + index + '.jpg'" />
        </div>
      </div>
    </div>
    <router-link v-scroll-reveal class="contained view-more large" to="/photography" @click="gaTrackClick('Home', 'View Photography')">see everything</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'FeaturedPhotography'
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
    color: $white;
    display: flex;
    overflow-x: hidden;
  }

  .scroll-container {
    display: flex;
    overflow-x: scroll;
    padding: 0 calc(50% - 600px);

    @media (max-width: $desktop-breakpoint) {
      padding: 0 24px;
    }
  }

  .photo {
    display: inline-flex;

    &:not(:last-child) {
      margin-right: 20px;
    }

    img {
      height: 400px;
    }
  }

  .view-more {
    display: block;
  }
}
</style>
