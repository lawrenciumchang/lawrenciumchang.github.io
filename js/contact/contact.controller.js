'use strict';

app
    .controller('ContactController', ContactController);

/* @ngInject */
function ContactController($q) {
    var vm = this;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {

        });
    }

}
