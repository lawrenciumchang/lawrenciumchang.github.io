<template>
  <div class="about">
    <vue-headful title="About | Lawrence Chang" />
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="bio contained">
      <div v-scroll-reveal class="image-container">
        <img class="profile-image" v-lazy="'/assets/images/about/profile.png'" />
      </div>
      <div class="about-container">
        <h1 v-scroll-reveal>about</h1>
        <p v-scroll-reveal class="regular first-sentence">I am a senior ux designer based in Houston, Texas, currently working at Credera. I’ve touched everything from circuit design to back-end API architecture to front-end development, but now focus on building desirable experiences through design.</p>
        <p v-scroll-reveal class="regular">Check out my <a v-scroll-reveal class="resume-link" @click="showPhotoSwipe(); gaTrackClick('About', 'Resume')">resume</a> to see what I’ve been up to over the years or scroll down to learn some of the things I enjoy doing in my free time!</p>
      </div>
    </div>
    <div class="currently">
      <div v-scroll-reveal class="type-container contained">
        <h2 class="currently-text">currently</h2>
        <vue-typed-js :strings="['reading', 'watching', 'playing', 'listening']" :smartBackspace="true" :backSpeed="50" :backDelay="1600" :loop="true" :startDelay="1600" :showCursor="false">
          <h2 class="typing"></h2>
        </vue-typed-js>
      </div>
      <div v-scroll-reveal class="overflow-container">
        <div class="scroll-container">
          <div class="item-container" v-for="item in currentlyList" :key="item.caption">
            <img v-lazy="item.img" />
            <p class="small">{{ item.caption }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhotoSwipe } from 'v-photoswipe';
import currentlyList from '@/data/currentlyList.json';

export default {
  name: 'About',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  data() {
    return {
      currentlyList: currentlyList,
      photoswipeOptions: {
        isOpen: false,
        isOpenGallery: false,
        options: {
          index: 0
        },
        items: [
          {
            src: require('@/assets/images/resume.png'),
            w: 2160,
            h: 2796
          }
        ]
      }
    }
  },
  methods: {
    showPhotoSwipe: function() {
      this.photoswipeOptions.isOpen = true;
    },
    hidePhotoSwipe: function() {
      this.photoswipeOptions.isOpen = false;
    },
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  min-height: 110vh;
  padding-top: 100px;

  .contained {
    @include page-layout;
  }

  .bio {
    display: grid;
    grid-column-gap: 60px;
    grid-template-columns: auto 1fr;
    margin-bottom: 100px;

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 40px;
      grid-template-columns: 1fr;
    }
  }

  .image-container {
    width: 380px;

    @media (max-width: $mobile-breakpoint) {
      width: calc(100vw - 48px);
    }
  }

  .profile-image {
    max-width: 380px;

    @media (max-width: $mobile-breakpoint) {
      max-width: calc(100vw - 48px);
    }
  }

  .type-container {
    display: flex;
    margin-bottom: 24px;
  }

  .currently-text {
    display: inline-flex;
    margin-right: 8px;
  }

  .typed-element {
    display: inline-flex;
  }

  p {
    margin-bottom: 20px;
  }

  .resume-link {
    font-size: 24px;
    line-height: 40px;
    @include theme() {
      color: theme-get('p-regular-color');
    }
    &:hover {
      color: $blue-secondary;
    }
  }

  .currently {
    margin-bottom: 100px;
  }

  .overflow-container {
    color: $white;
    display: flex;
    overflow-x: hidden;
  }

  .scroll-container {
    display: flex;
    overflow-x: scroll;
    padding: 0 calc(50% - 600px);

    @media (max-width: $desktop-breakpoint) {
      padding: 0 24px;
    }
  }

  .item-container {
    // display: grid;
    // grid-row-gap: 16px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    img {
      height: 320px;
      margin-bottom: 16px;
    }

    p {
      width: 75%;
    }
  }
}
</style>
