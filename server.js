const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // create app

const {getStudents, getStudentById, postStudent, putStudentById, patchStudent, deleteStudent} = require('./storage')

app.use(bodyParser.json());

app.get('/students', function(req, res){
  const students = getStudents();
  res.json(students);
});

app.get('/students/:studentId', function(req, res){
  const student = getStudentById(req.params.studentId);
  if(student){
      res.json(student);
  } else {
      res.status(404).json({error: 'Student not found'});
  }
});

app.post('/students', function(req, res){
 const students = getStudents();
 const newStudent = req.body;
 const addedStudent = postStudent(newStudent)
 res.json(addedStudent)
});

app.put('/students/:studentId', function(req, res){
  const putStudent = putStudentById(req.body)
  res.json(putStudent);
});

app.patch('/students/:studentId', function(req, res){
  const patchedStudent = patchStudent(req.body, req.params.studentId)
  res.json(patchedStudent);
});

app.delete('/students/:studentId', function(req, res){
  const deleted = deleteStudent(req.params.studentId)
  res.sendStatus(204)
});

app.listen(8080, function(){ // Set app to listen for requests on port 3000
    console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
