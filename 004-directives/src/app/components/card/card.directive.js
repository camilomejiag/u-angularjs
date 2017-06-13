(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      scope: true,
      restrict: 'E',
      controller: 'CardController',
      controllerAs: 'card',
      bindToController: {
        icon: '=',
        background: '=',
        title: '=',
        description: '=',
        color: '=',
        favorite: "&"
      },
      templateUrl: 'app/components/card/card.html'
    };
  }

})();