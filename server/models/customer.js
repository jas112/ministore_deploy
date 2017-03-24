// Customer Model___

console.log('getting customer model.');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = mongoose.Schema({
    name: {type:String, required: true},
}, {timestamps:true});

mongoose.model('Customer', CustomerSchema);
