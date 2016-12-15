'use strict';

angular
    .config(Routes)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }]);

function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/home.template.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'js/photos/photos.template.html',
            controller: 'PhotosController',
            controllerAs: 'vm'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'js/contact/contact.template.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        });
};
