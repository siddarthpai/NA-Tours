const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be provided for the tour!'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a price!']
  }
})

const Tour = mongoose.model('Tour', tourSchema) //first param is name of the model and second is the schema

module.exports = Tour
