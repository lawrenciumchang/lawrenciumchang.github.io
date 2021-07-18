<template>
  <div class="header">
    <div class="left">
      <div class="name-container">
        <img class="profile-photo" v-lazy="profilePhotoSrc">
        <router-link to="/" @click="gaTrackClick('Header, Home')">lawrence chang</router-link>
      </div>
      <!-- <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round dark" @click="toggleThemeElement($event.currentTarget)"></span>
        </div>
      </div> -->
    </div>
    <div class="right">
      <router-link to="" @click="gaTrackClick('Header, UX Design')">ux design</router-link>
      <router-link to="/photography" @click="gaTrackClick('Header, Photography')">photography</router-link>
      <router-link to="" @click="gaTrackClick('Header, About')">about</router-link>
      <span class="get-in-touch" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Header, Get In Touch')">get in touch</span>
      <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round dark" @click="toggleThemeElement($event.currentTarget)"></span>
        </div>
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
    toggleThemeElement: function(element) {
      element.classList.toggle('dark');
    },
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

  .left {
    .name-container {
      align-items: center;
      display: flex;
      grid-column-gap: 12px;
    }
    
    .toggle-container {
      display: none;
    }

    @media (max-width: $mobile-breakpoint) {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .toggle-container {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .right {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    grid-column-gap: 32px;

    @media (max-width: $mobile-breakpoint) {
      justify-content: flex-start;

      .toggle-container {
        display: none;
      }
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

  .theme-toggle {
    position: relative;
    display: inline-block;
    width: 76px;
    height: 40px;
    -webkit-tap-highlight-color: transparent;
  }

  .theme-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #27173a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 5px;
    bottom: 5px;
    background-color: #ffc207;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider.dark {
    background-color: #27173a;
  }

  .slider.dark:before {
    -webkit-transform: translateX(52px);
    -ms-transform: translateX(52px);
    transform: rotate(40deg) translate(28px, -23px);
    box-shadow: inset -10px 0 0 3px #ffc207;
    background-color: #27173a;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>
