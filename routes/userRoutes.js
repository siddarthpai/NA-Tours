const express = require('express')

//ROUTER
const router = express.Router()

//ROUTE HANDLERS
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is still not defined'
  })
}

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is still not defined'
  })
}

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is still not defined'
  })
}

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is still not defined'
  })
}

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is still not defined'
  })
}

//ROUTES
router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router
