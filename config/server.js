const restify   = require('restify');
const port      = 3000;
const app    	= restify.createServer();

app.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

module.exports = { app, port };