<template>
  <div class="introduction">
    <p v-scroll-reveal class="regular first-sentence">Hey there, I'm Lawrence. Senior UX Designer at Credera by <span class="icon icon-day"></span>. Product Design Director at Clackd by <span class="icon icon-night"></span>.</p>
    <p v-scroll-reveal class="regular">I lead design at companies of various stages, turning startup ideas into tangible products and helping clients transform their digital needs into world-class experiences. <span class="arrow">↓</span>Scroll down<span class="arrow">↓</span> to see some of my work and to learn more about me!</p>
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
