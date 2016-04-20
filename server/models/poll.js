console.log('in server poll model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
	name: {type: String},

	_user: {type: Schema.Types.ObjectId, ref: 'User'},

	question: {type: String, required: true},

	option1: {type: String, required: true},
	option1votes: {type: Number, default: 0},

	option2: {type: String, required: true},
	option2votes: {type: Number, default: 0},

	option3: {type: String, required: true},
	option3votes: {type: Number, default: 0},

	option4: {type: String, required: true},
	option4votes: {type: Number, default: 0},

},{timestamps: true})

mongoose.model('Poll', PollSchema);
