const  School =require('../../../Model/collections/School')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
   module.exports =async(req,res,next)=>{

    try{   
       
        const { SchooleName,SchoolAdminName,password,cpassword,role} = req.body;
        const Schoole =await School.findOne({SchooleName})
    if (Schoole) {
        res.json({message:"there is same email in DB"})
    } else {
        
       bcrypt.hash(password, 8, async function(err, hash) {
           if (err) {
               res.json({message:"hash err"})
           } else {
               const token = jwt.sign({ SchooleName,role}, 'shhhhh');
               const newSchool= await School.insertMany({ SchooleName,SchoolAdminName,password:hash,role})
     
             
            res.status(200).json({message:"success",newSchool,token});
           }
       });
       }
    }
    catch(err){
       res.status(400).json({message:"unexpected error occured"});
    }
     
   }  
   