(function () {
  'use strict';

  var colors = ['green', 'red', 'gold', 'blue'];

  function getRandomColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  }

  var app = angular.module('santasHelper')
    .factory('color', function() {
      return {
        getRandomColor: getRandomColor
      };
    });

}());
