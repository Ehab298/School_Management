const Joi = require('joi');
module.exports={
    //{ SchooleName,SchoolAdminName,ClassroomID,StudentID} 
    SchoolAdd:{
        body:Joi.object().required().keys({
            SchooleName:Joi.string().required(),
            SchoolAdminName:Joi.string().required(),
        StudentID:Joi.string(),
        password:Joi.string().required(),
        cpassword:Joi.string().required().valid(Joi.ref('password')), 
        role:Joi.string()
        

        })
    }
    ,
    schoolAdmins:{
         body:Joi.object().required().keys({
            SchooleName:Joi.string().required(),
            password:Joi.string().required(),
        
       })
    },
    // singinAdmin:{
    //     body:Joi.object().required().keys({
    //     email:Joi.string().email().required(),
    //     password:Joi.string().required(),
        
    //     })
    // },
    // restpassword:{
    //     body:Joi.object().required().keys({
    //         password:Joi.string().required(),
    //         cpassword:Joi.ref('password'), 
        
    //     })
    // },
    // updateuser:{
    //     body:Joi.object().required().keys({
    //         firstName:Joi.string(),
    //         lastName:Joi.string(),
       
       
    //     phone:Joi.number(),
    //     conpanyId:Joi.string(),
    //     role:Joi.string()
        

    //     })
    // }
}