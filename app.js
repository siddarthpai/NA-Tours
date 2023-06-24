const express = require('express')
const morgan = require('morgan')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

//MIDDLEWARE

app.use(morgan('dev')) //3rd party middleware!

app.use(express.json()) //pre-defined middleware

app.use((req, res, next) => {
  //middleware we defined
  console.log('Hello from the defined middleware')
  next()
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

//ROUTES :

app.use('/api/v1/tours', tourRouter)

app.use('/api/v1/users', userRouter)

const port = 8000
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
