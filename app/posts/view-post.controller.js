'use strict';

angular.module('myApp.posts')

.controller('myApp.posts.viewPost', ['$routeParams', '$rootScope', '$sce', 'myApp.courses.courseTagsService',
  'myApp.courses.coursesService', 'myApp.posts.postTagsService', 'myApp.posts.postsService',
function($routeParams, $rootScope, $sce, courseTagsService, coursesService, postTagsService, postsService) {
  var self = this;

  $rootScope.$on('Course tags loaded', function(event, courseTags) {
    $rootScope.id2courseTag = buildIndex(courseTags);
  });
  $rootScope.courseTags = courseTagsService.listAllCourseTags();

  $rootScope.$on('Post tags loaded', function(event, postTags) {
    $rootScope.id2postTag = buildIndex(postTags);
  });
  $rootScope.postTags = postTagsService.listAllPostTags();
  
  $rootScope.$on('Courses loaded', function(event, courses) {
    $rootScope.id2course = buildIndex(courses);
  });
  $rootScope.courses = coursesService.listAllCourses();

  $rootScope.$on('Posts loaded', function(event, posts) {
    $rootScope.id2post = buildIndex(posts);
  });
  $rootScope.posts = postsService.listAllPosts();

  self.postId = parseInt($routeParams.postId);
  self.post = postsService.getPostById(self.postId);

  self.renderHtml = function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  }

}]);