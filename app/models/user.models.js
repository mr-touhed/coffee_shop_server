const { client } = require("../db/db");

const user_collection = client.db("coffee_DB").collection('users');



module.exports = user_collection