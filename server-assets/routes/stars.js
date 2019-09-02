var router = require('express').Router()//allows of series of routes to be into one area
var Stars = require('../models/star')

router.get('/api/stars', function (req, res, next) {
    Stars.find(req.query).then(function (stars) {
        res.status(200).send(stars)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/stars', function (req, res, next) {
    var star = req.body //body is whats in the object 
    Stars.create(star).then(function (newStar) {
        res.status(200).send(newStar)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/stars/:id', function (req, res, next) {
    Stars.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (star) {
            res.status(200).send({ message: "Successfully Updated: ", star })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/stars/:id', function (req, res, next) {
    Stars.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted Star")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }