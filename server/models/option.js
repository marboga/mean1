console.log('in server option model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OptionSchema = new mongoose.Schema({
	option1: {type: String, required: true},
	option2: {type: String, required: true},
	option3: {type: String},
	option4: {type: String},
	count: {type: Number, required: true},
	_poll: {type: Schema.Types.ObjectId, ref: 'Poll'}
},{timestamps: true})

mongoose.model('Option', OptionSchema);
