'use strict';

angular.module('myApp.user')

.controller('myApp.user.signIn', [function() {
  this.user = {};

  $('#sign-in-form').validator();

  this.submitSignInForm = function() {
    //
  };
}]);