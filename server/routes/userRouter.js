const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router