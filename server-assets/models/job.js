var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Job'




var schema = new Schema({
    company: {type: String, required: true, maxlength:50 },
    jobTitle: {type: String, required: true},
    hours: {type: Number},
    rate: {type: Number},
    description: {type: String}
})

module.exports = mongoose.model(schemaName, schema)