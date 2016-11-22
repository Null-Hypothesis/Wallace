'use strict';

angular.module('myApp.teachers')
.factory('myApp.teachers.teachersService', ['$http', '$rootScope', 'myApp.core.headerService',
function ($http, $rootScope, headerService) {
  var service = {};

  service.listAllTeachers = function () {
    return $http({
      method: 'GET',
      url: apiUrls.teachers,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Teachers loaded', response.data);
      return response.data
    }, function errorCallback(error) {
      console.log(error);
    });
  };

  service.createTeacher = function (name) {
    return $http({
      method: 'POST',
      url: apiUrls.teachers,
      data: {
        name: name
      },
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Create teacher finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  return service;
}]);