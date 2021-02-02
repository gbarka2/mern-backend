const mongoose = require('../db/connection')
const Owner = require('../models/owners')
const { Router } = require('express')
const router = Router()
const db = mongoose.connection

router.get('/', async (req, res) => {
  await Owner.findById({})
})

router.post('/', async (req, res) => {
  res.json(await Owner.create(req.body))
})


module.exports = router