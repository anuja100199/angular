(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService)
.constant('ApiPath'," https://anuja-restaurant.herokuapp.com");


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
 var service = this;
 service.getItems = function(shortname) {
  return $http({
      method: "GET",
      url: (ApiBasePath +  "/menu_items.json"), 
    }).then(function (response){
      var foundItems=[];
      for (var i=0; i<response.data['menu_items'].length; i++){
         if (shortname.length > 0 && response.data['menu_items'][i]['short_name'].indexOf(shortname) !== -1) {
                        foundItems.push(response.data['menu_items'][i]); }
      }
    return foundItems;
    });

};
}

})();
