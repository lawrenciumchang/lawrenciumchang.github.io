'use strict';

app
    .controller('ContentController', ContentController);

/* @ngInject */
function ContentController($q, $http) {
    var vm = this;
    vm.filterTerm = '';
    vm.applyFilter = applyFilter;
    
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

}
