<template>
  <div class="project">
    <CustomCursor />
    <ProjectTemplate :projectId="projectId" />
  </div>
</template>

<script>
import ProjectTemplate from '@/components/ProjectTemplate.vue';
import CustomCursor from '@/components/CustomCursor.vue';

export default {
  name: 'Project',
  components: {
    ProjectTemplate,
    CustomCursor
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
}
</style>
