const router = require('express').Router();
const controller = require('./controller.js');

// Todo: Fill out the following routes:

// routes for retrieving all students and adding a new student
router
  .route('/students')
  .get((req, res, next) => {
    controller.students.getStudents()
      .then(data => {
        res.statusCode = 200;
        res.json(data);
      })
      .catch(err => {
        res.statusCode = 400;
        res.json(err);
      })
  })
  .post((req, res, next) => {
    controller.students.postStudent(req.body)
      .then(data => {
        res.statusCode = 201;
        res.json(data);
      })
      .catch(err => {
        res.statusCode = 400;
        res.json(err);
      })
  })


// route for updating a student's name
router
  .route('/students/:id')


module.exports = router;

