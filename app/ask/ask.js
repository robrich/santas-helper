(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', '$state', '$uibModal', function ($scope, firebaseWrap, color, $state, $uibModal) {

      $scope.openModal = function() {
        var modalInstance = $uibModal.open({
          // animation: $scope.animationsEnabled,
          templateUrl: 'app/ask/modal.html',
          controller: 'AskModalController',
          size: 'lg'
        });

        modalInstance.result.finally(function (selectedItem) {
          $scope.selected = selectedItem;
        });
      };


      $scope.data = firebaseWrap.data;

      $scope.login = function () {
        $uibModal.open({
          // animation: $scope.animationsEnabled,
          template: '<div class="modal-body"><input type="text" ng-model="user.password" placeholder="password"><button class="btn btn-primary" type="button" ng-click="ok()">Login</button></div>',
          controller: function ($scope, $uibModalInstance) {
            $scope.user = {
              password: null
            };

            $scope.ok = function () {
              $uibModalInstance.close($scope.user.password);
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          },
          size: 'sm'
        }).result.then(function (pass) {
          if(pass === 'password') {
            $state.go("santa");
          } else {
            alert('Sorry we can\'t login you in! :(')
          }
        });
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
    .controller('AskModalController', function ($scope, $uibModalInstance) {
      $scope.wish = {
        status: ''
      };

      $scope.ok = function () {
        $uibModalInstance.close();
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    });

}());
