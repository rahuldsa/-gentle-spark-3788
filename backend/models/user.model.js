const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    passwordConfirm: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = {
    userModel
}

// "name": "Rahul",
// "email": "rahul@gmail.com",
// "pass": "123",
// "age": "20"