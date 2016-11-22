'use strict';

angular.module('myApp.posts')
.factory('myApp.posts.postTagsService', ['$http', '$rootScope', 'myApp.core.headerService',
function ($http, $rootScope, headerService) {
  var service = {};

  service.listAllPostTags = function() {
    return $http({
      method: 'GET',
      url: apiUrls.postTags,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Post tags loaded', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.createPostTag = function(name) {
    return $http({
      method: 'POST',
      url: apiUrls.postTags,
      data: {
        name: name
      },
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      return response.data;
      $rootScope.$broadcast('Create post tag finished', response.data);
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  return service;
}]);