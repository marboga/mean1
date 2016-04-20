console.log('in server routes');

var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');
// var options = require('../controllers/options.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		console.log('at server routes, attempting login')
		users.login(req, res);
	})
	app.get('/polls', function(req, res){
		console.log('at server routes, getting all polls')
		polls.get_all(req, res);
	})
	app.post('/polls/new', function(req, res){
		console.log('made it to polls/new', req.body)
		polls.create(req, res);
	})
	app.get('/poll/:id', function(req, res){
		console.log('trying to GEt single q', req.params.id)
		polls.get_one(req, res);
	})
	app.get('/remove/:id', function(req, res){
		console.log('trying to REMOVE', req.params.id)
		polls.remove_one(req, res);
	})
	app.get('/poll/:id/:option', function(req, res){
		console.log('sending to db', req.params)
		polls.update(req, res);
	})
}
