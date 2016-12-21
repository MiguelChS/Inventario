import React from 'react';
import { Route,IndexRoute } from 'react-router';

var Inicio = require('./page/inicio.jsx');
var Equipo = require('./page/equipo/indexAlta.jsx');
var Site = require('./page/altaSite.jsx');
var Index = require("./index.jsx");

module.exports = (
    <Route path="/" component={Index}>
        <IndexRoute component={Inicio} />
        <Route path="equipo" component={Equipo} />
        <Route path="site" component={Site} />
    </Route>
);