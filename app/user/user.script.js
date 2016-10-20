'use strict';

angular.module('myApp.user')
.run(['$rootScope', 'myApp.user.userService',
function($rootScope, userService) {
  $rootScope.user = userService.getUserStatus();
}]);