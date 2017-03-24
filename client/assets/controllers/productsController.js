// Products Controller____

storeApp.controller('ProductsController', ['$scope', '$routeParams', 'ProductsFactory',
  function($scope, $routeParams, ProductsFactory){
    function getProducts(){
      ProductsFactory.getProducts(function(data){
        $scope.products = data;
      })
    }
    getProducts();

    $scope.addProduct = function(id){
      ProductsFactory.addProduct(id, getProducts);
      $scope.newProduct = {};
    }

    $scope.removeProduct = function(id){
      ProductsFactory.removeProduct(id, getProducts);
    }
}])
