const Student = require('../db/Student.js')

const controller = {
  students: {
    getStudents: function () {
      // TODO: add your code here to fetch all students
      return Student.getStudents();
    },
    postStudent: function (studentInfo) {
      // TODO: add your code here to add a new student
      return Student.postStudent(studentInfo);

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  }
};

module.exports = controller