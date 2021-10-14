<template>
  <div></div>
</template>

<script>
export default {
  name: 'DraggableContainer',
  mounted: function() {
    const slider = document.querySelector('.scroll-container');
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function () {
      mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  }
}
</script>

<style lang="scss">
.overflow-container {
  color: $white;
  display: flex;
  overflow-x: hidden;
}

.scroll-container {
  cursor: pointer;
  display: flex;
  overflow-x: scroll;
  padding: 0 calc(50% - 600px);
  scrollbar-width: none;

  @media (max-width: $desktop-breakpoint) {
    padding: 0 24px;
  }
}

.item-container {
  display: grid;
  
  &:not(:last-child) {
    margin-right: 20px;
  }

  img {
    height: 400px;
  }
}
</style>
