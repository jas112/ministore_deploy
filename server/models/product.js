// Product Model___

console.log('getting product model.');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = mongoose.Schema({
    name: {type:String, required: true},
    image_url: {type:String, required: true},
    description: {type:String, required: true},
    inventory: {type:Number, required: true}
}, {timestamps:true});

mongoose.model('Product', ProductSchema);
