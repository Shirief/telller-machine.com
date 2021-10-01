app.controller('Bank', ['$scope', function($scope){
	$scope.add = function(num1, num2){
			$scope.txtsum = 'Remaining Balance : ';
			$scope.sum = parseInt(num1) - parseInt(num2);
	}
}]);