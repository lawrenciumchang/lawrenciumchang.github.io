<template>
  <div class="header">
    <svg class="ham ham-rotate ham-strokes" viewBox="0 0 100 100" width="80" v-on:click="toggleMenuOverlay($event.currentTarget)">
      <path
          class="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
      <path
          class="line middle"
          d="m 30,50 h 40" />
      <path
          class="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>


  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMenuOverlay: function(event) {
      console.log('toggleMenuOverlay function called', event);
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
    transition: transform $hover-transition;
    user-select: none;
    width: 64px;
    z-index: 1000;
    -webkit-tap-highlight-color: transparent;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    &:hover {
      transform: scale(0.94);
    }

    @media (max-width: $mobile-breakpoint) {
      right: 12px;
      top: 12px;
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
      margin: 0 auto;
      transition: $hover-transition;
      width: 96vw;

      .menu-item {
          margin: 52px 0;

          &.fade-down {
            animation: fadeIn $hover-transition both;
            opacity: 0;

            &:first-child {
              animation-delay: 0.3s;
            }

            &:nth-child(2) {
              animation-delay: 0.8s;
            }

            &:nth-child(3) {
              animation-delay: 1.3s;
            }
          }

          a {
            transition: $hover-transition;

            &:hover {
              color: $almost-white;
            }
          }
      }

      .mail {
        margin-bottom: 8px;
      }

      .copied-text {
        align-items: center;
        display: flex;
        color: $almost-white;
        font-size: 12px;
        margin: 0 0 44px 0;
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

      @media (max-width: 1024px) {
        width: 90vw;
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
