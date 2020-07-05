(function () {
'use strict';

angular.module('MenuAppData')
.component('categories', {
  templateUrl: 'template/categories.template.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});
 CategoriesComponentController.$inject = [];
  function CategoriesComponentController() {
    // var comp = this;
  }
})();