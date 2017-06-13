(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('CardController', CardController);

  /** @ngInject */
  function CardController() {
    var vm = this;
    vm.title = vm.title;
    vm.textColor = vm.textColor;
  }

  

})();
