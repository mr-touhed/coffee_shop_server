const express = require('express');
const { get_products, add_product, get_single_product, remove_product, update_product } = require('../controllers/products.controllers');

const ProductRouter = express.Router();



ProductRouter.get("/products", get_products)
ProductRouter.post("/product", add_product)
ProductRouter.get("/product/:id", get_single_product)
ProductRouter.delete("/product/:id", remove_product)
ProductRouter.patch("/product/:id", update_product)



module.exports = ProductRouter