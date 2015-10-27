  angular.module('app', ['ngRoute', 'ngResource'])

    .factory('Todos', ['$resource', function ($resource) {
      return 	[
					{ name: 'Learn javascript', completed: true },
					{ name: 'Learn Angular.js', completed: false }
				];
    }])

    .controller('TodosController', ['$scope', 'Todos', function ($scope, Todos) {
		$scope.todos = Todos;
    }])

    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
    	$scope.todo = Todos[$routeParams.id];
    }])

    .config(['$routeProvider', function ($routeProvider) {
    	$routeProvider.
    		when('/', {
    			templateUrl: '/todos.html',
    			controller: 'TodosController'
    		})

    		.when('/:id', {
    			templateUrl: 'todoDetails.html',
    			controller: 'TodoDetailCtrl'
    		});
    }]);