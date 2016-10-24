'use strict';

angular.module('myApp.user')

.controller('myApp.user.logOut', ['$rootScope', '$http', '$location', '$timeout', 'myApp.user.userService',
function($rootScope, $http, $location, $timeout, userService) {
  $http({
    method: 'DELETE',
    url: apiUrls.logOut
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