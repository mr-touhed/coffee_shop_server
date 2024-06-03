const { client } = require("../db/db");

const product_collection = client.db("coffee_DB").collection('products');

module.exports = product_collection