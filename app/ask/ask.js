(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', function ($scope, firebaseWrap, color) {

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
  }]);

}());
