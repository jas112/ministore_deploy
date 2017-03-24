// Order Model___

console.log('getting order model.');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = mongoose.Schema({
    _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    order_quantity: {type:Number, required: true}
}, {timestamps:true});

mongoose.model('Order', OrderSchema);
