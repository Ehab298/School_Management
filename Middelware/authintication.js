const jwt = require('jsonwebtoken')
const School =require('../Model/collections/School')
const authentications= () => {
    return async (req, res, next) => {
        const token = req.headers["authorization"].split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: "Authorization header is missing" });
        }

        if (!token || token == null || token == undefined) {
            res.json({ message: "in-valid token" })
        } else {
                jwt.verify(token, 'shhhhh',async function (err, decoded) {
                if (err) {
                    
                    res.json({ message: "in-valid signature" })
                } else {
                    req.School = decoded
                    const SchoolToken= await School.findOne({_id:decoded.id})
                    if (!SchoolToken) {
                        res.json({ message: "rong Token" })
                    }
                    else{ 
                        req.School=SchoolToken
                        next()
                    }
                }

          });

        }
    }

  
}

const authorization= (data) => {
    return async (req, res, next) => {

        if (data.includes(req.School.role)) {
            next()
        } else {
            res.status(402).json({ message: "not auth user" })

        }
    }
}
module.exports={
    authentications
    ,authorization
}
