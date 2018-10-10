const storage = {
    students : {
      1: {id: 1, name: "bob"},
      2: {id: 2, name: "gina"},
      3: {id: 3, name: "phil"}
    }
};

function getStudents(){
    return Object.values(storage.students);
}

function getStudentById(studentId){
    return storage.students[studentId];
}

function postStudent(newStudent){
  const noOfObjects = Object.values(storage.students).length;
  const plusObjects = noOfObjects+1;
  const updatedStudents = Object.assign(storage.students, {[plusObjects]:newStudent});
  storage.students = updatedStudents;
  return storage
}

// function createStudent(newStudent) {
//   const allIds = Object.keys(storage.students);
//   const highestId = Math.max(allIds);
//   const newStudentId = highestId + 1
//
//   const studentToSave = Object.assign(storage.students, { id newStudentId})
//   storage.students[newStudentId] = studentToSave;
//   return studentToSave;
// }

function putStudentById(updateStudent){
  storage.students[updateStudent.id] = updateStudent;
  return storage;
}

function patchStudent(fieldUpdate, studentId){
  return Object.assign(storage.students[studentId], fieldUpdate )
}

function deleteStudent(studentId){
  delete storage.students[studentId]
}

module.exports = {
  getStudents,
  getStudentById,
  postStudent,
  putStudentById,
  patchStudent,
  deleteStudent
}
