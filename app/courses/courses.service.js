'use strict';

angular.module('myApp.courses')

.factory('myApp.courses.coursesService', ['$http', '$rootScope',
function($http, $rootScope) {
  var service = {};

  service.listAllCourses = function() {
    var courses = [];

    $http({
      method: 'GET',
      url: apiUrls.courses, 
    }).then(function successCallback(response) {
      Array.prototype.push.apply(courses, response.data);
      $rootScope.$broadcast('Courses loaded', courses);
    }, function errorCallback(error) {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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
      $rootScope.$broadcast('Create course finished', course);
    }, function errorCallback(error) {
      console.log(error);
    });

    return course;
  } 

  return service;
}]);