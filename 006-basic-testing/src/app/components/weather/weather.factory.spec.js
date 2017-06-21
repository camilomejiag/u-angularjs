(function() {
  'use strict';

  describe('service weatherFactory', function() {
      var weatherFactory;
      var $httpBackend;
      var WEATHER_API;
      var weatherApi;

      beforeEach(module('angularApp'));
      beforeEach(module('ngResource'));
      beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      $httpBackend = $injector.get('$httpBackend');
      //$httpBackend.when('GET', /(.*)\.json/).respond();
      //$httpBackend.when('GET', /(.*)\.html/).respond();
      WEATHER_API = $injector.get('WEATHER_API');
      weatherApi = 'http://api.openweathermap.org';
      }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });

      it('returns weather in lat lng format', function() {

        var lat = 6.2442, lon = 75.5812; //Medellin

        $httpBackend.expectGET( weatherApi + '/data/2.5/weather' + '?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon ).respond({data:'Weather on'});

        var promise = weatherFactory.getWeather(lat,lon);

        promise.query().$promise.then(function(response){
          expect(response.data).toBe('Weather on');
        });
        $httpBackend.flush();
      });
      //$httpBackend.flush();
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });

      it('returns UV in lat lng format', function() {

        var lat = 6.2442, lon = 75.5812; //Medellin

        $httpBackend.expectGET( weatherApi + '/v3/uvi/'+  [lat, lon] + '/current.json?appid='+WEATHER_API ).respond({data:'UV on'});

        var promise = weatherFactory.getUV(lat,lon);

        promise.query({latlng: [lat, lon]}).$promise.then(function(response){
          expect(response.data).toBe('UV on');
        });
        $httpBackend.flush();
      });
      //$httpBackend.flush();
    });

  });
})();