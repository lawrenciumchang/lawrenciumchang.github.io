<template>
  <div class="about">
    <vue-headful title="About | Lawrence Chang" />
    <h1 v-scroll-reveal>about</h1>

  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
.about {
  @include page-layout;
  min-height: 100vh;
  padding-top: 100px;
}
</style>
