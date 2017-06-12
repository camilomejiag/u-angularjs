(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AuthLoginController', AuthLoginController);

  /** @ngInject */
  function AuthLoginController($log, $stateParams, Auth, $state) {
    var vm = this;
    vm.error = false;
    vm.currentUser = $stateParams.currentUser;
    console.log(vm.currentUser);

    vm.logIn = logIn;

   	function logIn(){
   		if(Auth.logIn(vm.currentUser)){
            console.log(vm.currentUser);
   			$state.go('dashboard', {activeUser:vm.currentUser, parametro: "otra cosa"});
   			//$log.debug('Great logged', Auth.currentUser());
   		}else{
   			vm.error = true;
   		}
   	}

  }
})();
