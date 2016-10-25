'use strict';

angular.module('myApp.courses')

.controller('myApp.courses.newCourse', ['$rootScope', 'myApp.courses.coursesService',
function($rootScope, coursesService) {
  var self = this;

  self.course = {};
  self.course.courseTagIds = '';

  self.submitNewCourse = function() {
    self.course.teacherId = parseInt(self.course.teacherId);
    self.course.courseTagIds = JSON.parse('[' + self.course.courseTagIds + ']');

    $rootScope.$on('Create course finished',
    function(event, course) {
      $('#create_course').modal('hide');
      $('#create_course_success').modal('show');
    });

    var result = coursesService.createCourse(self.course);
  }
}]);