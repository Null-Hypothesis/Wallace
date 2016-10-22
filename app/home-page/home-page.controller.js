'use strict';

angular.module('myApp.homePage')

.controller('myApp.homePage.controller', ['myApp.courses.courseTagsService',
function (courseTagsService) {
  this.courseTags = courseTagsService.listAllCourseTags();
}]);