'use strict';

angular
    .controller('SidebarController', SidebarController);

/* @ngInject */
function SidebarController($q) {
    var vm = this;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

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
