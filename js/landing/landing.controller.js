'use strict';

app
    .controller('LandingController', LandingController);

/* @ngInject */
function LandingController($q) {
    var vm = this;
    vm.scrollToTop = scrollToTop;
    // vm.navigateToPhotos = navigateToPhotos;
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
            displayFirstSentence();
            window.onscroll = function() {scrollFunction()};
        });
    }

    // function navigateToPhotos() {
    //     Jump('.photos-template', {
    //         duration: 800
    //     });
    // };

    function displayFirstSentence() {
        var typed = new Typed('.landing-text .first', {
            strings: ["Hi, I'm Lawrence."],
            typeSpeed: 40,
            showCursor: false,
            onComplete: function() {
                displaySecondSentence();
            }
        });
    };

    function displaySecondSentence() {
        var typed = new Typed('.landing-text .second', {
            strings: ["I design things, take photos, and build websites."],
            typeSpeed: 40,
            showCursor: false,
            startDelay: 500,
            onComplete: function() {
                revealContent();
            }
        });
    };

    function revealContent() {
        var elements = document.querySelectorAll('.hidden');
       
        angular.forEach(elements, function(el) {
            el.classList.add('reveal');
        });
    };

    function scrollFunction() {
    //     // Hides down navigation arrow on scroll, reveals when scrolled back to top.
    //     if (document.body.scrollTop > (window.innerHeight/2) || document.documentElement.scrollTop > (window.innerHeight/2)) {
    //         var navigationArrow = document.querySelector('.navigation-arrow');
    //         navigationArrow.classList.remove('reveal');
    //     }
    //     else {
    //         var navigationArrow = document.querySelector('.navigation-arrow');
    //         navigationArrow.classList.add('reveal');
    //     }

        // Controls scroll reveal for hover button elements. Use .hide-hover-btn class on element to reveal/hide past first panel. 
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
