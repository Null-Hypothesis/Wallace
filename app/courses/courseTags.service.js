'use strict';

angular.module('myApp.courses')

.factory('myApp.courses.courseTagsService', ['$http',
function($http) {
  var service = {};

  service.listAllCourseTags = function() {
    var courseTags = [];

    $http({
      method: 'GET',
      url: apiUrls.courseTags, 
    }).then(function successCallback(response) {
      Array.prototype.push.apply(courseTags, response.data);
    }, function errorCallback() {
      //
    });

    return courseTags;
  };

  service.createCourseTag = function(name) {
    var courseTag = {};

    $http({
      method: 'POST',
      url: apiUrls.courseTags,
      data: {
        name: name
      }
    }).then(function successCallback(response) {
      Object.assign(courseTag, response.data);
    }, function errorCallback(error) {
      //
    });

    return courseTag;
  }

  return service;
}]);