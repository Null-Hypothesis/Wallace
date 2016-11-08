'use strict';

angular.module('myApp.homePage')

.controller('myApp.homePage.controller', ['$rootScope', 'myApp.core.service',
function ($rootScope, coreService) {
  var self = this;

  self.categoryTitle = 'Latest posts';
  self.courseTitle = undefined;
  self.currentCategory = undefined;
  self.currentCourse = undefined;
  self.courseDescription = undefined;
  self.otherCourses = [];

  self.freshOtherCategoryCourses = function () {
    self.otherCourses = [];
    for (var course of $rootScope.courses) {
      if (course.courseTagIds.length === 0) {
        self.otherCourses.push(course);
      }
    }
  }

  $rootScope.$on('All loaded', 
  function (event) {
    self.categories = $rootScope.courseTags;

    self.freshOtherCategoryCourses();
    for (var category of $rootScope.courseTags) {
      self.freshCategoryCourses(category);
    }

    if (!self.currentCategory) {
      self.posts = $rootScope.posts;
    } else if (!self.currentCourse) {
      if (self.currentCategory > 0) {
        var category = self.currentCategory;
        self.freshCategoryPosts(category);
      } else {
        self.freshOtherCategoryPosts();
      }
    } else {
      self.freshCoursePosts(self.currentCourse);
    }
  });

  coreService.loadAll();

  self.isCategory = function(category) {
    return self.currentCategory && (category.id === self.currentCategory.id);
  }

  self.freshCategoryCourses = function(category) {
    category.courses = [];
    for (var course of $rootScope.courses) {
      if (course.courseTagIds.includes(category.id)) {
        category.courses.push(course);
      }
    }
  }

  self.freshCategoryPosts = function(category) {
    self.posts = [];
    for (var post of $rootScope.posts) {
      var course = $rootScope.id2course[post.courseId];
      if (course.courseTagIds.includes(category.id)) {
        self.posts.push(post);
      }
    }
  }

  self.freshCoursePosts = function(course) {
    self.posts = [];
    for (var post of $rootScope.posts) {
      if (post.courseId === course.id) {
        self.posts.push(post);
      }
    }
  }

  self.freshOtherCategoryPosts = function() {
    self.posts = [];
    for (var post of $rootScope.posts) {
      var course = $rootScope.id2course[post.courseId];
      if (course.courseTagIds.length === 0) {
        self.posts.push(post);
      }
    }
  }

  self.setCategory = function(category) {
    self.currentCategory = category;
    self.categoryTitle = category.name;
    self.currentCourse = undefined;
    self.freshCategoryCourses(category);
    self.freshCategoryPosts(category);
  }

  self.setCourse = function(course) {
    self.currentCourse = course;
    self.freshCoursePosts(course);
  }

  self.clearCategory = function() {
    self.currentCategory = undefined;
    self.currentCourse = undefined;
    self.categoryTitle = 'Latest posts';
    self.courseTitle = undefined;
    self.posts = $rootScope.posts;
  };

  self.selectOtherCategory = function() {
    self.currentCategory = {};
    self.currentCategory.id = 0;
    self.categoryTitle = 'Other';
    self.freshOtherCategoryPosts();
  };
}]);