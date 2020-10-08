<template>
  <div class="post-template">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="title-container section">
      <router-link to="/" @click.native="scrollToTop" class="navigation-link">
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
    <div v-if="post.photos[1]" class="multiple-photos-container section-buffer">
      <div class="photo-wrapper" v-for="(photo, index) in post.photos" :key="photo.title">
        <img v-if="index != 0" v-lazy="photo.src" @click="showPhotoSwipe(index)" />
      </div>
    </div>
    <div v-if="post.lessons" class="lessons-container section">
      <h3>Lessons Learned</h3>
      <p>{{ post.lessons }}</p>
    </div>
    <div class="navigation-container section">
      <div class="previous">
        <div v-if="post.previous.url">
          <router-link :to="post.previous.url" @click.native="scrollToTop" class="navigation-link">
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.2925 0.704609C5.9025 0.314609 5.2725 0.314609 4.8825 0.704609L0.2925 5.29461C-0.0975 5.68461 -0.0975 6.31461 0.2925 6.70461L4.8825 11.2946C5.2725 11.6846 5.9025 11.6846 6.2925 11.2946C6.6825 10.9046 6.6825 10.2746 6.2925 9.88461L2.4125 5.99461L6.2925 2.11461C6.6825 1.72461 6.6725 1.08461 6.2925 0.704609V0.704609Z" fill="#69AAF3"/>
            </svg>
            Previous
          </router-link>
          <p>{{ post.previous.label }}</p>
        </div>
      </div>
      <div class="next">
        <div v-if="post.next.url">
          <router-link :to="post.next.url" @click.native="scrollToTop" class="navigation-link">
            Next
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.292461 0.2925C0.682461 -0.0975 1.31246 -0.0975 1.70246 0.2925L6.29246 4.8825C6.68246 5.2725 6.68246 5.9025 6.29246 6.2925L1.70246 10.8825C1.31246 11.2725 0.682461 11.2725 0.292461 10.8825C-0.0975391 10.4925 -0.0975391 9.8625 0.292461 9.4725L4.17246 5.5825L0.292461 1.7025C-0.0975391 1.3125 -0.0875391 0.6725 0.292461 0.2925V0.2925Z" fill="#69AAF3"/>
            </svg>
          </router-link>
          <p>{{ post.next.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '@/data/posts.json';
import { PhotoSwipe } from 'v-photoswipe';

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
    },
    gaTrackClick: function(category, label) {
      var host = window.location.hostname;
      if (host != 'localhost') {
        this.$ga.event(category, 'click', label);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.post-template {
  .navigation-link {
    display: block;
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

  .section-buffer {
    padding-bottom: 20px;
  }

  .title-container {
    border-bottom: 1px solid $gray-border;
    margin-top: 100px;

    .navigation-link {
      font-size: 18px;
      margin-bottom: 8px;
    }
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
    .photo-wrapper {
      &:not(:first-child) {
        margin-top: 40px;
      }
    }
  }

  .navigation-container {
    border-top: 1px solid $gray-border;
    display: grid;
    grid-column-gap: 72px;
    grid-template-columns: 1fr 1fr;

    .navigation-link {
      font-size: 20px;
      margin-bottom: 0;
    }

    .previous {
      text-align: left;
    }

    .next {
      text-align: right;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 40px;
      grid-template-columns: 1fr;
      padding: 40px 0;

      .next {
        text-align: left;
      }
    }
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
