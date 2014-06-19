'use strict';

/**
 * @ngdoc function
 * @name sampleAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleAngularApp
 */
angular.module('sampleAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
