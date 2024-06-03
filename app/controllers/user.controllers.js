const user_collection = require("../models/user.models");

 const insert_user = async (req,res) =>{
    try {
        const user_data = req.body;
        const {email,displayName} = user_data
        const IsExist = await  user_collection.findOne({email:email});
        if(IsExist === null){
            const result = await user_collection.insertOne(user_data);
           return  res.status(201).json({status:true, massage:"insert new user"})
        }
        
        return  res.json({status:true, massage:"alrady have an account"})
    } catch (error) {
        console.log(error);
    }
}


const get_single_user = async(req,res) =>{
    try {
        const email =  req?.headers?.email
        const result =await user_collection.findOne({email:email});
        res.status(200).json({status:true, result})
    } catch (error) {
        console.log(error);
    }
}








module.exports = {insert_user,get_single_user}