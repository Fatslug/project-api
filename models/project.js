var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({
	Title: String,
	Status: String,
	DueDate: Date,
	CreatedDate: Date
});
mongoose.model('Project', ProjectSchema);

module.exports = mongoose.model('Project');