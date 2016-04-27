'use strict';

describe('Service: asteroidFactory', function () {

  // load the service's module
  beforeEach(module('simpleTodosFrontendApp'));

  // instantiate service
  var asteroidFactory;
  beforeEach(inject(function (_asteroidFactory_) {
    asteroidFactory = _asteroidFactory_;
  }));

  it('should do something', function () {
    expect(!!asteroidFactory).toBe(true);
  });

});
