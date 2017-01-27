(function() {
  'use strict';

  angular.module('echoBase', [
      'ui.router',
      'ngCookies',
      'ngTouch',
      'ngAria',
      'ngAnimate',
      'btford.socket-io',
      'authService'
    ])
  .factory('Socket', ['socketFactory', function(socketFactory) {
    return socketFactory();
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('login', {
        url          : '/login',
        templateUrl  : 'login.html',
        controller   : 'LoginCtrl',
        controllerAs : 'login'
      })
      .state('main', {
        templateUrl  : 'main.html'
      })
      .state('main.dashboard', {
        url          : '/dashboard',
        templateUrl  : 'dashboard.html',
        controller   : 'DashboardCtrl',
        controllerAs : 'dashboard'
      })
      .state('main.notifications', {
        url          : '/notifications',
        templateUrl  : 'notifications.html',
        controller   : 'NotificationsCtrl',
        controllerAs : 'notifications'
      })
      .state('main.settings', {
        url          : '/settings',
        templateUrl  : 'settings.html',
        controller   : 'SettingsCtrl',
        controllerAs : 'settings'
      })
      .state('main.help', {
        url          : '/help',
        templateUrl  : 'help.html',
        controller   : 'HelpCtrl',
        controllerAs : 'help'
      });

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', '$window', '$state', 'Auth',
    function($rootScope, $window, $state, Auth) {
      $rootScope.app_name = 'echobase';
      $rootScope.user = $window.localStorage.getItem('user');

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.loggedIn = Auth.isLoggedIn();
        var d = new Date();
        var now = d.getTime();
        var then = $window.localStorage.getItem('ts');
        var dateDif = Math.abs(now - then) / 36e5;
        // If logged in, redirect to dashboard
        if(toState.name === 'login' && $rootScope.loggedIn) {
          event.preventDefault();
          $state.go('main.dashboard');
        }
        //  If user not logged in, redirect to login
        if(toState.name !== 'login' && !$rootScope.loggedIn) {
          event.preventDefault();
          $rootScope.errorMessage = "Gotta log in";
          $state.go('login');
        }
        // Log user out automatically after 8 hours
        if($rootScope.loggedIn && dateDif >= 8) {
          event.preventDefault();
          Auth.logout();
          $rootScope.errorMessage = 'Session has timed out. Please log in to continue';
          $state.go('login');
        }
      });
    }
  ]);
})();
