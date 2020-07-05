(function () {
'use strict';

angular.module('MenuAppData', [])
.controller('MenuAppDataController', MenuAppDataController)
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuAppDataController.$inject = ['MenuDataService'];
function MenuAppDataController(MenuDataService) {
  var menu = this;
  var promise = MenuDataService.getAllCategories();
  console.log('Imhere')
  promise.then(function (result) {
      menu.items = result.data;
    });
 }

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
 var service = this;
  
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
     
    return response;
  };

  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };
}

})();
