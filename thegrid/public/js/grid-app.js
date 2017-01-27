/**
 *
 * Component Router Lifecycle Hooks
 * $canActivate
 * $routerOnActivate
 * $routerCanDeactivate
 * $routerOnDeactivate
 * $routerCanReuse
 *
 */

;
(function() {
  'use strict';

  var module = angular.module('theGrid')

  function controller($rootScope) {
    var module = this
    $rootScope.viewTitle = 'AHHH'
    module.navigation = {}
    module.year = new Date().getFullYear()
  }

  module.component('gridApp', {
    templateUrl: 'js/grid-app.html',
    $routeConfig: [{
      path: '/login',
      component: 'gridLogin',
      name: 'Login'
    }, {
    //   path: '/about',
    //   component: 'appAbout',
    //   name: 'About'
    // }, {
    //   path: '/detail/:id/...',
    //   component: 'movieDetails',
    //   name: 'Details'
    // }, {
    //   path: '/**',
    //   redirectTo: ['List']
    // }, {
      path: '/',
      redirectTo: ['Login']
    }],
    controllerAs: 'theGrid',
    controller: ['$rootScope', controller]
  })
  module.component('apiAuthentication', {
    template: 'Things about authenticating.'
  })
  module.component('apiDeviceInfo', {
    template: 'Things about getting device info'
  })
  module.component('api404', {
    templateUrl: 'assets/partials/404.component.html'
  })
}());
