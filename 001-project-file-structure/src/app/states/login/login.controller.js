(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $location) {
    var vm = this;
    vm.title = "Login";
    vm.Login = Login;
    vm.name = "";
    vm.password = "";

    function Login(){
      $location.path('dashboard');
    }
  }
})();
