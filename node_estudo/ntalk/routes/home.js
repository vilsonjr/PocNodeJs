/*var express = require('express');
var router = express.Router();

GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;***/
module.exports = function(app) {
	var home = app.controllers.home;
	app.get('/', home.index);
	app.post('/entrar', home.login);
	app.get('/sair', home.logout);
};