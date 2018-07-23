'use strict';

app
    .controller('HeaderController', HeaderController);

/* @ngInject */
function HeaderController($q) {
    var vm = this;
    vm.scrollToTop = scrollToTop;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
            window.onscroll = function() {scrollFunction()};
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
    };

    function closeMenu() {
        $('.menu-burger').text('☰');
        // Enable scroll
        $(document).unbind('scroll'); 
        $('body').css({'overflow':'visible'});
    };

    function scrollFunction() {
        if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
            var elements = document.querySelectorAll('.hide-hover-btn');
            angular.forEach(elements, function(el) {
                el.classList.add('show-hover-btn');
            }); 
        } else {
            var elements = document.querySelectorAll('.show-hover-btn');
            angular.forEach(elements, function(el) {
                el.classList.remove('show-hover-btn');
            }); 
        }
    }

    function scrollToTop() {
        Jump('.header-template');
    }

}
