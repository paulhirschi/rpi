(function() {
  'use strict';

  angular.module('echoBase').controller('HelpCtrl', ['$rootScope',
    function($rootScope) {
      var vm = this;

      $rootScope.pageTitle = 'Help';

      vm.message = 'Help controller checking in';
    }
  ]);
})();
