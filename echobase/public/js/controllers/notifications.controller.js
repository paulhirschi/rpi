(function() {
  'use strict';

  angular.module('echoBase').controller('NotificationsCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope) {
      var vm = this;

      $rootScope.pageTitle = 'Notifications';

      vm.message = 'Notifications controller checking in';
    }
  ]);
})();
