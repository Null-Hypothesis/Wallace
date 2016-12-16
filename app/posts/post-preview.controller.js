'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.postPreview', ['$rootScope', 'myApp.core.service',
  'myApp.user.favoritesService',
function($rootScope, coreService, favoritesService) {
  var self = this;

  self.post = $rootScope.id2post[self.postId];

  self.renderHtml = coreService.renderHtml;
  self.firstCharUpperCase = coreService.firstCharUpperCase;

  self.clickLike = function() {
    favoritesService.like(self.post.id);
  }

  self.clickUnlike = function() {
    favoritesService.unlike(self.post.id);
  }
}]);