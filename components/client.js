/**
 * Created by Miguel on 5/12/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import Inicio from './page/inicio.jsx';
import Equipo from './page/equipo/indexAlta.jsx';
var Site = require('./page/altaSite.jsx');
var Index = require('./index.jsx');

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={Inicio} />
            <Route path="equipo" component={Equipo} />
            <Route path="site" component={Site} />
        </Route>
    </Router>
    ,app);