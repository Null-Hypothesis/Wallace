'use strict';

angular.module('myApp.user')

.controller('myApp.user.signIn', ['$http', '$location', '$rootScope', '$timeout', 'myApp.user.userService',
function($http, $location, $rootScope, $timeout, userService) {
  this.user = {};

  var form = $('#sign-in-form');

  this.submitSignInForm = function() {
    form.validator('validate');
    if (form.find('.has-error').length > 0) {
      return;
    }
    $http({
      method: 'POST',
      url: apiUrls.signIn,
      data: {
        email: this.user.email,
        password: this.user.password
      }
    }).then(function successCallback(response) {
      $rootScope.user = response.data;
      userService.setUserStatus(response.data);
      $('#sign-in-success-modal').modal('show');
      $timeout(function() {
        $('#sign-in-success-modal').modal('hide');
        $timeout(function() {
          $location.path('/');
        }, 500);
      }, 2500);
    }, function errorCallback() {
      //
    });
  };
}]);