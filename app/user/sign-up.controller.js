'use strict';

angular.module('myApp.user')

.controller('myApp.user.signUp', ['$http', '$location', '$timeout', 'myApp.core.headerService',
function($http, $location, $timeout, headerService) {
  this.user = {};

  var form = $('#sign-up-form');

  this.submitSignUpForm = function() {
    form.validator('validate');
    if (form.find('.has-error').length > 0) {
      return;
    }
    $http({
      method: 'POST',
      url: apiUrls.signUp,
      data: {
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.confirmPassword,
        name: this.user.name,
        description: this.user.description
      },
      headers: headerService.getHeader()
    }).then(function successCallback(response) {
      $('#sign-up-success-modal').modal('show');
      $timeout(function() {
        $('#sign-up-success-modal').modal('hide');
        $timeout(function() {
          $location.path('/sign-in');
        }, 500);
      }, 2500);
    }, function errorCallback() {
      //
    });
  };
}]);