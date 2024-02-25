

const  Classroom =require('../../../Model/collections/Classroom')

const  School =require('../../../Model/collections/School')
module.exports =async(req,res)=>{

    try {
        const SchoolId = req.School.id
 console.log(SchoolId);

    let data = await School.findById({_id:SchoolId})

        
        const { ClassName,room} = req.body;
        const ClassSameName =await School.findOne({ClassName})
        if(ClassSameName){
            res.status(400).json({error:"there is same name in DB"})
        }else {
            const NewClassroom= await Classroom.insertMany({ ClassName,room,SchoolID:data} )
            res.status(200).json({message:"success",NewClassroom})
            }
    
       
        
    } catch (error) {
        console.error('Error handling upload request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
   }