const express = require('express');
const { get_products, add_product } = require('../controllers/products.controllers');

const ProductRouter = express.Router();



ProductRouter.get("/products", get_products)
ProductRouter.post("/product", add_product)



module.exports = ProductRouter