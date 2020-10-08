<template>
  <div class="header">
    <svg class="ham ham-rotate ham-strokes" viewBox="0 0 100 100" width="80" @click="toggleMenuOverlay($event.currentTarget)">
      <path
          class="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
      <path
          class="line middle" d="m 30,50 h 40" />
      <path
          class="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>

    <div ref="menuOverlay" class="menu-overlay inactive">
      <div ref="menuContents" class="menu-contents inactive">
        <h2 class="menu-item"><a href="/" @click="gaTrackClick('Header', 'Design Link')">Design</a></h2>
        <h2 class="menu-item"><a href="https://www.lawrenciumchang.com" target="_blank" @click="gaTrackClick('Header', 'Photography Link')">Photography</a></h2>
        <h2 class="menu-item"><a href="https://www.flickr.com/photos/lawrenciumchang" target="_blank" @click="gaTrackClick('Header', 'Flickr Link')">Flickr</a></h2>
        <h2 class="menu-item"><a href="https://www.linkedin.com/in/lawrence-chang-3799914b" target="_blank" @click="gaTrackClick('Header', 'LinkedIn Link')">LinkedIn</a></h2>
        <h2 class="menu-item mail" data-clipboard-text="lawrencium.chang@gmail.com" @click="revealCopiedText(); gaTrackClick('Header', 'Mail Link')"><a>Mail</a></h2>
        <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Header',
  mounted: function() {
    new ClipboardJS('.mail');
  },
  methods: {
    toggleMenuOverlay: function(element) {
      element.classList.toggle('active');

      // Open Menu
      if (element.classList.contains('active')) {
        this.$refs.menuOverlay.classList.remove('inactive');
        this.$refs.menuOverlay.classList.add('active');
        this.$refs.menuContents.classList.remove('inactive');
        this.$refs.menuContents.classList.add('active');


        document.getElementsByClassName('menu-item').forEach(element => {
          element.classList.add('fade-down');
        });

        this.gaTrackClick('Header', 'Open Menu');
      } 

      // Close Menu
      else {
        this.$refs.menuOverlay.classList.add('inactive');
        this.$refs.menuOverlay.classList.remove('active');
        this.$refs.menuContents.classList.add('inactive');
        this.$refs.menuContents.classList.remove('active');

        // document.getElementsByClassName('menu-item').forEach(element => {
        //   element.classList.remove('fade-down');
        // });

        this.gaTrackClick('Header', 'Close Menu');
      }
    },
    revealCopiedText: function() {
      this.$refs.copiedText.classList.add('reveal');
      setTimeout(function() { 
        this.hideCopiedText();
      }.bind(this), 2000);
    },
    hideCopiedText: function() {
      this.$refs.copiedText.classList.remove('reveal');
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
.header {
  .ham {
    background-color: $almost-black;
    cursor: pointer;
    position: fixed;
    right: 40px;
    top: 40px;
    transition: $hover-transition;
    user-select: none;
    width: 60px;
    z-index: 1000;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;

    &:hover {
      background-color: $blue-hover;
    }

    @media (max-width: $desktop-breakpoint) {
      right: 24px;
      top: 24px;
      width: 56px;
    }
  }

  .ham-rotate.active {
    transform: rotate(45deg);

    .line {
      stroke: $almost-white;
    }

    &:hover {
      transform: scale(0.9);
    }
  }

  .ham-rotate180.active {
    transform: rotate(180deg);
    
    .line {
      stroke: $almost-white;
    }
  }

  .line {
    fill: none;
    stroke: $almost-white;
    stroke-linecap: round;
    stroke-width: 3.5;
    transition: stroke-dasharray $hover-transition, stroke-dashoffset $hover-transition;
  }

  .ham-strokes {
    .top {
      stroke-dasharray: 40 160;
    }

    .middle {
      stroke-dasharray: 40 142;
      transform-origin: 50%;
      transition: transform $hover-transition;
    }

    .bottom {
      stroke-dasharray: 40 85;
      transform-origin: 50%;
      transition: transform $hover-transition, stroke-dashoffset $hover-transition;
    }

    &.active {
      .top {
        stroke-dashoffset: -64px;
      }

      .middle {
        transform: rotate(90deg);
      }

      .bottom {
        stroke-dashoffset: -64px;
      }
    }
  }

  .menu-overlay {
    align-items: center;
    background-color: $almost-black;
    display: flex;
    height: 100vh;
    position: fixed;
    top: 0;
    transition: $hover-transition;
    width: 100vw;

    &.active {
      opacity: 1;
      z-index: 900
    }

    &.inactive {
      opacity: 0;
      z-index: -1;
    }

    .menu-contents {
      @include page-layout;
      transition: $hover-transition;
      width: 100%;

      .menu-item {
        margin-bottom: 40px;

        &.fade-down {
          animation: fadeIn $hover-transition both;
          opacity: 0;

          &:first-child {
            animation-delay: 0.3s;
          }

          &:nth-child(2) {
            animation-delay: 0.6s;
          }

          &:nth-child(3) {
            animation-delay: 0.9s;
          }

          &:nth-child(4) {
            animation-delay: 1.2s;
          }

          &:nth-child(5) {
            animation-delay: 1.5s;
          }
        }

        a {
          color: $almost-white;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
          transition: $hover-transition;

          &:hover {
            color: $blue-hover;
          }
        }
      }

      .mail {
        margin-bottom: 12px;
      }

      .copied-text {
        color: $blue-primary;
        font-size: 14px;
        opacity: 0;
        transition: all 1s ease-in-out;

        &.reveal {
          opacity: 1;
        }
      }
      
      &.active {
        opacity: 1;
      }

      &.inactive {
        opacity: 0;
      }
    }
  }
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate3d(0, -40%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>
