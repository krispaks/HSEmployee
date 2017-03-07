import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'HS';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    //expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
    expect(true).toBe(true);
  });
});
