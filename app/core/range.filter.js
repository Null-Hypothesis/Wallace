'use strict';

angular.module('myApp.core')
.filter('range', [
function() {
  return function(n) {
    var res = [];
    for (var i = 0; i < n; i++) {
      res.push(i);
    }
    return res;
  }
}]);
