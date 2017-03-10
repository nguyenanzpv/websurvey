websurvey.controller('ContactCtrl', ['$scope', function($scope){
	//$scope.message="This is contact page"; 
	$scope.login=function(){
		var user=$scope.username;
		var password=$scope.password;
		if((user=="admin")&&(password=="123"))
		{
			alert("Hello"+user+password);
		}
		else
		{
			alert("Username hoac password nhap sai");
		}
	}
	$scope.reset=function(){
		$scope.username="";
		$scope.password="";
	}
}]);