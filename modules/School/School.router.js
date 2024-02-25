const router =require('express').Router()
const handelValidations = require('../../Middelware/handelValidations');
const  {SchoolAdd,schoolAdmins}  = require('./validations');
const addSchoolController =require('./Controller/Add');
//const {authentications,authorization} = require('../../middleware/authintication');

router.post("/AddSchool",handelValidations(SchoolAdd),addSchoolController)

const SchoolAdminController =require('./Controller/school-admins');
router.post("/SchoolAdmin",handelValidations(schoolAdmins),SchoolAdminController)
module.exports=router