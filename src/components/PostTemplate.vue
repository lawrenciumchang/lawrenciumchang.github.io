<template>
  <div class="post-template">
    <div class="title-container section">
      <h1>{{ post.title }}</h1>
      <p class="description">{{ post.shortDescription }}</p>
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
}
</style>
