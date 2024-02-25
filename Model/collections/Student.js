const mongoose = require('mongoose');
const Student = new mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    ClassroomID:{type:mongoose.Types.ObjectId,ref:"Classroom"}
},{
timestamps:true
})

module.exports=mongoose.model("Student",Student )