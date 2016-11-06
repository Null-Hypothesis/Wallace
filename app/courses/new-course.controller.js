'use strict';

angular.module('myApp.courses')

.controller('myApp.courses.newCourse', ['$rootScope', '$q',
  'myApp.courses.coursesService', 'myApp.core.service',
  'myApp.teachers.teachersService', 'myApp.courses.courseTagsService',
function($rootScope, $q, coursesService, coreService, teachersService, courseTagsService) {
  var self = this;

  self.course = {};
  self.teachers = teachersService.listAllTeachers();
  self.courseTags = $rootScope.courseTags;
  self.selectedTeacher = {};
  self.selectedCourseTags = [];

  self.tagTransform = function(name) {
    var item = {};
    item.name = name;
    item.id = undefined;
    return item;
  }

  self.submitNewCourse = function() {
    var promises = [];

    if (self.selectedTeacher.id === undefined) {
      promises.push(teachersService.createTeacher(self.selectedTeacher.name)
      .then(function (teacher) {
        Object.assign(self.selectedTeacher, teacher);
      }));
    }

    for (var courseTag of self.selectedCourseTags) {
      if (courseTag.id === undefined) {
        promises.push(courseTagsService.createCourseTag(courseTag.name)
        .then(function (resultTag) {
          Object.assign(courseTag, resultTag);
        }));
      }
    }

    $q.all(promises)
    .then(function (results) {
      self.course.teacherId = parseInt(self.selectedTeacher.id);
      self.course.courseTagIds = self.selectedCourseTags.map(
        function(courseTag) {
          return courseTag.id;
        });
      return self.course;
    })
    .then(function(course) {
      return coursesService.createCourse(course);
    })
    .then(function(course) {
      coreService.loadAll();
      $('#create_course').modal('hide');
      $('#create_course_success').modal('show');
      self.course = {};
      self.self.teachers = teachersService.listAllTeachers();
      self.courseTags = $rootScope.courseTags;
      self.selectedTeacher = {};
      self.selectedCourseTags = [];
    });
  }
}]);