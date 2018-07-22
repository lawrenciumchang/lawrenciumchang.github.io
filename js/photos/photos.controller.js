'use strict';

app
    .controller('PhotosController', PhotosController);

/* @ngInject */
function PhotosController($q, PhotosService) {
    var vm = this;
    vm.filterTerm = '';
    vm.applyFilter = applyFilter;
    vm.openGallery = openGallery;
    
    var PHOTO_SIZE_GROUP = 9; // as defined by Flickr

    activate();

    function activate() {
        var promises = [getPhotos()];
        return $q.all(promises).then(function() {
            generateImages();
        });
    }

    function getPhotos() {
        return PhotosService.getPhotos().then(function(response) {
            vm.photoData = response.photo;
        });
    }; 

    function generateImages() {
        var photos = [];

        angular.forEach(vm.photoData, function(photo) {
            PhotosService.getImageDimensions(photo.id).then(function(response) {
                var imageDimensionData = response[PHOTO_SIZE_GROUP];
                var src = imageDimensionData.source;
                var width = parseInt(imageDimensionData.width);
                var height = parseInt(imageDimensionData.height);
                var title = JSON.stringify(photo.title);
                var tags = JSON.stringify(photo.tags);
                var date = photo.datetaken;

                var item = {
                    src: src,
                    w: width, 
                    h: height,
                    title: title, 
                    tags: tags,
                    date: date
                };
    
                photos.push(item);
            });
        });

        vm.photos = photos;
    };

    function applyFilter(filterTerm) {
        if (vm.filterTerm === filterTerm) {
            vm.filterTerm = '';
            angular.element(document.getElementsByClassName('filter')).removeClass('active-filter');
        } else {
            vm.filterTerm = filterTerm;
            angular.element(document.getElementsByClassName('filter')).removeClass('active-filter');
            angular.element(document.querySelector('#' + filterTerm + '-filter')).addClass('active-filter');
        }
    };

    function openGallery($event, index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var photos = parsePhotos($event);
        
        var photoSwipeOptions = {
            index: index,
            history: false, 
            pinchToClose: true, 
            escKey: true, 
            arrowKeys: true,
            closeOnScroll: false
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, photos, photoSwipeOptions);

        gallery.init();
    };

    function parsePhotos($event) {
        var photos = [];
        var photoGroup = angular.element($event.target).parent().parent().children();

        for (var i = 0; i < photoGroup.length; i++) {
            var src = photoGroup[i].children[0].src;
            var width = photoGroup[i].children[0].getAttribute('data-width');
            var height = photoGroup[i].children[0].getAttribute('data-height');
            var title = photoGroup[i].children[0].getAttribute('data-title');

            var item = {
                src: src,
                w: width, 
                h: height,
                title: title
            };

            photos.push(item);
        }

        return photos;
    };

}
