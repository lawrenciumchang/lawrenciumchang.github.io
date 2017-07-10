'use strict';

app
    .controller('SidebarController', SidebarController);

/* @ngInject */
function SidebarController($q) {
    var vm = this;
    vm.toTop = toTop;
    vm.hideMobileMenu = hideMobileMenu;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
          
        });
    }

    var offsetValue = $(window).width() <= 767 ? 93 : 26;

    $('#side-nav a').click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top-offsetValue
        }, 1000);
    });

    function toTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }

    function hideMobileMenu() {
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
