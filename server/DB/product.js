const mongus = require('mongoose');

const productSchema = new mongus.Schema({
    name:String,
    price:String,
    category:String,
    company:String,
    userId:String
})

module.exports = mongus.model('products',productSchema);