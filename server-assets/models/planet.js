var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Planet'
var ObjectId = Schema.Types.ObjectId //part of the default code that you include in all model js files

//cannot create a star outside of a galaxy. just for the sake of this project
//a star needs to know what galaxy its in.
//

var schema = new Schema({
    name: { type: String, required: true },
    habitable: { type: String, enum: ['yes', 'no', 'terraform'] },

    //relationship
    starId: {
        type: ObjectId,
        ref: 'Star', // *******MUST MATCH****** the schemaName in star.js
        required: true
    },
    galaxyId: {
        type: ObjectId,
        ref: 'Galaxy', // *******MUST MATCH****** the schemaName in galaxy.js
        required: true
    },

})

module.exports = mongoose.model(schemaName, schema)