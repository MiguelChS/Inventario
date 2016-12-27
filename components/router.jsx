import React from 'react';
import { Route,IndexRoute } from 'react-router';

let Inicio = require('./page/Inicio/inicio.jsx');
let Equipo = require('./page/equipo/indexAlta.jsx');
let Site = require('./page/site/altaSite.jsx');
let Posicion = require('./page/posicion/indexAlta.jsx');
let Index = require("./index.jsx");

module.exports = (
    <Route path="/" component={Index}>
        <IndexRoute component={Inicio} />
        <Route path="equipo" component={Equipo} />
        <Route path="site" component={Site} />
        <Route path="posicion" component={Posicion} />
    </Route>
);