'use strict';

app
    .controller('LandingController', LandingController);

/* @ngInject */
function LandingController($q) {
    var vm = this;
    vm.navigateToPhotos = navigateToPhotos;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
            displayFirstSentence();
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

}
