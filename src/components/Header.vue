<template>
  <div class="header">
    <div class="left">
      <div class="name-container">
        <router-link class="name" to="/" @click="gaTrackClick('Header, Home')"><img class="profile-photo" v-lazy="profilePhotoSrc">lawrence chang</router-link>
      </div>
      <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round" :class='darkTheme ? "dark" : ""' @click="toggleTheme(); changeToggleStyle($event.currentTarget)"></span>
        </div>
      </div>
    </div>
    <div class="right">
      <router-link to="" @click="gaTrackClick('Header, UX Design')">ux design</router-link>
      <router-link to="/photography" @click="gaTrackClick('Header, Photography')">photography</router-link>
      <router-link to="" @click="gaTrackClick('Header, About')">about</router-link>
      <div class="get-in-touch-container">
        <a class="get-in-touch" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Header, Get In Touch')">get in touch</a>
        <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      </div>
      <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round" :class='darkTheme ? "dark" : ""' @click="toggleTheme(); changeToggleStyle($event.currentTarget)"></span>
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
  props: {
    darkTheme: Boolean
  },
  methods: {
    toggleTheme: function () {
      this.$emit('toggleTheme');
    },
    changeToggleStyle: function(element) {
      element.classList.toggle('dark');
    },
    revealCopiedText: function() {
      this.$refs.copiedText.classList.add('reveal');
      setTimeout(function() { 
        this.hideCopiedText();
      }.bind(this), 1600);
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
      img {
        margin-right: 12px;
        
      }

      .name {
        align-items: center;
        display: flex;
        text-decoration: none;
      }
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
    border: 2px solid;
    border-radius: 200px;
    height: 44px;
    transition: $ease-in;
    width: 44px;

    @include theme() {
      border-color: theme-get('border-color');
    }
  }

  .get-in-touch-container {
    position: relative;
  }

  .get-in-touch {
    color: $blue-primary;
    cursor: pointer;
  }

  .copied-text {
    font-size: 12px;
    right: 0;
    opacity: 0;
    position: absolute;
    text-align: right;
    top: 36px;
    transition: $ease-in-out;
    width: max-content;

    &.reveal {
      opacity: 1;
    }

    @include theme() {
      color: theme-get('header-copied-text-color');
    }

    @media (max-width: $mobile-breakpoint) {
      top: 48px;
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
    background-color: $yellow-primary;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider.dark {
    background-color: #27173a;
  }

  .slider.dark:before {
    -webkit-transform: rotate(40deg) translate(28px, -23px);
    -ms-transform: rotate(40deg) translate(28px, -23px);
    transform: rotate(40deg) translate(28px, -23px);
    box-shadow: inset -10px 0 0 3px $yellow-primary;
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
