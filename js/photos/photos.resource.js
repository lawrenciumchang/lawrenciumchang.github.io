'use strict';

app
    .factory('PhotosResource', PhotosResource);

/* @ngInject */
function PhotosResource($resource) {

    return {
        getPhotos: getPhotos,
        getImageDimensions: getImageDimensions
    };

    function getPhotos() {
        return $resource('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&nojsoncallback=1', {}, {
            get: {
                method: 'GET'
            }
        });
    };

    function getImageDimensions() {
        return $resource('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1', {}, {
            get: {
                method: 'GET'
            }
        }); 
    };
     
}
