// Client Customers Factory___

console.log('accessing Customers Factory');

storeApp.factory('CustomersFactory', ['$http', '$location', function($http, $location) {

  var factory = {};

  factory.getCustomers = function(callback){
    $http({
      url:'/customers',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.getRecentCustomers = function(callback){
    $http({
      url:'/customers/recent',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.addCustomer = function(newCustomer, callback){
    console.log(newCustomer);
    $http({
        url:'/customers',
        method: 'POST',
        data: newCustomer
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.showCustomer = function(id, callback){
    $http({
        url:'/customers/' + id,
        method: 'Get'
      }).then(function(res){
        console.log('this is for the show function.');
        callback(res.data);
        console.log('returned data!');
      }, function(res){
        console.log(res);
      })
  }

  factory.editCustomer = function(customer, id){
    $http({
        url:'/customers/' + customer._id,
        method: 'PUT',
        data: customer
      }).then(function(res){
      $location.url('/show/' + id);
    }, function(res){
      console.log(res);
    })
  }

  factory.removeCustomer = function(id, callback){
    console.log('A customer was removed from database.');
    $http({
        url:'/customers/' + id,
        method: 'DELETE',
      }).then(function(res){
        console.log(res);
        console.log("getting customers...?");
        callback();
      }, function(res){
        console.log("There was a problem ", res)
      })
  }
  return factory;
}])
