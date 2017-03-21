websurvey.controller('HomeCtrl', ['$scope','$location', function($scope,$location){
	$scope.Login=function(){
		if(($scope.txtuser=="admin")&&($scope.txtpass=="123456"))
		{
			$location.path('/test');
		}
		else
		{
			console.log("Dang nhap ko thanh cong");
		}
	}
}]);