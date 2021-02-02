const { Router } = require('express')
const mongoose = require('../db/connection')
const Car = require('../models/cars')
const db = mongoose.connection

module.exports = router