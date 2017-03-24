// Project Routes Js File___

console.log('getting Project routes');

var customers = require('../controllers/customersController.js');
var products = require('../controllers/productsController.js');
var orders = require('../controllers/ordersController.js');

//, pick an appropriate name....

module.exports = function(app){

  // Customer Routes__
  app.get('/customers', customers.getCustomers);
  app.get('/customers/recent', customers.getRecentCustomers);
  app.get('/customers/:id', customers.show);
  app.post('/customers', customers.create);
  app.put('/customers/:id', customers.update);
  app.delete('/customers/:id', customers.delete);

  // Product Routes__
  app.get('/products', products.getProducts);
  app.get('/products/:id', products.show);
  app.post('/products', products.create);
  app.put('/products/:id', products.update);
  app.delete('/products/:id', products.delete);

  // Order Routes__
  app.get('/orders', orders.getOrders);
  app.get('/orders/recent', orders.getRecentOrders);
  app.get('/orders/:id', orders.show);
  app.post('/orders', orders.create);
  app.put('/orders/:id', orders.update);
  app.delete('/orders/:id', orders.delete);

}
