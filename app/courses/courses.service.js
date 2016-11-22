'use strict';

angular.module('myApp.courses')

.factory('myApp.courses.coursesService', ['$http', '$rootScope', 'myApp.core.headerService',
function($http, $rootScope, headerService) {
  var service = {};

  service.listAllCourses = function() {
    return $http({
      method: 'GET',
      url: apiUrls.courses,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Courses loaded', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
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
      data: args.data,
      headers: headerService.getHeader()
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
      url: apiUrls.courses + '/' + id,
      headers: headerService.getHeader()
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
    return $http({
      method: 'POST',
      url: apiUrls.courses,
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      return response.data;
      $rootScope.$broadcast('Create course finished', response.data);
    }, function errorCallback(error) {
      console.log(error);
    });
  } 

  return service;
}]);