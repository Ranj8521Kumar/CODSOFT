const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  category: String,
  description: String,
  requirements: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
