const Class = require('../../../Model/collections/Classroom');
const  Student =require('../../../Model/collections/Student')
module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedClass = await Student.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedClass) {
          
            return res.status(404).json({ error: 'Classroom not found' });
        }

       
        res.status(200).json({ message: 'Classroom updated successfully', updatedClass });
    } catch (error) {
       
        console.error('Error handling update request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}