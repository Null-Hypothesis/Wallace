'use strict';

angular.module('myApp.core')
.factory('myApp.core.headerService', ['$rootScope',
function($rootScope) {
  var service = {};

  service.getHeader = function() {
    var header = {
      'Content-Type': 'application/json'
    };
    if ($rootScope.user) {
      header["Authorization"] = 'Token token="'
        + $rootScope.user.token
        + '", email="'
        + $rootScope.user.email
        + '"';
    }
    return header;
  }

  return service;
}]);