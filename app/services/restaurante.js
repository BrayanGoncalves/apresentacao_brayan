const restauranteModel = require('../models/restaurante.js')

module.exports.salvar = function(dados) {

    return new Promise((resolve, reject) =>{
        restauranteModel.create(dados).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    });
}