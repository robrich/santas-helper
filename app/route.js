(function () {
  'use strict';

  var app = angular.module('santasHelper');

  app.config(function routeConfig($stateProvider, $urlRouterProvider) {

      $stateProvider
          .state('main', {
            abstract: true,
            url: '/',
            template: '<div ui-view ></div>'
          })
          .state('ask', {
            url: '',
            parent: 'main',
            templateUrl: 'app/ask/ask.html',
            controller: 'AskController'
          })
          .state('santa', {
            parent: 'main',
            templateUrl: 'app/santa/santa.html',
            controller: 'SantaController'
          })
      ;

    $urlRouterProvider.otherwise('/');
  });

}());
