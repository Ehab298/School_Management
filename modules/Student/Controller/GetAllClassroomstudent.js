const  Student =require('../../../Model/collections/Student')
const  Classroom =require('../../../Model/collections/Classroom')

module.exports =async(req,res)=>{

 
    const classroomId = req.params.classroomId;
 
        // Find all students and populate the 'ClassroomID' field to get the associated classroom information
        const data = await Student.find({ ClassroomID: classroomId }).populate('ClassroomID');
        res.status(200).json({ message: "success", data });
  
  
   }