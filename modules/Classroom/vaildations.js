const Joi = require('joi');
module.exports={
    //{ SchooleName,SchoolAdminName,ClassroomID,StudentID} 
    ClassAdd:{
        //{ ClassName,room,StudentID}
        body:Joi.object().required().keys({
            ClassName:Joi.string().required(),
            room:Joi.number().required(),
        StudentID:Joi.string(),
       
        

        })
    },
    ClassUpdate:{
        //{ ClassName,room,StudentID}
        body:Joi.object().required().keys({
            ClassName:Joi.string(),
            room:Joi.number(),
       
        

        })
    }
}