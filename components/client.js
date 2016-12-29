/**
 * Created by Miguel on 5/12/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router,browserHistory } from 'react-router';

let router = require('./router.jsx');

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        {router}
    </Router>
    ,app);