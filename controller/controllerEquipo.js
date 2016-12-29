/**
 * Created by mc185249 on 12/27/2016.
 */
var express = require("express");
var router = express.Router();

router.get('/Carga',(req,res) =>{
    res.send("soy la carga Equipo");
});

module.exports = router;
