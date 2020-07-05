(function () {
'use strict';

angular.module('MenuAppData')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService','categories'];
function CategoriesListController(MenuDataService,categories) {
  var ctrl = this;

  ctrl.categories = categories;
}

})();

