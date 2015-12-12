(function () {
    'use strict';

  var app = angular.module('santasHelper', ['ui.router', 'ui.bootstrap','firebase']).run(function ($templateCache) {
    $templateCache.removeAll();
  });

}());
