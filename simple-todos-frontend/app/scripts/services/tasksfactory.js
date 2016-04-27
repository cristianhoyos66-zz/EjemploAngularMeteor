'use strict';

/**
 * @ngdoc service
 * @name simpleTodosFrontendApp.tasksFactory
 * @description
 * # tasksFactory
 * Factory in the simpleTodosFrontendApp.
 */
angular.module('simpleTodosFrontendApp')
  .factory('tasksFactory', function () {

    let sharedData = {
      list: []
    };

    return sharedData;
    
  });
