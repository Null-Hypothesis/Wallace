'use strict';

angular.module('myApp.core')
.factory('myApp.core.service', ['$rootScope', 'myApp.courses.courseTagsService',
  'myApp.courses.coursesService', 'myApp.posts.postTagsService', 'myApp.posts.postsService',
function($rootScope, courseTagsService, coursesService, postTagsService, postsService) {
  var service = {};

  service.buildIndex = function(arr) {
    var result = {};
    for (var i in arr) {
      result[arr[i].id] = arr[i];
    }
    return result;
  };

  service.firstCharUpperCase = function(name) {
    if (!name) {
      return "";
    }
    return name[0].toUpperCase();
  };

  service.loadAll = function() {
    var finishedTask = 0;
    var testTaskFinished = function() {
      if (++finishedTask == 4) {
        $rootScope.$broadcast('All loaded');
      };
    }

    $rootScope.$on('Course tags loaded', function(event, courseTags) {
      $rootScope.id2courseTag = service.buildIndex(courseTags);
      testTaskFinished();
    });
    $rootScope.$on('Post tags loaded', function(event, postTags) {
      $rootScope.id2postTag = service.buildIndex(postTags);
      testTaskFinished();
    });
    $rootScope.$on('Courses loaded', function(event, courses) {
      $rootScope.id2course = service.buildIndex(courses);
      testTaskFinished();
    });
    $rootScope.$on('Posts loaded', function(event, posts) {
      $rootScope.id2post = service.buildIndex(posts);
      testTaskFinished();
    });

    $rootScope.courseTags = courseTagsService.listAllCourseTags();
    $rootScope.postTags = postTagsService.listAllPostTags();
    $rootScope.courses = coursesService.listAllCourses();
    $rootScope.posts = postsService.listAllPosts();
  };

  return service;
}]);