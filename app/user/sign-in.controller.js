'use strict';

angular.module('myApp.user')

.controller('myApp.user.signIn', [function() {
  this.submitSignInForm = function() {
    console.log('Click Submit.');
  };
}]);