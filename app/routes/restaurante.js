const application = require('../../config/server.js').app;
const restauranteService = require('../services/restaurante.js');

application.post('/restaurante', (req, res, next) => {

    restauranteService.salvar(req, res).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
    next();
});

application.get('/restaurante', (req, res, next) => {

    restauranteService.buscarTodos().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
    next();
});

module.exports = application;