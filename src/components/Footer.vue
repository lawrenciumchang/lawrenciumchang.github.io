<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <div class="left">
          <p v-scroll-reveal class="regular hello">Thanks for stopping by!</p>
          <p v-scroll-reveal class="regular message">Want to create something together or just chat? Let’s grab a virtual coffee and talk about anything from photography to design to mechanical keyboards.</p>
          <div v-scroll-reveal class="get-in-touch-container">
            <a class="get-in-touch large" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Footer, Get In Touch')">get in touch</a>
            <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
          </div>
        </div>
        <div class="right">
          <div class="group">
            <router-link to="/about" @click="gaTrackClick('Footer, About')">about</router-link>
            <router-link to="" @click="gaTrackClick('Footer, Resume')">resume</router-link>
          </div>
          <div class="group">
            <router-link to="" @click="gaTrackClick('Footer, Clackd')">clackd</router-link>
            <router-link to="" @click="gaTrackClick('Footer, Credera')">credera</router-link>
            <router-link to="" @click="gaTrackClick('Footer, WFF')">wff</router-link>
          </div>
          <div class="group">
            <router-link to="/photography" @click="gaTrackClick('Footer, Photography')">photography</router-link>
          </div>
          <div class="group">
            <router-link to="" @click="gaTrackClick('Footer, LinkedIn')">linkedin</router-link>
            <router-link to="" @click="gaTrackClick('Footer, flickr')">flickr</router-link>
          </div>
        </div>
      </div>
      <div class="sub-section">
        <span class="copyright">Copyright © {{ currentYear }} Lawrence Chang</span>
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
  @include theme() {
    background-color: theme-get('footer-bg-color');
  }

  .container {
    @include page-layout;
    padding: 100px 24px;

    .top {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin-bottom: 100px;

      @media (max-width: $mobile-breakpoint) {
        grid-template-columns: 1fr;
      }

      .left {
        margin-bottom: 20px;
      }

      .right {
        .group {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
          a {
            display: block;
            color: $white;
            text-align: right;
            &:not(:last-child) {
              margin-bottom: 12px;
            }

            @media (max-width: $mobile-breakpoint) {
              text-align: left;
            }
          }
        }
      }
    }

    .hello {
      color: $white;
      margin-bottom: 8px;
    }

    .message {
      color: $gray-05;
      margin-bottom: 32px;
    }

    .get-in-touch {
      display: block;
      color: $blue-primary;
      cursor: pointer;
      margin-bottom: 12px;
    }

    .copied-text{
      color: $white;
      font-size: 12px;
      opacity: 0;
      transition: $ease-in-out;

      &.reveal {
        opacity: 1;
      }
    }

    .copyright {
      color: $gray-05;
      display: block;
      font-size: 14px;
    }
  }
}
</style>
