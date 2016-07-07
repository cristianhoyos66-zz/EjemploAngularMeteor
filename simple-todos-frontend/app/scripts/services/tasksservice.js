'use strict';

/**
 * @ngdoc service
 * @name simpleTodosFrontendApp.tasksService
 * @description
 * # tasksService
 * Service in the simpleTodosFrontendApp.
 */
angular.module('simpleTodosFrontendApp')
  .service('tasksService', [
    'asteroidFactory',
    'tasksFactory',
    '$rootScope',
    tasksService
  ]);

function tasksService(asteroidFactory, tasksFactory, $rootScope) {

  let tasks = asteroidFactory.asteroid.getCollection("tasks");
  let tasksQuery = tasks.reactiveQuery({});
  
  tasksQuery.on('change', (idDocument) => {
    $rootScope.$apply(() => {
      angular.extend(tasksFactory.list, tasksQuery.result);
    });
  });

  this.subscribe = () => {
    asteroidFactory.asteroid.subscribe("tasks");
  };
  
}
