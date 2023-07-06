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
    console.log(con.connections)
    console.log('DB Connection successful')
  }) // now, we connect to our DB using the connection URL established earlier!
//whatever is inside the {} is used as options
//connect returns a `promise` and we handle the promise using the then method
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
