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
    tasksService
  ]);

function tasksService(asteroidFactory, tasksFactory) {

  let tasks = asteroidFactory.asteroid.getCollection("tasks");
  let tasksQuery = tasks.reactiveQuery({});
  
  tasksQuery.on('change', (idDocument) => {
    tasksFactory.list = tasksQuery.result;
  });

  this.subscribe = () => {
    asteroidFactory.asteroid.subscribe("tasks");
  };
  
}
