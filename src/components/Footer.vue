<template>
  <div class="footer">
    <div class="container">
      <h2 v-scroll-reveal class="hello">Hello there!</h2>
      <h2 v-scroll-reveal class="message">Want to create something together or just chat? Let’s grab a virtual coffee and talk about anything from photography to design to mechanical keyboards.</h2>
      <div v-scroll-reveal class="btn-primary" data-clipboard-text="lawrencium.chang@gmail.com" @click="revealCopiedText(); gaTrackClick('Footer', 'Get In Touch CTA')">Get in touch</div>
      <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      <div class="sub-section">
        <span class="copyright">All images and content Copyright © 2015-{{ currentYear }} Lawrence Chang</span>
        <span class="built">This site was built using Vue.js. View the source code on <a href="https://github.com/lawrenciumchang/lawrenciumchang.github.io/tree/version/4.0" target="_blank" @click="gaTrackClick('Footer', 'Github Link')"><span class="github-logo"></span>Github</a>.</span>    
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Footer',
  mounted: function() {
    new ClipboardJS('.btn-primary');
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    revealCopiedText: function() {
      this.$refs.copiedText.classList.add('reveal');
      setTimeout(function() { 
        this.hideCopiedText();
      }.bind(this), 2000);
    },
    hideCopiedText: function() {
      this.$refs.copiedText.classList.remove('reveal');
    },
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
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
      letter-spacing: 1px;
    }

    .hello {
      color: $almost-white;
      margin-bottom: 8px;
    }

    .message {
      color: $gray-light;
      line-height: 48px;
      margin-bottom: 40px;
    }

    .btn-primary {
      margin-bottom: 16px;
    }

    .copied-text{
      color: $blue-primary;
      font-size: 14px;
      opacity: 0;
      transition: $in-out-transition;

      &.reveal {
        opacity: 1;
      }
    }

    .sub-section {
      margin-top: 140px;

      .copyright, .built {
        color: $almost-white;
        display: block;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 4px;
      }

      a {
        text-decoration: none;
      }

      .github-logo {
        background: url('/assets/icons/github-logo.svg') no-repeat;
        display: inline-block;
        height: 18px;
        position: relative;
        top: 5px;
        width: 18px;
      }
    }
  }
}
</style>
