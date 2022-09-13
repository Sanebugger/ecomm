const mongus = require('mongoose');

const userSchema = new mongus.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongus.model('users',userSchema);