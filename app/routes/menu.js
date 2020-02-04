const application = require('../../config/server.js').app;
const menuService = require('../services/menu.js');

/* Como um menu sempre deve estar associado a um restaurante, deve-se 'encadear' as rotas, nesse caso a de restaurante com a de menu */
/* Dessa forma, a chamada para guardar um menu ficaria: http://localhost:3000/restaurante/1/menu */
application.post('/restaurante/:restaurante_id/menu', (req, res, next) => {

    menuService.salvar(req, res).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
    next();
});

application.get('/menu', (req, res, next) => {

    menuService.buscarTodos().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
    next();
});

module.exports = application;