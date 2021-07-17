const Student = require('../db/Student.js')

const controller = {
  students: {
    getStudents: function () {
      // TODO: add your code here to fetch all students
      return Student.getStudents();
        // .then(data => {
        //   res.statusCode = 200;
        //   res.json(data);
        // })
        // .catch(err => {
        //   res.statusCode = 400;
        //   res.json(err);
        // })

    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  }
};

module.exports = controller