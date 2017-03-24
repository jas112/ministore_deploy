// orders Controller___

console.log('starting orders server controller.');

var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
  // getOrders: function(req,res){
  //   Order.find({}, function(err, data){
  //     if(err){
  //       res.status(400).send("Operation Failed.")
  //     }else{
  //     res.json(data);
  //   }
  //   })
  // },
  getOrders: function(req,res){
    Order.find({}).populate('_customer').populate('_product').exec(function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }else{
      res.json(data);
    }
    })
  },
  getRecentOrders: function(req,res){
    	Order.find({}).populate('_customer').populate('_product').limit(3).exec(function(err, data){
    // Order.find({}).sort('-created_at').limit(3).exec(function(err, data){
      res.json(data);
    })
  },
  create: function(req,res){
    // console.log('this is req.body');
    // console.log(req.body);
    var order = req.body;
    // console.log('this is order product');
    // console.log(order._product);
    // console.log(order._customer);
    // console.log(order.quantity);
    var order = new Order(req.body);
    // console.log(order);
    // var product = Product.findOne({_id: order._product});
    // console.log(product);
    // decremented_inventory = product.inventory - order.quantity
    // console.log(decremented_inventory);
    // Product.update({_id:req.params._product},{$set:{inventory: decremented_inventory}});
    order.save(function(err, data){
      if(err){
        console.log(err);
        res.status(400).send("New order not added to database.")
      }
      else{
        Product.update({_id: data._product}, {$inc:{inventory: -data.order_quantity}}, function(err, product){
          if(err){
            console.log(err);
            res.status(400).send("Record was not updated.")
          }else{
          res.sendStatus(200);
        }
        })
      }
    })
  },
  update: function(req,res){
    Order.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Record was not updated.")
      }
      res.json(data);
    })
  },
  delete: function(req,res){
    Order.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
        data.remove();
        res.sendStatus(200);
    })
  },
  show: function(req,res){
    Order.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      res.json(data);
    })
  }
}
