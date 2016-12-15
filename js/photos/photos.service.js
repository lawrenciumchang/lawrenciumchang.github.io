'use strict';

angular
    .factory('PhotosService', PhotosService);

/* @ngInject */
function PhotosService(PhotosResource) {
    return {
        getPhotos: getPhotos
    };

    function getPhotos() {
        var API_KEY = 'af69d3685df6143d414271128a19badc';
        var USER_ID = '75527516@N07';
        return PhotosResource.get({api_key: API_KEY, user_id: USER_ID, extras: 'date_taken'}).$promise
            .then(function(response) {
                return response.photos;
            });
    }
}
