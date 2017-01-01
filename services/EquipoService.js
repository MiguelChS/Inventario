/**
 * Created by mc185249 on 12/29/2016.
 */
var repositoryEquipo = require('../repository/EquipoRepository');


class EquipoService {

}

EquipoService.prototype.getSelectEquipo= function () {
    return new Promise((resolve,reject)=>{
        let queries = [];
        queries.push(repositoryEquipo.getlistMarca());
        queries.push(repositoryEquipo.getPlanta());
        queries.push(repositoryEquipo.getCarga());
        queries.push(repositoryEquipo.getGarantia());
        queries.push(repositoryEquipo.getSnmp());
        queries.push(repositoryEquipo.getSO());
        queries.push(repositoryEquipo.getXFS());
        queries.push(repositoryEquipo.getEstado());
        Promise.all(queries).then((value)=>{
            var result = {};
            value.map((a)=>{
                for(let attr in a){
                    if(a.hasOwnProperty(attr))result[attr] = a[attr]
                }
            });
            resolve(result);
        }).catch((err)=>{
            reject(err);
        })
    })
};

EquipoService.prototype.getModelosById = function (idMarca) {
  return new Promise((resolve,reject)=>{
      repositoryEquipo.getListModelo(idMarca)
          .then((result)=>{
              resolve(result);
          })
          .catch((err)=>{
              reject(err)
          })
  });
};

module.exports = new EquipoService();