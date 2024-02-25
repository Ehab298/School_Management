const  Student =require('../../../Model/collections/Student')
const  Class =require('../../../Model/collections/Classroom')

module.exports =async(req,res)=>{

   
        
        const { Name,Age,ClassroomID} = req.body;
            const newStudent= await Student.insertMany({ Name,Age,ClassroomID} )
            res.status(200).json({message:"success",newStudent})
            
    
       
    
   }