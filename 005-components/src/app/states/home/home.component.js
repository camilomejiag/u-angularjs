(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('homeComponent', {
        bindings: {

        },
        templateUrl: 'app/states/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    });


})();
