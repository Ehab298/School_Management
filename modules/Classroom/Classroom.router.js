const router = require('express').Router();
const handelValidations = require('../../Middelware/handelValidations');
const { authentications, authorization } = require('../../Middelware/authintication'); // Corrected spelling here

const { ClassAdd,ClassUpdate } = require('./vaildations');
const addClassroomController = require('./Controller/Add');
const GetClassroomController = require('./Controller/get');
const deleteClassroomController = require('./Controller/Delete');
const UpdateClassroomController = require('./Controller/Update');
router.post("/AddClass", authentications(), handelValidations(ClassAdd), addClassroomController);
router.get("/GetClass", GetClassroomController);
router.delete("/deleteClass/:id", deleteClassroomController);
router.patch("/UpdateClass/:id", UpdateClassroomController);
module.exports = router;