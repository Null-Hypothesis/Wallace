'use strict';

angular.module('myApp.user')

.controller('myApp.user.messageTo', ['$rootScope', '$q', '$scope',
  'myApp.user.userService', 'myApp.user.messagesService', 'myApp.core.service',
function($rootScope, $q, $scope, userService, messagesService, coreService) {
  var self = this;

  self.content = '';

  userService.getUser(self.userId)
  .then(function (user) {
    self.user = user;
  });

  $scope.$on('change message to id', function(event, userId) {
    userService.getUser(userId)
    .then(function (user) {
      self.user = user;
    });
  })

  self.sendMessage = function() {
    messagesService.messageTo(self.userId, self.content)
    .then(function() {
      self.content = '';
      self.getMessages();
      $('#send_message').modal('hide');
      $('#send_message_success').modal('show');
    });
  }
}]);