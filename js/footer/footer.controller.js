'use strict';

app
    .controller('FooterController', FooterController);

/* @ngInject */
function FooterController($q) {
    var vm = this;
    vm.currentYear = new Date().getFullYear();
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
            new ClipboardJS('.cta');
        });
    }

    function revealCopiedText() {
        $('.copied-text').addClass('reveal');
        setTimeout(function() { 
            $('.copied-text').removeClass('reveal');
        }, 2000);
    }
}
