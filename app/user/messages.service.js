'use strict';

angular.module('myApp.user')
.factory('myApp.user.messagesService', ['$http', '$rootScope', 'myApp.core.headerService',
function($http, $rootScope, headerService) {
  var service = {};

  service.listAllMessages = function() {
    return $http({
      method: 'GET',
      url: apiUrls.messages,
      params: {
        user_id: $rootScope.user.id
      },
      headers: headerService.getHeader()
    })
    .then(function successCallback(response) {
      $rootScope.$broadcast('Messages loaded', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.createMessage = function(data) {
    return $http({
      method: 'POST',
      url: apiUrls.messages,
      data: data,
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $rootScope.$broadcast('Create message finished', response.data);
      return response.data;
    }, function errorCallback(error) {
      console.log(error);
    });
  }

  service.messageTo = function(userId, content) {
    return service.createMessage({
      to_user_id: userId,
      content: content
    }).then(function(message) {
      $rootScope.$broadcast('Message to user finished', message);
    });
  };

  return service;
}]);