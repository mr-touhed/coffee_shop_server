const express = require('express');
const { insert_user, get_single_user, update_user } = require('../controllers/user.controllers');
const { verify_token } = require('../utils/JWT');


const userRouter = express.Router();


userRouter.post("/user", insert_user)
userRouter.get("/user",verify_token, get_single_user)
userRouter.patch("/user/:id", update_user)


module.exports = userRouter