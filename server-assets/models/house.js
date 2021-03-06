var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'House'

var schema = new Schema({
    bedrooms: {type: Number},
    bathrooms: {type: Number},
    imgUrl: {type: String},
    levels: {type: Number},
    year: {type: Number},
    price: {type: Number},
    description: {type: String, required: true},
})

module.exports = mongoose.model(schemaName, schema)