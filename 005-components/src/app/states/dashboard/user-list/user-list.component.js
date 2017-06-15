(function () {
  'use strict';

  angular
      .module('angularApp')
      .component('userList', {
        bindings: {

        },
        templateUrl: 'app/states/dashboard/user-list/user-list.html',
        controller: 'UserListController',
        controllerAs: 'userlistCtrl'
      });
})();
