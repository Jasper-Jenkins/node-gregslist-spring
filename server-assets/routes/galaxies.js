var router = require('express').Router()//allows of series of routes to be into one area
var Galaxies = require('../models/galaxy')

router.get('/api/galaxies', function (req, res, next) {
    Galaxies.find(req.query).then(function (galaxies) {
        res.status(200).send(galaxies)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/galaxies', function (req, res, next) {
    var galaxy = req.body //body is whats in the object 
    Galaxies.create(galaxy).then(function (newGalaxy) {
        res.status(200).send(newGalaxy)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/galaxies/:id', function (req, res, next) {
    Galaxies.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (galaxy) {
            res.status(200).send({ message: "Successfully Updated: ", galaxy })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/galaxies/:id', function (req, res, next) {
    Galaxies.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted Galaxy")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }