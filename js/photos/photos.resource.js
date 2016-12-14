'use strict';

angular
    .factory('PhotosResource', PhotosResource);

/* @ngInject */
function PhotosResource($resource) {
    return $resource('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&nojsoncallback=1', {}, {
        get: {
            method: 'GET'
        }
    });
}
