const mongoose = require('../db/connection')
const Owner = require('../models/owners')
const { Router } = require('express')
const router = Router()
const db = mongoose.connection

router.get('/', async (req, res) => {
  res.json(await Owner.find({}))
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

router.delete('/:id', async (req, res) => {
  res.json(await Owner.findByIdAndDelete(req.params.id))
})


module.exports = router