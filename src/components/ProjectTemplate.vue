<template>
  <div class="project-template">
    <vue-headful :title="project.displayTitle + ' | Lawrence Chang'" />
    <!-- Title -->
    <div v-scroll-reveal class="title-container">
      <h1>{{ project.title }}</h1>
      <p class="regular first-sentence">{{ project.description }}</p>
    </div>
    <!-- Stats -->
    <div v-scroll-reveal class="stats-container">
      <div>
        <p class="small">Timeframe</p>
        <p class="regular">{{ project.timeframe }}</p>
      </div>
      <div>
        <p class="small">Role</p>
        <p class="regular">{{ project.role }}</p>
      </div>
      <div>
        <p class="small">Category</p>
        <p class="regular">{{ project.category }}</p>
      </div>
    </div>
    <!-- Dynamic Content -->
    <div class="block-container">
      <div v-scroll-reveal v-for="block in project.pageContent" :key="block.index">
        <!-- Title -->
        <div v-if="block.type === 'title'" class="title-block">
          <h2>{{ block.content }}</h2>
        </div>
        <!-- Paragraph -->
        <div v-if="block.type === 'paragraph'" class="paragraph-block">
          <p class="regular">{{ block.content }}</p>
        </div>
        <!-- Bullets -->
        <div v-if="block.type === 'bullets'" class="bullet-block">
          <ul>
            <li v-for="item in block.content" :key="item.index">
              <span class="first-sentence">{{ item.firstSentence }}</span>
              <span> {{ item.remainingContent }}</span>
            </li>
          </ul>
        </div>
        <!-- Image -->
        <div v-if="block.type === 'image'" class="image-block">
          <img v-lazy="block.content" :alt="block.caption" />
          <span v-if="block.caption" class="caption">{{ block.caption }}</span>
        </div>
        <!-- Centered Paragraph -->
        <div v-if="block.type === 'paragraph-centered'" class="paragraph-block centered">
          <p class="regular">{{ block.content }}</p>
        </div>
        <!-- Clackd Placeholder -->
        <div v-if="block.type === 'clackd-placeholder'" class="clackd-placeholder-block">
          <div class="placeholder-image" />
        </div>
      </div>
    </div>
    <!-- Previous / Next -->
    <div class="previous-next-container">
      <div class="previous">
        <router-link :to="'/work/' + project.previousId" @click="gaTrackClick('Project - ' + project.id, 'Previous - ' + project.previousId)">
          <h1><span class="previous-label">previous </span><span class="previous-title">{{ project.previousId }}</span></h1>
        </router-link>
      </div>
      <div class="next">
        <router-link :to="'/work/' + project.nextId" @click="gaTrackClick('Project - ' + project.id, 'Next - ' + project.nextId)">
          <h1><span class="next-label">next </span><span class="next-title">{{ project.nextId }}</span></h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import clackd from '@/data/clackd.json';
import credera from '@/data/credera.json';
import wff from '@/data/wff.json';

export default {
  name: 'ProjectTemplate',
  props: {
    projectId: String
  },
  data() {
    return {
      project: this.getProject(this.projectId)
    }
  },
  methods: {
    getProject: function(projectId) {
      switch(projectId) {
        case 'clackd': 
          return clackd;
        case 'credera': 
          return credera;
        case 'wff':
          return wff;
        default:
          this.$router.push('/');
      }
    },
    gaTrackClick: function(category, label) {
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.project-template {
  .title-container {
    margin-bottom: 100px;

    @media (max-width: $mobile-breakpoint) {
      margin-bottom: 60px;
    }
  }

  .stats-container {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 20px;
      grid-template-columns: 1fr;
    }

    p {
      transition: $ease-in;
      &.small {
        @include theme() {
          color: theme-get('project-stat-label-color');
        }
      }
      &.regular {
        @include theme() {
          color: theme-get('project-stat-description-color');
        }
      }
    }
  }

  .block-container {
    margin-bottom: 140px;
  }

  .title-block, .image-block {
    margin-top: 100px;

    @media (max-width: $mobile-breakpoint) {
      margin-top: 60px;
    }
  }

  .paragraph-block, .bullet-block {
    margin-top: 24px;
  }

  .paragraph-block {
    &.centered {
      p {
        text-align: center;

        @media (max-width: $mobile-breakpoint) {
          text-align: left;
        }
      }
    }
  }

  .bullet-block {
    padding-left: 20px;

    ul {
      list-style: none;
    }

    li {
      &::before {
        content: '\2022';
        display: inline-block;
        font-size: 28px;
        margin-left: -1em;
        width: 1em;
        @include theme() {
          color: theme-get('p-regular-color');
        }
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 40px;
      transition: $ease-in;
      @include theme() {
        color: theme-get('p-regular-color');
      }

      &.first-sentence {
        @include theme() {
          color: theme-get('default-theme-inverse');
        }
      }
    }
  }

  .image-block {
    img {
      margin-bottom: 20px;
      width: 100%;
    }

    .caption {
      display: block;
      font-size: 16px;
      font-style: italic;
      font-weight: 300;
      text-align: center;
      @include theme() {
        color: theme-get('default-theme-inverse');
      }
    }
  }

  .clackd-placeholder-block {
    margin: 200px 0;
    @media (max-width: 800px) {
      margin: 100px 0;
    }
    .placeholder-image {
      @include theme() {
        background-image: theme-get('clackd-soon-tm-photo');
      }
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 280px;
      margin: 0 auto;
      transition: $ease-in;
      width: 800px;

      &:hover {
        transform: scale(1.01);
      }

      @media (max-width: 800px) {
        width: 90vw;
      }
    }
  }

  .previous-next-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 140px;

    .next {
      text-align: right;
    }

    .previous, .next {
      &:hover {
        .previous-title, .next-title {
          transition: $ease-in;
          color: $blue-secondary;
        }
      }
    }

    a {
      text-decoration: none;
    }

    .previous-label, .next-label {
      @include theme() {
        color: theme-get('prev-next-label-color');
      }
    }

    .previous-title, .next-title {
      @include theme() {
        color: theme-get('prev-next-title-color');
      }
    }

    @media (max-width: $mobile-breakpoint) {
      grid-template-columns: 1fr;
      .next {
        text-align: left;
      }
      .previous-label, .next-label {
        display: block;
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
