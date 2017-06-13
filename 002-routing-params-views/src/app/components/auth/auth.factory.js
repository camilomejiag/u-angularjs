(function() {
  'use strict';

  angular
    .module('angularApp')
    .factory('Auth', AuthFactory);

  /** @ngInject */
  function AuthFactory() {
    var users = localStorage.getItem('userList') ? (JSON.parse(localStorage.getItem('userList'))) : [],
    factory = {
    	registerUser: registerUser,
    	logIn:logIn,
    	currentUser: currentUser,
      logOut: logOut
    };

    function registerUser(newUser){
  		if(!searchUser(newUser.email)){
  			users.push(newUser);
  			localStorage.setItem('userList', JSON.stringify(users));
  			return true;
  		}else{
  			return false;
  		}
    };

    function searchUser(key){
    	var found = false;
    	users.forEach(function(user) {
    		if(user.email === key){
    			found = true;
    		}
    	});
    	return found;
    }

    function validLogin(login) {
    	var valid = false;
    	users.forEach(function(user) {
    		if(user.email === login.email && user.password === login.password){
    			valid = true;
    		}
    	});
    	return valid;
    }

    function logIn(user) {
    	if(validLogin(user)){
  			localStorage.setItem('currentUser', user.email);
  			return true;
  		}else{
  			return false;
  		}
    }

    function currentUser() {
    	var current = null;
    	users.forEach(function(user) {
    		if(user.email === localStorage.getItem('currentUser')){
    			current = user;
    		}
    	});
    	return current;
    }

    function logOut(user){
    	localStorage.setItem('currentUser', "");
      //return true;
    }

    return factory;

  }
})();
