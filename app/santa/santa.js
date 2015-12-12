(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .controller('SantaController', ['$scope', 'firebaseWrap', function ($scope, firebaseWrap) {

      $scope.data = firebaseWrap.data;

      $scope.openMessage = function (message) {
        if (message.state === 'opened') {
          message.state = 'unopened';
        } else {
          message.state = 'opened';
        }
        $scope.data.$save(message);
      }

      $scope.setStatus = function (message, answer) {
        message.answer = answer;
        message.state = 'answered';
        $scope.data.$save(message);
      };

      $scope.removeMessage = function (message) {
        $scope.data.$remove(message);
      };

    }]);


}());
