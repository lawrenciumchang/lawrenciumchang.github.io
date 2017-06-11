'use strict';

app
    .controller('ContactController', ContactController);

/* @ngInject */
function ContactController($q) {
    var vm = this;
    vm.currentYear = new Date().getFullYear();

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

}
