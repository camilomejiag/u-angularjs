(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY, $scope) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.icons = ['account_circle', 'home', 'alarm'];
    vm.card = {};
    vm.favorite = [];
    vm.setIcon = setIcon;
    vm.form = vm.form;
    vm.title = vm.title;
    $scope.fav = fav;

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function fav(fav) {
      if (fav != undefined) {
        vm.favorite.push(fav);
      } else {
        alert("Ingresa un titulo");
      }
    }
  }


})();
