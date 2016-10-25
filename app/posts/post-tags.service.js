'use strict';

angular.module('myApp.posts')
.factory('myApp.posts.postTagsService', ['$http', '$rootScope',
function ($http, $rootScope) {
  var service = {};

  service.listAllPostTags = function() {
    var postTags = [];

    $http({
      method: 'GET',
      url: apiUrls.postTags
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
      }
    }).then(function successCallback(response) {
      Object.assign(postTag, response.data);
    }, function errorCallback(error) {
      console.log(error);
    });

    return postTag;
  }

  return service;
}]);