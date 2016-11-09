'use strict';

angular.module('myApp.core').

component('tagCapsules', {
  templateUrl: 'core/tag-capsules.template.html',
  controller: 'myApp.core.tagCapsules',
  controllerAs: 'tagCapsules',
  bindings: {
    id2tag: '<',
    ids: '<'
  }
});