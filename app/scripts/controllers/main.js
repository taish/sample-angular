'use strict';

/**
 * @ngdoc function
 * @name sampleAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAngularApp
 */
angular.module('sampleAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
