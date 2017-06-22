(function() {
  'use strict';

  describe('directive card', function() {

    var suite = {};
    var $rootScope;
    var $compile;
    var $timeout;

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {
      $rootScope = $injector.get('$rootScope');
      $compile = $injector.get('$compile');
      $timeout = $injector.get('$timeout');
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
        background : 'rgba(202, 162, 162, 1)',
        textColor : 'rgba(23, 52, 110, 1)',
        favorite : function(title){
          return title;
        }
      };

      suite.element = $compile(angular.element(suite.template))($rootScope);
      $rootScope.$digest();

      expect(suite.element.find('.title').text()).toEqual($rootScope.card.title);
      expect(suite.element.find('.description').text()).toEqual($rootScope.card.description);
      
      //Timeout used because needs time to be setted
      $timeout(function(){
        expect(suite.element.find('.card').css('background-color')).toEqual($rootScope.card.background);
        expect(suite.element.find('.card').css('color')).toEqual($rootScope.card.textColor);
      },100);

      suite.element.find('.favorite').click();
      expect($rootScope.card.favorite).not.toBe(null);

    });

  });
})();