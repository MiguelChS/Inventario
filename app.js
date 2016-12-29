/**
 * Created by Miguel on 5/12/2016.
 */
'use strict';
require('babel-core/register')({
    presets: ['es2015', 'react']
});
var express = require("express");
var app = express();
var controller = require('./controller/index');

app.use(express.static('Public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
controller(app);


app.listen(3000,()=>console.log("escuchando en el puerto 3000"));