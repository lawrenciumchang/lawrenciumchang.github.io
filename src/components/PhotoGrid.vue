<template>
  <div class="photo-grid">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photos" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div v-scroll-reveal class="photos section">
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
  name: 'PhotoGrid',
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
.photo-grid {
  min-height: 100vh;

  .section {
    padding-bottom: 100px;
  }
}
::v-deep .justified-container {
  .justified-item {
    overflow: hidden;
    img {
      transition: $ease-in;
      width: 100%;
      &:hover {
        cursor: pointer;
        transform: scale(1.01) !important;
      }
    }
  }
}
::v-deep .pswp__caption__center {
  color: $white;
  font-size: 16px;
  text-align: center;
}
</style>
