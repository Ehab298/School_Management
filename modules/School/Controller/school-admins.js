const  School =require('../../../Model/collections/School')

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports = async (req, res) => {

    const { SchooleName,password} = req.body;

    const SchooleAdmin = await School.findOne({ SchooleName })

    
  
    if (!SchooleAdmin) {
        res.status(400).json({message:'in-valid  user'})
    } 
    
    else {
        if (SchooleAdmin.role!="Admin") {
             res.status(400).json({ message: "Admin only can singin" })
        }else

        {
            const match = await bcrypt.compare(password, SchooleAdmin.password);

            if(match) {
                var adminToken = jwt.sign({ id:SchooleAdmin._id,role: SchooleAdmin.role}, 'shhhhh');
                
        
               

                res.status(200).json({message:"done",adminToken })
            }
            else{
                res.status(400).json({message:"in-valid user"});
            }}

      

    }

}




