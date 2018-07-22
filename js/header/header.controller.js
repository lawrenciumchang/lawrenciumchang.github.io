'use strict';

app
    .controller('HeaderController', HeaderController);

/* @ngInject */
function HeaderController($q) {
    var vm = this;

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
        $('body').css({'overflow':'hidden'});
        $(document).bind('scroll',function () { 
            window.scrollTo(0,0); 
        });
    };

    function closeMenu() {
        $('.menu-burger').text('☰');
        $(document).unbind('scroll'); 
        $('body').css({'overflow':'visible'});
    };

}
