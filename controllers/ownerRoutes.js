const mongoose = require('../db/connection')
const Owner = require('../models/owners')
const { Router } = require('express')
const router = Router()
const db = mongoose.connection

module.exports = router