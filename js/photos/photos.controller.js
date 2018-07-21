'use strict';

app
    .controller('PhotosController', PhotosController);

/* @ngInject */
function PhotosController($q, $http) {
    var vm = this;
    vm.filterTerm = '';
    vm.applyFilter = applyFilter;
    vm.openGallery = openGallery;

    activate();

    function activate() {
        var promises = [];
        return $q.all(promises).then(function() {
            getPhotos();
        });
    }

    function getPhotos() {
        $http.get('data/photos.json').then(function(data) {
            vm.photos = data.data;
        });
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

            var photo = {
                src: src,
                w: width, 
                h: height,
                title: title
            };

            photos.push(photo);
        }

        return photos;
    };

}
