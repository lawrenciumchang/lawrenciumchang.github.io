<template>
  <div class="post">
    <PostTemplate :postId="postId" />
  </div>
</template>

<script>
import PostTemplate from '@/components/PostTemplate.vue';

export default {
  name: 'Post',
  components: {
    PostTemplate
  },
  data() {
    return {
      postId: this.$route.params.post_id
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  @include page-layout;
}
</style>
