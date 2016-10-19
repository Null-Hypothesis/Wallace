'use strict';

angular.module('myApp.user')

.controller('myApp.user.signUp', [function() {
  this.user = {};

  this.submitSignUpForm = function() {
    console.log('Click Submit.');
  };
}]);