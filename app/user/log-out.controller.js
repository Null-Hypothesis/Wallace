'use strict';

angular.module('myApp.user')

.controller('myApp.user.logOut', ['$rootScope', '$http', '$location', '$timeout',
  'myApp.user.userService', 'myApp.core.headerService',
function($rootScope, $http, $location, $timeout, userService, headerService) {
  $http({
    method: 'DELETE',
    url: apiUrls.logOut,
    headers: headerService.getHeader()
  }).then(function successCallback(response) {
    $rootScope.user = undefined;
    userService.setUserStatus(undefined);
    $('#log-out-modal').modal('show');
    $timeout(function() {
      $('#log-out-modal').modal('hide');
      $timeout(function() {
        $location.path('/');
      }, 500);
    }, 2500);
  }, function errorCallback() {
    //
  });
}]);