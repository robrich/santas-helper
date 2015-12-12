(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', '$uibModal', function ($scope, firebaseWrap, color, $uibModal) {

        var modalInstance = $uibModal.open({
            // animation: $scope.animationsEnabled,
            templateUrl: 'app/ask/modal.html',
            controller: 'AskAcceptedController',
            size: 'sm'
        });

        modalInstance.result.finally(function (selectedItem) {
            $scope.selected = selectedItem;
        });

      $scope.data = firebaseWrap.data;

      $scope.newAsk = function() {
        if (!$scope.username || !$scope.wish) {
          return; // don't ask for nothing
        }
        $scope.data.$add({
          name: $scope.username,
          wish: $scope.wish,
          state: 'unopened',
          color: color.getRandomColor()
        });
        $scope.wish = '';
        $scope.message = 'Asking Santa ...';
      };
  }])
      .controller('AskModalController', function ($scope) {
		  $scope.ok = function () {
			  $uibModalInstance.close();
		  };

		  $scope.cancel = function () {
			  $uibModalInstance.dismiss('cancel');
		  };
      });

}());
