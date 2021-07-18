<template>
  <div class="photography-page">
    <vue-headful title="Photography | Lawrence Chang" />
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
      <VueJustifiedLayout :items="photos" v-slot="{item, index}" :options="{containerPadding: 0}">
        <img v-scroll-reveal :src="item.url" @click="showPhotoSwipe(index); gaTrackClick('Photography', 'View Photo - ' + item.title)" />
      </VueJustifiedLayout>
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
        }
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
    showPhotoSwipe: function(index) {
      this.$set(this.photoswipeOptions.options, 'index', index);
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
    padding: 100px 0px;

    @media (max-width: $mobile-breakpoint) {
      padding: 60px 0;
    }
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
::v-deep .justified-container {
  .justified-item {
    overflow: hidden;
    img {
      transition: $hover-transition;
      width: 100%;
      &:hover {
        cursor: pointer;
        transform: scale(1.01) !important;
      }
    }
  }
}
::v-deep .pswp__caption__center {
  color: $almost-white;
  font-size: 16px;
  text-align: center;
}
</style>
