'use strict';

angular.module('myApp.user')

.controller('myApp.user.userView', ['$rootScope', '$routeParams', '$q',
'myApp.core.service', 'myApp.user.userService',
function($rootScope, $routeParams, $q, coreService, userService) {
  var self = this;
  
  self.firstCharUpperCase = coreService.firstCharUpperCase;

  if (!$routeParams.userId) {
    self.userId = $rootScope.user.id;
  } else {
    self.userId = $routeParams.userId;
  }

  if (self.userId != $rootScope.user.id) {
    self.isSelf = false;
  } else {
    self.isSelf = true;
  }

  var promises = [];

  promises.push(userService.getUser(self.userId)
  .then(function(user) {
    self.user = user;
  }));

  promises.push(coreService.loadAll());

  $q.all(promises)
  .then(function () {
    self.posts = [];
    for (var post of self.user.posts) {
      self.posts.push($rootScope.id2post[post.id]);
    }
  });
}]);