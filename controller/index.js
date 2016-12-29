/**
 * Created by mc185249 on 12/27/2016.
 */
var Equipo = require('./controllerEquipo');
var Site = require('./controllerSite');
var viewReact = require('./indexView');

function controllers(app) {
    app.use('/controllerEquipo',Equipo);
    app.use('/controllerSite',Site);
//para renderizar la view
    app.use(new RegExp('^(?!\/controller)'),viewReact);
}


module.exports = controllers;
