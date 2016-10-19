'use strict';

angular.module('myApp.user')

.controller('myApp.user.signUp', [function() {
  this.user = {};

  $('#sign-up-form').validator();

  console.log(apiUrls.signUp);
  this.submitSignUpForm = function() {
    if (this.user.password === this.user.confirmPassword) {
      //
    }
  };
}]);