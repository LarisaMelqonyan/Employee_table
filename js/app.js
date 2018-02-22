var app = angular.module('myApp', []);


app.controller("MainController",['$scope',function($scope){

   $scope.data = [{ firstName:"Jone",lastName:"Doe",email:"jone.Doe@gmail.com",
	                   phone:"7582",designation:"Software Engineer",salary:"96000"},
	              {firstName:"Pol",lastName:"Doe",email:"Pol@gmail.com",
	                   phone:"5263",designation:"Test",salary:"10000"                 
	              } ];


	$scope.empoyees = angular.copy( $scope.data);
	 $scope.enabledEdit =[];

    $scope.addEmployee = function(){
	    var emp ={ firstName:"",lastName:"",email:"",
	                   salary:"",designation:"",phone:"",disableEdit:false};
		$scope.empoyees.push(emp);
		 $scope.enabledEdit[$scope.empoyees.length-1]=true;
	}
	$scope.editEmployee = function(index){
		console.log("edit index"+index);
		$scope.enabledEdit[index] = true;
	}
	$scope.deleteEmployee = function(index) {
		  $scope.empoyees.splice(index,1);
	}
	
	$scope.submitEmployee = function(){

		console.log("form submitted:"+angular.toJson($scope.empoyees ));
	}
	
}]);
