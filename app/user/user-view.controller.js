'use strict';

angular.module('myApp.user')

.controller('myApp.user.userView', ['$rootScope', '$routeParams', '$q', '$location', '$scope',
'myApp.core.service', 'myApp.user.userService', 'myApp.user.messagesService',
function($rootScope, $routeParams, $q, $location, $scope, coreService, userService, messagesService) {
  var self = this;

  self.firstCharUpperCase = coreService.firstCharUpperCase;

  self.currentTab = 'posts';
  self.path = $location.path();

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

  self.updatePosts = function() {
    self.posts = [];
    for (var post of self.user.posts) {
      self.posts.push($rootScope.id2post[post.id]);
    }
  };

  self.messageToId = self.userId;

  self.updateFavorites = function() {
    self.favorites = [];
    for (var favorite in $rootScope.favorites) {
      self.favorites.push($rootScope.id2post[favorite]);
    }
  }

  $rootScope.$on('Like finished', self.updateFavorites);
  $rootScope.$on('Unlike finished', self.updateFavorites);

  $q.all(promises)
  .then(function () {
    self.updatePosts();
    self.updateFavorites();
  });

  coreService.loadMessages()
  .then(function (messages) {
    self.messages = messages;
  });

  self.getMessages = function() {
    coreService.loadMessages()
    .then(function (messages) {
      self.messages = messages;
    });
    self.currentTab = 'messages';
  };

  self.sendMessage = function(messageToId) {
    self.messageToId = messageToId;
    $scope.$broadcast('change message to id', messageToId);
    $('#send_message').modal('show');
  }
}]);