'use strict';

// Declare app level module which depends on views, and components
var shopalystApp = angular.module('shopalystApp',['ngRoute','ngResource','angular-cache'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/productDetails',
    {
        templateUrl:'/app/productDetails/productDetails.html',

    });
  $routeProvider.otherwise({redirectTo: '/productDetails'});
}]);
