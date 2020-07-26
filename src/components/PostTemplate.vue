<template>
  <p>Post Template {{ postId }}</p>
</template>

<script>
export default {
  name: 'PostTemplate',
  props: {
    postId: String
  },
  mounted: function() {
    console.log('props: ', this.postId);
  }
}
</script>

<style scoped lang="scss">

</style>
