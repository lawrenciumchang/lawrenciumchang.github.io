'use strict';

angular
    .config(Routes)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

function Routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/home.template.html',
            controller: 'HomeController'
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'js/photos/photos.template.html',
            controller: 'PhotosController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'js/contact/contact.template.html',
            controller: 'ContactController'
        });
};
