'use strict';

// Register `navBar` component, along with its associated controller and template
angular.module('myApp.navBar').

component('navBar', {
  templateUrl: 'nav-bar/nav-bar.template.html',
  controller: ['$rootScope',
    function navBarController($rootScope) {

    }]
});