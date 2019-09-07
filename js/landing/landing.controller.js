'use strict';

app
    .controller('LandingController', LandingController);

/* @ngInject */
function LandingController($q) {
    var vm = this;
    vm.scrollToPhotos = scrollToPhotos;
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
        });
    }

    function displayFirstSentence() {
        var typed = new Typed('.landing-text .first', {
            strings: ["Hi, I'm Lawrence."],
            typeSpeed: 35,
            showCursor: false,
            onComplete: function() {
                displaySecondSentence();
            }
        });
    };

    function displaySecondSentence() {
        var typed = new Typed('.landing-text .second', {
            strings: ["I design things, take photos, and build websites."],
            typeSpeed: 25,
            showCursor: false,
            startDelay: 500,
            onComplete: function() {
                setTimeout(function() { 
                    revealContent();
                }, 500);
            }
        });
    };

    function revealContent() {
        var elements = document.querySelectorAll('.hidden');
       
        angular.forEach(elements, function(el) {
            el.classList.add('reveal');
        });
    };

    function scrollToPhotos() {
        Jump('.photos-template', {
            offset: -28
        });
    }
}
