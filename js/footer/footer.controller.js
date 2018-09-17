'use strict';

app
    .controller('FooterController', FooterController);

/* @ngInject */
function FooterController($q) {
    var vm = this;
    vm.scrollToFilters = scrollToFilters;

    vm.currentYear = new Date().getFullYear();

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

    function scrollToFilters() {
        Jump('.photos-template', {
            offset: -100
        });
    }

}
