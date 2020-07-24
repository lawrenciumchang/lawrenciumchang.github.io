<template>
  <div class="footer">
    <div class="container">
      <span class="hello">Say hello!</span>
      <span class="message">Let's grab a virtual coffee and chat about anything from photography to design to mechanical keyboards.</span>
      <div class="btn-primary">Get in touch</div>
      <span class="copyright">All images and content Copyright © 2015-{{ currentYear }} Lawrence Chang</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">

.footer {
  background-color: $almost-black;

  .container {
    @include page-layout;
    padding: 120px 24px 100px;

    .hello, .message {
      display: block;
      font-size: 36px;
      font-weight: 700;
    }

    .hello {
      color: $almost-white;
      margin-bottom: 4px;
    }

    .message {
      color: $gray-light;
      margin-bottom: 36px;
    }

    .btn-primary {
      margin-bottom: 160px;
    }

    .copyright {
      color: $gray-light;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
}

</style>
