(function () {
  'use strict';

  var app = angular.module('santasHelper')
    .factory('firebaseWrap', ['$firebaseArray', function($firebaseArray) {
      var ref = new Firebase('https://santas-helper.firebaseio.com/data');
      var data = $firebaseArray(ref);
      return {
        data: data
      };
  }]);

}());
