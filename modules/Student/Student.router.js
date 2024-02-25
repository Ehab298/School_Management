const router =require('express').Router()
const handelValidations = require('../../Middelware/handelValidations');
const GetAllClassroomstudent =require('./Controller/GetAllClassroomstudent');
const  {StudentAdd}  = require('./validattions');

router.get("/GetAllClassroomstudent/:classroomId",GetAllClassroomstudent)

const { authentications, authorization } = require('../../Middelware/authintication');

const addStudentController = require('./Controller/Add');
const GetStudentController = require('./Controller/get');
const deleteStudentController = require('./Controller/DeleteStudent');
const UpdateStudentController = require('./Controller/Update');
router.post("/AddStudent", authentications(), handelValidations(StudentAdd), addStudentController);
router.get("/GetStudent", GetStudentController);
router.delete("/deleteStudent/:id", deleteStudentController);
router.patch("/UpdateStudent/:id", UpdateStudentController);
module.exports=router