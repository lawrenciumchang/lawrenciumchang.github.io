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
