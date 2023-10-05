const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    name: String,
    price: Number,
    image: String,
})

module.exports = mongoose.model('product', schema)