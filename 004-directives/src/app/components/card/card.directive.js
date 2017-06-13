(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      scope: {},
      restrict: 'E',
      bindToController: {
        icon: '=',
        background: '=',
        color: '=',
        Title: '=',
        Description: '=',
        Message: '='
      },
      templateUrl: 'app/components/card/card.html',
      controller: 'CardController',
      controllerAs: 'card'
    };
  }

})();
