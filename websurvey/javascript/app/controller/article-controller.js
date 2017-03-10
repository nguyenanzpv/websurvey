websurvey.controller('ArticlesCtrl', ['$scope','calculator', function($scope, calculator){
	//$scope.message="This is article page"; 
	$scope.sayHello = function(){
		var num1=$scope.number1;
		var num2=$scope.number2;
		/*if($scope.congSelected){
			//console.log("Cong");
			var kq=parseInt(num1)+parseInt(num2);
			$scope.result=kq;
		}
		if($scope.truSelected){
			var kq=parseInt(num1)-parseInt(num2);
			$scope.result=kq;
		}
		if($scope.nhanSelected){
			var kq=parseInt(num1)*parseInt(num2);
			$scope.result=kq;
		}
		if($scope.chiaSelected){
			var kq=parseInt(num1)/parseInt(num2);
			$scope.result=kq;
		}*/
		if($scope.congSelected){
			$scope.result2=calculator.sum(parseInt(num1),parseInt(num2));
		}
		if($scope.truSelected){
			$scope.result2=calculator.tru(parseInt(num1),parseInt(num2));
		}
		if($scope.nhanSelected){
			$scope.result2=calculator.nhan(parseInt(num1),parseInt(num2));
		}
		if($scope.chiaSelected){
			$scope.result2=calculator.chia(parseInt(num1),parseInt(num2));
		}
		
		//console.log("Hello world");
		//console.log(num1);
		//console.log(num2);
	}

}]);