var express = require('express') // returns a function
var bodyParser = require('body-parser')
var app = express() // 
var port = 3000 // port number

//accept any request from any origin
var cors = require('cors')
app.use(cors())

//fire up database connection
require('./server-assets/db/mlab-config')


//routes
var houses = require('./server-assets/routes/houses')

//register Middlewear
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))



app.get('*', function (req, res, next) {
    res.status(404).send("<h1>404</h1>")
})

app.listen(port, () => { console.log('server running on port: ', port) }) 