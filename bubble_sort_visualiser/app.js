(function () {
'use strict'; 

angular.module("MyApp",[])
.controller("MyAppController",MyAppController)
.directive('sortItems',SortItems);

function SortItems() {
  var ddo = {
    restrict :'E',
    templateUrl: 'bubble.html',
    scope: {
      list1 :'<',
      list2 :'<',
      iter : '<',
      msg :'<',
      showiteration : '&',
      x :'<',
      y: '<',
      a: '<',
      found: '<'
    },
    controller: MyAppController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}
MyAppController.$inject=['$timeout'];
function MyAppController($timeout){
	var menu = this;
	menu.list=[];
	menu.li=[];
	menu.x=[];
	menu.y=[];
	menu.msgs = [];
	menu.found=[];
	menu.sort = function(){

		var temp = menu.list.split(",");
		for (var i=0; i<temp.length; i++){

			for (var j=0; j<temp.length-i-1; j++){
				// console.log(temp + " " +j + " ")
				var str = temp.toString();
				temp = temp.map(Number);
				menu.x.push(j);
				menu.y.push(j+1);
				menu.li.push(str);
				if (temp[j] > temp[j+1]){
					[temp[j], temp[j+1]] = [temp[j+1],temp[j]];
					console.log( temp[j+1],temp[j])
					var msg = "Swapping elements since "+ temp[j+1] + " greater than "+ temp[j];
					}
					else{
						var msg = "Since " + temp[j] + " is less than " + temp[j+1] + " no swapping occurs";
					}
					menu.msgs.push(msg);
				}
			}
		menu.found = temp;
		for (var i=0; i<menu.li.length; i++){
			menu.li[i] = menu.li[i].split(",");
		}

	}
	menu.c = 1;
	menu.liIndex=[];
	function myfun(index){
		menu.li1 = menu.li[index];
		menu.iter = index;

		if (index===menu.li.length-1){
			menu.li2 = menu.found;
		}
		else{
			menu.li2 = menu.li[index+1];
		}
		
		if(menu.x[index]===0){
			menu.liIndex=menu.li2.length-menu.c;
			menu.c=menu.c+1;
		}
		
		menu.temp_msg = menu.msgs[index]; }
	menu.showIteration = function(){
		for(var i = 0; i < menu.li.length; i++) {
		    (function(i){  
		        $timeout(function() {
		            myfun(i);
		        }, i * 2000);
		    })(i);
		    
			}
		}
	

}
})();