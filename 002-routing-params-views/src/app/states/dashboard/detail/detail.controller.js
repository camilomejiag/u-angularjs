(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($log, $stateParams, $timeout, $state, Auth) {
    var vm = this;
    vm.detail = $stateParams.number;

    var data = [
    	{
    		"Name": "Balon",
    		"Precio": 100
    },
    	{
    		"Name": "Camiseta",
    		"Precio": 300
    },
    	
    	{	"Name": "Tennis",
    		"Precio": 180
    },
    	{ 
    		"Name": "Gorra",
    		"Precio": 80
    }];

    vm.print = data[vm.detail];

  }
})();
