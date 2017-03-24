// Products Controller___

console.log('starting products server controller.');

var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  getProducts: function(req,res){
    Product.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      res.json(data);
    })
  },
  create: function(req,res){
    console.log(req.body);
    var product = new Product(req.body);
    product.save(function(err, data){
      if(err){
        res.status(400).send("New product not added to database.")
      }
      else{
        res.sendStatus(200);
      }
    })
  },
  update: function(req,res){
    Product.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Record was not updated.")
      }
      res.json(data);
    })
  },
  delete: function(req,res){
    Product.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
        data.remove();
        res.sendStatus(200);
    })
  },
  show: function(req,res){
    Product.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      res.json(data);
    })
  }
}
