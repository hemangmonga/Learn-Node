// models/Chapter.js
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Chapter', chapterSchema);
