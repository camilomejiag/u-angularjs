(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DashboardController', DashboardController);
    

  /** @ngInject */
  function DashboardController($log, $stateParams, Auth, $state) {
    var vm = this;
    //vm.activeUser = $stateParams.activeUser;
    vm.activeUser = Auth.currentUser();
    vm.details = details;
    vm.config = config;
    vm.main = main;
    vm.home = home;
    vm.logout = logout;

    function details(numero){
      $state.go('detail');
    }

    function config(numero){
      $state.go('config');
    }

    function main(){
      $state.go('main', {activeUser:vm.activeUser});
    }

    function home(){
      $state.go('home', {activeUser:vm.activeUser});
    }

    function logout(){
      Auth.logOut(vm.activeUser);
      $state.go('home');
    }

  }
})();
