const express = require('express')

const fs = require('fs')

//GETTING ARRAY OF DATA
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

//ROUTE HANDLERS
const getAllTours = (req, res) => {
  console.log(req.requestTime)
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      tours
    }
  })
}

const getTour = (req, res) => {
  const id = req.params.id * 1
  if (id > tours.length) {
    return res.status(404).json({
      status: 'not found'
    })
  }
  const tour = tours.find(el => el.id === id)
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  })
}

const createTour = (req, res) => {
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

const updateTour = (req, res) => {
  const id = req.params.id * 1
  if (id > tours.length) {
    return res.status(404).json({
      status: 'not found'
    })
  }
  const tour = tours.find(el => el.id === id)
  res.status(200).json({
    status: 'Success',
    data: {
      tours: '<Updated tour here>'
    }
  })
}

const deleteTour = (req, res) => {
  const id = req.params.id * 1
  if (id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Tour to delete not found!'
    })
  }
  const tour = tours.find(el => el.id === id)
  res.status(204).json({
    status: 'Success',
    data: null
  })
}

// ROUTER
const router = express.Router()

//ROUTES
router.route('/').get(getAllTours).post(createTour)

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

module.exports = router
