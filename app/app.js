'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ng-token-auth',
  'myApp.user',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.navBar',
]).
config(['$locationProvider', '$routeProvider', '$authProvider',
function($locationProvider, $routeProvider, $authProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});

  $authProvider.configure({
    apiUrl: 'https://private-anon-cb1e9e27a4-nullhypothesis.apiary-mock.com',
    emailRegistrationPath: '/auth',
    emailSignInPath: '/auth/sign_in',
    proxyIf: function() { return false; },
    proxyUrl: '/proxy',
    cookieOps: {
      path: "/",
      expires: 9999,
      expirationUnit: 'days',
      secure: false,
      domain: 'private-anon-cb1e9e27a4-nullhypothesis.apiary-mock.com'
    },
    createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
  });
}]);
