const app    = require('./config/server.js').app;
const port   = require('./config/server.js').port;
const router = require('./app/routes/router.js')

app.listen(port, (router) => {
    console.log(`Servidor Online na porta: ${port}.`);
});