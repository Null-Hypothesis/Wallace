'use strict';

angular.module('myApp.user')
.run(['$rootScope', function($rootScope) {
  $rootScope.user = undefined;
}]);