'use strict';

describe('Service: asteroidService', function () {

  // load the service's module
  beforeEach(module('simpleTodosFrontendApp'));

  // instantiate service
  var asteroidService;
  beforeEach(inject(function (_asteroidService_) {
    asteroidService = _asteroidService_;
  }));

  it('should do something', function () {
    expect(!!asteroidService).toBe(true);
  });

});
