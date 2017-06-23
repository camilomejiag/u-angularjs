(function() {
  'use strict';

  describe('directive card', function() {

    var suite = {};
    var $rootScope;
    var $compile;

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $templateCache.put('app/components/card/card.html', $templateCache.get('app/components/card/card.html'));

      $rootScope.card = {
        title : '',
        description : '',
        background : '',
        textColor : '',
        favorite : function(){
          return true;
        }
      };

      suite.template =
        '<card title="card.title"'+
        'description="card.description"'+
        'background="card.background"'+
        'text-color="card.textColor"'+
        'reserved-by="{{card.reservedBy}}"'+
        'cb-favorite="card.favorite(title)"'+
        'icon="{{card.icon}}">'+
        '</card>';

    }));

    afterEach(function () {
      //suite.element.remove();
      suite = {};
    });

    afterAll(function () {
      suite = null;
    });

    it('the card directive exists and has empty parameters', function() {
      expect(suite.element).not.toEqual(null);
    });

    it('using the .find command', function() {

      $rootScope.card = {
        title : 'Favorite Card',
        description : 'Talos Business Card',
        background : 'rgb(202, 162, 162)',
        textColor : 'rgb(23, 52, 110)',
        favorite : function(title){
          return title;
        }
      };

      suite.element = $compile(angular.element(suite.template))($rootScope);
      $rootScope.$digest();

      expect(suite.element.find('.title').text()).toEqual($rootScope.card.title);
      expect(suite.element.find('.description').text()).toEqual($rootScope.card.description);
      expect(suite.element.css('background-color')).toEqual($rootScope.card.background);
      expect(suite.element.css('color')).toEqual($rootScope.card.textColor);
      suite.element.find('.favorite').click();
      expect($rootScope.card.favorite).not.toBe(null);

    });

  });
})();