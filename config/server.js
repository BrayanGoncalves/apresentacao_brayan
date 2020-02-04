const restify   = require('restify');
const consign   = require('consign');
const port      = 3000;
const app    	= restify.createServer();

app.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

consign()
    .include('config/dbConnection.js')
    .then('app/models')
    .then('app/services')
	.then('app/routes')
    .into(app);
	
console.log('O AUTO-LOAD carregou o módulo de conexão com o banco de dados.');

module.exports = { app, port };