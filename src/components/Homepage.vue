<template>
  <div class="homepage">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="intro section">
      <div class="blurb">
        <h1>Hi, I'm <span class="name">Lawrence</span>.</h1>
        <h1>A UX Designer + Photographer.</h1>
      </div>
      <div class="paragraph">
        <p>I work at Credera where I craft digital solutions for our clients and bring ideas to life through thoughtful and functional design.</p>
        <p>Take a look at my <a @click="showPhotoSwipe(); gaTrackClick('Home Page', 'View Resume')">resume</a> to see what I’ve been up over the years, or ↓scroll down↓ to see my work in finer detail.</p>
      </div>
    </div>
    <div class="projects-list section">
      <div class="project" v-for="project in projects" v-bind:key="project.id">
        <router-link :to="project.id" @click.native="scrollToTop(); gaTrackClick('Home Page', 'View Project - ' + project.title)">
          <h2 class="project-title">{{ project.title }}</h2>
          <label class="project-description">{{ project.description }}</label>
        </router-link>
      </div>
    </div>
    <div class="more-about section">
      <div class="paragraph">
        <h3>You'll find me always building or learning something new.</h3>
        <p>My journey began as an electrical engineer and full-stack developer. I’ve always had an appreciation for the way things were made and how humans interacted with those creations, which led me to the world of digital experience design.</p>
        <p>Over the years I’ve had the opportunity to work with numerous clients and talented individuals to build new products and create great experiences along the way. Whether inheriting an existing system or designing a product from scratch, you will find me striving to creating something awesome.</p>
      </div>
      <div class="bullets">
        <h4>Things I can help you with:</h4>
        <ul>
          <li>User Interface + Experience Design</li>
          <li>Wireframing + Prototyping</li>
          <li>Analytics-Driven Design</li>
          <li>User Research + Testing</li>
          <li>Design Systems</li>
          <li>Design Sprints + Project Management</li>
        </ul>
      </div>
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
            src: require('@/assets/images/test_resume_1x.png'),
            w: 1080,
            h: 1398
          }
        ]
      },
      projects: [
        {
          id: 'credera',
          title: 'Credera',
          description: 'Rebrand + replatform'
        },
        {
          id: 'gundam-kingdom',
          title: 'Gundam Kingdom',
          description: 'E-Commerce platform design'
        },
        {
          id: 'seatz',
          title: 'sEATz',
          description: 'Mobile service design'
        },
        {
          id: 'icon-go',
          title: 'Icon GO',
          description: 'Mobile experience design'
        },
        {
          id: 'adidas',
          title: 'Adidas',
          description: 'Product refinement design'
        },
        {
          id: 'pinnacle-propane',
          title: 'Pinnacle Propane',
          description: 'Functional interface design'
        },
        {
          id: 'anylist',
          title: 'AnyList',
          description: 'Usability assessment'
        },
        {
          id: 'music-player',
          title: 'Music Player',
          description: 'Design exploration'
        },
        {
          id: 'other-things',
          title: 'Other Things',
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
    padding: 100px 0px;
  }

  .intro {
    display: grid;
    grid-column-gap: 72px;
    grid-row-gap: 40px;
    grid-template-columns: 1fr 1fr;
    margin-top: 160px;

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }

    .name {
      color: $blue-hover;
    }

    .paragraph {
      margin-top: 100px;

      @media (max-width: $mobile-breakpoint) {
        margin-top: 0;
      }

      p:not(:last-child) {
        margin-bottom: 40px;
      }
    }
  }

  .projects-list {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: $desktop-breakpoint) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }

    .project {
      a {
        text-decoration: none;
      }

      .project-title {
        color: $almost-black;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 12px;
        text-decoration: none;
        transition: $hover-transition;
      }

      &:not(:last-child) {
         margin-bottom: 60px;
      }

      &:hover {
        cursor: pointer;

        h2 {
          color: $blue-hover;
        }
      }
    }
  }
  
  .more-about {
    display: grid;
    grid-column-gap: 160px;
    grid-row-gap: 80px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
    }

    h3 {
      margin-bottom: 32px;
    }

    p:not(:last-child) {
      margin-bottom: 40px;
    }

    .bullets {
      align-content: center;
      display: grid;

      h4 {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
