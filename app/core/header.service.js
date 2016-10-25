'use strict';

angular.module('myApp.core')
.factory('myApp.core.headerService', [
function() {
  var service = {};

  service.getHeader = function() {
    return {
      'Content-Type': 'application/json'
    };
  }

  return service;
}]);