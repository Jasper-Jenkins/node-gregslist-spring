var router = require('express').Router()//allows of series of routes to be into one area
var Cars = require('../models/car')

router.get('/api/cars', function (req, res, next) {
    Cars.find({}).then(function (cars) {
        res.status(200).send(cars)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/cars', function (req, res, next) {
    var car = req.body //body is whats in the object 
    Cars.create(car).then(function (newCar) {
        res.status(200).send(newCar)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/cars/:id', function (req, res, next) {
    Cars.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (car) {
            res.status(200).send({ message: "Successfully Updated: ", car })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/cars/:id', function (req, res, next) {
    Cars.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted House")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }