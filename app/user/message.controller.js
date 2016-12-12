'use strict';

angular.module('myApp.user')

.controller('myApp.user.message', ['$rootScope', 'myApp.core.service',
function($rootScope, coreService) {
  var self = this;
  
  self.firstCharUpperCase = coreService.firstCharUpperCase;

  self.user = $rootScope.user;
  self.posts = undefined;

  $rootScope.$on('All loaded', 
  function (event) {
    self.posts = [];
    for (var post of $rootScope.posts) {
      if (post.user.id === self.user.id) {
        self.posts.push(post);
      }
    }
  });

  coreService.loadAll();
}]);