

const  Student =require('../../../Model/collections/Student')


module.exports =async(req,res)=>{

    try {
        const allSchool = await Student.find({}).populate('SchoolID');
        const count = await Student.countDocuments({});
        res.status(200).json({ message: "success",count, allSchool });
    } catch (error) {
        console.error('Error handling upload request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   }