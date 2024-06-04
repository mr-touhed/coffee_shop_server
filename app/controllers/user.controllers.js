const { ObjectId } = require("mongodb");
const user_collection = require("../models/user.models");
const { genarate_token } = require("../utils/JWT");

 const insert_user = async (req,res) =>{
    try {
        const user_data = req.body;
        const {email,displayName} = user_data
        const IsExist = await  user_collection.findOne({email:email});
        if(IsExist === null){
            const result = await user_collection.insertOne(user_data);
            const token = await genarate_token({email})
            
           return  res.status(201).json({status:true, massage:"insert new user",token})
        }
        const token = await genarate_token({email})
          
        return  res.status(200).json({status:true, massage:"alrady have an account", token})
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


const update_user = async(req,res) =>{
    try {
        const id = req.params.id;
        const updateData = req.body;
         delete updateData._id
        const query = {_id: new ObjectId(id)}
        const updateDoc = {$set:{...updateData}};

        const result = await user_collection.updateOne(query,updateDoc,{});
        if(result.modifiedCount > 0){
            return res.status(202).json({status:true, massage:"profile update now"})
        }
        return res.status(405).json({status:false, massage:"try again latter"})
       
    } catch (error) {
        console.log(error);
    }
}






module.exports = {insert_user,get_single_user,update_user}