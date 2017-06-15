(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views:{
                    'site@':{
                        template: '<home-component></home-component>'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
