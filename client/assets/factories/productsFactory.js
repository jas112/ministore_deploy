// Client Products Factory___

console.log('accessing Products Factory');

storeApp.factory('ProductsFactory', ['$http', '$location', function($http, $location) {

  var factory = {};

  factory.getProducts = function(callback){
    $http({
      url:'/products',
      method: 'GET'
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.addProduct = function(newProduct, callback){
    console.log(newProduct);
    $http({
        url:'/products',
        method: 'POST',
        data: newProduct
      }).then(function(res){
        callback(res.data);
    })
  }

  factory.showProduct = function(id, callback){
    $http({
        url:'/products/' + id,
        method: 'Get'
      }).then(function(res){
        console.log('this is for the show function.');
        callback(res.data);
        console.log('returned data!');
      }, function(res){
        console.log(res);
      })
  }

  factory.editProduct = function(product, id){
    $http({
        url:'/products/' + product._id,
        method: 'PUT',
        data: product
      }).then(function(res){
      $location.url('/show/' + id);
    }, function(res){
      console.log(res);
    })
  }

  factory.removeProduct = function(id, callback){
    console.log('A product was removed from database.');
    $http({
        url:'/products/' + id,
        method: 'DELETE',
      }).then(function(res){
        console.log(res);
        console.log("getting products...?");
        callback();
      }, function(res){
        console.log("There was a problem ", res)
      })
  }
  return factory;
}])
