var jwt = require('jsonwebtoken');

const secretKey = '32N7dbQX73tNhsGABkavYxBJ9T25XIB3'
const genarate_token =  async (data) =>{
    const token =  jwt.sign(data, secretKey, { expiresIn: '5h' });
    return token
    
}


const verify_token = async (req,res,next) =>{
   try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1]
    jwt.verify(token, secretKey, function(err, decoded) {
       
            if(err){
                return res.status(401).json({result:false,massage:"unauthorize token"})
            }

            next()

      });

      
   } catch (error) {
    
   }
}


module.exports= {genarate_token,verify_token}