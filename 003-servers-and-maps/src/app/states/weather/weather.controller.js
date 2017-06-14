(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog, WeatherService) {
    var vm = this;
    vm.marker = {};

    //Talitos API Key
    vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
    vm.kind = '0';

    //Alert from weather
    function showAlert(variable) {
        console.log(variable);
if (variable != undefined) {
        if (vm.kind == 0) {
          alert = $mdDialog.alert({
            title: 'Weather',
            textContent: 'Weather description: ' + variable.weather[0].description,
            ok: 'Close'
          });
        } else if (vm.kind == 1) {
          alert = $mdDialog.alert({
            title: 'UV',
            textContent: 'UV description: ' + variable.data,
            ok: 'Close'
          });
        } else if (vm.kind == 2) {
            if (variable.data == undefined) {
              alert = $mdDialog.alert({
                title: 'Pollution',
                textContent: 'Pollution description: ',
                ok: 'Close'
              });
            } else {
                 alert = $mdDialog.alert({
                    title: 'Error',
                    textContent: 'Remember, Pollution and UV are on Beta. Please try again',
                    ok: 'Close'
                  });
            }
        } //if
    } else {
        alert = $mdDialog.alert({
            title: 'Error',
            textContent: 'Remember, Pollution and UV are on Beta. Please try again',
            ok: 'Close'
          });
    }
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

        vm.var = WeatherService.consolelog(lat, lng, vm.kind);
        showAlert(vm.var);

        vm.marker["newmarker"] = newmarker;

        
    });

  }

})();
