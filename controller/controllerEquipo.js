/**
 * Created by mc185249 on 12/27/2016.
 */
var express = require("express");
var router = express.Router();
var service = require('../services/EquipoService');

router.get('/findSelect',(req,res) =>{
    service.getSelectEquipo()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            res.status(500).send();
        })
});

router.post('/findModelo',(req,res)=>{
});

module.exports = router;
