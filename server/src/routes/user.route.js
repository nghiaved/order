const express = require('express')

const userController = require('../controllers/user.controller')

const router = express.Router()

//Call API http://localhost:7000/api/user/register
const userRoute = app => {
    router.post('/register', userController.handleRegister)
    router.post('/login', userController.handleLogin)

    return app.use('/api/user', router)
}

module.exports = userRoute