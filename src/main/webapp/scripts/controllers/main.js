'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, TodoResource, locationParser) {
	$scope.todos = TodoResource.query()||[];
	
	$scope.addTodo = function(){

		TodoResource.save($scope.todo, function(data, responseHeaders){
			var id = locationParser(responseHeaders);
			$scope.todo.id = id;
			$scope.todos.push($scope.todo);
			$scope.todo = {};
		});


	};

	$scope.removeTodo = function(index){
		TodoResource.remove({TodoId:$scope.todos[index].id},function(){
			$scope.todos.splice(index,1);
		})

	};
  });
