'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.viewPost', ['$routeParams', '$rootScope', '$sce', '$route', '$anchorScroll', '$location',
  'myApp.core.service', 'myApp.posts.postsService',
function($routeParams, $rootScope, $sce, $route, $anchorScroll, $location, coreService, postsService) {
  var self = this;

  self.firstCharUpperCase = coreService.firstCharUpperCase;

  coreService.loadMeta();

  self.scrollTo = function(id) {
    $anchorScroll.yOffset = 55;
    $anchorScroll(id);
  }

  self.postId = parseInt($routeParams.postId);
  self.post = postsService.getPostById(self.postId);
  postsService.listAllReplies(self.postId)
  .then(function sucessCallback(replies) {
    self.replies = replies;
  });

  self.renderHtml = coreService.renderHtml;

  self.replyContent = '';

  self.submitReply = function(content) {
    var data = {};
    data.content = content;
    data.user_id = $rootScope.user.id;
    postsService.createReply(self.postId, data)
    .then(function sucessCallback(reply) {
      $route.reload();
    });
  }
}]);