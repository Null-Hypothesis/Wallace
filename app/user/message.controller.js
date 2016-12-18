'use strict';

angular.module('myApp.user')

.controller('myApp.user.message', ['$rootScope', 'myApp.core.service',
function($rootScope, coreService) {
  var self = this;

  self.renderHtml = coreService.renderHtml;
  self.firstCharUpperCase = coreService.firstCharUpperCase;
  
  self.message = $rootScope.id2message[self.messageId];
  if (self.message.from_user.id != $rootScope.user.id) {
    self.fromOthers = true;
  } else {
    self.fromOthers = false;
  }

  self.send = function(id) {
    self.sendMessage(id);
  }
}]);