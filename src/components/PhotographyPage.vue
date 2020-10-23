<template>
  <div class="photography-page">
    <vue-headful title="Lawrence Chang | Photography" />
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photos" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="intro section">
      <div v-scroll-reveal class="headline">
        <h1>Photography</h1>
      </div>
      <div v-scroll-reveal class="paragraph">
        <p>Photos shot on a Sony a6000 with various lenses or an iPhone 7 Plus</p>
      </div>
    </div>
    <div class="photos section">
      {{photos}}
    </div>
  </div>
</template>

<script>
import { PhotoSwipe } from 'v-photoswipe';
import PhotosService from '../services/PhotosService.js';

export default {
  name: 'PhotographyPage',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  data() {
    return {
      photos: [],
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
  created() {
    var self = this;
    const photosService = new PhotosService();
    photosService.getPhotos().then(function(response) {
      self.photos =  response;
    });
  },
  methods: {
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
