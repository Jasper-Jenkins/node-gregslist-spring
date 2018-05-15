var mongoose = require('mongoose')
var connectionString = 'mongodb://Jasper:student@ds117590.mlab.com:17590/bcw-gregslist-spring'
var connection = mongoose.connection // how the server listens to mongoose

mongoose.connect(connectionString)

connection.on('error', function(err){
    console.log('ERROR FROM DATABASE: ', err)
})

connection.once('open', function (){
    console.log("Connected to database")
})