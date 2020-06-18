(function(){
'use strict';

 angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = [{ name: "grapes", quantity: 10 },{ name: 'mangoes', quantity: 3 },{ name: "apples", quantity: 4 },{ name: "bananas", quantity: 6 },{ name: "watermelons", quantity: 2 }];
  list1.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
    //console.log(list1.items.length)
    if (list1.items.length === 0){
    	list1.errorMessage = "Everything is bought!"; }
  };
  list1.items = ShoppingListCheckOffService.getItems();
  
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.finItems = ShoppingListCheckOffService.getFinItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "grapes", quantity: 10 },{ name: 'mangoes', quantity: 3 },{ name: "apples", quantity: 4 },{ name: "bananas", quantity: 6 },{ name: "watermelons", quantity: 2 }];
  var fin_items = [];


  service.removeItem = function (itemIndex) {
  	var bItem = items[itemIndex];
    items.splice(itemIndex, 1);
    fin_items.push(bItem);
  };

  service.getItems = function () {
    return items;
  };

  service.getFinItems = function () { 
    return fin_items;
  };
}



})();