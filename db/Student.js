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

const postStudent = async (studentInfo) => {
  return await Student.create(studentInfo);
}

const updateStudent = async (studentInfo) => {
  console.log(studentInfo)
  return await Student.updateOne({_id: mongoose.Types.ObjectId(studentInfo.id)}, studentInfo.studentInfo);
}

module.exports = {
  Student,
  getStudents,
  postStudent,
  updateStudent
};