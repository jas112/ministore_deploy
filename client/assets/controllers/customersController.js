// Customers Controller____

storeApp.controller('CustomersController', ['$scope', '$routeParams', 'CustomersFactory',
  function($scope, $routeParams, CustomersFactory){
    function getCustomers(){
      CustomersFactory.getCustomers(function(data){
        $scope.customers = data;
      })
    }
    getCustomers();

    $scope.addCustomer = function(id){
      CustomersFactory.addCustomer(id, getCustomers);
      $scope.customer = {};
    }

    $scope.removeCustomer = function(id){
      CustomersFactory.removeCustomer(id, getCustomers);
    }
}])
