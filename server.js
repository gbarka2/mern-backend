const express = require('express')
const app = express()
require('dotenv').config()
const {PORT = 3000, NODE_ENV = "development"} = process.env
const cors = require('cors')
const corsOptions = require('./config/cors.js')
const mongoose = require('./db/connection')

NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(morgan("tiny"))

app.get('/', (req, res) => {
  res.json({
    status: 200,
    msg: "gary route"
  })
})

const carRouter = require('./controllers/carRoutes')
app.use('/cars', carRouter)
const ownerRouter = require('./controllers/ownerRoutes')
app.use('/owners', ownerRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))