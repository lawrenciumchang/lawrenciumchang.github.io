<template>
  <div class="homepage">
    <div class="about-me section">
      <h1>Hi, I'm Lawrence. <span>A UX Designer and photographer based in Houston, TX.</span></h1>
      <h2>I work at Credera where I help our clients craft digital solutions that better impact their business and their users.</h2>
      <h2>Take a look at my <a>resume</a> to see what I’ve been up over the years, or scroll down to see my work in finer detail.</h2>
    </div>
    <div class="projects-list section">

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
  name: 'Homepage'
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
      margin-bottom: 40px;
    }

    span, h2 {
      color: $gray-medium;
      font-size: 28px;
      font-weight: 500;
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
