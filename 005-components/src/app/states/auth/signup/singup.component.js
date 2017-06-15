(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('singupComponent', {
        bindings: {

        },
        templateUrl: 'app/states/auth/singup/singup.html',
        controller: 'AuthSignUpController',
        controllerAs: 'singupCtrl'
    });


})();
