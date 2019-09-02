var router = require('express').Router()//allows of series of routes to be into one area
var Planets = require('../models/planet')

router.get('/api/planets', function (req, res, next) {
    Planets.find(req.query).then(function (planets) {
        res.status(200).send(planets)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/planets', function (req, res, next) {
    var planet = req.body //body is whats in the object 
    Planets.create(planet).then(function (newPlanet) {
        res.status(200).send(newPlanet)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/planets/:id', function (req, res, next) {
    Planets.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (planet) {
            res.status(200).send({ message: "Successfully Updated: ", planet })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/planets/:id', function (req, res, next) {
    Planets.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted Planet")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }