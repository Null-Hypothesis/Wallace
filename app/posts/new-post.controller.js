'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.newPost', ['$rootScope', '$q',
  'myApp.posts.postsService', 'myApp.core.service', 'myApp.posts.postTagsService',
function($rootScope, $q, postsService, coreService, postTagsService) {
  var self = this;

  self.post = {};
  self.selectedPostTags = [];
  self.postTags = $rootScope.postTags;
  self.post.stars = '';

  self.tagTransform = function(name) {
    var item = {};
    item.name = name;
    item.id = undefined;
    return item;
  }

  self.submitNewPost = function() {
    var promises = [];

    for (var postTag of self.selectedPostTags) {
      if (postTag.id === undefined) {
        promises.push(postTagsService.createPostTag(postTag.name)
        .then(function (resultTag) {
          Object.assign(postTag, resultTag);
        }));
      }
    }

    $q.all(promises)
    .then(function(results) {
      self.post.stars = parseInt(self.post.stars);
      self.post.courseId = self.courseId;
      self.post.userId = $rootScope.user.id;
      self.post.postTagIds = self.selectedPostTags.map(
        function(postTag) {
          return postTag.id;
        });
      return self.post;
    })
    .then(function(post) {
      return postsService.createPost(post);
    })
    .then(function(post) {
      coreService.loadAll();
      $('#create_post').modal('hide');
      $('#create_post_success').modal('show');
      self.post = {};
      self.selectedPostTags = [];
      self.postTags = $rootScope.postTags;
      self.post.stars = '';
    });
  }
}]);