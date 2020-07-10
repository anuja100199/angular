(function () {

"use strict";
angular.module('signup',[])
.controller('RegistrationController', RegistrationController)
.service('SignupService', SignupService)
.constant('ApiPath'," https://anuja-restaurant.herokuapp.com");

RegistrationController.$inject=['SignupService','$rootScope'];
function RegistrationController(SignupService,$rootScope) {
  var reg = this;
  reg.submit = function () {
    reg.completed = true;
    var promise = SignupService.getItems(reg.user.menu);
    promise.then(function(items){
    	if (items.length===0){
    		reg.msg = "No such menu number exists";
        reg.user.found="";
    	}
    	else{
    		reg.msg = "Your information has been saved";
        reg.user.found=items;
    	}
    })
     $rootScope.data = reg.user;
  };
}

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
 var service = this;
 service.getItems = function(shortname) {
  return $http({
      method: "GET",
      url: (ApiPath +  "/menu_items.json"), 
    }).then(function (response){
      var foundItems=[];
      for (var i=0; i<response.data['menu_items'].length; i++){
         if (shortname.length > 0 && response.data['menu_items'][i]['short_name'].localeCompare(shortname) === 0) {
                        foundItems.push(response.data['menu_items'][i]); }
      }
    return foundItems;
    });

};
}

})();