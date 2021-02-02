require("dotenv").config()
const mongoose = require('mongoose')
const {MONGODBURI} = process.env
// const mongoURI = 'mongodb://localhost:27017/cars'
const config = {useUnifiedTopology: true, useNewUrlParser: true}
mongoose.connect(MONGODBURI, config)

const db = mongoose.connection
db.on('error', err => console.log(err.message + 'is mongod running'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

module.exports = mongoose
