(function () {
    'use strict';

    var app = angular.module('santasHelper')
        .controller('AskController', function ($scope, $uibModal) {
        	var modalInstance = $uibModal.open({
			      // animation: $scope.animationsEnabled,
			      templateUrl: 'app/ask/modal.html',
			      controller: 'AskModalController',
			      size: 'sm'
			    });

			    modalInstance.result.finally(function (selectedItem) {
			      $scope.selected = selectedItem;
			    });
        })
        .controller('AskModalController', function ($scope, $uibModalInstance) {
            $scope.ok = function () {
              $uibModalInstance.close();
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

            $scope.wish = {
            	status: 'accepted'
            }
        })
        	

}());
