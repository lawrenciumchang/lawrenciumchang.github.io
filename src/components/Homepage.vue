<template>
  <div class="homepage">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="about-me section">
      <h1>Hi, I'm Lawrence. <span>A UX Designer + Photographer.</span></h1>
      <h2>I work at Credera where I craft digital solutions for our clients and bring ideas to life through thoughtful and functional design.</h2>
      <h2>Take a look at my <a @click="showPhotoSwipe(); gaTrackClick('Home Page', 'View Resume')">resume</a> to see what I’ve been up over the years, or ↓scroll down↓ to see my work in finer detail.</h2>
    </div>
    <div class="projects-list section">
      <div class="project" v-for="project in projects" v-bind:key="project.id">
        <h2><router-link :to="project.id" @click.native="scrollToTop(); gaTrackClick('Home Page', 'View Project - ' + project.name)"><span>{{ project.name }}</span></router-link></h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <div class="bullets section">
      <h2>Things I can help you with:</h2>
      <ul>
        <li>User interface and experience design</li>
        <li>User interviews and research</li>
        <li>Usability audit and user testing</li>
        <li>Design systems</li>
        <li>Data-driven design</li>
        <li>Design sprints</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { PhotoSwipe } from 'v-photoswipe';

export default {
  name: 'Homepage',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  data() {
    return {
      photoswipeOptions: {
        isOpen: false,
        isOpenGallery: false,
        options: {
          index: 0
        },
        optionsGallery: {},
        items: [
          {
            src: require('@/assets/test_resume_1x.png'),
            w: 1080,
            h: 1398
          }
        ]
      },
      projects: [
        {
          id: 'credera',
          name: 'Credera',
          description: 'Rebrand + replatform'
        },
        {
          id: 'gundam-kingdom',
          name: 'Gundam Kingdom',
          description: 'E-Commerce platform design'
        },
        {
          id: 'seatz',
          name: 'sEATz',
          description: 'Mobile service design'
        },
        {
          id: 'icon-go',
          name: 'Icon GO',
          description: 'Mobile experience design'
        },
        {
          id: 'adidas',
          name: 'Adidas',
          description: 'Product refinement design'
        },
        {
          id: 'pinnacle-propane',
          name: 'Pinnacle Propane',
          description: 'Functional interface design'
        },
        {
          id: 'anylist',
          name: 'AnyList',
          description: 'Usability assessment'
        },
        {
          id: 'music-player',
          name: 'Music Player',
          description: 'Design exploration'
        },
        {
          id: 'other-things',
          name: 'Other Things',
          description: 'Collection of miscellaneous works'
        }
      ]
    }
  },
  methods: {
    showPhotoSwipe: function() {
      this.photoswipeOptions.isOpen = true;
    },
    hidePhotoSwipe: function() {
      this.photoswipeOptions.isOpen = false;
    },
    scrollToTop: function() {
      window.scrollTo(0,0);
    },
    gaTrackClick: function(category, label) {
      var host = window.location.hostname;
      if (host != 'localhost') {
        this.$ga.event(category, 'click', label);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.homepage {
  .section {
    padding: 80px 0px;

    &:not(:last-child) {
      border-bottom: 1px solid $gray-border;
    }
  }

  .about-me {
    margin-top: 100px;

    h1, h2, span {
      line-height: 36px;
    }

    h1, h2 {
      &:not(:last-child) {
         margin-bottom: 40px;
      }
    }

    h2, span {
      color: $almost-black;
      font-weight: 500;
    }

    span {
      font-size: 24px;
    }
  }

  .projects-list {
    .project {
      h2 {
        a {
          color: $almost-black;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          text-decoration: none;
          transition: $hover-transition;

          &:hover {
            color: $blue-hover;
            cursor: pointer;
          }
        }
      }

      &:not(:last-child) {
         margin-bottom: 60px;
      }
    }
  }
  
  .bullets {
    margin-bottom: 80px;

    h2 {
      margin-bottom: 40px;
    }

    ul {
      display: grid;
      grid-column-gap: 72px;
      grid-row-gap: 40px;
      grid-template-columns: 1fr 1fr;
      list-style: circle;

      @media (max-width: $mobile-breakpoint) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
