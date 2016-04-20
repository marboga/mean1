console.log('in server user model');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	_polls: [{type: Schema.Types.ObjectId, ref: 'Poll'}]
},{timestamps: true})


mongoose.model('User', UserSchema);
