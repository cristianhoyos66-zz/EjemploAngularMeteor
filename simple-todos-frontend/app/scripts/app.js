'use strict';

/**
 * @ngdoc overview
 * @name simpleTodosFrontendApp
 * @description
 * # simpleTodosFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('simpleTodosFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

angular.module('simpleTodosFrontendApp')
  .config([
    '$stateProvider',
    '$urlRouterProvider', 
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider
	.when('/home', '/')
	.otherwise('/404');

      $stateProvider
      
	.state('notFound', {
	  url: '/404',
	  templateUrl: '404.html',
	})

      .state('auth', {
	  abstract: true,
	  url: '',
	  templateUrl: 'views/auth.html',
	  controller: 'AuthCtrl',
	})

	.state('auth.home', {
	  url: '/',
	  templateUrl: 'views/home.html',
	  controller: 'HomeCtrl as vm',
	});

    }
  ]);
