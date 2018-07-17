'use strict';

app
    .controller('LandingController', LandingController);

/* @ngInject */
function LandingController($q) {
    var vm = this;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

}
