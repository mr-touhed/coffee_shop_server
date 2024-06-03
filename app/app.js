const { DB_connect } = require("./db/db");
const express = require("express");
const cors = require('cors');
const ProductRouter = require("./routes/products.routes");
const userRouter = require("./routes/users.routes");

  const  app = express();
  DB_connect()

// middleware function 
app.use(cors())
app.use(express.json())

// routers 
app.use("/api",ProductRouter)
app.use("/api",userRouter)




  module.exports = app