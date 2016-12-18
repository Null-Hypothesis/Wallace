'use strict';

angular.module('myApp.user')

.component('message', {
  templateUrl: 'user/message.template.html',
  controller: 'myApp.user.message',
  controllerAs: 'message',
  bindings: {
    messageId: '<',
    sendMessage: '<'
  }
});