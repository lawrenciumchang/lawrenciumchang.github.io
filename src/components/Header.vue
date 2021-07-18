<template>
  <div class="header">
    <div class="left">
      <img class="profile-photo" v-lazy="profilePhotoSrc">
      <router-link to="/" @click="gaTrackClick('Header, Home')">lawrence chang</router-link>
    </div>
    <div class="right">
      <router-link to="" @click="gaTrackClick('Header, UX Design')">ux design</router-link>
      <router-link to="/photography" @click="gaTrackClick('Header, Photography')">photography</router-link>
      <router-link to="" @click="gaTrackClick('Header, About')">about</router-link>
      <span class="get-in-touch" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Header, Get In Touch')">get in touch</span>
      <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      <div class="theme-toggle">

      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Header',
  mounted: function() {
    new ClipboardJS('.get-in-touch');
  },
  data() {
    return {
      profilePhotoSrc: '../assets/images/avatars/avatar1.png'
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
.header {
  @include page-layout;
  display: grid;
  grid-template-columns: auto 1fr;
  padding-top: 40px;

  @media (max-width: $mobile-breakpoint) {
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
  }

  .left, .right {
    align-items: center;
    display: flex;
  }

  .left {
    grid-column-gap: 12px;
  }

  .right {
    justify-content: flex-end;
    grid-column-gap: 32px;

    @media (max-width: $mobile-breakpoint) {
      justify-content: flex-start;
    }
  }

  .profile-photo {
    border: 2px solid $gray-01;
    border-radius: 200px;
    height: 44px;
    width: 44px;
  }

  .copied-text {
    font-size: 14px;
    opacity: 0;
    position: absolute;
    top: 80px;
    transition: $in-out-transition;

    &.reveal {
      opacity: 1;
    }
  }
}
</style>
