const Class = require('../../../Model/collections/Classroom');
const  Student =require('../../../Model/collections/Student')
module.exports = async (req, res) => {
    try {
      
        const { id } = req.params;
        const deletedClass = await Student.findByIdAndDelete(id);
        if (!deletedClass) {
           
            return res.status(404).json({ error: 'Classroom not found' });
        }

       
           res.status(200).json({ message: 'Classroom deleted successfully', deletedClass });

           
    } catch (error) {
        
        console.error('Error handling delete request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}