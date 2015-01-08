'use strict';

define(['angular', 'js/services'], function(angular, services) {

    /* Directives */

    angular.module('myApp.directives', ['myApp.services'])
        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }]);
});