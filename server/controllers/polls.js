console.log('in controllers/polls.js')

var mongoose = require('mongoose')
var Poll = mongoose.model('Poll');

module.exports = {
	get_all: function(req, res){
		Poll.find({}, function(err, polls){
			if (err){
				res.json(err)
			}else{
				// Poll.populate(polls._user).exec(function(err, question){
				// 	if (err){
				// 		res.json(err)
				// 	}else{
						res.json(polls)
				// 	}
				// })
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
				// Poll.populate(_user).exec(function(err, question){
				// 	if (err){
				// 		res.json(err)
				// 	}else{
						// console.log('the creator is %s', Poll._user.name)
						res.json(question)
				// 	}
				// })
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
	update: function(req, res){
		console.log('in db controller. ', req.params.option)
		if (req.params.option == 'option1'){
			Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {option1votes: +1}}, function(err, data){
				if (err){
					res.json(err)
				}else{
					res.json(data)
				}
			})
		}
		else if(req.params.option == 'option2'){
			Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {option2votes: +1}}, function(err, data){
				if (err){
					res.json(err)
				}else{
					res.json(data)
				}
			})
		}
		else if(req.params.option == 'option3'){
			Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {option3votes: +1}}, function(err, data){
				if (err){
					res.json(err)
				}else{
					res.json(data)
				}
			})
		}
		else if(req.params.option == 'option4'){
			Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {option4votes: +1}}, function(err, data){
				if (err){
					res.json(err)
				}else{
					res.json(data)
				}
			})
		}
		else{
			res.json(err);
		}
	},
}
