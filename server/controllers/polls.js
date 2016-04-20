console.log('in controllers/polls.js')

var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');

module.exports = {
	get_all: function(req, res){
		Poll.find({}, function(err, polls){
			if (err){
				res.json(err)
			}else{
				res.json(polls)
			}
		})
	},
	create: function(req, res){
		console.log('data passed to server poll create function', req.body);
		var poll = new Poll(req.body);
		poll.save(function(err){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				res.redirect('/polls')
			}
		})
	},
	get_one: function(req, res){
		console.log('made it to get one function, id=', req.params.id)
		Poll.findOne({_id: req.params.id}, function(err, question){
			if (err){
				console.log(err)
			}else{
				console.log("successfully retrieved from db. question=", question)
				res.json(question)
			}
		})
	},
	remove_one: function(req, res){
		Poll.findOneAndRemove({_id: req.params.id}, function(err){
			if(err){
				console.log(err)
			}else{
				res.redirect('/polls')
			}
		})
	},
}
