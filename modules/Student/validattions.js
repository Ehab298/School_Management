const Joi = require('joi');
module.exports={
   // { Name,Age,ClassName,ClassroomID}
    StudentAdd:{
        body:Joi.object().required().keys({
            Name:Joi.string().required(),
            Age:Joi.number().required(),
            ClassroomID:Joi.string(),
            
   
        

        })
    }
}