<template>
  <div class="introduction">
    <p v-scroll-reveal class="regular first-sentence">Hey there, I'm <span class="name">Lawrence</span>. Senior UX Designer at Credera by <span class="icon icon-day"></span>. Product Design Director at Clackd by <span class="icon icon-night"></span>.</p>
    <p v-scroll-reveal class="regular">When I’m not designing, you will find me playing board games, reading manga, cooking up a Japanese meal, or brewing a specialty cup of coffee. ↓Scroll down↓ to see some of my work and to learn more about me!</p>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped lang="scss">
.introduction {
  padding: 100px 0;

  .first-sentence {
    margin-bottom: 12px;
    @include theme() {
      color: theme-get('default-theme-inverse');
    }
  }

  .name {
    color: $blue-primary;
  }

  .icon {
    display: inline-block;
    height: 28px;
    margin-left: -2px;
    position: relative;
    top: 5px;
    width: 28px;
  }

  .icon-day {
    background: url('/assets/icons/icon-day.svg') no-repeat;
  }

  .icon-night {
    background: url('/assets/icons/icon-night.svg') no-repeat;
  }
}
</style>
