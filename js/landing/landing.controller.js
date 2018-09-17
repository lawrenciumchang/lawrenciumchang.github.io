'use strict';

app
    .controller('LandingController', LandingController);

/* @ngInject */
function LandingController($q) {
    var vm = this;
    vm.navigateToPhotos = navigateToPhotos;
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

    function navigateToPhotos() {
        Jump('.photos-template', {
            duration: 800
        });
    };

    function displayFirstSentence() {
        var typed = new Typed('.landing-text .first', {
            strings: ["<span class='font-regular blue'>Hi, I'm Lawrence.</span>"],
            typeSpeed: 40,
            showCursor: false,
            onComplete: function() {
                revealContent();
                displaySecondSentence();
            }
        });
    };

    function displaySecondSentence() {
        var typed = new Typed('.landing-text .second', {
            strings: ["<span class='font-light dark-gray'> A technology consultant and software developer located in Dallas, TX.</span>"],
            typeSpeed: 40,
            showCursor: false,
            startDelay: 500,
            onComplete: function() {
                displayThirdSentence();
            }
        });
    };

    function displayThirdSentence() {
        var typed = new Typed('.landing-text .third', {
            strings: ["<span class='font-light dark-gray'> I like making things and taking photos.</span>"],
            typeSpeed: 40,
            showCursor: false,
            startDelay: 500
        });
    };

    function revealContent() {
        var elements = document.querySelectorAll('.hidden');
       
        angular.forEach(elements, function(el) {
            el.classList.add('reveal');
        });
    };

    // Hides down navigation arrow on scroll, reveals when scrolled back to top.
    function scrollFunction() {
        if (document.body.scrollTop > (window.innerHeight/2) || document.documentElement.scrollTop > (window.innerHeight/2)) {
            var navigationArrow = document.querySelector('.navigation-arrow');
            navigationArrow.classList.remove('reveal');
        }
        else {
            var navigationArrow = document.querySelector('.navigation-arrow');
            navigationArrow.classList.add('reveal');
        }
    }

}
