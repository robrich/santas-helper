(function () {
    'use strict';

    var app = angular.module('santasHelper')
        .controller('AskController', function ($scope) {
        	var modalInstance = $uibModal.open({
			      // animation: $scope.animationsEnabled,
			      templateUrl: 'app/ask/modal.html',
			      controller: 'AskAcceptedController',
			      size: 'sm'
			    });

			    modalInstance.result.finally(function (selectedItem) {
			      $scope.selected = selectedItem;
			    });
        })
        .controller('AskModalController', function ($scope) {

        })
        	

}());
