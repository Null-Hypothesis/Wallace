'use strict';

angular.module('myApp.core')
.factory('myApp.core.service', ['$rootScope', '$sce', '$q',
  'myApp.courses.courseTagsService', 'myApp.courses.coursesService',
  'myApp.posts.postTagsService', 'myApp.posts.postsService',
  'myApp.teachers.teachersService', 'myApp.user.favoritesService',
  'myApp.user.messagesService',
function($rootScope, $sce, $q,
  courseTagsService, coursesService, postTagsService, postsService, teachersService,
  favoritesService, messagesService) {
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

  service.loadMeta = function() {
    var promises = [];

    promises.push(coursesService.listAllCourses()
    .then(function(courses) {
      $rootScope.courses = courses;
      $rootScope.id2course = service.buildIndex(courses);
    }));
    
    promises.push(courseTagsService.listAllCourseTags()
    .then(function(courseTags) {
      $rootScope.courseTags = courseTags;
      $rootScope.id2courseTag = service.buildIndex(courseTags);
    }));
    
    promises.push(postTagsService.listAllPostTags()
    .then(function(postTags) {
      $rootScope.postTags = postTags;
      $rootScope.id2postTag = service.buildIndex(postTags);
    })); 
    
    promises.push(teachersService.listAllTeachers()
    .then(function(teachers) {
      $rootScope.teachers = teachers;
      $rootScope.id2teacher = service.buildIndex(teachers);
    }));

    return $q.all(promises)
    .then(function (args) {
      $rootScope.$broadcast('Meta loaded');
    });
  };

  service.loadFavorites = function() {
    $rootScope.favorites = {};
    if ($rootScope.user) {
      return favoritesService.listAllFavorites()
      .then(function(favorites) {
        for (var favorite of favorites) {
          $rootScope.favorites[favorite.post.id] = favorite.id;
        }
        return $rootScope.favorites;
      });
    }
    return $q.when($rootScope.favorites);
  }

  service.loadAll = function() {
    var promises = [];

    promises.push(postsService.listAllPosts()
    .then(function(posts) {
      $rootScope.posts = posts;
      $rootScope.id2post = service.buildIndex(posts);
    }));

    promises.push(service.loadMeta());

    promises.push(service.loadFavorites());

    return $q.all(promises)
    .then(function (args) {
      $rootScope.$broadcast('All loaded');
    });
  };

  service.loadMessages = function() {
    return messagesService.listAllMessages()
    .then(function (messages) {
      $rootScope.messages = messages;
      $rootScope.id2message = service.buildIndex(messages);
      return messages;
    });
  }

  service.renderHtml = function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  }

  return service;
}]);