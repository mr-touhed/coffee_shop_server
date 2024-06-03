const product_collection = require("../models/product.models")

const get_products = async (req,res) =>{
    try {
        const result = await  product_collection.find().toArray();
        return res.status(200).json({status:true,result})
    } catch (error) {
        console.log(error);
    }
}

const add_product = async (req,res) =>{
    try {
        const body = req.body;
        const newProduct = {name:body.name,price:parseInt(body.price),img:body.img,catagory:body.catagory,details:body.details,exclusive:body.exclusive,reguler_price:body.reguler_price}
        const result =await  product_collection.insertOne(newProduct);
        return res.status(201).json({status:true,result})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {get_products,add_product}