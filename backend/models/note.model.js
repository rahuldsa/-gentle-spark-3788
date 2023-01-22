const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
    title: String,
    note: String,
    category: String,
    price: Number,
    userID: String
})

const noteModel = mongoose.model('note', noteSchema)

module.exports = {
    noteModel
}

// {
// "title":"Polo",
// "note":"Classic T-shirt",
// "price": 569,
// userID: String
// }