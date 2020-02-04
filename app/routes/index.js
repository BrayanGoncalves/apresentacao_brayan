// const router   = require('../../config/server.js').app;

// router.get('/', function(req, res){
//     res.send("Rota de index OK");
// });

// module.exports = router;

module.exports = function(application){
	
	application.get('/', function(req, res){
        res.send("Rota de index OK");
	});
}