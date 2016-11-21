'use strict';

angular.module('myApp.navBar')

.controller('myApp.navBar.navBar', ['$location',
function($location) {
  var self = this;

  self.searchQuery = '';

  self.clickSearch = function(searchQuery) {
    $location.url('/home-page?query=' + searchQuery);
  }
}]);