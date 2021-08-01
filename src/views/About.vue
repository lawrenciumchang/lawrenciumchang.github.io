<template>
  <div class="about">
    <vue-headful title="About | Lawrence Chang" />
    <div class="bio contained">
      <div v-scroll-reveal class="image-container">
        <img class="profile-image" v-lazy="'/assets/images/about/profile.png'" />
      </div>
      <div class="about-container">
        <h1 v-scroll-reveal>about</h1>
        <p v-scroll-reveal class="regular first-sentence">I am a senior ux designer based in Houston, Texas, currently working at Credera. I’ve touched everything from circuit design to back-end API architecture to front-end development, but now focus on building desirable experiences through design.</p>
        <p v-scroll-reveal class="regular">Check out my resume to see what I’ve been up to over the years or scroll down to learn some of the things I enjoy doing in my free time!</p>
      </div>
    </div>
    <div class="currently">
      <h2 v-scroll-reveal class="contained">currently ...</h2>
      <div v-scroll-reveal class="overflow-container">
        <div class="scroll-container">
          <div class="photo" v-for="index in 7" :key="index">
            <img v-lazy="'/assets/images/about/' + index + '.png'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
.about {
  min-height: 110vh;
  padding-top: 100px;

  .contained {
    @include page-layout;
  }

  .bio {
    display: grid;
    grid-column-gap: 60px;
    grid-template-columns: auto 1fr;
    margin-bottom: 100px;

    @media (max-width: $mobile-breakpoint) {
      grid-row-gap: 40px;
      grid-template-columns: 1fr;
    }
  }

  .image-container {
    width: 380px;
    
    @media (max-width: $mobile-breakpoint) {
      width: calc(100vw - 48px);
    }
  }

  .profile-image {
    max-width: 380px;

    @media (max-width: $mobile-breakpoint) {
      max-width: calc(100vw - 48px);
    }
  }

  h2 {
    margin-bottom: 24px !important;
  }

  p {
    margin-bottom: 20px;
  }

  .overflow-container {
    color: $white;
    display: flex;
    overflow-x: hidden;
  }

  .scroll-container {
    display: flex;
    overflow-x: scroll;
    padding: 0 calc(50% - 600px);

    @media (max-width: $desktop-breakpoint) {
      padding: 0 24px;
    }
  }

  .photo {
    display: inline-flex;

    &:not(:last-child) {
      margin-right: 20px;
    }

    img {
      height: 320px;
    }
  }
}
</style>
