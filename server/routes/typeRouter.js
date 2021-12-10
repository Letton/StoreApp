const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const RoleMiddleware = require('../middleware/RoleMiddleware')

router.post('/', RoleMiddleware, typeController.create)
router.get('/', typeController.getAll)

module.exports = router