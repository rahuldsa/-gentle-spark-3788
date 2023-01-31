const express = require('express')
const { userModel } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {
    const { email, pass, name, age } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, secure_password) => {
            if (err) {
                console.log(err);
            } else {
                const user = new userModel({ email, pass: secure_password, name, age })
                await user.save()
                res.send('registered')
            }
        });
    } catch (err) {
        res.send('error in registering the user')
        console.log(err);
    }
})

userRouter.post('/login', async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await userModel.find({ email })
        const hashed_pass = user[0].pass
        if (user.length > 0) {
            bcrypt.compare(pass, hashed_pass, (err, result) => {
                console.log(pass, hashed_pass, result);
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'masai');
                    res.send({ 'msg': 'login successfull', 'token': token })
                } else {
                    res.send('wrong credentials')
                }
            });
        } else {
            res.send('wrong credentials 2')
        }
    } catch (err) {
        res.send('something went wrong')
        console.log(err);
    }
})

module.exports = {
    userRouter
}