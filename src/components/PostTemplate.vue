<template>
  <div class="post-template">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="title-container section">
      <router-link to="/" @click.native="scrollToTop(); gaTrackClick('Project', 'Home Button')" class="navigation-link">
        ↑Home
      </router-link>
      <h1 class="title">{{ post.title }}</h1>
      <label class="description">{{ post.description }}</label>
    </div>
    <div class="intro-container section">
      <div v-if="post.overview">
        <h5>{{ post.overview }}</h5>
      </div>
      <div v-if="post.role">
        <h5>My Role</h5>
        <ul>
          <li v-for="role in post.role" :key="role">{{ role }}</li>
        </ul>
      </div>
    </div>
    <div v-if="post.photos && post.photos[0]" class="key-photo-container">
      <img v-lazy="post.photos[0].src" @click="showPhotoSwipe(0); gaTrackClick('Post', 'Photo - ' + post.title + ' - ' + post.photos[0].title)" />
    </div>
    <div v-if="post.more" class="more-container section">
      <p>{{ post.more }}</p>
    </div>
    <div v-if="!post.more" class="spacer section"></div>
    <div v-if="post.photos && post.photos[1]" class="photos-container">
      <div class="photo-wrapper" v-for="(photo, index) in post.photos" :key="photo.title">
        <img v-if="index != 0" v-lazy="photo.src" @click="showPhotoSwipe(index); gaTrackClick('Post', 'Photo - ' + post.title + ' - ' + photo.title)" />
      </div>
    </div>
    <div class="navigation-container section">
      <div class="previous">
        <div v-if="post.previous">
          <router-link :to="post.previous.url" @click.native="scrollToTop(); gaTrackClick('Post', 'Previous Post - Navigating to ' + post.previous.title)" class="navigation-link">
            ←Previous Project
          </router-link>
          <h2>{{ post.previous.title }}</h2>
          <label>{{ post.previous.description }}</label>
        </div>
      </div>
      <div class="next">
        <div v-if="post.next">
          <router-link :to="post.next.url" @click.native="scrollToTop(); gaTrackClick('Post', 'Next Post - Navigating to ' + post.next.title)" class="navigation-link">
            Next Project→
          </router-link>
          <h2>{{ post.next.title }}</h2>
          <label>{{ post.next.description }}</label>
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
      let postIndex;

      posts.forEach((element, index) => {
        if (postId == element.id) {
          post = element;
          postIndex = index;
        }
      });

      if (posts[postIndex-1]) {
        let previous = {};
        previous.url = posts[postIndex-1].id;
        previous.title = posts[postIndex-1].title;
        previous.description = posts[postIndex-1].description;
        post.previous = previous;
      }

      if (posts[postIndex+1]) {
        let next = {};
        next.url = posts[postIndex+1].id;
        next.title = posts[postIndex+1].title;
        next.description = posts[postIndex+1].description;
        post.next = next;
      }

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
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  .section {
    padding: 80px 0;
  }

  .spacer {
    margin-bottom: 40px;
    padding: 0;
  }

  .title-container {
    border-bottom: 1px solid $gray-border;
    margin-top: 100px;

    .navigation-link {
      margin-bottom: 20px;
    }

    .title {
      line-height: 56px;
      margin-bottom: 12px;
    }
  }

  .intro-container{
    display: grid;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-columns: 1.5fr 1fr;

    h5 {
      width: 90%;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;

      h5 {
        width: 100%;
      }
    }
  }

  .photos-container {
    margin-bottom: 100px;

    .photo-wrapper {
      &:not(:first-child), &:not(:last-child) {
        img {
          margin-bottom: 40px;
        }
      }
    }
  }

  .navigation-container {
    border-top: 1px solid $gray-border;
    display: grid;
    grid-column-gap: 72px;
    grid-template-columns: 1fr 1fr;
    padding: 80px 0 100px;

    .navigation-link {
      margin-bottom: 0;
    }

    .previous, .next {
      a {
        margin-bottom: 20px;
      }

      h2 {
        margin-bottom: 12px;
      }
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
      padding: 40px 0 48px;

      .next {
        text-align: left;
      }
    }
  }

  img {
    cursor: pointer;
    width: 100%;
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
