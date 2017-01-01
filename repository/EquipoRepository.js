/**
 * Created by mc185249 on 12/27/2016.
 */
class EquipoRepository{
    constructor(){
        this.DB = require("./sqlServer");
    }
}

EquipoRepository.prototype.getlistMarca = function () {
    return new Promise((resolve,reject)=>{
        new this.DB().executeQuery(`select  id as value, marca as label from marca`)
            .then((result)=>{
                resolve({marcas:result})
            })
            .catch((err)=>{
                reject(err)
            })
    });
};

EquipoRepository.prototype.getPlanta = function () {
    return new Promise((resolve,reject)=>{
        new this.DB().queryStream(`select id as value, planta +' - '+prefijo as label from planta`)
            .then((result)=>{
                resolve({planta:result});
            })
            .catch((err)=>{
                reject(err)
            })
    })
};

EquipoRepository.prototype.getListModelo = function (idMarca) {
    return new Promise((resolve,reject) => {
        new this.DB().queryStream(`select id as value, modelo as label from modelo where id_marca = ${idMarca}`)
            .then((result)=>{
                resolve({modelo:result});
            })
            .catch((err)=>{
                reject(err);
            })
    });
};

EquipoRepository.prototype.getGarantia = function () {
    return new Promise((resolve,reject) => {
        new this.DB().executeQuery(`select id as value, garantia as label from garantia`)
            .then((result)=>{
                resolve({garantia:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })
};

EquipoRepository.prototype.getCarga = function () {
    return new Promise((resolve,reject)=>{
        new this.DB().queryStream(`select id as value,carga as label from carga`)
            .then((result)=>{
                resolve({carga:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })
};

EquipoRepository.prototype.getSnmp = function () {
    return new Promise((resolve,reject)=>{
        new this.DB().executeQuery(`select id as value,version as label from snmp`)
            .then((result)=>{
                resolve({snmp:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })

};

EquipoRepository.prototype.getSO = function () {
    return new Promise((resolve,reject) => {
        new this.DB().executeQuery(`select id as value,sistema_operativo as label from sistema_operativo`)
            .then((result)=>{
                resolve({so:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })
};

EquipoRepository.prototype.getEstado = function () {
    return new Promise((resolve,reject) =>{
        new this.DB().executeQuery(`select id as value,estado as label from estado`)
            .then((result)=>{
                resolve({estado:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })
};

EquipoRepository.prototype.getXFS = function () {
    return new Promise((resolve,reject) =>{
        new this.DB().executeQuery(`select 1 as value, 1 as label `)
            .then((result)=>{
                resolve({xfs:result});
            })
            .catch((err)=>{
                reject(err);
            })
    })
};

module.exports = new EquipoRepository();