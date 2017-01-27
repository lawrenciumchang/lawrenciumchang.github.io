'use strict';

angular
    .controller('SidebarController', SidebarController);

/* @ngInject */
function SidebarController($q) {
    var vm = this;
    vm.toggleMenu = toggleMenu;
    vm.showMenuItems = false;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

    function toggleMenu() {
        vm.showMenuItems = !vm.showMenuItems;
    }

    // $(document).ready(function(){
    //     $('#nav-icon').click(function(){
    //         $(this).toggleClass('open');
    //     });
    // });

    $(function() {
      $('.acc_ctrl').on('click', function(e) {
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
