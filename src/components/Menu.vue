<template>
  <div class="menu">
    <svg ref="svg" class="ham ham-rotate ham-strokes" viewBox="0 0 100 100" width="80" @click="toggleMenuOverlay($event.currentTarget)">
      <path
          class="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
      <path
          class="line middle" d="m 30,50 h 40" />
      <path
          class="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>

    <div ref="menuOverlay" class="menu-overlay inactive">
      <div ref="menuContents" class="menu-contents inactive">
        <h2 class="menu-item">
          <router-link to="/" @click="closeMenu(); gaTrackClick('Menu', 'Design Link')">Design</router-link>
        </h2>
        <h2 class="menu-item">
          <router-link to="/photography" @click="closeMenu(); gaTrackClick('Menu', 'Photography Link')">Photography</router-link>
        </h2>
        <h2 class="menu-item">
          <a href="https://www.flickr.com/photos/lawrenciumchang" target="_blank" @click="gaTrackClick('Menu', 'Flickr Link')">Flickr</a>
        </h2>
        <h2 class="menu-item">
          <a href="https://www.linkedin.com/in/lawrence-chang-3799914b" target="_blank" @click="gaTrackClick('Menu', 'LinkedIn Link')">LinkedIn</a>
          </h2>
        <h2 class="menu-item mail" data-clipboard-text="contact@lawrencechang.design" @click="revealCopiedText(); gaTrackClick('Menu', 'Mail Link')">
          <a>Mail</a>
        </h2>
        <span ref="copiedText" class="copied-text">My email has been copied to your clipboard!</span>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';

export default {
  name: 'Menu',
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

        this.gaTrackClick('Menu', 'Open Menu');
      } 

      // Close Menu
      else {
        this.$refs.menuOverlay.classList.add('inactive');
        this.$refs.menuOverlay.classList.remove('active');

        this.gaTrackClick('Menu', 'Close Menu');
      }
    },
    closeMenu: function() {
      this.$refs.svg.classList.toggle('active');
      this.$refs.menuOverlay.classList.add('inactive');
      this.$refs.menuOverlay.classList.remove('active');
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
      this.$ga.event(category, 'click', label);
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  .ham {
    background-color: $gray-01;
    cursor: pointer;
    position: fixed;
    right: 40px;
    top: 40px;
    transition: $ease-in;
    user-select: none;
    width: 60px;
    z-index: 1000;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;

    &:hover {
      background-color: $blue-secondary;
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
      stroke: $white;
    }

    &:hover {
      transform: scale(0.9);
    }
  }

  .ham-rotate180.active {
    transform: rotate(180deg);
    
    .line {
      stroke: $white;
    }
  }

  .line {
    fill: none;
    stroke: $white;
    stroke-linecap: round;
    stroke-width: 3.5;
    transition: stroke-dasharray $ease-in, stroke-dashoffset $ease-in;
  }

  .ham-strokes {
    .top {
      stroke-dasharray: 40 160;
    }

    .middle {
      stroke-dasharray: 40 142;
      transform-origin: 50%;
      transition: transform $ease-in;
    }

    .bottom {
      stroke-dasharray: 40 85;
      transform-origin: 50%;
      transition: transform $ease-in, stroke-dashoffset $ease-in;
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
    background-color: $gray-01;
    display: flex;
    height: 100vh;
    position: fixed;
    top: 0;
    transition: $ease-in;
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
      transition: $ease-in;
      width: 100%;

      .menu-item {
        margin-bottom: 40px;

        &.fade-down {
          animation: fadeIn $ease-in both;
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
          color: $white;
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
          transition: $ease-in;

          &:hover {
            color: $blue-secondary;
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
        transition: $ease-in-out;

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
