/**
 * Created by mc185249 on 12/28/2016.
 */
var express = require("express");
var router = express.Router();

router.get('/Carga',(req,res) =>{
    res.send("soy la carga Site");
});

module.exports = router;