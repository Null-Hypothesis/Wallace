'use strict';

angular.module('myApp.homePage', [
  'myApp.courses'
])

.config(['$routeProvider',
function($routeProvider) {
  $routeProvider  
  .when('/home-page', {
    templateUrl: 'home-page/home-page.template.html',
    controller: 'myApp.homePage.controller',
    controllerAs: 'homePage'
  });
}]);