<template>
  <div class="post-template">
    <div class="title-container section">
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
    <div class="single-photo-container">
      <img :src="post.photos[0]" />
    </div>
    <div v-if="post.process" class="process-container section">
      <h3>The Process</h3>
      <p>{{ post.process }}</p>
    </div>
    <div v-if="post.photos[1]" class="multiple-photos-container">
      <img :src="post.photos[1]" />
      <img :src="post.photos[2]" />
    </div>
    <div v-if="post.lessons" class="lessons-container section">
      <h3>Lessons Learned</h3>
      <p>{{ post.lessons }}</p>
    </div>
  </div>
</template>

<script>
import posts from '@/data/posts.json';

export default {
  name: 'PostTemplate',
  props: {
    postId: String
  },
  data() {
    return {
      post: this.getPost(this.postId)
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
    }
  }
}
</script>

<style scoped lang="scss">
.post-template {
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
  }

  .lessons-container{
    border-top: 1px solid $gray-border;
  }

  img {
    width: 100%;
  }
}
</style>
