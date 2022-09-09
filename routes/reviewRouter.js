const Router = require('express')
const router = new Router()
const reviewController = require("../controllers/reviewController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/create', checkRole("ADMIN1235"), reviewController.create)
router.get('/fetch', checkRole("ADMIN1239"), reviewController.getReviews)

module.exports = router