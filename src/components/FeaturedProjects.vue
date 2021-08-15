<template>
  <div class="featured-projects">
    <h1 v-scroll-reveal>ux design</h1>
    <div class="projects-section">
      <div v-scroll-reveal class="project" v-for="project in projects" :key="project.id">
        <router-link :to="'work/' + project.id" @click="gaTrackClick('Home', 'View Project - ' + project.title)">
          <div class="image-container">
            <img v-lazy="project.coverPhotoSrc" />
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description small">{{ project.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.json';

export default {
  name: 'FeaturedProjects',
  data() {
    return {
      projects: projects
    }
  },
  methods: {
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.featured-projects {
  @include page-layout;
  padding-bottom: 100px;

  .projects-section {
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
        margin-bottom: 28px;
        overflow: hidden;

        img {
          transition: $ease-in;
          width: 100%;
        }
      }

      .project-title {
        margin-bottom: 8px;
        transition: $ease-in;
      }

      &:hover {
        cursor: pointer;

        img {
          transform: scale(1.01);
        }

        .project-title {
          color: $blue-secondary;
        }
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
