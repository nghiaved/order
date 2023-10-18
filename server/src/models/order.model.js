const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    note: String,
    number: Number,
    products: Array,
    total: Number,
    confirm: Boolean,
    status: Boolean,
    delivery: Boolean,
})

module.exports = mongoose.model('order', schema)