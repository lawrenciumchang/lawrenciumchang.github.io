<template>
  <div class="project-template">
    <v-photoswipe :isOpen="photoswipeOptions.isOpen" :items="photoswipeOptions.items" :options="photoswipeOptions.options" @close="hidePhotoSwipe"></v-photoswipe>
    <div v-scroll-reveal class="title-container section">
      <router-link to="/" @click.native="gaTrackClick('Project', 'Home Button')" class="navigation-link">
        ↑Home
      </router-link>
      <h1 class="title">{{ project.title }}</h1>
      <label class="description">{{ project.description }}</label>
    </div>
    <div v-scroll-reveal class="intro-container section">
      <div v-if="project.overview">
        <h5>{{ project.overview }}</h5>
      </div>
      <div v-if="project.role">
        <h5>My Role</h5>
        <ul>
          <li v-for="role in project.role" :key="role">{{ role }}</li>
        </ul>
      </div>
    </div>
    <div v-scroll-reveal v-if="project.photos && project.photos[0]" class="key-photo-container">
      <img v-lazy="project.photos[0].src" @click="showPhotoSwipe(0); gaTrackClick('project', 'Photo - ' + project.title + ' - ' + project.photos[0].title)" />
    </div>
    <div v-scroll-reveal v-if="project.more" class="more-container section">
      <p>{{ project.more }}</p>
    </div>
    <div v-if="!project.more" class="spacer section"></div>
    <div v-if="project.photos && project.photos[1]" class="photos-container">
      <div v-scroll-reveal class="photo-wrapper" v-for="(photo, index) in project.photos" :key="photo.title">
        <img v-if="index != 0" v-lazy="photo.src" @click="showPhotoSwipe(index); gaTrackClick('project', 'Photo - ' + project.title + ' - ' + photo.title)" />
      </div>
    </div>
    <div class="navigation-container section">
      <div v-scroll-reveal class="previous">
        <div v-if="project.previous">
          <router-link :to="project.previous.url" @click.native="gaTrackClick('project', 'Previous project - Navigating to ' + project.previous.title)" class="navigation-link">
            ←Previous Project
          </router-link>
          <h2>{{ project.previous.title }}</h2>
          <label>{{ project.previous.description }}</label>
        </div>
      </div>
      <div v-scroll-reveal class="next">
        <div v-if="project.next">
          <router-link :to="project.next.url" @click.native="gaTrackClick('project', 'Next project - Navigating to ' + project.next.title)" class="navigation-link">
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
import { PhotoSwipe } from 'v-photoswipe';

export default {
  name: 'ProjectTemplate',
  components: {
    'v-photoswipe': PhotoSwipe
  },
  props: {
    projectId: String
  },
  data() {
    return {
      project: this.getProject(this.projectId),
      photoswipeOptions: {
        isOpen: false,
        isOpenGallery: false,
        options: {
          index: 0
        },
        optionsGallery: {},
        items: this.getPhotos(this.projectId)
      }
    }
  },
  methods: {
    getProject: function(projectId) {
      let project = [];
      let projectIndex;

      projects.forEach((element, index) => {
        if (projectId == element.id) {
          project = element;
          projectIndex = index;
        }
      });

      if (projects[projectIndex-1]) {
        let previous = {};
        previous.url = projects[projectIndex-1].id;
        previous.title = projects[projectIndex-1].title;
        previous.description = projects[projectIndex-1].description;
        project.previous = previous;
      }

      if (projects[projectIndex+1]) {
        let next = {};
        next.url = projects[projectIndex+1].id;
        next.title = projects[projectIndex+1].title;
        next.description = projects[projectIndex+1].description;
        project.next = next;
      }

      return project;
    },
    getPhotos: function(projectId) {
      let project = [];
      projects.forEach(element => {
        if (projectId == element.id) {
          project = element;
        }
      });
      return project.photos;
    },
    showPhotoSwipe: function(index) {
      this.photoswipeOptions.isOpen = true;
      this.$set(this.photoswipeOptions.options, 'index', index);
    },
    hidePhotoSwipe: function() {
      this.photoswipeOptions.isOpen = false;
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
.project-template {
  .navigation-link {
    display: block;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  .section {
    padding: 80px 0;
  }

  .spacer {
    margin-bottom: 40px;
    padding: 0;
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

    h5 {
      width: 90%;
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;

      h5 {
        width: 100%;
      }
    }
  }

  .photos-container {
    margin-bottom: 100px;

    .photo-wrapper {
      &:not(:first-child), &:not(:last-child) {
        img {
          margin-bottom: 40px;
        }
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

  img {
    cursor: pointer;
    width: 100%;
  }
}
::v-deep .pswp__caption__center {
  text-align: center;
}
img[lazy=loading] {
  opacity: 0;
  transition: $hover-transition;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
