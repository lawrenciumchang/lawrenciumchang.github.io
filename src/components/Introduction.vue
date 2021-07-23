<template>
  <div class="introduction">
    <p v-scroll-reveal class="regular first-sentence">Hey there, I'm <span class="name">Lawrence</span>. Senior UX Designer at Credera by <span class="icon icon-day"></span>. Product Design Director at Clackd by <span class="icon icon-night"></span>.</p>
    <p v-scroll-reveal class="regular">When I’m not designing, you will find me playing board games, reading manga, cooking up a Japanese meal, or brewing a specialty cup of coffee. <span class="arrow">↓</span>Scroll down<span class="arrow">↓</span> to see some of my work and to learn more about me!</p>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped lang="scss">
.introduction {
  @include page-layout;
  padding: 100px 24px;

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

  .arrow {
    -webkit-animation: bounce 3s infinite ease-in-out;
    display: inline-block;
  }
}

@-webkit-keyframes bounce {
	0%, 20%, 40%, 60%, 80%, 100%  { -webkit-transform: translateY(0); }
  10%  { -webkit-transform: translateY(-4px); }
	30% { -webkit-transform: translateY(-2px); }
}
</style>
