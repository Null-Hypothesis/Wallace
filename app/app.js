'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'ngSanitize',
  'ui.select',
  'angularTrix',
  'myApp.user',
  'myApp.version',
  'myApp.navBar',
  'myApp.homePage'
]).
config(['$locationProvider', '$routeProvider',
function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home-page'});
}]);
