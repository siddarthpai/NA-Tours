const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD) // this is to import the DB connection url and replace the password placeholder with the password variable we have in our env.
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log('DB Connection successful')
  }) // now, we connect to our DB using the connection URL established earlier!
//whatever is inside the {} is used as options
//connect returns a `promise` and we handle the promise using the then method

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

const testTour = new Tour({
  name: 'The Forest Hiker',
  rating: 4.7,
  price: 497
}) // document created with the use of tour model; this is an instance of the tour model

testTour
  .save()
  .then(doc => {
    // this will save to tours collection of the database
    console.log(doc)
  })
  .catch(err => {
    console.log('ERROR FOUND WHEN SAVING TO DB')
  })

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
