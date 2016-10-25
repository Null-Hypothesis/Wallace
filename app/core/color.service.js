'use strict';

angular.module('myApp.core')
.factory('myApp.core.colorService', [
function() {
  var service = {};

  service.mainColorCategories = [
    'Gray',
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

  return service;
}]);