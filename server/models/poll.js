console.log('in server poll model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},

	question: {type: String, required: true},

	option1: {
		name: {type: String, required: true},
		votes: {type: Number, default: 0}
	},
	option2: {
		name: {type: String, required: true},
		votes: {type: Number, default: 0}
	},
	option3: {
		name: {type: String, required: true},
		votes: {type: Number, default: 0}
	},
	option4: {
		name: {type: String, required: true},
		votes: {type: Number, default: 0}
	}

},{timestamps: true})

mongoose.model('Poll', PollSchema);
