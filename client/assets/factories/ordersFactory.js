// Client Orders Factory___

console.log('accessing Orders Factory');

storeApp.factory('OrdersFactory', ['$http', '$location', function($http, $location) {

  var factory = {};

  factory.getOrders = function(callback){
    $http({
      url:'/orders',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.getRecentOrders = function(callback){
    $http({
      url:'/orders/recent',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.createOrder = function(newOrder){
    console.log(newOrder);
    $http({
        url:'/orders',
        method: 'POST',
        data: newOrder
      }).then(function(res){
        $location.url('/')}, function(res){
        console.log(res);
        console.log("sending data!!!");
    })
  }

  factory.showOrder = function(id, callback){
    $http({
        url:'/orders/' + id,
        method: 'Get'
      }).then(function(res){
        console.log('this is for the show function.');
        callback(res.data);
        console.log('returned data!');
      }, function(res){
        console.log(res);
      })
  }

  factory.editOrder = function(order, id){
    $http({
        url:'/orders/' + order._id,
        method: 'PUT',
        data: order
      }).then(function(res){
      $location.url('/show/' + id);
    }, function(res){
      console.log(res);
    })
  }

  factory.removeOrder = function(id, callback){
    console.log('An order was removed from database.');
    $http({
        url:'/orders/' + id,
        method: 'DELETE',
      }).then(function(res){
        console.log(res);
        console.log("getting orders...?");
        callback();
      }, function(res){
        console.log("There was a problem ", res)
      })
  }
  return factory;
}])
