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
			for (var j=i+1; j<temp.length; j++){
				console.log(temp + " " +i + " " + j)
				var str = temp.toString();
				temp = temp.map(Number);
				menu.x.push(i);
				menu.y.push(j);
				menu.li.push(str);
				if (temp[i] > temp[j]){
					[temp[i], temp[j]] = [temp[j],temp[i]];
					console.log(temp[j],temp[i])
					var msg = "Swaping elements since "+ temp[j] + " greater than "+ temp[i];
					}
					else{
						var msg = "Since " + temp[i] + " is less than " + temp[j] + " no swapping occurs";
					}
					menu.msgs.push(msg);
				}
			}
		menu.found = temp;
		for (var i=0; i<menu.li.length; i++){
			menu.li[i] = menu.li[i].split(",");
		}
		console.log(menu.msgs)
	}
	function myfun(index){
		menu.li1 = menu.li[index];
		menu.iter = index;
		if (index===menu.li.length-1){
			menu.li2 = menu.found;
		}
		else{
			menu.li2 = menu.li[index+1];
		}
		menu.temp_msg = menu.msgs[index]; }
	menu.showIteration = function(){
		for(var i = 0; i < menu.li.length; i++) {
		    (function(i){  
		        $timeout(function() {
		            myfun(i);
		        }, i * 1000);
		    })(i);
		    
			}
		}
	

}
})();