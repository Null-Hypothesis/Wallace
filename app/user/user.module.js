'use strict';

// Define the `user` module
angular.module('myApp.user', [
  'myApp.navBar',
  'myApp.core',
  'myApp.posts'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/user-view', {
    templateUrl: 'user/user-view.template.html',
    controller: 'myApp.user.userView',
    controllerAs: 'userView'
  })
  .when('/user-view/:userId', {
    templateUrl: 'user/user-view.template.html',
    controller: 'myApp.user.userView',
    controllerAs: 'userView'
  })
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
