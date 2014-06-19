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
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });