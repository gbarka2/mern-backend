const mongoose = require('../db/connection')
const { Router } = require('express')
const router = Router()
const Car = require('../models/cars')

router.get('/', async (req, res) => {
  res.json(await Car.find({}))
})

router.get('/:id', async (req, res) => {
  res.json(await Car.find({_id: req.params.id}))
})

router.post('/', async (req, res) => {
  res.json(await Car.create(req.body))
})

router.put('/:id', async (req, res) => {
  res.json(await Car.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

router.delete('/:id', async (req, res) => {
  res.json(await Car.findByIdAndDelete(req.params.id))
})

module.exports = router