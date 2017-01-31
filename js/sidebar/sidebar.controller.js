'use strict';

angular
    .controller('SidebarController', SidebarController);

/* @ngInject */
function SidebarController($q) {
    var vm = this;
    vm.hideMenu = hideMenu;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
          
        });
    }

    $('#goToHome').click(function() {
        $('html, body').animate({
            scrollTop: $('#home').offset().top-35
        }, 1000);
    });

    $('#goToPhotos').click(function() {
        $('html, body').animate({
            scrollTop: $('#photos').offset().top-35
        }, 1000);
    });

    $('#goToAbout').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top-35
        }, 1000);
    });

    $('#goToContact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top-35
        }, 1000);
    });

    function hideMenu() {
        $(function() {
            if ($('.accordion').hasClass('active')) {
              $('.accordion').removeClass('active');
              $('.accordion').next()
              .stop()
              .slideUp(300);
            }
        });
    }

    $(function() {
      $('.accordion').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).next()
          .stop()
          .slideUp(300);
        } else {
          $(this).addClass('active');
          $(this).next()
          .stop()
          .slideDown(300);
        }
      });
    });

}
