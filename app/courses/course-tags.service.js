'use strict';

angular.module('myApp.courses')

.factory('myApp.courses.courseTagsService', ['$http', '$rootScope', 'myApp.core.headerService',
function($http, $rootScope, headerService) {
  var service = {};

  service.listAllCourseTags = function() {
    var courseTags = [];

    $http({
      method: 'GET',
      url: apiUrls.courseTags,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Array.prototype.push.apply(courseTags, response.data);
      $rootScope.$broadcast('Course tags loaded', courseTags);
    }, function errorCallback(error) {
      console.log(error);
    });

    return courseTags;
  };

  service.createCourseTag = function(name) {
    return $http({
      method: 'POST',
      url: apiUrls.courseTags,
      data: {
        name: name
      },
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Create course tag finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  return service;
}]);