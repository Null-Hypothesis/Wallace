'use strict';

angular.module('myApp.posts')
.factory('myApp.posts.postTagsService', ['$http', '$rootScope', 'myApp.core.headerService',
function ($http, $rootScope, headerService) {
  var service = {};

  service.listAllPostTags = function() {
    var postTags = [];

    $http({
      method: 'GET',
      url: apiUrls.postTags,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Array.prototype.push.apply(postTags, response.data);
      $rootScope.$broadcast('Post tags loaded', postTags);
    }, function errorCallback(error) {
      console.log(error);
    });

    return postTags;
  }

  service.createPostTag = function(name) {
    var postTag = {};

    $http({
      method: 'POST',
      url: apiUrls.postTags,
      data: {
        name: name
      },
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Object.assign(postTag, response.data);
    }, function errorCallback(error) {
      console.log(error);
    });

    return postTag;
  }

  return service;
}]);