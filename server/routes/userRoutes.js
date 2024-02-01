const express = require('express')
const router = express.Router()
cnost userController = require('../controllers/userController')

// Set up a main user route
router.get('/users', userController.createUser) //! check router method- creating user, so maybe .post instead?



module.exports = router