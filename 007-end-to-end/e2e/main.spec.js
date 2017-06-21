'use strict';

describe('The main view', function () {
  var page;

  function fillForm() {
  //Fill the form with valid information
    element(by.id("input_0")).sendKeys("#caa2a2");
    element(by.id("input_1")).sendKeys("#17346e");
    element(by.id("title")).sendKeys("Hello From Talos");
    element(by.id("description")).sendKeys("This is business card by Talos Digital S.A.S");
    element(by.id("favoriteBtn")).click();
    element(by.id("favoriteBtn")).click();
    element(by.id("favoriteBtn")).click();
  }

  beforeAll(function () {
    browser.get('http://localhost:3000/#/');
    page = require('./main.po');
    fillForm();
  });

  it('card directives should exist', function () {
    expect(page.directiveTitle.evaluate('title').isPresent()).toBe(true);
    expect(page.directiveTitle.evaluate('content').isPresent()).toBe(true);
    expect(page.directiveTitle.evaluate('actions').isPresent()).toBe(true);
  });

  it('should check the data of the controller is the same on the directive', function() {
    //Validate the Title is the same on the directive and in the home
    expect(element(by.model("homeCtrl.card.title")).getText()).toBe(element(by.id("title")).getText());

    //Validate the description is the same on the directive and in the home
    expect(element(by.model("homeCtrl.card.description")).getText()).toBe(element(by.id("description")).getText());

    //Validate the background color is the same on the directive and in the home
    expect(element(by.id('card')).getCssValue('background-color')).toEqual('rgba(202, 162, 162, 1)');

    //Validate the text color is the same on the directive and in the home
    expect(element(by.id('card')).getCssValue('color')).toEqual('rgba(23, 52, 110, 1)');

  });

  it('should favorite list equal to 1', function () {
    expect(element.all(by.repeater('favorite in homeCtrl.favoriteList track by $index')).count()).not.toEqual(0);

  });

});
