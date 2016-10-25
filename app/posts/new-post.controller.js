'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.newPost', ['$rootScope', 'myApp.posts.postsService',
function($rootScope, postsService) {
  var self = this;

  self.post = {};
  self.post.postTagIds = '';
  self.post.stars = '';

  self.submitNewPost = function() {
    self.post.stars = parseInt(self.post.stars);
    self.post.courseId = self.courseId;
    self.post.userId = $rootScope.user.id;
    self.post.postTagIds = JSON.parse('[' + self.post.postTagIds + ']');
    
    $rootScope.$on('Create post finished',
    function(event, post) {
      $('#create_post').modal('hide');
      $('#create_post_success').modal('show');
    });

    var result = postsService.createPost(self.post);
    console.log(result);
  }
}]);