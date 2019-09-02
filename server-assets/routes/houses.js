var router = require('express').Router()//allows of series of routes to be into one area
var Houses = require('../models/house')

router.get('/api/houses', function (req, res, next) {
    Houses.find({}).then(function (houses) {
        res.status(200).send(houses)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/houses', function (req, res, next) {
    var house = req.body //body is whats in the object 
    Houses.create(house).then(function (newHouse) {
        res.status(200).send(newHouse)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/houses/:id', function (req, res, next) {
    Houses.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (house) {
            res.status(200).send({ message: "Successfully Updated: ", house })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/houses/:id', function (req, res, next) {
    Houses.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted House")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }