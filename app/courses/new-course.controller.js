'use strict';

angular.module('myApp.courses')

.controller('myApp.courses.newCourse', ['$rootScope',
  'myApp.courses.coursesService', 'myApp.core.service', 'myApp.teachers.teachersService',
function($rootScope, coursesService, coreService, teachersService) {
  var self = this;

  self.course = {};
  self.course.courseTagIds = '';
  self.course.teacherId = '';
  self.teachers = teachersService.listAllTeachers();

  self.submitNewCourse = function() {
    self.course.teacherId = parseInt(self.course.teacherId);
    self.course.courseTagIds = JSON.parse('[' + self.course.courseTagIds + ']');

    $rootScope.$on('Create course finished',
    function(event, course) {
      coreService.loadAll();
      $('#create_course').modal('hide');
      $('#create_course_success').modal('show');
    });

    var result = coursesService.createCourse(self.course);
    self.course = {};
    self.course.courseTagIds = '';
    self.course.teacherId = '';
  }
}]);