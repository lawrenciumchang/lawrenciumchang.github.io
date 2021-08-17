<template>
  <div class="project">
    <ProjectTemplate :projectId="projectId" />
  </div>
</template>

<script>
import ProjectTemplate from '@/components/ProjectTemplate.vue';

export default {
  name: 'Project',
  components: {
    ProjectTemplate
  },
  data() {
    return {
      projectId: this.$route.params.project_id
    }
  }
}
</script>

<style scoped lang="scss">
.project {
  @include page-layout;
  min-height: 100vh;
  padding-top: 100px;
}
</style>
