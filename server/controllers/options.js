console.log('in controllers/options.js')

var mongoose = require('mongoose')
var Option = mongoose.model('Option');

module.exports = {
	get_all: function(req, res){
		Option.find({}, function(err, options){
			if (err){
				res.json(err)
			}else{
				res.json(options)
			}
		})
	},
}
