(function () {
    'use strict';

    var app = angular.module('santasHelper')
        .controller('SantaController', ['$scope', 'firebaseWrap', function ($scope, firebaseWrap) {

        	$scope.data = firebaseWrap.data;

        }]);

}());
