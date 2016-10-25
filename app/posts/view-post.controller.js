'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.viewPost', ['$routeParams', '$rootScope', '$sce',
  'myApp.core.service', 'myApp.posts.postsService',
function($routeParams, $rootScope, $sce, coreService, postsService) {
  var self = this;

  self.firstCharUpperCase = coreService.firstCharUpperCase;

  coreService.loadAll();

  self.postId = parseInt($routeParams.postId);
  self.post = postsService.getPostById(self.postId);

  self.renderHtml = coreService.renderHtml;

}]);