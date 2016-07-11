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
  let pokemons = asteroidFactory.asteroid.getCollection("pokemons");
  let digimons = asteroidFactory.asteroid.getCollection("digimons");
  let tasksQuery = tasks.reactiveQuery({});
  let pokemonsQuery = pokemons.reactiveQuery({});
  let digimonsQuery = digimons.reactiveQuery({});

  tasksQuery.on('change', (idDocument) => {
    $rootScope.$apply(() => {
      angular.extend(tasksFactory.list, tasksQuery.result);
      console.log(' change task');
    });
  });

  pokemonsQuery.on('change', (idDocument) => {
    $rootScope.$apply(() => {
      angular.extend(tasksFactory.listPokemons, pokemonsQuery.result);
      console.log('change pokemon');
    });
  });

  digimonsQuery.on('change', (idDocument) => {
    $rootScope.$apply(() => {
      angular.extend(tasksFactory.listDigimons, digimonsQuery.result);      
      console.log('change digimon');
    });
  });

  this.subscribe = () => {
    asteroidFactory.asteroid.subscribe("taskToPokemons");
    console.log(asteroidFactory.asteroid.subscribe("taskToPokemons"));
  };

}
