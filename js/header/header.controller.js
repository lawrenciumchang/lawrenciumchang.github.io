'use strict';

app
    .controller('HeaderController', HeaderController);

/* @ngInject */
function HeaderController($q) {
    var vm = this;
    vm.scrollToTop = scrollToTop;
    vm.gaTrackClick = gaTrackClick;

    function gaTrackClick(category, label) {
        var host = window.location.hostname;
        if (host != 'localhost') {
            ga('send', 'event', category, 'click' , label);
        }
    };

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

    $('.menu-burger, .menu-items').on('click', function() {
        $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
        $('.menu-burger').text() == "☰" ? openMenu() : closeMenu();
    });

    function openMenu() {
        $('.menu-burger').text('✕');
        // Lock scroll
        $('body').css({'overflow':'0'});
        $(document).bind('scroll',function () { 
            window.scrollTo(0,0); 
        });
        gaTrackClick('mobile menu', 'open');
    };

    function closeMenu() {
        $('.menu-burger').text('☰');
        // Enable scroll
        $(document).unbind('scroll'); 
        $('body').css({'overflow':'visible'});
        gaTrackClick('mobile menu', 'close');
    };

    function scrollToTop() {
        Jump('.header-template');
    }

}
