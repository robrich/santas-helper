(function () {
    'use strict';

    var app = angular.module('santasHelper')
        .controller('SantaController', function ($scope) {
            var wish = {
                name: 'foo',
                wish: 'bar'
            };
            $scope.wishes = []
        });

}());
