(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('AskController', ['$scope', 'firebaseWrap', 'color', '$state',function ($scope, firebaseWrap, color, $state) {

      $scope.data = firebaseWrap.data;
      
      $scope.onSanta = function(){
        console.log('on santa click');
        $state.go("santa");
      }

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
