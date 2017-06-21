(function() {
  'use strict';

  describe('WeatherController', function() {

    beforeEach(module('angularApp'));
    var suite = {};

    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {

      suite.$controller = $injector.get('$controller');
      suite.$rootScope = $injector.get('$rootScope');
      suite.$q = $injector.get('$q'); //A service that helps you run functions asynchronously
      suite.$mdDialog =  $injector.get('$mdDialog');
      suite.$log =  $injector.get('$log');

      suite.weatherFactoryS = {
        getWeather: function(lat, lon) {
          return {
            query: function() {
              suite.deferQuery = suite.$q.defer(); //expose the associated Promise, signaling the successful or unsuccessful completion
              return { $promise: suite.deferQuery.promise };
            }
          };
        },
        getUV: function(lat, lon) {
          return {
            query: function() {
              suite.deferQuery = suite.$q.defer(); //expose the associated Promise, signaling the successful or unsuccessful completion
              return { $promise: suite.deferQuery.promise };
            }
          };
        },
      };

      suite.Arguments = {
        args: {
          leafletEvent: {
            latlng: {
              lat: 40.245991504199026,
              lng: -111.181640625
            }
          }
        }
      };

      suite.vm = suite.$controller('WeatherController', {
      WeatherFactory : suite.weatherFactoryS,
      $scope: suite.$rootScope,
      $mdDialog: suite.$mdDialog,
      $log: suite.$log
      });

    }));

      afterEach(function () {
        suite = {};
      });

      afterAll(function () {
        suite = null;
      });

      function resolveAndRefresh(data){
        suite.deferQuery.resolve(data);
        suite.$rootScope.$apply();
      }

      function rejectAndRefresh(data){
        suite.deferQuery.reject(data);
        suite.$rootScope.$apply();
      }


    describe('triggerClick function', function () {

      //Test de getWeather para success, null y error
      it('Found getWeather', function () {
        suite.vm.kind = 0;
        spyOn(suite.weatherFactoryS, 'getWeather').and.callThrough();
        spyOn(suite.vm, 'openModal').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        resolveAndRefresh({
          name: 'Medellin',
          weather: [{ description:'Sunny' }],
          main: { temp: 33 }
        });
        expect(suite.weatherFactoryS.getWeather).toHaveBeenCalled();
        expect(suite.vm.response.success).toBe(true);
        expect(suite.vm.openModal).toHaveBeenCalled();
      });

      it('Didnt find getWeather', function () {
        suite.vm.kind = 0;
        spyOn(suite.weatherFactoryS, 'getWeather').and.callThrough();
        spyOn(suite.vm, 'openModal').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        resolveAndRefresh({});
        expect(suite.weatherFactoryS.getWeather).toHaveBeenCalled();
        expect(suite.vm.response.success).toBe(false);
        expect(suite.vm.openModal).toHaveBeenCalled();
      });

      it('getWeather Error', function () {
        suite.vm.kind = 0;
        spyOn(suite.weatherFactoryS, 'getWeather').and.callThrough();
        spyOn(suite.$log, 'debug').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        rejectAndRefresh("Error");
        expect(suite.weatherFactoryS.getWeather).toHaveBeenCalled();
        expect(suite.$log.debug).toHaveBeenCalled();
      });

      //Test de getUV para success, null y error
      it('Found getUV', function () {
        suite.vm.kind = 1; // Es 1 porque el controlador define que este es el valor de vm.kind para UV
        spyOn(suite.weatherFactoryS, 'getUV').and.callThrough();
        spyOn(suite.vm, 'openModal').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        resolveAndRefresh({
          data: 30
        });
        expect(suite.weatherFactoryS.getUV).toHaveBeenCalled();
        expect(suite.vm.response.success).toBe(true);
        expect(suite.vm.openModal).toHaveBeenCalled();
      });

      it('Didnt find getUV', function () {
        suite.vm.kind = 1;
        spyOn(suite.weatherFactoryS, 'getUV').and.callThrough();
        spyOn(suite.vm, 'openModal').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        resolveAndRefresh({});
        expect(suite.weatherFactoryS.getUV).toHaveBeenCalled();
        expect(suite.vm.response.success).toBe(false);
        expect(suite.vm.openModal).toHaveBeenCalled();
      });

      it('getUV Error', function () {
        suite.vm.kind = 1;
        spyOn(suite.weatherFactoryS, 'getUV').and.callThrough();
        spyOn(suite.$log, 'debug').and.callThrough();
        suite.vm.triggerClick(null, suite.Arguments.args);
        rejectAndRefresh("Error");
        expect(suite.weatherFactoryS.getUV).toHaveBeenCalled();
        expect(suite.$log.debug).toHaveBeenCalled();
      });

    });


  });
})();