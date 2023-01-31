const express = require('express')
const { connection } = require('./configs/db')
const { userRouter } = require('./routes/user.route')
const { noteRouter } = require('./routes/note.route')
const { authenticate } = require('./middlewares/authenticator.middleware')
// const { userModel } = require('./models/user.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('welcome to home page')
})

app.use('/users', userRouter)
app.use(authenticate)
app.use('/notes', noteRouter)

app.listen(4500, async () => {
    try {
        await connection
        console.log('connected to db');
    } catch (err) {
        console.log('trouble connecting to db');
        console.log(err);
    }
    console.log('runs at port 4500')
})

// {
//     "name":"fe",
//     "email":"fe psc",
//     "pass":"live session",
//     "age":"chunnu"
// }


// app.get('/data', (req, res) => {
//     const token = req.query.token
//     jwt.verify(token, 'masai', (err, decoded) => {
//         if (err) {
//             res.send('invalid token')
//             console.log(err);
//         } else {
//             res.send('data...')
//         }
//     });
// })

// app.get('/contact', (req, res) => {
//     const token = req.query.token
//     jwt.verify(token, 'masai', (err, decoded) => {
//         if (err) {
//             res.send('invalid token')
//             console.log(err);
//         } else {
//             res.send('cart page')
//         }
//     });
// })

// app.get('/about', (req, res) => {
//     res.send('about api')
// })