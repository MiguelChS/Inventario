/**
 * Created by Miguel on 5/12/2016.
 */
'use strict';
require('babel-core/register')({
    presets: ['es2015', 'react']
});
var React = require("react");
var express = require("express");
var app = express();
var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var renderToString = require('react-dom/server').renderToString;
var routes = require('./components/router.jsx');

app.use(express.static('Public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get("*",function (req,res) {
    match({routes, location: req.url },(error, redirectLocation, renderProps)=>{
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = renderToString(React.createElement(RouterContext,renderProps));
            res.render("index",{ReactDom:html});
        } else {
            res.status(404).send('Not found')
        }
    });
});

app.listen(3000,()=>console.log("escuchando en el puerto 3000"));