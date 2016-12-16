'use strict';

angular.module('myApp.user')
.factory('myApp.user.userService', ['$cookies', '$http', '$rootScope', 'myApp.core.headerService',
function($cookies, $http, $rootScope, headerService) {
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

  service.getUser = function (userId) {
    return $http({
      method: 'GET',
      url: apiUrls.users + '/' + userId,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('User loaded', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });;
  };

  return service;
}]);