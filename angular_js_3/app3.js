(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems() {
  var ddo = {
    restrict :'E',
    templateUrl: 'shoppingList.html',
    scope: {
      foundItems: '<',
      onRemove: '&',
      onEmpty: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.name='';
  menu.logMenuItems = function () {
    var desc = menu.name;
    var promise = MenuSearchService.getMatchedMenuItems(desc);


    promise.then(function (items) {
      if (items.length!==0){
        menu.found=items;
        menu.msg='';
      }
      else{
        menu.found='';
        menu.msg='Nothing Found!';
      }
    })

  };
   menu.removeItem = function(itemIndex) {
          menu.found.splice(itemIndex, 1);
        }
}



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

  var service = this;
  
  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath +  "/menu_items.json"), 
    }).then(function (response){
      var foundItems=[];
      for (var i=0; i<response.data['menu_items'].length; i++){
         if (searchTerm.length > 0 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                        foundItems.push(response.data['menu_items'][i]); }
      }
    return foundItems;
    });
  };

}

})();