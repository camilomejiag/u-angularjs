(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('navbarComponent', {
        bindings: {

        },
        templateUrl: 'app/components/navbar/navbar.html',
        controller: 'NavbarController',
        controllerAs: 'navbarCtrl'
    } );
})();
