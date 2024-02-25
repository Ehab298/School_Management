const mongoose = require('mongoose');
const School = new mongoose.Schema({
    SchooleName:{type:String},
    SchoolAdminName:{type:String},
    role:{type:String,default:"Admin"},
    password:{type:String},
    
  

    
    
},{
timestamps:true
})

module.exports=mongoose.model("School",School )