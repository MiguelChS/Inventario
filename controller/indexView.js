/**
 * Created by mc185249 on 12/28/2016.
 */
var express = require("express");
var router = express.Router();
var React = require("react");
var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var renderToString = require('react-dom/server').renderToString;
var routes = require('../components/router.jsx');

router.get("*",function (req,res) {
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

module.exports = router;