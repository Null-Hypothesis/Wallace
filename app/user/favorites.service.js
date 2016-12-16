'use strict';

angular.module('myApp.user')
.factory('myApp.user.favoritesService', ['$http', '$rootScope',
function($http, $rootScope) {
  var service = {};

  service.listAllFavorites = function() {
    return $http({
      method: 'GET',
      url: apiUrls.user + '/' + $rootScope.user.id + '/favorites',
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
      url: apiUrls.user + '/' + $rootScope.user.id + '/favorites',
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
    });
  };

  service.deleteFavorite = function(data) {
    return $http({
      method: 'DELETE',
      url: apiUrls.user + '/' + $rootScope.user.id + '/favorites',
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Delete favorite finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.unlike = function(data) {
    //
  };

  return service;
}]);