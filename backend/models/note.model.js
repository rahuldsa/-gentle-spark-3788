const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
    title: String,
    note: String,
    category: String,
    userID: String
})

const noteModel = mongoose.model('note', noteSchema)

module.exports = {
    noteModel
}