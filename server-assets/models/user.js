var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
var Schema = mongoose.Schema
var schemaName = 'User'
const SALT = 12

var schema = new Schema({
    userName: {type:String, required:true, unique:true},
    displayName: {type: String, required: true,},
    password: {type: String, required:true}, 
   // confirmedEmail: {type: Boolean, default: false},
})

schema.statics.generateHash = function (password){
    return bcrypt.hashSync(password, SALT)
}


schema.methods.validatePassword = function(password){ // "this." refers to the element directly to the left of the period when invoking
    bcrypt.compare(password, this.hash)
}
module.exports = mongoose.model(schemaName, schema) 