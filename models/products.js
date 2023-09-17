const mongoose = require('mongoose');

const productScheme = mongoose.Schema({
    id : Number,
    name : String,
    color : String,
    price : Number
})

module.exports = mongoose.model('Product',productScheme);