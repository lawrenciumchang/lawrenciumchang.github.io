<template>
  <div class="project-template">
    <vue-headful :title="project.displayTitle + ' | Lawrence Chang'" />
    <div v-scroll-reveal class="title-container section">
      <h1>{{ project.title }}</h1>
      <p class="regular first-sentence">{{ project.description }}</p>
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
  .section {
    margin-bottom: 100px;
  }
  
  .title-container {
    margin-top: 140px;
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
