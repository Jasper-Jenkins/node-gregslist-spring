var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Car'

var schema = new Schema({
    imgUrl: {type: String},
    year: {type: Number},
    model: {type: String},
    make: {type: String},
    price: {type: Number},
    description: {type: String, required: true}
})

module.exports = mongoose.model(schemaName, schema)