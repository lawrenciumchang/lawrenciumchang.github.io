<template>
  <div class="featured-about">
    <h1 v-scroll-reveal>about</h1>
    <p v-scroll-reveal class="regular first-sentence">I am a UX Designer based in Houston, TX.</p>
    <p v-scroll-reveal class="regular second-sentence">When I’m not designing, you will find me playing board games, reading manga, cooking up a Japanese meal, or brewing a specialty cup of coffee.</p>
    <router-link v-scroll-reveal class="large" to="/about" @click="gaTrackClick('Home', 'See More')">see more</router-link>
  </div>
</template>

<script>
export default {
  name: 'FeaturedAbout',
  methods: {
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.featured-about {
  @include page-layout;
  padding-bottom: 100px;

  .first-sentence {
    margin-bottom: 12px;
  }

  .second-sentence {
    margin-bottom: 20px;
  }
}
</style>
