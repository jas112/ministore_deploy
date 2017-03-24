// Mini MEAN Store App JS___

var storeApp = angular.module('storeApp', ['ngRoute']);

storeApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/store_front.html',
    controller: 'StoreFrontController'
  })
  .when('/orders', {
    templateUrl: '/partials/orders.html',
    controller: 'OrdersController'
  })
  .when('/customers', {
    templateUrl: '/partials/customers.html',
    controller: 'CustomersController'
  })
  .when('/products', {
    templateUrl: '/partials/products.html',
    controller: 'ProductsController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
