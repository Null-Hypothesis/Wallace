'use strict';

angular.module('myApp.posts', [
  'myApp.core'
])

.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/view-post/:postId', {
    templateUrl: 'posts/view-post.template.html',
    controller: 'myApp.posts.viewPost',
    controllerAs: 'viewPost'
  });
}]);