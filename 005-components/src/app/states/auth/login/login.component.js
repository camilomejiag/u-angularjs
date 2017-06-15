(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('loginComponent', {
        bindings: {

        },
        templateUrl: 'app/states/auth/login/login.html',
        controller: 'AuthLoginController',
        controllerAs: 'loginCtrl'
    });

})();
