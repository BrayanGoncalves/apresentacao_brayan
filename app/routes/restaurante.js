// const router   = require('../../config/server.js').app;

// router.get('/restaurante', function(req, res){
//     res.send("Rota de restaurante OK");
// });

// module.exports = router;

module.exports = function(application){
	
	application.get('/restaurante', function(req, res){
        res.send("Rota de restaurante OK");
	});
}