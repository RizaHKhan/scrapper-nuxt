const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.login)
userRouter.get('/profile', userController.login)

module.exports = userRouter
