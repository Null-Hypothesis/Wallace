'use strict';

angular.module('myApp.core')
.filter('bgColor', ['myApp.core.colorService',
function(colorService) {
  return function(input) {
    var index = colorService.getIndex(input);
    var category = colorService.mainColorCategories[index];
    return palette.get(category, '400');
  }
}]);

angular.module('myApp.core')
.filter('darkBgColor', ['myApp.core.colorService',
function(colorService) {
  return function(input) {
    var index = colorService.getIndex(input);
    var category = colorService.mainColorCategories[index];
    return palette.get(category, '800');
  }
}]);

angular.module('myApp.core')
.filter('textColor', ['myApp.core.colorService',
function(colorService) {
  return function(input) {
    var index = colorService.getIndex(input);
    var category = colorService.mainColorCategories[index];
    if (colorService.lightColorCategories.includes(category)) {
      return palette.get('White', 'Text');
    } else {
      return palette.get('White', 'Text');
    }
  }
}]);