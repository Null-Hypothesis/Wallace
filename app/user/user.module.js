'use strict';

// Define the `user` module
angular.module('myApp.user', ['myApp.navBar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/sign-up', {
    templateUrl: 'user/sign-up.template.html',
    controller: 'myApp.user.signUp',
    controllerAs: 'signUp'
  })
  .when('/sign-in', {
    templateUrl: 'user/sign-in.template.html',
    controller: 'myApp.user.signIn',
    controllerAs: 'signIn'
  })
  .when('/log-out', {
    templateUrl: 'user/log-out.template.html',
    controller: 'myApp.user.logOut'
  });
}]);
