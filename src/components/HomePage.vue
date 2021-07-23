<template>
  <div class="home-page">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div class="intro section">
      <div class="test-section">
        <h1>h1 header 1</h1>
        <h2>h2 header 2</h2>
        <h3>h3 header 3</h3>
        <p class="regular">paragraph regular</p>
        <p class="small">paragraph small</p>
        <label>label</label>
      </div>
      <div v-scroll-reveal class="blurb">
        <h1>Hi, I'm <span id="lawrence" class="name">Lawrence</span>.</h1>
        <h1>A UX Designer + Front End Developer.</h1>
      </div>
      <div v-scroll-reveal class="paragraph">
        <p>I work at Credera where I craft digital solutions for our clients and bring ideas to life through thoughtful and functional design.</p>
        <p>Take a look at my <a @click="showPhotoSwipe(); gaTrackClick('Home Page', 'View Resume')">resume</a> to see what I’ve been up over the years, or ↓scroll down↓ to see my work in finer detail.</p>
      </div>
    </div>
    <div class="projects-list section">
      <div v-scroll-reveal class="project" v-for="project in projects" :key="project.id">
        <router-link :to="'work/' + project.id" @click="gaTrackClick('Home Page', 'View Project - ' + project.title)">
          <div class="image-container">
            <img v-lazy="project.coverPhotoSrc" />
          </div>
          <h2 class="project-title">{{ project.title }}</h2>
          <label class="project-description">{{ project.description }}</label>
        </router-link>
      </div>
    </div>
    <div class="more-about section">
      <div v-scroll-reveal class="paragraph">
        <h3>You'll find me always building or learning something new.</h3>
        <p>My journey began as an electrical engineer and full-stack developer. I’ve always had an appreciation for how things were made and the way it affected the humans that interacted with those creations. This led me to the world of digital experience design.</p>
        <p>Over the years I’ve had the opportunity to work with numerous clients and talented individuals to build new products and create great experiences along the way. Whether inheriting an existing system or designing a product from scratch, you will find me striving to create something awesome.</p>
      </div>
      <div v-scroll-reveal class="bullets">
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
import projects from '@/data/projects.json';
import { PhotoSwipe } from 'v-photoswipe';

export default {
  name: 'HomePage',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  data() {
    return {
      projects: projects,
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
.home-page {
  .section {
    padding: 100px 0px;

    @media (max-width: $mobile-breakpoint) {
      padding: 60px 0;
    }
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
      color: $blue-secondary;
    }

    .blurb {
      width: 90%;
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
    grid-row-gap: 80px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: $desktop-breakpoint) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 40px;
      grid-template-columns: 1fr;
    }

    .project {
      a {
        text-decoration: none;
      }

      .image-container {
        display: grid;
        margin-bottom: 40px;
        overflow: hidden;

        img {
          transition: $ease-in;
          width: 100%;
        }
      }

      .project-title {
        color: $gray-01;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 12px;
        text-decoration: none;
        transition: $ease-in;
      }

      &:hover {
        cursor: pointer;

        img {
          transform: scale(1.01);
        }

        h2 {
          color: $blue-secondary;
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
img[lazy=loading] {
  opacity: 0;
  transition: $ease-in;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
