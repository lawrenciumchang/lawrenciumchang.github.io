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

    $('#side-nav a').click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top-35
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
