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
var cars = require('./server-assets/routes/cars')
var jobs = require('./server-assets/routes/jobs')
var galaxies = require('./server-assets/routes/galaxies')
var stars = require('./server-assets/routes/stars')
var planets = require('./server-assets/routes/planets')

//register Middlewear
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let auth = require('./server-assets/auth/routes')
app.use(auth.session)//needs to happen before router
app.use(auth.router)

app.use(houses.router)
app.use(cars.router)
app.use(jobs.router)
app.use(galaxies.router)
app.use(stars.router)
app.use(planets.router)

app.get('*', function (req, res, next) {
    res.status(404).send("<h1>404 dangit</h1>")
})

app.listen(port, () => { console.log('server running on port: ', port) }) 