(function () {
"use strict";

angular.module('signup')
.controller('InfoController', InfoController)
InfoController.$inject = ['$rootScope','ApiPath'];
function InfoController($rootScope,ApiPath) {
  var $ctrl = this;
  $ctrl.data = $rootScope.data;
  $ctrl.basePath = ApiPath;
  console.log($ctrl.data)

}

})();
