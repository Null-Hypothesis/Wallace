'use strict';

angular.module('myApp.posts').

component('newPost', {
  templateUrl: 'posts/new-post.template.html',
  controller: 'myApp.posts.newPost',
  controllerAs: 'newPost',
  bindings: {
    courseId: '<'
  }
});