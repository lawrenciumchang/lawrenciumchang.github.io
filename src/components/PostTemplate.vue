<template>
  <div class="post-template">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="title-container section">
      <router-link to="/" @click.native="scrollToTop" class="back">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.2925 0.704609C5.9025 0.314609 5.2725 0.314609 4.8825 0.704609L0.2925 5.29461C-0.0975 5.68461 -0.0975 6.31461 0.2925 6.70461L4.8825 11.2946C5.2725 11.6846 5.9025 11.6846 6.2925 11.2946C6.6825 10.9046 6.6825 10.2746 6.2925 9.88461L2.4125 5.99461L6.2925 2.11461C6.6825 1.72461 6.6725 1.08461 6.2925 0.704609V0.704609Z" fill="#69AAF3"/>
        </svg>
        Back
      </router-link>
      <h1>{{ post.title }}</h1>
      <p class="description">{{ post.description }}</p>
    </div>
    <div class="intro-container section">
      <div v-if="post.overview">
        <h3>Overview</h3>
        <p>{{ post.overview }}</p>
      </div>
      <div v-if="post.role">
        <h3>My Role</h3>
        <p>{{ post.role }}</p>
      </div>
    </div>
    <div v-if="post.photos[0]" class="single-photo-container">
      <img v-lazy="post.photos[0].src" @click="showPhotoSwipe(0)" />
    </div>
    <div v-if="post.process" class="process-container section">
      <h3>The Process</h3>
      <p>{{ post.process }}</p>
    </div>
    <div v-if="post.photos[1]" class="multiple-photos-container">
      <img v-lazy="post.photos[1].src" @click="showPhotoSwipe(1)" />
      <img v-lazy="post.photos[2].src" @click="showPhotoSwipe(2)" v-if="post.photos[2]" />
    </div>
    <div v-if="post.lessons" class="lessons-container section">
      <h3>Lessons Learned</h3>
      <p>{{ post.lessons }}</p>
    </div>
  </div>
</template>

<script>
import posts from '@/data/posts.json';
import PhotoSwipe from 'v-photoswipe';

export default {
  name: 'PostTemplate',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  props: {
    postId: String
  },
  data() {
    return {
      post: this.getPost(this.postId),
      photoswipeOptions: {
        isOpen: false,
        isOpenGallery: false,
        options: {
          index: 0
        },
        optionsGallery: {},
        items: this.getPhotos(this.postId)
      }
    }
  },
  methods: {
    getPost: function(postId) {
      let post = [];
      posts.forEach(element => {
        if (postId == element.id) {
          post = element;
        }
      });
      return post;
    },
    getPhotos: function(postId) {
      let post = [];
      posts.forEach(element => {
        if (postId == element.id) {
          post = element;
        }
      });
      return post.photos;
    },
    showPhotoSwipe: function(index) {
      this.photoswipeOptions.isOpen = true;
      this.$set(this.photoswipeOptions.options, 'index', index);
    },
    hidePhotoSwipe: function() {
      this.photoswipeOptions.isOpen = false;
    },
    scrollToTop: function() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped lang="scss">
.post-template {
  .back {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
    text-decoration: none;

    svg path {
      fill: $blue-primary;
      transition: $hover-transition;
    }

    &:hover {
      svg path {
        fill: $blue-hover;
        transition: $hover-transition;
      }
    }
  }

  .section {
    padding: 80px 0;
  }

  .title-container {
    border-bottom: 1px solid $gray-border;
    margin-top: 100px;
  }

  .intro-container{
    display: grid;
    grid-column-gap: 72px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }
  }

  .multiple-photos-container {
    padding-bottom: 80px;

    img:nth-child(2) {
      margin-top: 40px;
    }
  }

  .lessons-container{
    border-top: 1px solid $gray-border;
  }

  img {
    cursor: pointer;
    transition: $hover-transition;
    width: 100%;

    &:hover {
      transform: scale(0.99);
    }
  }
}
::v-deep .pswp__caption__center {
  text-align: center;
}
img[lazy=loading] {
  opacity: 0;
  transition: $hover-transition;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
