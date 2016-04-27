'use strict';

describe('Service: todosFactory', function () {

  // load the service's module
  beforeEach(module('simpleTodosFrontendApp'));

  // instantiate service
  var todosFactory;
  beforeEach(inject(function (_todosFactory_) {
    todosFactory = _todosFactory_;
  }));

  it('should do something', function () {
    expect(!!todosFactory).toBe(true);
  });

});
