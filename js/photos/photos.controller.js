'use strict';

app
    .controller('PhotosController', PhotosController);

/* @ngInject */
function PhotosController($q, PhotosService) {
    var vm = this;
    // vm.filterTerm = '';
    // vm.applyFilter = applyFilter;
    vm.openGallery = openGallery;
    vm.gaTrackClick = gaTrackClick;
    
    var FLICKR_MEDIUM = 3;
    var FLICKR_LARGE_1600 = 9; 

    function gaTrackClick(category, label) {
        var host = window.location.hostname;
        if (host != 'localhost') {
            ga('send', 'event', category, 'click' , label);
        }
    };

    activate();

    function activate() {
        var promises = [getPhotos()];
        return $q.all(promises).then(function() {
            generateImages().then(function() {
                initJustifiedGallery();
            });
        });
    }

    function getPhotos() {
        return PhotosService.getPhotos().then(function(response) {
            vm.photoData = response.photo;
        }).catch(function(error) {
            console.log('Error getting photos from Flickr service...', error);
        });
    }; 

    function generateImages() {
        var promises = [];
        var photos = [];

        angular.forEach(vm.photoData, function(photo) {
            promises.push(
                PhotosService.getImageDimensions(photo.id).then(function(response) {
                    var largeImageDimensionData = response[FLICKR_LARGE_1600];
                    var src = largeImageDimensionData.source;
                    var msrc = response[FLICKR_MEDIUM].source;
                    var width = parseInt(largeImageDimensionData.width);
                    var height = parseInt(largeImageDimensionData.height);
                    var title = photo.title;
                    var tags = JSON.stringify(photo.tags);
                    var date = photo.datetaken;

                    var item = {
                        src: src,
                        msrc: msrc,
                        w: width, 
                        h: height,
                        title: title, 
                        tags: tags,
                        date: date
                    };
        
                    photos.push(item);
                }).catch(function(error) {
                    console.log('Error getting image dimensions from Flickr service...', error);
                })
            );
        });

        vm.photos = photos;
        return $q.all(promises);
    }

    function initJustifiedGallery() {
        $('.gallery-container').justifiedGallery({
            rowHeight: 340,
            margins: 4,
            lastRow: 'justify',
            captions: false
        });
    };

    // function applyFilter(filterTerm) {
    //     if (vm.filterTerm === filterTerm) {
    //         vm.filterTerm = '';
    //         angular.element(document.getElementsByClassName('filter')).removeClass('active-filter');
    //     } else {
    //         vm.filterTerm = filterTerm;
    //         angular.element(document.getElementsByClassName('filter')).removeClass('active-filter');
    //         angular.element(document.querySelector('#' + filterTerm + '-filter')).addClass('active-filter');
    //     }
    //     Jump(1); // used to display rest of photos in viewport due to scroll reveal
    // };

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
            var photoElement = photoGroup[i].children[0];
            var src = photoElement.src;
            var msrc = photoElement.getAttribute('data-msrc');
            var width = photoElement.getAttribute('data-width');
            var height = photoElement.getAttribute('data-height');
            var title = photoElement.getAttribute('data-title');

            var item = {
                src: src,
                msrc: msrc,
                w: width, 
                h: height,
                title: title
            };

            photos.push(item);
        }

        return photos;
    };

}
