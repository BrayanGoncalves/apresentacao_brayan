const restauranteModel = require('../models/restaurante.js')

module.exports.salvar = function(req, res) {
    const dados = req.body;

    return new Promise((resolve, reject) =>{
        restauranteModel.create(dados).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
}

module.exports.buscarTodos = function() {

    return new Promise((resolve, reject) =>{
        restauranteModel.findAll().then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    });
}