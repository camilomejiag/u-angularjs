(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog) {
    var vm = this;
    vm.marker = {};
    vm.showAlert1 = showAlert1;
    vm.showAlert2 = showAlert2;
    vm.showAlert2 = showAlert3;
    vm.showError = showError;

    //Talitos API Key
    vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
    vm.kind = '0';

    // Internal method
    //Alert from weather
    function showAlert1(weather, weather2) {
      alert = $mdDialog.alert({
        title: 'Weather',
        textContent: 'Weather description: ' + weather + ", and mainly: " + weather2,
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

    //Alert from UV
    function showAlert2(weather) {
      alert = $mdDialog.alert({
        title: 'Weather',
        textContent: 'UV: ' + weather,
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

    //Alert from Pollution
    function showError(weather) {
      alert = $mdDialog.alert({
        title: 'Error',
        textContent: '',
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

    //Alert from Pollution
    function showAlert3(weather) {
      alert = $mdDialog.alert({
        title: 'Weather',
        textContent: 'Pollution: ' + weather,
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

    //Should we extend or use vm?
    angular.extend($scope, {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        markers: vm.marker,
        defaults: {
            scrollWheelZoom: true
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', function(event, args){

        var lat = args.leafletEvent.latlng.lat;
        var lat2 = lat.toFixed(1);
        var lng = args.leafletEvent.latlng.lng;
        var lng2 = lng.toFixed(1);
        var newmarker = {
            lat: lat,
            lng: lng,
            focus: true,
            draggable: false
        }

        vm.marker["newmarker"] = newmarker;

        if(vm.kind == '0'){
            //Remember Services
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?APPID='+vm.apiKey+'&lat=' + lat + '&lon=' + lng + ''
            }).then(function successCallback(response) {
                //console.log(response.data); //Not a good practice 
                showAlert1(response.data.weather[0].description, response.data.weather[0].main);
            }, function errorCallback(response) {
                showError();
            });
        }else if(vm.kind == '1'){
            //Remember Services
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/v3/uvi/'+lat2+','+lng2+'/current.json?appid='+vm.apiKey
            }).then(function successCallback(response) {
                //console.log(response.data.data); //Not a good practice 
                showAlert2(response.data.data);
            }, function errorCallback(response) {
                showError();
            });
        }else if(vm.kind == '2'){
            //Remember Services
            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/pollution/v1/co/'+lat2+','+lng2+'/current.json?appid='+vm.apiKey
            }).then(function successCallback(response) {
                //console.log(response.data.data[0].pressure); //Not a good practice 
                showAlert3(response.data.data[0].pressure);
            }, function errorCallback(response) {
                showError();
            });
        }
    });

  }

})();
