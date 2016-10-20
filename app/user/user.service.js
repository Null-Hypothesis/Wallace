'use strict';

angular.module('myApp.user')
.factory('myApp.user.userService', ['$cookies',
function($cookies) {
  var service = {};

  service.getUserStatus = function () {
    var userJson = $cookies.get('user');
    if (userJson === undefined) {
      return undefined;
    } else {
      var user = JSON.parse(userJson);
      return user;
    }
  };

  service.setUserStatus = function (user) {
    if (user === undefined) {
      $cookies.remove('user');
    } else { 
      $cookies.put('user', JSON.stringify(user));
    }
  };

  return service;
}]);