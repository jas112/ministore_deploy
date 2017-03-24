// Project Server JS___

console.log('starting project server.');

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var root = __dirname;
var port = process.env.Port || 8000;
var app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// the stuff above is manditory in placement!!!!!

// Require mongoose before routes!!!!!!

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port, function(){
  console.log('the server is running on ${port}.')
});
