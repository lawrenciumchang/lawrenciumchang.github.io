<template>
  <div>
    <div class="cursor-dot-outline"></div>
    <div class="cursor-dot"></div>
  </div>
</template>

<script>
export default {
    name: 'CustomCursor',
    mounted: function() {
      var cursor = {
        delay: 4,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        showImage: false,
        rotateImageFlag: true,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },

        setupEventListeners: function() {
            var self = this;

            // Name hovering
            var l = document.querySelector('#lawrence');
            if (l) {
                l.addEventListener('mouseover', function() {
                    self.showImage = true;
                    self.toggleImage();
                });
                l.addEventListener('mouseout', function() {
                    self.showImage = false;
                    self.toggleImage();
                    self.rotateImageFlag = !self.rotateImageFlag;
                });
            }
            
            // Anchor hovering
            document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            // Button hovering
            document.querySelectorAll('.btn-primary').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            // Menu hovering
            document.querySelectorAll('.ham').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });
            
            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
      
            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();

                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                self.$dot.style.top = self.endY + 'px';
                self.$dot.style.left = self.endX + 'px';
            });
            
            // Hide/show cursor
            document.addEventListener('mouseenter', function() {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });
            
            document.addEventListener('mouseleave', function() {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },
        
        animateDotOutline: function() {
            var self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
        
        toggleCursorSize: function() {
            var self = this;
            
            if (self.cursorEnlarged) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(0.43)';
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(0.29)';
            }
        },
        
        toggleCursorVisibility: function() {
            var self = this;
            
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        },

        toggleImage: function() {
            var self = this;

            if (self.showImage) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
                self.$outline.style.transform = 'translate(-50%, -120%) scale(1)';
                if (self.rotateImageFlag) {
                    self.$outline.style.backgroundImage = 'url("/images/avatars/avatar1.png")';
                } else {
                    self.$outline.style.backgroundImage = 'url("/images/avatars/avatar2.png")';
                }
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$outline.style.transform = 'translate(-50%, -50%) scale(0.29)';
                self.$outline.style.backgroundImage = 'none';
            }
        }
      }

      cursor.init();
    }
}
</script>

<style scoped lang="scss">
.cursor-dot,
.cursor-dot-outline {
  border-radius: 50%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transition: opacity 0.3s ease-in-out,
              transform 0.3s ease-in-out;
  z-index: 9001;
}

.cursor-dot {
  $size: 8px;
  background-color: $blue-hover;
  height: $size;
  transform: translate(-50%, -50%) scale(1);
  width: $size;
}

.cursor-dot-outline {
  $size: 140px;
  background-color: rgba($blue-underline, 0.29);
  background-size: cover;
  height: $size;
  transform: translate(-50%, -50%) scale(0.29);
  width: $size;
}
</style>
