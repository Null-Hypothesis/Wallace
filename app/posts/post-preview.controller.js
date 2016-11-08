'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.postPreview', ['$rootScope', 'myApp.core.service',
function($rootScope, coreService) {
  var self = this;

  self.post = $rootScope.id2post[self.postId];

  self.renderHtml = coreService.renderHtml;
  self.firstCharUpperCase = coreService.firstCharUpperCase;
}]);