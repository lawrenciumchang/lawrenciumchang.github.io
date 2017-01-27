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

    $(document).ready(function(){
        $('#nav-icon').click(function(){
            $(this).toggleClass('open');
        });
    });

}
