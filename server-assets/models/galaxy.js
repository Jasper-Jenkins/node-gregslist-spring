var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Galaxy'

function Star(name){
    this.name = name
}

var schema = new Schema({
    name: {type: String, required: true},
    //starSystems: {type: Number, required: true}

})

module.exports = mongoose.model(schemaName, schema)