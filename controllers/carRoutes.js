const mongoose = require('../db/connection')
const { Router } = require('express')
const router = Router()
const Car = require('../models/cars')
const db = mongoose.connection

router.get('/', async (req, res) => {
  res.json(await Car.find({}))
})

router.post('/', async (req, res) => {
  res.json(await Car.create(req.body))
})

module.exports = router