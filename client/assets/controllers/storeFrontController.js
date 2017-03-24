// Store Front Controller____

storeApp.controller('StoreFrontController', ['$scope', '$routeParams', 'CustomersFactory', 'ProductsFactory', 'OrdersFactory',
  function($scope, $routeParams, CustomersFactory, ProductsFactory, OrdersFactory){

    $scope.products = [];
    $scope.recentOrders = [];
    $scope.recentCustomers = [];


    function getRecentOrders(){
      OrdersFactory.getRecentOrders(function(data){
        $scope.recentOrders = data;
      })
    }
    getRecentOrders();

    function getRecentCustomers(){
      CustomersFactory.getRecentCustomers(function(data){
        $scope.recentCustomers = data;
      })
    }
    getRecentCustomers();

    function getProducts(){
      ProductsFactory.getProducts(function(data){
        $scope.products = data;
      })
    }
    getProducts();
}])
