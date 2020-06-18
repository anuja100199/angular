(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', Controller);
Controller.$inject = ['$scope'];
function Controller($scope){
	$scope.lunch = '';
	$scope.Msg="";
	$scope.myfun = function(){
		var test_var = $scope.lunch;
		var words = test_var.split(',');
		for (var i=0; i<words.length;i++){
			if (words[i]==" "){
				words.splice(i,1);
			}
			if(words[i]==""){
				words.splice(i,1);
			}
		}
		if (words.length === 0){
			$scope.Msg = "Please enter data first";
		}
		else if (words.length <=3){
			$scope.Msg = "Enjoy!";
		}
		else {
			$scope.Msg = "Too much!";
		}
		console.log(words,words.length)
	};
}

})();