'use strict';

angular.module('myApp.user').

component('messageTo', {
  templateUrl: 'user/message-to.template.html',
  controller: 'myApp.user.messageTo',
  controllerAs: 'messageTo',
  bindings: {
    userId: '<',
    getMessages: '<'
  }
});