const application = require('../../config/server.js').app;
const restauranteService = require('../services/restaurante.js');

application.post('/restaurante', (req, res, next) => {
    let dadosReq = req.body;

    restauranteService.salvar(dadosReq).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
    next();
});

module.exports = application;