'use strict';

app
    .controller('HeaderController', HeaderController);

/* @ngInject */
function HeaderController($q) {
    var vm = this;
    vm.toggleMenuOverlay = toggleMenuOverlay;
    vm.revealCopiedText = revealCopiedText;
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
            new ClipboardJS('.mail');
        });
    }

    function toggleMenuOverlay(element) {
        element.classList.toggle('active');

        // Open Menu
        if (element.classList.contains('active')) {
            document.querySelector('.menu-overlay').classList.remove('inactive');
            document.querySelector('.menu-overlay').classList.add('active');
            document.querySelector('.menu-contents').classList.remove('inactive');
            document.querySelector('.menu-contents').classList.add('active');

            $('.menu-item').addClass('fade-down');

            // Lock scroll
            $('body').css({'overflow':'0'});
            $(document).bind('scroll',function () { 
                window.scrollTo(0,0); 
            });
            gaTrackClick('mobile menu', 'open');
        } 
        // Close Menu
        else {
            document.querySelector('.menu-overlay').classList.add('inactive');
            document.querySelector('.menu-overlay').classList.remove('active');
            document.querySelector('.menu-contents').classList.add('inactive');
            document.querySelector('.menu-contents').classList.remove('active');

            $('.menu-item').removeClass('fade-down');

            // Enable scroll
            $(document).unbind('scroll'); 
            $('body').css({'overflow':'visible'});
            gaTrackClick('mobile menu', 'close');
        }
    }

    function revealCopiedText() {
        $('.copied-text').addClass('reveal');
        setTimeout(function() { 
            $('.copied-text').removeClass('reveal');
        }, 2000);
    }
}
