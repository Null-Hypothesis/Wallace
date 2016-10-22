'use strict';

angular.module('myApp.teachers')
.factory('myApp.teachers.teachersService', ['$http'
function ($http) {
  var service = {};

  service.listAllTeachers = function () {
    var teachers = [];

    $http({
      method: 'GET',
      url: apiUrls.teachers
    }).then(function successCallback(response) {
      Array.prototype.push.apply(teachers, response.data);
    }, function errorCallback(error) {
      //
    });

    return teachers;
  };

  service.createTeacher = function (name) {
    var teacher = {};

    $http({
      method: 'POST',
      url: apiUrls.teachers,
      data: {
        name: name
      }
    }).then(function successCallback(response) {
      Object.assign(teacher, response.data);
    }, function errorCallback(error) {
      //
    });

    return teacher;
  }

  return service;
}]);