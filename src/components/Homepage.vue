<template>
  <div class="homepage">
    <div class="about-me section">
      <h1>Hi, I'm Lawrence. <span>A UX Designer and photographer based in Houston, TX.</span></h1>
      <h2>I work at Credera where I help our clients craft digital solutions that better impact their business and their users.</h2>
      <h2>Take a look at my <a>resume</a> to see what I’ve been up over the years, or scroll down to see my work in finer detail.</h2>
    </div>
    <div class="projects-list section">
      <div class="project" v-for="project in projects" v-bind:key="project.id">
        <h2><router-link :to="project.id"><span v-html="project.titleMarkup ? project.titleMarkup : project.name"></span></router-link></h2>
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
export default {
  name: 'Homepage',
  data() {
    return {
      projects: [
        {
          id: 'gundam-kingdom',
          name: 'Gundam Kingdom E-Commerce Platform',
          titleMarkup: 'Gundam Kingdom <span class="underline">E-Commerce Platform</span>',
          description: 'Short description here.'
        },
        {
          id: 'seatz',
          name: 'sEATz Mobile App',
          titleMarkup: 'sEATz <span class="underline">Mobile App</span>',
          description: 'Short description here.'
        },
        {
          id: 'icon-go',
          name: 'Icon GO Mobile App Concept',
          titleMarkup: 'Icon GO Mobile App <span class="underline>Concept</span>',
          description: 'Short description here.'
        },
        {
          id: 'adidas',
          name: 'Adidas Product Page',
          titleMarkup: 'Adidas <span class="underline">Product</span> Page',
          description: 'Short description here.'
        },
        {
          id: 'pinnacle-propane',
          name: 'Pinnacle Propane Inquiry Tracker',
          description: 'Short description here.'
        },
        {
          id: 'anylist',
          name: 'AnyList Usability Assessment',
          titleMarkup: 'AnyList <span class="underline">Usability Assessment</span>',
          description: 'Short description here.'
        },
        {
          id: 'music-player',
          name: 'Unnamed Music Player',
          description: 'Short description here.'
        },
        {
          id: 'other-works',
          name: 'Other Works',
          titleMarkup: 'Other <span class="underline">Works</span>',
          description: 'Short description here.'
        }
      ]
    }
  
  }
}
</script>

<style scoped lang="scss">
.homepage {
  @include page-layout;

  .section {
    padding: 80px 0px;

    &:not(:last-child) {
      border-bottom: 1px solid $gray-border;
    }
  }

  .about-me {
    margin-top: 100px;

    h1, h2 {
      &:not(:last-child) {
         margin-bottom: 40px;
      }
    }

    span, h2 {
      color: $gray-medium;
      font-size: 28px;
      font-weight: 500;
    }
  }

  .projects-list {
    .project {
      h2 {
        a {
          color: $header-gray;
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
      grid-gap: 40px;
      grid-template-columns: 1fr 1fr;
      list-style: circle;

      @media (max-width: $mobile-breakpoint) {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
