(function () {
  'use strict';

  // Returns a random integer between min (included) and max (excluded)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomLocation() {
    return {
      x: getRandomInt(0, 1024),
      y: getRandomInt(0,700)
    };
  }

  var app = angular.module('santasHelper')
    .factory('location', function() {
      return {
        getRandomLocation: getRandomLocation
      };
    });

}());
