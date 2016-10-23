'use strict';

angular.module('myApp.homePage')

.controller('myApp.homePage.controller', ['$rootScope', 'myApp.courses.courseTagsService',
  'myApp.courses.coursesService', 'myApp.posts.postTagsService', 'myApp.posts.postsService',
function ($rootScope, courseTagsService, coursesService, postTagsService, postsService) {
  var self = this;

  self.categoryTitle = '最新讨论';
  self.courseTitle = undefined;
  self.currentCategory = undefined;
  self.currentCourse = undefined;


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

  self.categories = $rootScope.courseTags;
  self.posts = $rootScope.posts;

  self.isCategory = function(category) {
    return category.id === self.currentCategory;
  }

  self.setCategory = function(category) {
    self.currentCategory = category.id;
    self.categoryTitle = category.name;
    self.currentCourse = undefined;
    category.courses = [];
    for (var course of $rootScope.courses) {
      if (course.courseTagIds.includes(category.id)) {
        category.courses.push(course);
      }
    }
    self.posts = [];
    for (var post of $rootScope.posts) {
      var course = $rootScope.id2course[post.courseId];
      if (course.courseTagIds.includes(category.id)) {
        self.posts.push(post);
      }
    }
  }

  self.setCourse = function(course) {
    self.currentCourse = course.id;
    self.courseTitle = course.name;
    self.posts = [];
    for (var post of $rootScope.posts) {
      if (post.courseId === course.id) {
        self.posts.push(post);
      }
    }
  }

  self.clearCategory = function() {
    self.currentCategory = undefined;
    self.currentCourse = undefined;
    self.categoryTitle = '最新讨论';
    self.courseTitle = undefined;
    self.posts = $rootScope.posts;
  };
}]);