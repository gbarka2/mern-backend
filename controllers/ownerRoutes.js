const mongoose = require('../db/connection')
const Owner = require('../models/owners')
const { Router } = require('express')
const router = Router()
const db = mongoose.connection

router.get('/', async (req, res) => {
  await Owner.findById({})
})

module.exports = router