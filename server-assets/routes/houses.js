var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'House'

var schema = new Schema({
    name: {type: String, required: true},
    year: {type: Number},
    bedrooms: {type: Number},
    bathrooms: {type: Number}
})

module.exports = mongoose.model(schemaName, schema)