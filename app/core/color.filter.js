'use strict';

angular.module('myApp.core')
.filter('bgColor', ['myApp.core.colorService',
function(colorService) {
  return function(input) {
    var index = colorService.getIndex(input);
    var category = colorService.mainColorCategories[index];
    return palette.get(category, '500');
  }
}]);

angular.module('myApp.core')
.filter('textColor', ['myApp.core.colorService',
function(colorService) {
  return function(input) {
    var index = colorService.getIndex(input);
    var category = colorService.mainColorCategories[index];
    if (colorService.lightColorCategories.includes(category)) {
      return palette.get('Black', 'text');
    } else {
      return palette.get('White', 'text');
    }
  }
}]);