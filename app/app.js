(function () {
    'use strict';

    var app = angular.module('santasHelper', ['ui.router', 'ui.bootstrap', 'firebase']);

    app.config(function routeConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                abstract: true,
                url: '/',
                template: '<div ui-view></div>'
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

    app.controller('HomeController', function ($scope, $firebaseObject) {
        var ref = new Firebase('https://santas-helper.firebaseio.com/data');
        // download the data into a local object
        var syncObject = $firebaseObject(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, 'data');
    });

}());
