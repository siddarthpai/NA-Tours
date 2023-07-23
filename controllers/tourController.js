// const fs = require('fs')

//IMPORT TOURMODEL
const Tour = require('../models/tourModels');

//GETTING ARRAY OF DATA
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

//ROUTE HANDLERS
//here we dont have only one export unlike before,
//so, we replace all with functions with exports

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing Name or price[incomplete body]',
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length, //no of tours
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour({})
  // newTour.save()
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'Success',
    data: {
      tours: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(204).json({
    status: 'Success',
    data: null,
  });
};

// exports.checkID = (req, res, next, val) => {
//   const id = req.params.id * 1
//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     })
//   }
//   next()
// }
