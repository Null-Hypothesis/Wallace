'use strict';

angular.module('myApp.teachers')
.factory('myApp.teachers.teachersService', ['$http', '$rootScope', 'myApp.core.headerService',
function ($http, $rootScope, headerService) {
  var service = {};

  service.listAllTeachers = function () {
    var teachers = [];

    $http({
      method: 'GET',
      url: apiUrls.teachers,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Array.prototype.push.apply(teachers, response.data);
      $rootScope.$broadcast('Teachers loaded', teachers);
    }, function errorCallback(error) {
      console.log(error);
    });

    return teachers;
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