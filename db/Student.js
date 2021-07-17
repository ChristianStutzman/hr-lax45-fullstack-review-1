const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

const Student = mongoose.model('Student', studentSchema);

const getStudents = async () => {
  return await Student.find();
};

module.exports = {
  Student,
  getStudents
};