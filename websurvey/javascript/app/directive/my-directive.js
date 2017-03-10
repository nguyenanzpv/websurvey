websurvey.directive("testDirective",function(){
	return{
		restrict:"CAE", //Class;
		//restrict:"E", //Element
		//restrict:"A", //Atribute
 		template:"<h1>Made by a directive</h1>"
	};
});

websurvey.directive("myCustomer",function(){
	return{
		restrict:"A",
		template:'<h3>Name:{{customer.name}} Address:{{customer.address}}</h3>'
	};
});

websurvey.directive("demoDirective",function(){
	return{
		restrict:"C",
		template:'<h2>Name:{{car.name}} Type:{{car.type}}</h2>'
	};
});

websurvey.directive("myTemplate",function(){
	return{
		templateUrl:'views/my-customer.html'
	};
});

websurvey.directive("myCustomerA",function(){
	return{
		templateUrl:function(elem, attr){
			console.log(elem);
			console.log(attr);
			return 'views/customer-'+attr.type+'.html';
		}
	};
});	

websurvey.directive("directiveA",['$document',function(){
	return{
		link:function(scope, elem, attr){
			elem.css({
				backgroundColor:'red',
				color:'green',
				cursor:'pointer'
			});

			function mouseClick(event){
				elem.css({
					backgroundColor:'yellow',
					color:'red'
				});
			}
			elem.bind('click', mouseClick)
		}
	};

}]);