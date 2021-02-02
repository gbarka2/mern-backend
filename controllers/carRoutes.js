const mongoose = require('../db/connection')
const { Router } = require('express')
const router = Router()
const Car = require('../models/cars')

router.get('/', async (req, res) => {
  res.json(await Car.find({}))
})

router.get('/cars/:id', async (req, res) => {
  res.json(await Car.find({_id: req.params.id}))
})

router.post('/cars', async (req, res) => {
  res.json(await Car.create(req.body))
})

router.put('/cars/:id', async (req, res) => {
  res.json(await Car.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

module.exports = router