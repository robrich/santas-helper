(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', '$state', '$uibModal', function ($scope, firebaseWrap, color, $state, $uibModal) {

      $scope.openModal = function() {
        var modalInstance = $uibModal.open({
          // animation: $scope.animationsEnabled,
          templateUrl: 'app/ask/modal.html',
          controller: 'AskModalController',
          size: 'lg',
          resolve: {
            wish: function() {
              return 'naughty';
            }
          }
        });

        modalInstance.result.finally(function (selectedItem) {
          $scope.selected = selectedItem;
        });
      }
      

      $scope.data = firebaseWrap.data;

      $scope.login = function () {

        $state.go("santa");
      };

      $scope.newAsk = function () {
        if (!$scope.username || !$scope.wish) {
          return; // don't ask for nothing
        }
        $scope.data.$add({
          name: $scope.username,
          wish: $scope.wish,
          state: 'unopened',
          color: color.getRandomColor(),
          answer: ''
        });
        $scope.wish = '';
        $scope.message = 'Asking Santa ...';
      };
    }])
    .controller('AskModalController', function ($scope, $uibModalInstance, wish) {
      $scope.wish = wish;

      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    });

}());
