const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const ownerSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    cars: [
      {
        ref: "Car",
        type: Schema.Types.ObjectId
      }
    ]
  }
)

const Owner = mongoose.model('Owner', ownerSchema)
module.exports = Owner