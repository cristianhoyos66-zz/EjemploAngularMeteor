'use strict';

/**
 * @ngdoc service
 * @name simpleTodosFrontendApp.asteroidFactory
 * @description
 * # asteroidFactory
 * Factory in the simpleTodosFrontendApp.
 */
angular.module('simpleTodosFrontendApp')
  .factory('asteroidFactory', function () {

        // Connect to a Meteor backend
    let ceres = new Asteroid("localhost:3000");

    let sharedData = {
      asteroid: ceres
    };
    
    return sharedData;
  });
