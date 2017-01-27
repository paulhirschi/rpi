(function() {
  'use strict';
  var module = angular.module('theGrid', ['ngComponentRouter']);
  module.config(function($locationProvider) {
    $locationProvider.html5Mode({enabled:true, requireBase:true});
  });
  module.value('$routerRootComponent', 'gridApp');
  module.component('appAbout', {
    template: 'This is the about page'
  });
}());