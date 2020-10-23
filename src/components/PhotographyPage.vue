<template>
  <div class="photography-page">
    <vue-headful title="Lawrence Chang | Photography" />
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photos" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="intro section">
      <div v-scroll-reveal class="headline">
        <h1>Photography</h1>
      </div>
      <div v-scroll-reveal class="paragraph">
        <p>Everything shot on a Sony a6000 with various lenses or an iPhone 7 Plus</p>
      </div>
    </div>
    <div class="photos section">
      
    </div>
  </div>
</template>

<script>
import { PhotoSwipe } from 'v-photoswipe';

export default {
  name: 'PhotographyPage',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  data() {
    return {
      photos: this.getPhotos(),
      photoswipeOptions: {
        isOpen: false,
        isOpenGallery: false,
        options: {
          index: 0
        },
        optionsGallery: {},
      }
    }
  },
  methods: {
    getPhotos: function() {
      // TEMP
      return [
        {
          src: require('@/assets/images/resume.png'),
          w: 2160,
          h: 2796
        },
        {
          src: require('@/assets/images/resume.png'),
          w: 2160,
          h: 2796
        }
      ]
    },
    showPhotoSwipe: function() {
      this.photoswipeOptions.isOpen = true;
    },
    hidePhotoSwipe: function() {
      this.photoswipeOptions.isOpen = false;
    },
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.photography-page {
  .section {
    padding: 60px 0;
  }

  .intro {
    display: grid;
    grid-column-gap: 72px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr 1fr;
    margin-top: 160px;

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }

    .paragraph {
      margin-top: 100px;

      @media (max-width: $mobile-breakpoint) {
        margin-top: 0;
      }

      p:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
