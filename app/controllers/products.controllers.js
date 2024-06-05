const { ObjectId } = require("mongodb");
const product_collection = require("../models/product.models")

const get_products = async (req,res) =>{
    try {
        const result = await  product_collection.find().toArray();
        return res.status(200).json({status:true,result})
    } catch (error) {
        console.log(error);
    }
}

const get_single_product = async (req,res) =>{
    try {
        const productId = req.params.id;
        const product = await product_collection.findOne({_id: new ObjectId(productId)});
        res.status(200).json({status:true,product})
    } catch (error) {
        
    }
}


const add_product = async (req,res) =>{
    try {
        const body = req.body;
        
        const newProduct = {...body,price:parseInt(body.price)}
        console.log(newProduct);
        const result =await  product_collection.insertOne(newProduct);
        return res.status(201).json({status:true,result})
    } catch (error) {
        console.log(error);
    }
}



const remove_product = async (req,res) =>{
    try {
        const productId = req.params.id;
        const result = await product_collection.deleteOne({_id: new ObjectId(productId)});
       
        if(result.deletedCount > 0){
            return res.status(202).json({status:true,result})
        }else{
            return res.status(400).json({status:false,result})
        }
        
    } catch (error) {
        console.log(error);
    }
}

const update_product = async (req,res) => {
    try {
        
        const bodyData = req.body;
        const productId = req.params.id;
        const query = {_id: new ObjectId(productId)};
        const updated = {$set:{
            name:bodyData.name,
            price:bodyData.price,
            img:bodyData.img,
            catagory:bodyData.catagory,
            details:bodyData.details,
            exclusive:bodyData.exclusive,
            reguler_price:bodyData.reguler_price}
        }

        
        const result = await product_collection.updateOne(query,updated,{});
        
        if(result.modifiedCount > 0){
            return res.status(202).json({status:true,result})
        }
        return res.status(404).json({status:false,result})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {get_products,add_product,get_single_product,remove_product,update_product}