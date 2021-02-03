const mongoose = require('../db/connection')
const Owner = require('../models/owners')
const Car = require('../models/cars')
const { Router } = require('express')
const router = Router()
const db = mongoose.connection

router.get('/', async (req, res) => {
  res.json(await Owner.find({}).populate('cars'))
})

router.get('/:id', async (req, res) => {
  res.json(await Owner.find({_id: req.params.id}))
})

router.post('/', async (req, res) => {
  res.json(await Owner.create(req.body))
})

router.put('/:id', async (req, res) => {
  res.json(await Owner.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

router.put('/:id/:carId', async (req, res) => {
  const car = await Car.findById(req.params.carId)
  const owner = await Owner.findByIdAndUpdate(req.params.id, {$push: {cars: car.id}, new: true})
  // const owner = res.json(await Owner.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

router.delete('/:id', async (req, res) => {
  res.json(await Owner.findByIdAndDelete(req.params.id))
})

module.exports = router