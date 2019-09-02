var router = require('express').Router()//allows of series of routes into one area
var Jobs = require('../models/job')

router.get('/api/jobs', function (req, res, next) {
    Jobs.find({}).then(function (jobs) {
        res.status(200).send(jobs)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.post('/api/jobs', function (req, res, next) {
    var job = req.body //body is whats in the object 
    Jobs.create(job).then(function (newJob) {
        res.status(200).send(newJob)
    }).catch(function (err) {
        res.status(200).send(err)
    })
})

router.put('/api/jobs/:id', function (req, res, next) {
    Jobs.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(function (job) {
            res.status(200).send({ message: "Successfully Updated: ", job })
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

router.delete('/api/jobs/:id', function (req, res, next) {
    Jobs.findByIdAndRemove(req.params.id)
        .then(function (data) {
            res.status(200).send("Successfully Deleted job")
        })
        .catch(function (err) {
            res.status(400).send(err)
        })
})

module.exports = { router }