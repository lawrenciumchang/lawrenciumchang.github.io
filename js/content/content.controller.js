'use strict';

app
    .controller('ContentController', ContentController);

/* @ngInject */
function ContentController($q, $http) {
    var vm = this;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
            getPhotos();
        });
    }

    function getPhotos() {
        $http.get('data/photos.json').then(function(data) {
            vm.photos = data;
        });
    };

}
