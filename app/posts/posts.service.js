'use strict';

angular.module('myApp.posts')
.factory('myApp.posts.postsService', ['$http', '$rootScope', 'myApp.core.headerService',
function ($http, $rootScope, headerService) {
  var service = {};

  service.listAllPosts = function() {
    var posts = [];

    $http({
      method: 'GET',
      url: apiUrls.posts,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Array.prototype.push.apply(posts, response.data);
      $rootScope.$broadcast('Posts loaded', posts);
    }, function errorCallback(error) {
      console.log(error);
    });

    return posts;
  };

  /** 
    * args: {
    *   id: (required),
    *   data: {
    *     star,
    *     comment
    *   }
    * }
    */
  service.updatePost = function(args) {
    var post = {};

    $http({
      method: 'PUT',
      url: apiUrls.posts + '/' + args.id,
      data: args.data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Object.assign(post, response.data);
    }, function errorCallback(error) {
      console.log(error);
    });

    return post;
  }

  service.deletePost = function(id) {
    $http({
      method: 'DELETE',
      url: apiUrls.posts + '/' + id,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      //
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  /**
    * data: {
    *   stars,
    *   comment,
    *   courseId,
    *   userId,
    *   postTagIds
    * }
    */
  service.createPost = function(data) {
    return $http({
      method: 'POST',
      url: apiUrls.posts,
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      return response.data;
      $rootScope.$broadcast('Create post finished', response.data);
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.getPostById = function(id) {
    var post = {};

    $http({
      method: 'GET',
      url: apiUrls.posts + '/' + id,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      Object.assign(post, response.data);
    }, function errorCallback(error) {
      console.log(error);
    });

    return post;
  }

  service.listAllReplies = function(postId) {
    return $http({
      method: 'GET',
      url: apiUrls.posts + '/' + postId + '/replies',
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }


  /**
    * data: {
    *   content,
    *   user_id
    * }
    */
  service.createReply = function(postId, data) {
    return $http({
      method: 'POST',
      url: apiUrls.posts + '/' + postId + '/replies',
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  return service;
}]);