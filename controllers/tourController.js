const fs = require('fs')

//GETTING ARRAY OF DATA
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

//ROUTE HANDLERS
//here we dont have only one export unlike before,
//so, we replace all with functions with exports

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing Name or price[incomplete body]'
    })
  }
  next()
}

exports.getAllTours = (req, res) => {
  console.log(req.requestTime)
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      tours
    }
  })
}

exports.getTour = (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find(el => el.id === id)
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
}

exports.createTour = (req, res) => {
  const id = req.params.id * 1
  const newId = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newId }, req.body)

  tours.push(newTour)
  fs.writeFile(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          newTour
        }
      })
    }
  )
}

exports.updateTour = (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find(el => el.id === id)
  res.status(200).json({
    status: 'Success',
    data: {
      tours: '<Updated tour here>'
    }
  })
}

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find(el => el.id === id)
  res.status(204).json({
    status: 'Success',
    data: null
  })
}

exports.checkID = (req, res, next, val) => {
  const id = req.params.id * 1
  if (id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    })
  }
  next()
}
