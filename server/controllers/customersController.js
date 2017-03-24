// Customers Controller___

console.log('starting customers server controller.');

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
  getCustomers: function(req,res){
    Customer.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      res.json(data);
    })
  },
  getRecentCustomers: function(req,res){
    Customer.find({}).sort('-created_at').limit(3).exec(function(err, data){
      res.json(data);
    })
  },
  create: function(req,res){
    console.log(req.body);
    var customer = new Customer(req.body);
    customer.save(function(err, data){
      if(err){
        res.status(400).send("New customer not added to database.")
      }
      else{
        res.sendStatus(200);
      }
    })
  },
  update: function(req,res){
    Customer.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Record was not updated.")
      }
      res.json(data);
    })
  },
  delete: function(req,res){
    Customer.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
        data.remove();
        res.sendStatus(200);
    })
  },
  show: function(req,res){
    Customer.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      res.json(data);
    })
  }
}
