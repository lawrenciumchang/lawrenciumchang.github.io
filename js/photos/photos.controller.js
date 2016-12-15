'use strict';

angular
    .controller('PhotosController', PhotosController);

/* @ngInject */
function PhotosController($q, PhotosService) {
    var vm = this;
    vm.showTitle = showTitle;
    vm.hideTitle = hideTitle;

    vm.photos = [];
    vm.displayTitle = [];

    activate();

    function activate() {
        var promises = [getPhotos()];
        return $q.all(promises).then(function() {
            generatePhotos(vm.photoData.photo);
        });
    }

    function getPhotos() {
        return PhotosService.getPhotos().then(function(response) {
            vm.photoData = response;
        });
    }

    function generatePhotos(photos) {
        var array = [];
        for(var i = 0; i < photos.length; i++) {
            var p = {
                'id': i,
                'title': photos[i].title,
                'url': 'https://farm' + photos[i].farm + '.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '_b' + '.jpg'
            }; 
            array.push(p);
            if((i+1) % 2 == 0) {
                vm.photos.push(array);
                array = [];
            }
            if(i == photos.length-1) {
                vm.photos.push(array);
            }
        } 
    }

    function showTitle(id) {
        vm.displayTitle[id] = true;
    }

    function hideTitle(id) {
        vm.displayTitle[id] = false;
    }

}
