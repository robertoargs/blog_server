const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  username  : { type: String, required: true },
  email     : { type: String, required: true },
  image     : { type: String, required: true },
  title     : { type: String, required: true },
  text      : { type: String, required: true },
  comments  : [Object],
  date      : { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postSchema);