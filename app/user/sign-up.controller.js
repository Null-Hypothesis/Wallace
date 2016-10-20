'use strict';

angular.module('myApp.user')

.controller('myApp.user.signUp', ['$http', '$location', '$timeout',
function($http, $location, $timeout) {
  this.user = {};

  $('#sign-up-form').validator();

  console.log(apiUrls.signUp);
  this.submitSignUpForm = function() {
    if (this.user.password === this.user.confirmPassword) {
      $http({
        method: 'POST',
        url: apiUrls.signUp,
        data: {
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.confirmPassword
        }
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
    }
  };
}]);