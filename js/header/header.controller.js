'use strict';

app
    .controller('HeaderController', HeaderController);

/* @ngInject */
function HeaderController($q) {
    var vm = this;
    vm.navigateToContact = navigateToContact;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

    function navigateToContact() {
        Jump('.contact-template', {
            duration: 800
        });
    };

}
