'use strict';

angular.module('myApp.homePage', [])

.config(['$routeProvider',
function($routeProvider) {
  $routeProvider  
  .when('/home-page', {
    templateUrl: 'home-page/home-page.template.html',
    controller: 'myApp.homePage.controller',
    controllerAd: 'homePage'
  });
}]);