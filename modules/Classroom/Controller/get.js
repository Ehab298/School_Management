

const  Class =require('../../../Model/collections/Classroom')


module.exports =async(req,res)=>{

    try {
        const allSchool = await Class.find({}).populate('SchoolID');
        const count = await Class.countDocuments({});
        res.status(200).json({ message: "success",count, allSchool });
    } catch (error) {
        console.error('Error handling upload request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   }