const Class = require('../../../Model/collections/Classroom');

module.exports = async (req, res) => {
    try {
      
        const { id } = req.params;
        const deletedClass = await Class.findByIdAndDelete(id);
        if (!deletedClass) {
           
            return res.status(404).json({ error: 'Classroom not found' });
        }

       
           res.status(200).json({ message: 'Classroom deleted successfully', deletedClass });

           
    } catch (error) {
        
        console.error('Error handling delete request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}