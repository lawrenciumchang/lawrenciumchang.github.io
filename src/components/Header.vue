<template>
  <div class="header">
    <div class="left">
      <div class="name-container">
        <router-link class="name" to="/" @click="gaTrackClick('Header', 'Home')"><img class="profile-photo" v-lazy="profilePhotoSrc">lawrence chang</router-link>
      </div>
      <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round" :class='darkTheme ? "dark" : ""' @click="toggleTheme(); changeToggleStyle($event.currentTarget); gaTrackClick('Header', 'Toggle Theme')"></span>
        </div>
      </div>
    </div>
    <div class="right">
      <router-link to="/work/credera" @click="gaTrackClick('Header', 'UX Design')">ux design</router-link>
      <router-link to="/photography" @click="gaTrackClick('Header', 'Photography')">photography</router-link>
      <router-link to="/about" @click="gaTrackClick('Header', 'About')">about</router-link>
      <div class="get-in-touch-container">
        <a class="get-in-touch" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Header', 'Get In Touch')">get in touch</a>
        <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      </div>
      <div class="toggle-container">
        <div class="theme-toggle">
          <span class="slider round" :class='darkTheme ? "dark" : ""' @click="toggleTheme(); changeToggleStyle($event.currentTarget); gaTrackClick('Header', 'Toggle Theme')"></span>
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
      profilePhotoSrc: '../assets/images/avatars/memoji_avatar.png'
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
  padding-bottom: 40px;
  padding-top: 40px;

  @media (max-width: $mobile-breakpoint) {
    grid-row-gap: 20px;
    grid-template-columns: 1fr;
    padding-bottom: 0;
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
      grid-template-columns: 1fr auto;

      .toggle-container {
        align-items: center;
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

    .toggle-container {
      display: flex;
    }

    @media (max-width: $mobile-breakpoint) {
      display: grid;
      grid-row-gap: 8px;
      text-align: right;

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
      border-color: theme-get('default-theme-inverse');
    }
  }

  .get-in-touch-container {
    position: relative;
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
      top: 28px;
    }
  }

  .theme-toggle {
    display: inline-block;
    height: 40px;
    position: relative;
    width: 76px;
    -webkit-tap-highlight-color: transparent;
  }

  .theme-toggle input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  .slider {
    -webkit-transition: 0.4s;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    @include theme() {
      background-color: theme-get('theme-toggle-bg-color');
    }
    &:hover {
      background-color: $blue-secondary;
    }
  }

  .slider:before {
    background-color: $yellow-primary;
    bottom: 5px;
    content: '';
    height: 30px;
    left: 5px;
    position: absolute;
    width: 30px;
    transition: 0.4s;
    -webkit-transition: 0.4s;
  }

  .slider.dark {
    @include theme() {
      background-color: theme-get('theme-toggle-bg-color');
    }
    &:hover {
      background-color: $blue-secondary;
      &:before {
        background-color: $blue-secondary !important;
      }
    }
  }

  .slider.dark:before {
    box-shadow: inset -10px 0 0 3px $yellow-primary;
    transform: rotate(40deg) translate(28px, -23px);
    -webkit-transform: rotate(40deg) translate(28px, -23px);
    -ms-transform: rotate(40deg) translate(28px, -23px);
    @include theme() {
      background-color: theme-get('theme-toggle-bg-color');
    }
    &:hover {
      background-color: $blue-secondary;
    }
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
img[lazy=loading] {
  opacity: 0;
  transition: $ease-in;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
