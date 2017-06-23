(function() {
  'use strict';

  describe('HomeController', function() {
    var suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      suite.$controller = $injector.get('$controller');
      suite.$rootScope = $injector.get('$rootScope');
      suite.scope = suite.$rootScope.$new();

      suite.vm = suite.$controller('HomeController', {
        $scope: suite.scope
      });
    }));

    afterEach(function () {
      suite = {};
    });

    afterAll(function () {
      suite = null;
    });

    it('should be registered', function() {
      expect(suite.vm).not.toEqual(null);
    });

    describe('function setFavorite', function() {
      it('should exist', function() {
        expect(suite.vm.card.setFavorite).not.toBeUndefined();
      });

      it('should add a new favorite', function(){
        spyOn(suite.vm.card, 'setFavorite').and.callThrough();
        suite.vm.card.setFavorite('Favorite Card');
        expect(suite.vm.card.setFavorite).toHaveBeenCalledWith('Favorite Card');
        expect(suite.vm.favoriteList).toEqual(['Favorite Card']);
      });

    });

    describe('function setIcon', function() {
      it('should exist', function() {
        expect(suite.vm.setIcon).not.toBeUndefined();
      });

      it('should add a new favorite', function(){
        spyOn(suite.vm, 'setIcon').and.callThrough();
        suite.vm.setIcon('Icon');
        expect(suite.vm.setIcon).toHaveBeenCalledWith('Icon');
        expect(suite.vm.card.icon).toEqual('Icon');
      });

    });

  });
})();