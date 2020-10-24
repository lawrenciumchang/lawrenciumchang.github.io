<template>
  <div class="project-template">
    <vue-headful :title="'Design | ' + project.title" />
    <div v-scroll-reveal class="title-container section">
      <router-link to="/" @click.native="gaTrackClick('Project', 'Home Button')" class="navigation-link">
        ↑Home
      </router-link>
      <h1 class="title">{{ project.title }}</h1>
      <label class="description">{{ project.description }}</label>
    </div>
    <div v-scroll-reveal class="intro-container section" :class="{ 'padding-short': !project.overview && !project.role }">
      <div class="project-overview" v-if="project.overview">
        <h5 class="overview">{{ project.overview }}</h5>
      </div>
      <div class="project-roel" v-if="project.role">
        <h5 class="role-header">My Role</h5>
        <ul>
          <li v-for="role in project.role" :key="role">{{ role }}</li>
        </ul>
      </div>
    </div>

    <!-- Photo Layout: 1 -->
    <div v-if="project.photoLayout == 1" class="photos-container layout-1">
      <div v-scroll-reveal class="photo-wrapper" v-for="photo in project.photos" :key="photo.title">
        <img v-lazy="photo.src" :class="{ 'display-border': photo.displayBorder }" />
      </div>
    </div>

    <!-- Photo Layout: 2 or 3 -->
    <div v-if="project.photoLayout == 2 || project.photoLayout == 3" class="photos-container photos-container-desktop" :class="{ 'layout-2': project.photoLayout == 2, 'layout-3': project.photoLayout == 3 }">
      <div class="column">
        <div v-scroll-reveal class="photo-wrapper" v-for="photo in project.photosCol1" :key="photo.title">
          <img v-lazy="photo.src" :class="{ 'display-border': photo.displayBorder }" />
        </div>
      </div>
      <div class="column">
        <div v-scroll-reveal class="photo-wrapper" v-for="photo in project.photosCol2" :key="photo.title">
          <img v-lazy="photo.src" :class="{ 'display-border': photo.displayBorder }" />
        </div>
      </div>
      <div v-if="project.photoLayout == 3" class="column">
        <div v-scroll-reveal class="photo-wrapper" v-for="photo in project.photosCol3" :key="photo.title">
          <img v-lazy="photo.src" :class="{ 'display-border': photo.displayBorder }" />
        </div>
      </div>
    </div>
    <div v-if="project.photoLayout == 2 || project.photoLayout == 3" class="photos-container photos-container-mobile" :class="{ 'layout-2': project.photoLayout == 2, 'layout-3': project.photoLayout == 3 }">
      <div v-scroll-reveal class="photo-wrapper" v-for="photo in project.photos" :key="photo.title">
        <img v-lazy="photo.src" :class="{ 'display-border': photo.displayBorder }" />
      </div>
    </div>
    
    <div v-scroll-reveal class="more-container section" :class="{ 'padding-short': !project.more}">
      <p v-html="project.more"></p>
    </div>
    <div class="navigation-container section">
      <div v-scroll-reveal class="previous">
        <div v-if="project.previous">
          <router-link :to="project.previous.url" @click.native="gaTrackClick('Project', 'Previous project - Navigating to ' + project.previous.title)" class="navigation-link">
            ←Previous Project
          </router-link>
          <h2>{{ project.previous.title }}</h2>
          <label>{{ project.previous.description }}</label>
        </div>
      </div>
      <div v-scroll-reveal class="next">
        <div v-if="project.next">
          <router-link :to="project.next.url" @click.native="gaTrackClick('Project', 'Next project - Navigating to ' + project.next.title)" class="navigation-link">
            Next Project→
          </router-link>
          <h2>{{ project.next.title }}</h2>
          <label>{{ project.next.description }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects.json';

export default {
  name: 'ProjectTemplate',
  props: {
    projectId: String
  },
  data() {
    return {
      project: this.getProject(this.projectId),
    }
  },
  methods: {
    getProject: function(projectId) {
      let project = [];
      let projectIndex;

      // Get project
      projects.forEach((element, index) => {
        if (projectId == element.id) {
          project = element;
          projectIndex = index;
        }
      });

      // If project not found, redirect to Home
      if (project.length == 0) {
        this.$router.push('/');
      }

      // Get and set previous project data on object
      if (projects[projectIndex-1]) {
        let previous = {};
        previous.url = projects[projectIndex-1].id;
        previous.title = projects[projectIndex-1].title;
        previous.description = projects[projectIndex-1].description;
        project.previous = previous;
      }

      // Get and set next project data on object
      if (projects[projectIndex+1]) {
        let next = {};
        next.url = projects[projectIndex+1].id;
        next.title = projects[projectIndex+1].title;
        next.description = projects[projectIndex+1].description;
        project.next = next;
      }

      // Set up photo structure depending on photoLayout property
      if (project.photoLayout == 2) {
        let photosCol1 = [];
        let photosCol2 = [];

        project.photos.forEach((photo, index) => {
          if (index % 2 == 0) {
            photosCol1.push(photo);
          } else if (index % 2 == 1) {
            photosCol2.push(photo);
          }
        });

        project.photosCol1 = photosCol1;
        project.photosCol2 = photosCol2;
      } else if (project.photoLayout == 3) {
        let photosCol1 = [];
        let photosCol2 = [];
        let photosCol3 = [];

        project.photos.forEach((photo, index) => {
          if (index % 3 == 0) {
            photosCol1.push(photo);
          } else if (index % 3 == 1) {
            photosCol2.push(photo);
          } else if (index % 3 == 2) {
            photosCol3.push(photo);
          }
        });

        project.photosCol1 = photosCol1;
        project.photosCol2 = photosCol2;
        project.photosCol3 = photosCol3;
      }

      return project;
    },
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.project-template {
  .navigation-link {
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  .section {
    padding: 80px 0;

    &.padding-short {
      padding: 40px 0;
    }
  }

  .title-container {
    border-bottom: 1px solid $gray-border;
    margin-top: 100px;

    .navigation-link {
      margin-bottom: 20px;
    }

    .title {
      line-height: 56px;
      margin-bottom: 12px;
    }
  }

  .intro-container{
    display: grid;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-columns: 1.5fr 1fr;

    .project-overview, .project-role {
      align-content: center;
      display: grid;
    }

    .overview {
      width: 90%;

      @media (max-width: $mobile-breakpoint) {
        width: 100%;
      }
    }

    .role-header {
      margin-bottom: 24px;
    }

    li {
    &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;

      .over {
        width: 100%;
      }
    }
  }

  .photos-container {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .photo-wrapper {
      display: flex;
      img {
        width: 100%;

        &.display-border {
          border: 1px solid $gray-border;
        }
      }
    }

    .column {
      align-content: baseline;
      display: grid;
      grid-row-gap: 20px;
    }

    &.layout-1 {
      grid-template-columns: 1fr;
    }

    &.layout-2 {
      grid-template-columns: 1fr 1fr;
    }

    &.layout-3 {
      grid-template-columns: 1fr 1fr 1fr;
    }

    &.photos-container-desktop {
      @media (max-width: $mobile-breakpoint) {
        display: none;
      }
    }

    &.photos-container-mobile {
      grid-template-columns: 1fr;

      @media (min-width: $mobile-breakpoint+1) {
        display: none;
      }
    }
  }

  .navigation-container {
    border-top: 1px solid $gray-border;
    display: grid;
    grid-column-gap: 72px;
    grid-template-columns: 1fr 1fr;
    padding: 80px 0 100px;

    .navigation-link {
      margin-bottom: 0;
    }

    .previous, .next {
      a {
        margin-bottom: 20px;
      }

      h2 {
        margin-bottom: 12px;
      }
    }

    .previous {
      text-align: left;
    }

    .next {
      text-align: right;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 40px;
      grid-template-columns: 1fr;
      padding: 40px 0 48px;

      .next {
        text-align: left;
      }
    }
  }
}
img[lazy=loading] {
  opacity: 0;
  transition: $hover-transition;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
