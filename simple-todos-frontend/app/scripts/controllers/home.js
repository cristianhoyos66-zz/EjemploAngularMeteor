
'use strict';

/**
 * @ngdoc function
 * @name simpleTodosFrontendApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the simpleTodosFrontendApp
 */
angular.module('simpleTodosFrontendApp')
  .controller('HomeCtrl', [
    'tasksFactory',
    'tasksService',
    HomeCtrl
  ]);

function HomeCtrl(tasksFactory, tasksService) {
  let vm = this;

  tasksService.subscribe();
  
  vm.todoList = tasksFactory.list;

}
