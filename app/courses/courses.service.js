'use strict';

angular.module('myApp.courses')

.factory('myApp.courses.coursesService', ['$http',
function($http) {
  var service = {};

  service.listAllCourses = function() {
    var courses = [];

    $http({
      method: 'GET',
      url: apiUrls.courses, 
    }).then(function successCallback(response) {
      Array.prototype.push.apply(courses, response.data);
    }, function errorCallback(error) {
      //
    });

    return courses;
  };

  /** 
    * args: {
    *   id: (required),
    *   data: {
    *     name,
    *     courseTagIds
    *   }
    * }
    */
  service.updateCourse = function(args) {
    var course = {};

    $http({
      method: 'PUT',
      url: apiUrls.courses + '/' + args.id,
      data: args.data
    }).then(function successCallback(response) {
      Object.assign(course, response.data);
    }, function errorCallback(error) {
      //
    });

    return course;
  }

  service.deleteCourse = function(id) {
    $http({
      method: 'DELETE',
      url: apiUrls.courses + '/' + id
    }).then(function successCallback(response) {
      //
    }, function errorCallback(error) {
      //
    });
  }

  /**
    * data: {
    *   name,
    *   courseId: Not id, course code, e.g.: COMP130014.01,
    *   description,
    *   teacherId,
    *   courseTagIds
    * }
    */
  service.createCourse = function(data) {
    var course = {};

    $http({
      method: 'POST',
      url: apiUrls.courses,
      data: data
    }).then(function successCallback(response) {
      Object.assign(course, response.data);
    }, function errorCallback(error) {
      //
    });

    return course;
  }

  return service;
}]);