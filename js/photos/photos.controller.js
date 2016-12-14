'use strict';

angular
    .controller('PhotosController', PhotosController);

/* @ngInject */
function PhotosController($q, PhotosService) {
    var vm = this;

    activate();

    function activate() {
        var promises = [getPhotos()];
        return $q.all(promises);
    }

    function getPhotos() {
        return PhotosService.getPhotos().then(function(response) {
            vm.photoData = response;
        });
    }

}
