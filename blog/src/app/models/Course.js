// Dùng để set up cái Course
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Course = new Schema({
  name: { type: String, require: true, maxlength: 255 },
  description: { type: String, require: true, maxlength: 600 },
  image: {type: String, require: true, maxlength: 255},
  videoID: {type: String, require: true, maxlength: 255},
  level: {type: String, require: true, maxlength: 255},
  slug: {type: String, slug: 'name'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});
mongoose.plugin(slug);
module.exports = mongoose.model('Course', Course);