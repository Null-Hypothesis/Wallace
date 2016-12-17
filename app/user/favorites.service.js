'use strict';

angular.module('myApp.user')
.factory('myApp.user.favoritesService', ['$http', '$rootScope', 'myApp.core.headerService',
function($http, $rootScope, headerService) {
  var service = {};

  service.listAllFavorites = function() {
    return $http({
      method: 'GET',
      url: apiUrls.users + '/' + $rootScope.user.id + '/favorites',
      headers: headerService.getHeader()
    })
    .then(function successCallback(response) {
      $rootScope.$broadcast('Favorites loaded', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.createFavorite = function(data) {
    return $http({
      method: 'POST',
      url: apiUrls.users + '/' + $rootScope.user.id + '/favorites',
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Create favorite finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.like = function(postId) {
    return service.createFavorite({
      post_id: postId
    }).then(function (favorite) {
      $rootScope.favorites[postId] = favorite.id;
      $rootScope.$broadcast('Like finished', favorite);
    });
  };

  service.deleteFavorite = function(id) {
    return $http({
      method: 'DELETE',
      url: apiUrls.users + '/' + $rootScope.user.id + '/favorites/' + id,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Delete favorite finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.unlike = function(postId) {
    return service.deleteFavorite($rootScope.favorites[postId])
    .then(function () {
      delete $rootScope.favorites[postId];
      $rootScope.$broadcast('Unlike finished');
    });
  };

  return service;
}]);