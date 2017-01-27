(function() {
  'use strict';

  angular.module('echoBase')
    .controller('LoginCtrl', ['$rootScope', '$state', '$http', '$window', 'Auth',
      function($rootScope, $state, $http, $window, Auth) {
        var vm = this;

        $rootScope.pageTitle = 'Login';
        vm.loginData = {};
        vm.loginData.name = '';
        vm.loginData.user = '';
        vm.loginData.pass = '';

        vm.loginUser = function() {
          // Authenticate login
          $rootScope.errorMessage = '';
          Auth.login(vm.loginData)
            .then(function success(res) {
              console.log(res);
              if(res.data.success) {
                // $window.localStorage.setItem('user', res.data.name);
                $state.go('main.dashboard');
              } else {
                $rootScope.errorMessage = 'Bad creds, yo. Try again.';
              }
            }, function error(err) {
              console.log(err);
              $rootScope.errorMessage = 'ERROR ' + err.data.message;
            });
        };
      }
    ]);
})();
