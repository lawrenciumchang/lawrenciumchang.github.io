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

    function openGallery(index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var photoSwipeOptions = {
            index: index+1,
            history: false, 
            pinchToClose: true, 
            escKey: true, 
            arrowKeys: true
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, vm.photos, photoSwipeOptions);
        gallery.init();
    };

}
