<template>
  <div class="featured-about">
    <h1 v-scroll-reveal>about</h1>
    <p v-scroll-reveal class="regular first-sentence">I am a UX Designer based in Houston, TX.</p>
    <p v-scroll-reveal class="regular second-sentence">I lead design at companies of various stages, turning startup ideas into tangible products and helping clients transform their digital needs into world-class experiences.</p>
    <router-link v-scroll-reveal class="large" to="/about" @click="gaTrackClick('Home', 'Read More')">read more</router-link>
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
    @include theme() {
      color: theme-get('default-theme-inverse');
    }
  }

  .second-sentence {
    margin-bottom: 20px;
  }
}
</style>
