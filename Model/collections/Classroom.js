const mongoose = require('mongoose');
const Classroom = new mongoose.Schema({
    ClassName:{type:String},
    room:{type:Number},
    SchoolID:{type:mongoose.Types.ObjectId,ref:"School"}
},{
timestamps:true
})

module.exports=mongoose.model("Classroom",Classroom )