(function() {
  'use strict';

  angular
    .module('angularApp')
    .service('WeatherService', WeatherService);

  /** @ngInject */
  function WeatherService($http) {
    
    var vm = this;

    //Talitos API Key
    vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
    vm.kind = '0';
    vm.weather = vm.weather;

    
    return {consolelog: function(lat, lng, kind) {
        var lat2 = lat.toFixed(1);
        var lng2 = lng.toFixed(1);
          if(kind == '0'){
            $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather?APPID='+vm.apiKey+'&lat=' + lat + '&lon=' + lng
                }).then(function successCallback(response) {
                    vm.weather = response.data;
                }, function errorCallback(response) {
                    //console.log("Not found, try again");
                });
        }
     else if(kind == '1'){
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/v3/uvi/'+lat2+','+lng2+'/current.json?appid='+vm.apiKey
            }).then(function successCallback(response) {
                vm.weather = response.data;
            }, function errorCallback(response) {
                //console.log("Not found, try again");
            });
        }else if(kind == '2'){
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/pollution/v1/co/'+lat2+','+lng2+'/current.json?appid='+vm.apiKey
            }).then(function successCallback(response) {
                vm.weather = response.data[0].pressure;
            }, function errorCallback(response) {
                //console.log("Not found, try again");
            });
        }
        return vm.weather
  }

}}})();
