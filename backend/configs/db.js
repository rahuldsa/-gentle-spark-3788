const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://rahul:rahul@cluster0.emckoia.mongodb.net/flipkartDB?retryWrites=true&w=majority')

module.exports = {
    connection
}
