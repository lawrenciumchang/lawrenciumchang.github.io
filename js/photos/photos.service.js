'use strict';

app
    .factory('PhotosService', PhotosService);

/* @ngInject */
function PhotosService(PhotosResource) {

    var API_KEY = 'af69d3685df6143d414271128a19badc';

    return {
        getPhotos: getPhotos,
        getImageDimensions: getImageDimensions
    };

    function getPhotos() {
        var USER_ID = '75527516@N07';
        return PhotosResource.getPhotos().get({api_key: API_KEY, user_id: USER_ID, extras: 'date_taken, tags'}).$promise
            .then(function(response) {
                return response.photos;
            });
    }

    function getImageDimensions(photoId) {
        return PhotosResource.getImageDimensions().get({api_key: API_KEY, photo_id: photoId}).$promise
            .then(function(response) {
                return response.sizes.size;
            });
    };

}
