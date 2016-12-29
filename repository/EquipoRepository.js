/**
 * Created by mc185249 on 12/27/2016.
 */
class EquipoRepository{
    constructor(){
        this.DB = require("./sqlServer");
    }
}

EquipoRepository.prototype.getlistMarca = function () {
    new this.DB().executeQuery(`select * from marca`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getListModelo = function (idMarca) {
    new this.DB().queryStream(`select * from modelo where id_marca = ${idMarca}`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getGarantia = function () {
    new this.DB().executeQuery(`select * from garantia`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getCarga = function () {
    new this.DB().queryStream(`select * from carga`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getSnmp = function () {
    new this.DB().executeQuery(`select * from snmp`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getSO = function () {
    new this.DB().executeQuery(`select * from sistema_operativo`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getEstado = function () {
    new this.DB().executeQuery(`select * from estado`)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

EquipoRepository.prototype.getXFS = function () {
    new this.DB().executeQuery(`select 1 as id, 1 as value `)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.dir(err);
        })
};

module.exports = EquipoRepository;