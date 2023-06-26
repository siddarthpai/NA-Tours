const express = require('express')
const tourController = require('../controllers/tourController')
// or we could do const {getAllTours,createTours ... } = require ('../controllers/tourController') and then just directly do getAllTours and all in routes section

// ROUTER
const router = express.Router()

router.param('id', tourController.checkID)

//ROUTES
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour)

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = router
