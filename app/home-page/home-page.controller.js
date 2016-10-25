'use strict';

angular.module('myApp.homePage')

.controller('myApp.homePage.controller', ['$rootScope', 'myApp.core.service',
function ($rootScope, coreService) {
  var self = this;

  self.categoryTitle = 'Latest posts';
  self.courseTitle = undefined;
  self.currentCategory = undefined;
  self.currentCourse = undefined;
  self.courseStyle = '';
  self.postStyle = 'display:none';
  self.otherCourses = [];

  $rootScope.$on('Courses loaded',
  function(event) {
    for (var course of $rootScope.courses) {
      if (course.courseTagIds.length === 0) {
        self.otherCourses.push(course);
      }
    }
  });

  coreService.loadAll();

  self.firstCharUpperCase = coreService.firstCharUpperCase;

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
    self.courseStyle = 'display:none';
    self.postStyle = '';
    for (var post of $rootScope.posts) {
      if (post.courseId === course.id) {
        self.posts.push(post);
      }
    }
  }

  self.clearCategory = function() {
    self.currentCategory = undefined;
    self.currentCourse = undefined;
    self.categoryTitle = 'Latest posts';
    self.courseTitle = undefined;
    self.courseStyle = '';
    self.postStyle = 'display:none';
    self.posts = $rootScope.posts;
  };

  self.selectOtherCategory = function() {
    self.currentCategory = 0;
    self.categoryTitle = 'Other';
    self.posts = [];
    for (var post of $rootScope.posts) {
      var course = $rootScope.id2course[post.courseId];
      if (course.courseTagIds.length === 0) {
        self.posts.push(post);
      }
    }
  };
}]);