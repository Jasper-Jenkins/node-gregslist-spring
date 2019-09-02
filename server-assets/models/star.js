var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Star'
var ObjectId = Schema.Types.ObjectId //part of the default code that you include in all model js files
//cannot create a star outside of a galaxy. just for the sake of this project
//a star needs to know what galaxy its in.
//

var schema = new Schema({
    name: { type: String, required: true },
    color: { type: String, enum: ['blue', 'white', 'orange'] },

    //relationship
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy', // *******MUST MATCH****** the schemaName in galaxy.js
        required: true
    },

})

module.exports = mongoose.model(schemaName, schema)