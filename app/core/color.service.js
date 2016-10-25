'use strict';

angular.module('myApp.core')
.factory('myApp.core.colorService', [
function() {
  var service = {};

  service.mainColorCategories = [
    'Grey',
    'Pink',
    'Cyan',
    'Light Green',
    'Purple',
    'Deep Purple',
    'Indigo',
    'Blue',
    'Light Blue',
    'Red',
    'Teal',
    'Green',
    'Lime',
    'Yellow',
    'Amber',
    'Orange',
    'Deep Orange',
    'Brown',
    'Blue Grey'
  ];

  service.lightColorCategories = [
    'Light Blue',
    'Cyan',
    'Green',
    'Light Green',
    'Lime',
    'Yellow',
    'Amber',
    'Orange',
    'Grey'
  ];

  service.getIndex = function(content) {
    if (content === undefined) {
      return 0;
    }
    var total = service.mainColorCategories.length;
    if (typeof(content) === 'string') {
      return content.charCodeAt(0) % total;
    } else {
      return content % total;
    }
  }

  return service;
}]);