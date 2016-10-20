'use strict';

angular.module('myApp.user')

.controller('myApp.user.logOut', ['$rootScope', '$http', '$location', '$timeout',
function($rootScope, $http, $location, $timeout) {
  $rootScope.user = undefined;
  $('#log-out-modal').modal('show');
  $timeout(function() {
    $('#log-out-modal').modal('hide');
    $timeout(function() {
      $location.path('/');
    }, 500);
  }, 2500);
}]);