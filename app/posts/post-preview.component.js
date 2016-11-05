'use strict';

angular.module('myApp.posts').

component('postPreview', {
  templateUrl: 'posts/post-preview.template.html',
  controller: 'myApp.posts.postPreview',
  controllerAs: 'postPreview',
  bindings: {
    postId: '<'
  }
});