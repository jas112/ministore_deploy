// Orders Controller____

storeApp.controller('OrdersController', ['$scope', '$routeParams', 'CustomersFactory', 'ProductsFactory', 'OrdersFactory',
  function($scope, $routeParams, CustomersFactory, ProductsFactory, OrdersFactory){

    function getOrders(){
      OrdersFactory.getOrders(function(data){
        $scope.orders = data;
      })
    }
    getOrders();

    function getCustomers(){
      CustomersFactory.getCustomers(function(data){
        $scope.customers = data;
      })
    }
    getCustomers();

    function getProducts(){
      ProductsFactory.getProducts(function(data){
        $scope.products = data;
      })
    }
    getProducts();

    $scope.addOrder = function(id){
      console.log("this is the object passed.");
      console.log($scope.newOrder);
      console.log("this is the object passed.");
      OrdersFactory.createOrder(id, getOrders);
      $scope.newOrder = {};
    }

    $scope.removeOrder = function(id){
      OrdersFactory.removeOrder(id, getOrders);
    }
}])
