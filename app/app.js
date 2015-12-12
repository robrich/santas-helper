(function () {
  'use strict';

  var app = angular.module('santasHelper', ['firebase']);
  app.controller('HomeController', function($scope, $firebaseObject) {
    var ref = new Firebase('https://santas-helper.firebaseio.com/data');
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, 'data');
  });

}());
