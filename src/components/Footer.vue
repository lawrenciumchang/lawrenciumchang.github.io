<template>
  <div class="footer">
    <div class="container">
      <span class="hello">Hello there!</span>
      <span class="message">Let's grab a virtual coffee and chat about anything from photography to design to mechanical keyboards.</span>
      <div class="btn-primary" data-clipboard-text="lawrencium.chang@gmail.com" v-on:click="revealCopiedText()">Get in touch</div>
      <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      <span class="copyright">All images and content Copyright © 2015-{{ currentYear }} Lawrence Chang</span>
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
      var host = window.location.hostname;
      if (host != 'localhost') {
        ga('send', 'event', category, 'click' , label);
      }
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
      margin-bottom: 12px;
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

    .copyright {
      color: $gray-light;
      display: block;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 160px;
    }
  }
}
</style>
