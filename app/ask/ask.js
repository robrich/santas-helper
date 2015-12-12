(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', '$state', '$uibModal', function ($scope, firebaseWrap, color, $state, $uibModal) {

      $scope.openModal = function () {
        var modalInstance = $uibModal.open({
          // animation: $scope.animationsEnabled,
          templateUrl: 'app/ask/modal.html',
          controller: 'AskModalController',
          size: 'lg',
          resolve: {
            wish: function () {
              return $scope.wish
            }
          }
        });

        modalInstance.result.finally(function (selectedItem) {
          $scope.selected = selectedItem;
        });
      };

      $scope.wish = {
        state: 'unasked',
        color: color.getRandomColor(),
        answer: ''
      };

      $scope.data = firebaseWrap.data;

      $scope.login = function () {
        $uibModal.open({
          // animation: $scope.animationsEnabled,
          templateUrl: 'app/ask/login.html',
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
          if (pass === 'password') {
            $state.go('santa');
          } else {
            alert('Sorry we can\'t login you in! :(');
          }
        });
      };

      $scope.newAsk = function () {
        if (!$scope.wish.name || !$scope.wish.wish) {
          return; // don't ask for nothing
        }
        $scope.wish.state = 'unopened';
        $scope.data.$add($scope.wish).then(function (ref) {
          // get the firebase object so we can watch the changes
          // yeah, this is awful
          var id = ref.key();
          var itm = $scope.data.$getRecord(id);

          $scope.wish = itm;
        });
      };

      $scope.$watch('wish', function () {
        if ($scope.wish && $scope.wish.state && $scope.wish.state === 'answered' && $scope.wish.answer) {
          $scope.openModal();
        }
      }, true);
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
