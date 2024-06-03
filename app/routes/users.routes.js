const express = require('express');
const { insert_user, get_single_user } = require('../controllers/user.controllers');


const userRouter = express.Router();


userRouter.post("/user", insert_user)
userRouter.get("/user", get_single_user)


module.exports = userRouter